# Email Configuration Setup Guide

## ✅ Current Status

Your Supabase project is already configured:
- **Project ID**: `fjnyzlvwoztivonvoxyi`
- **Supabase URL**: `https://fjnyzlvwoztivonvoxyi.supabase.co`

## 📋 Setup Steps

### Step 1: Verify .env File

Make sure your `.env` file in the project root contains:
```env
VITE_SUPABASE_URL=https://fjnyzlvwoztivonvoxyi.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=your-anon-key-here
```

### Step 2: Get Resend API Key

1. Go to [https://resend.com](https://resend.com)
2. Sign up or log in
3. Navigate to **API Keys** section
4. Create a new API key
5. Copy the API key (starts with `re_`)

### Step 3: Deploy Edge Function

#### Option A: Using Supabase Dashboard (Recommended)

1. Go to [Supabase Dashboard](https://app.supabase.com)
2. Select your project (`fjnyzlvwoztivonvoxyi`)
3. Go to **Edge Functions** in the left sidebar
4. Click **Create a new function**
5. Name it: `send-contact-email`
6. Copy the code from `supabase/functions/send-contact-email/index.ts`
7. Paste it into the function editor
8. Click **Deploy**

#### Option B: Using Supabase CLI

```bash
# Install Supabase CLI
npm install -g supabase

# Login
supabase login

# Link your project
supabase link --project-ref fjnyzlvwoztivonvoxyi

# Deploy the function
supabase functions deploy send-contact-email
```

### Step 4: Add Resend API Key Secret

1. In Supabase Dashboard, go to **Edge Functions** → **Settings**
2. Scroll to **Secrets** section
3. Click **Add Secret**
4. Name: `RESEND_API_KEY`
5. Value: Your Resend API key (from Step 2)
6. Click **Save**

### Step 5: Update Email Sender (Optional)

If you have a verified domain in Resend, update the `from` field in:
`supabase/functions/send-contact-email/index.ts` (line 143)

Change from:
```typescript
from: "Axiom Contact <onboarding@resend.dev>",
```

To:
```typescript
from: "Axiom Contact <noreply@yourdomain.com>",
```

Then redeploy the function.

## ✅ Testing

1. Start your dev server: `npm run dev`
2. Navigate to the Contact section
3. Fill out the form and submit
4. Check your email at `aluaxiom@gmail.com`
5. Check browser console for any errors
6. Check Supabase Edge Function logs for server-side errors

## 🔍 Troubleshooting

### Error: "Email service is not configured"
- Make sure `RESEND_API_KEY` is set in Supabase Edge Function secrets

### Error: "Function not found"
- Deploy the Edge Function (Step 3)

### Error: "Network error"
- Check your internet connection
- Verify Supabase URL is correct in `.env`

### Emails not arriving
- Check Resend dashboard for email logs
- Verify the recipient email `aluaxiom@gmail.com` is correct
- Check spam folder

## 📧 Email Recipient

Currently configured to send to: **aluaxiom@gmail.com**

To change the recipient, edit `supabase/functions/send-contact-email/index.ts` line 144:
```typescript
to: ["your-email@example.com"],
```

