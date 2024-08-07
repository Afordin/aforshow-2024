import { User } from '@/store/useUserStore';
import { createClient } from '@/utils/supabase/server'
import { ImageResponse } from 'next/og'


export const size = { width: 1200, height: 630 }

export default async function Image({ params: { userId } }) {
  const apiClient = createClient()
  const response = await apiClient.from('profiles').select('*').eq('id', userId)
  const user = response.data?.[0] as User
  
  if (!user) {
    return new ImageResponse(<div>Not found</div>, { ...size });
  }

  const imageUrl = `https://uuljbqkwvruhxomkmxaj.supabase.co/storage/v1/object/public/aforshow/public/${user.id}.png`

  return new ImageResponse(
    <div style={{display: 'flex', background: '#000000', width:'100%', height: '100%'}}>
      <img src={imageUrl} alt={`${user.name} - Aforshow`} />
    </div>
    ,
    { ...size }
  );
  

}
