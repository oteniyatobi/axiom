# Email Setup Script for Axiom Future Africa
# This script helps you deploy the email function to Supabase

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Axiom Email Setup Script" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if .env exists
if (Test-Path .env) {
    Write-Host "✓ .env file found" -ForegroundColor Green
    $envContent = Get-Content .env
    $hasUrl = $envContent | Select-String "VITE_SUPABASE_URL"
    $hasKey = $envContent | Select-String "VITE_SUPABASE_PUBLISHABLE_KEY"
    
    if ($hasUrl -and $hasKey) {
        Write-Host "✓ Supabase credentials configured" -ForegroundColor Green
    } else {
        Write-Host "⚠ Supabase credentials may be missing" -ForegroundColor Yellow
    }
} else {
    Write-Host "✗ .env file not found" -ForegroundColor Red
    Write-Host "  Please create .env file with:" -ForegroundColor Yellow
    Write-Host "  VITE_SUPABASE_URL=https://fjnyzlvwoztivonvoxyi.supabase.co" -ForegroundColor Yellow
    Write-Host "  VITE_SUPABASE_PUBLISHABLE_KEY=your-key-here" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Next Steps:" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. Get Resend API Key:" -ForegroundColor Yellow
Write-Host "   → Visit: https://resend.com/api-keys" -ForegroundColor White
Write-Host "   → Sign up/login and create an API key" -ForegroundColor White
Write-Host ""
Write-Host "2. Deploy Edge Function:" -ForegroundColor Yellow
Write-Host "   → Visit: https://app.supabase.com/project/fjnyzlvwoztivonvoxyi/functions" -ForegroundColor White
Write-Host "   → Click 'Create a new function'" -ForegroundColor White
Write-Host "   → Name: send-contact-email" -ForegroundColor White
Write-Host "   → Copy code from: supabase/functions/send-contact-email/index.ts" -ForegroundColor White
Write-Host "   → Paste and Deploy" -ForegroundColor White
Write-Host ""
Write-Host "3. Add Resend API Key Secret:" -ForegroundColor Yellow
Write-Host "   → In Supabase Dashboard → Edge Functions → Settings → Secrets" -ForegroundColor White
Write-Host "   → Add secret: RESEND_API_KEY = (your Resend API key)" -ForegroundColor White
Write-Host ""
Write-Host "4. Test:" -ForegroundColor Yellow
Write-Host "   → Run: npm run dev" -ForegroundColor White
Write-Host "   → Go to Contact section and submit form" -ForegroundColor White
Write-Host "   → Check email at: aluaxiom@gmail.com" -ForegroundColor White
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Quick Links:" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Supabase Dashboard: https://app.supabase.com/project/fjnyzlvwoztivonvoxyi" -ForegroundColor Blue
Write-Host "Resend API Keys: https://resend.com/api-keys" -ForegroundColor Blue
Write-Host ""


