import { createClient } from "@supabase/supabase-js";

const projectUrl = process.env.NEXT_PUBLIC_PROJECT_URL;
const apiKey = process.env.NEXT_PUBLIC_API_KEY;

if (!projectUrl || !apiKey) {
  throw new Error(
    "Supabase URL or API key is missing in environment variables"
  );
}

export const apiClient = createClient(projectUrl, apiKey);
