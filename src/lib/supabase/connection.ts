import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vzzhosoffgzeqrzsfjoh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ6emhvc29mZmd6ZXFyenNmam9oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMyODM4NTUsImV4cCI6MjAzODg1OTg1NX0.uu0sbJy7ICONDfRzIecT96cmgMpcmL4YwGnjU0QQT9s';
export const supabase = createClient(supabaseUrl, supabaseKey);
