import { appConfig } from "@/app-config";
import { createBrowserClient } from "@supabase/ssr";

export const createClient = () =>
  createBrowserClient(appConfig.supabase.url, appConfig.supabase.anonKey);
