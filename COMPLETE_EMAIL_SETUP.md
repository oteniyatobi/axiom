# ✅ Complete Email Setup - All Steps

## 🎯 Current Status

✅ **Code is ready** - All email functionality is implemented  
✅ **Dependencies installed** - npm packages are ready  
✅ **Supabase configured** - Your project ID: `fjnyzlvwoztivonvoxyi`  
✅ **Environment variables** - Found in `.env` file  

## 🚀 Final Steps (5 minutes)

### Step 1: Get Resend API Key

1. Go to: **https://resend.com/signup**
2. Create account (or login if you have one)
3. Navigate to: **API Keys** section
4. Click: **Create API Key**
5. Name it: `Axiom Email Service`
6. **Copy the API key** (starts with `re_`)

### Step 2: Deploy Edge Function to Supabase

**Option A: Via Supabase Dashboard (Easiest)**

1. Open: **https://app.supabase.com/project/fjnyzlvwoztivonvoxyi/functions**
2. Click: **"Create a new function"** button
3. Function name: `send-contact-email`
4. Open the file: `supabase/functions/send-contact-email/index.ts`
5. **Copy ALL the code** from that file
6. **Paste** into the Supabase function editor
7. Click: **"Deploy"** button

**Option B: Via Supabase CLI**

```powershell
# Install Supabase CLI (Windows)
# Download from: https://github.com/supabase/cli/releases
# Or use: scoop install supabase

# Then run:
supabase login
supabase link --project-ref fjnyzlvwoztivonvoxyi
supabase functions deploy send-contact-email
```

### Step 3: Add Resend API Key Secret

1. In Supabase Dashboard, go to: **Edge Functions** → **Settings**
2. Scroll to: **Secrets** section
3. Click: **"Add Secret"** button
4. Enter:
   - **Name**: `RESEND_API_KEY`
   - **Value**: (paste your Resend API key from Step 1)
5. Click: **"Save"**

### Step 4: Test the Email Functionality

1. Start dev server:
   ```powershell
   npm run dev
   ```

2. Open browser: **http://localhost:8080**

3. Navigate to: **Contact** section (scroll down or click in navigation)

4. Fill out the form:
   - Name: Test User
   - Email: your-email@example.com
   - Message: This is a test message

5. Click: **"Send Message"**

6. You should see:
   - ✅ Loading spinner
   - ✅ Success toast: "Message Sent!"
   - ✅ Form clears

7. Check email: **aluaxiom@gmail.com** for the test message

## 📧 Email Configuration

**Current recipient**: `aluaxiom@gmail.com`

To change the recipient email, edit:
`supabase/functions/send-contact-email/index.ts` (line 144)

Change:
```typescript
to: ["your-email@example.com"],
```

Then redeploy the function.

## 🔍 Troubleshooting

### Error: "Email service is not configured"
- ✅ Make sure `RESEND_API_KEY` is set in Supabase Edge Function secrets
- ✅ Verify the secret name is exactly: `RESEND_API_KEY`

### Error: "Function not found"
- ✅ Deploy the Edge Function (Step 2)
- ✅ Verify function name is: `send-contact-email`

### Error: "Network error"
- ✅ Check internet connection
- ✅ Verify Supabase URL in `.env` file

### Emails not arriving
- ✅ Check Resend dashboard: https://resend.com/emails
- ✅ Check spam folder
- ✅ Verify recipient email is correct
- ✅ Check Supabase Edge Function logs for errors

## ✅ Verification Checklist

- [ ] Resend API key obtained
- [ ] Edge Function deployed to Supabase
- [ ] `RESEND_API_KEY` secret added to Supabase
- [ ] Test email sent successfully
- [ ] Email received at `aluaxiom@gmail.com`

## 🎉 Done!

Once all steps are complete, your contact form will automatically send emails to `aluaxiom@gmail.com` whenever someone submits the form!

---

**Quick Links:**
- Supabase Dashboard: https://app.supabase.com/project/fjnyzlvwoztivonvoxyi
- Resend Dashboard: https://resend.com
- Resend API Keys: https://resend.com/api-keys


