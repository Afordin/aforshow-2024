import { apiClient } from "@/utils/supabase/client";

export const useAuth = () => {
  function signInWithDiscord(redirectTo?: string) {
    apiClient.auth.signInWithOAuth({
      provider: "discord",
      options: {
        redirectTo: `${window.location.origin}${redirectTo ?? ''}`,
      }
    });
  }

  function signOut() {
    apiClient.auth
      .signOut()
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error signing out:", error.message);
      });
  }

  return { signInWithDiscord, signOut };
};
