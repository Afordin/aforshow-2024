import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Page() {
  const apiClient = createClient();
  const user = (await apiClient.auth.getUser()).data.user;
  return redirect("/");
}