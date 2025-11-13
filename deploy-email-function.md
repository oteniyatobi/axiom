# Quick Email Setup - Step by Step

## ✅ Your Supabase is Already Configured!

Your project ID: `fjnyzlvwoztivonvoxyi`

## 🚀 Quick Setup (5 minutes)

### 1. Get Resend API Key
- Visit: https://resend.com/signup
- Create account → Go to API Keys
- Create new API key → Copy it

### 2. Deploy Function via Supabase Dashboard

1. **Go to**: https://app.supabase.com/project/fjnyzlvwoztivonvoxyi
2. **Click**: "Edge Functions" (left sidebar)
3. **Click**: "Create a new function"
4. **Name**: `send-contact-email`
5. **Copy code from**: `supabase/functions/send-contact-email/index.ts`
6. **Paste** into the editor
7. **Click**: "Deploy"

### 3. Add API Key Secret

1. In Supabase Dashboard → **Edge Functions** → **Settings**
2. Scroll to **Secrets**
3. **Add Secret**:
   - Name: `RESEND_API_KEY`
   - Value: (paste your Resend API key)
4. **Save**

### 4. Test It!

1. Run: `npm run dev`
2. Go to Contact section
3. Fill form and submit
4. Check email at `aluaxiom@gmail.com`

## ✅ Done! Emails will now work.

