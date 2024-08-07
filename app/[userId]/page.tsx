'use client'
import { Ticket } from "@/components/Ticket";
import { User } from "@/store/useUserStore";
import { apiClient } from "@/utils/supabase/client";

export default async function Page({params: {userId}}) {
  const { data, error } = await apiClient.from('profiles').select('*').eq('id', userId).single();
  const user = data as User

  return (
    <div>
      <h1>
        {user ? `Hello ${user.email}` : 'Hello stranger'}
      </h1>
      <Ticket name={user?.name}  avatar={user?.avatar_url} number={user?.count}  />
    </div>
  )
}