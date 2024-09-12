'use client'
import { Footer } from "@/components/Footer";
import Hero from "@/components/Hero";
import { Sponsors } from "@/components/Sponsors";
import { Ticket } from "@/components/Ticket";
import { WelcomeHero } from "@/components/WelcomeHero";
import { User } from "@/store/useUserStore";
import { apiClient } from "@/utils/supabase/client";

export default async function Page({ params: { userId } }) {
  const { data, error } = await apiClient.from('profiles').select('*').eq('id', userId).single();
  const user = data as User

  return (
    <div>
      <div className="bg-caBlurBoxes absolute left-[-100px] top-80 h-[200px] w-[200px] blur-[200px] sm:h-[300px] sm:w-[300px]"></div>
      <div className="bg-pattern relative flex w-full flex-col gap-[74px] overflow-hidden">
        <div className="w-full absolute -bottom-20 h-[200px]"></div>
        <div className="bg-caBlurBoxes absolute right-[-100px] top-20 h-[400px] w-[200px] blur-[200px] sm:h-[300px] sm:w-[300px]"></div>
        <WelcomeHero variant="ticket">
          <div className="my-10">
             <Ticket name={user?.name} avatar={user?.avatar_url} number={user?.count} />
          </div>
        </WelcomeHero>
        <Sponsors />
        <Footer />
      </div>
    </div>
  )
}