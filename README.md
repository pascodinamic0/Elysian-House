This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### Environment Setup

1. Copy the environment variables file:
```bash
cp .env.local.example .env.local
```

2. Configure your Resend API key in `.env.local`:
   - Sign up at [Resend](https://resend.com)
   - Get your API key from the [API Keys page](https://resend.com/api-keys)
   - Update `RESEND_API_KEY` in `.env.local`
   - Update `FROM_EMAIL` with your verified domain email
   - The `NOTIFICATION_EMAIL` is already set to `Zitadeine@gmail.com`

### Running the Development Server

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Email Configuration

The registration form is configured to send email notifications via [Resend](https://resend.com). When someone submits the registration form:

1. **Form Validation**: The form validates required fields (name, email, consent)
2. **Email Notification**: A formatted email is sent to `Zitadeine@gmail.com` with:
   - Registrant's full name and email
   - Their message about what brings them to the gathering
   - How they heard about the event
   - Registration timestamp
3. **Error Handling**: If email sending fails, the registration still succeeds (email failure is logged but doesn't block the user)

### Email Setup Requirements

- **Resend Account**: Sign up at [resend.com](https://resend.com)
- **API Key**: Get from [resend.com/api-keys](https://resend.com/api-keys)
- **Domain Verification**: For production, verify your sending domain in Resend
- **Environment Variables**: Configure in `.env.local` (see Environment Setup above)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
