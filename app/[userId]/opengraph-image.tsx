import { createClient } from '@/utils/supabase/server'
import { ImageResponse } from 'next/og'


export const size = { width: 1200, height: 530 }
export const contentType = 'image/png'



export default async function Image({ params: { userId } }) {
  const apiClient = createClient()
  const { data: user, error } = await apiClient.from('profiles').select('*').eq('id', userId).single()
  
  if(!user) return new ImageResponse(
    <div style={{display: 'flex', background: '#000000', width:'100%', height: '100%'}}>
      <img style={{objectFit:'contain'}} src={`${process.env.NEXT_PUBLIC_BASE_URL}/default-og.png`} alt={`Aforshow`} />
    </div>
    , { ...size })

  const imageUrl = `https://uuljbqkwvruhxomkmxaj.supabase.co/storage/v1/object/public/aforshow/public/${user.id}.png`

  return new ImageResponse(
    <div style={{display: 'flex', background: '#000000', width:'100%', height: '100%'}}>
      <img src={imageUrl} alt={`Aforshow`} />
    </div>
    ,
    { ...size }
  );
  

}
