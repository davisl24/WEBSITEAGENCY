# Kestrel contact integrations — release checklist

The contact page now uses the real POST `/api/contact` endpoint instead of a decorative booking-calendar mockup. The UI never declares success when delivery is unavailable.

## Required for functional enquiry delivery

Configure these environment variables in Vercel (Preview and Production), then redeploy:

- `RESEND_API_KEY`: valid private Resend API key
- `RESEND_FROM_EMAIL`: an authorised sender in a verified Resend domain
- `CONTACT_EMAIL_TO`: Kestrel's actual destination inbox (confirm with site owner; do not guess)

The server validates required fields, refuses invalid payloads, uses a honeypot and returns an error if the provider cannot deliver. Browser-side validation and accessible status messages are implemented. Add production rate limiting / abuse monitoring before high-traffic launch.

## Optional meeting scheduling

- `CONTACT_GOOGLE_BOOKING_URL`: real Google Calendar appointment scheduling URL with `calendar.app.google` or `calendar.google.com` hostname. The actual calendar must be configured to issue Google Meet links.

The meeting link appears only when this variable is valid. No fake availability or times are shown.

## Release acceptance

- Submit a real enquiry from desktop and mobile and verify it arrives in the intended inbox. Test an invalid email and an unavailable mail provider.
- Verify the booking URL opens the correct appointment scheduler and that a real invite includes Meet details.
- Do not call the form operational until sender verification, environment setup and end-to-end email test pass.
