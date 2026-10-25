# Contact form email setup

The contact form uses EmailJS to deliver submitted messages to `noorahmedmakandar123@gmail.com`.

1. Create an account at https://www.emailjs.com/ and connect your email service.
2. Create an email template using these variables: `{{from_name}}`, `{{reply_to}}`, `{{from_email}}`, `{{message}}`, and `{{to_email}}`.
3. Set the template's recipient / **To Email** to `{{to_email}}`, or set the recipient directly to `noorahmedmakandar123@gmail.com`.
4. Copy `.env.example` to `.env` in the project root.
5. Replace the three placeholder values in `.env` with your EmailJS Service ID, Template ID, and Public Key.
6. Stop and restart the development server (`npm start`) after editing `.env`.

The success message appears only after EmailJS accepts the message. Do not put an EmailJS private key in frontend code.
