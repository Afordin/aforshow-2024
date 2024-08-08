/* eslint-disable @next/next/no-img-element */
import { createClient } from '@/utils/supabase/server'
import { ImageResponse } from 'next/og'


export const size = {
  width: 1200,
  height: 580,
}
export const contentType = 'image/png'



export default async function Image({ params: { userId } }) {
  const apiClient = createClient()
  const { data: user, error } = await apiClient.from('profiles').select('*').eq('id', userId).single()
  
  if(!user) return new ImageResponse(
    <div style={{display: 'flex',justifyContent:'center', background: '#000000', width:'100%', height: '100%'}}>
      <img height='100%' style={{objectFit:'contain'}} src={`${process.env.NEXT_PUBLIC_BASE_URL}/default-og.png`} alt={`Aforshow`} />
    </div>
    , { ...size })

  const imageUrl = `https://uuljbqkwvruhxomkmxaj.supabase.co/storage/v1/object/public/aforshow/public/${user.id}.png`
  
  return new ImageResponse(
    <div style={{display: 'flex', background: '#060606', width:'100%', height: '100%', alignItems:'center', justifyContent:'center'}}>
      <img width={'98%'} style={{objectFit:'contain', boxShadow: '5px 0px 73px -3px #c138b85c', borderRadius:'2rem' }} src={imageUrl} alt={`Aforshow`} />
    </div>
    ,
    { ...size }
  );
  

}
