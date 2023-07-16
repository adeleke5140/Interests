import { createClient } from './index'

const supabaseURL = process.env.REACT_APP_SUPABASE_URL as string
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY as string

export const supabaseClient = createClient(supabaseURL, supabaseKey, {
  db: {
    schema: "public"
  },
  auth: {
    persistSession: true,
  },
})
