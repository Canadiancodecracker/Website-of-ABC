# Contact Form Setup Instructions

The contact form is configured to use **Formspree**, a service that handles form submissions for static websites.

## Quick Setup (5 minutes)

### Step 1: Sign up for Formspree
1. Go to [https://formspree.io](https://formspree.io)
2. Click "Sign Up" (free account allows 50 submissions/month)
3. Verify your email address

### Step 2: Create a Form
1. After logging in, click "New Form"
2. Give your form a name (e.g., "ABC Chemical Contact Form")
3. Copy the **Form ID** (it looks like: `xvgkqyzw` or `abc123def456`)

### Step 3: Update the Website
1. Open `index.html`
2. Find line 479 where it says:
   ```html
   <form id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST" class="mt-8 grid grid-cols-1 gap-4">
   ```
3. Replace `YOUR_FORM_ID` with your actual Formspree Form ID
   ```html
   <form id="contactForm" action="https://formspree.io/f/mjkjgjoe" method="POST" class="mt-8 grid grid-cols-1 gap-4">
   ```
   **Note:** The form is already configured with Form ID: `mjkjgjoe`

### Step 4: Configure Email Notifications
1. In your Formspree dashboard, go to the **Workflow** tab
2. Click "+ Add New" or "Add Action" and select **Email**
3. Set the recipient email to: **shenming2008@gmail.com**
4. Save the changes
5. (Optional) Verify your email address in Account settings if needed

### Step 5: Test the Form
1. Deploy your changes to GitHub Pages
2. Fill out and submit the contact form on your website
3. Check your email - you should receive the form submission!

## Where to View Messages

### Option 1: Formspree Dashboard (Recommended)
1. Log in to [https://formspree.io](https://formspree.io)
2. Click on your form name
3. Go to the **"Submissions"** tab
4. You'll see all form submissions listed with:
   - Timestamp
   - All form fields (name, email, company, phone, message)
   - Ability to export data
   - Search and filter options

### Option 2: Email Notifications (Configured for: shenming2008@gmail.com)
- Once configured in Formspree, you'll receive emails at **shenming2008@gmail.com** for each submission
- The email contains all form data (name, email, company, phone, message)
- You can reply directly to the submitter's email address
- **Setup**: In Formspree dashboard → Your Form → Workflow tab → Add Email action → Set recipient to shenming2008@gmail.com

### Option 3: Formspree API (Advanced)
- Access submissions programmatically via Formspree API
- Useful for integrating with other systems
- See [Formspree API documentation](https://help.formspree.io/hc/en-us/articles/360055613373-The-Formspree-API) for details

## How It Works

- When someone submits the form, Formspree receives the data
- You get an email notification with all the form fields
- The submitter sees a success message
- You can reply directly to the email (if configured)

## Form Fields

The form collects:
- **Name** (required)
- **Company** (optional)
- **Email** (required)
- **Phone** (optional)
- **Message** (required)

## Troubleshooting

**Form not sending?**
- Check that you replaced `YOUR_FORM_ID` with your actual Form ID
- Verify your Formspree account is active
- Check browser console for errors

**Not receiving emails?**
- Check your Formspree dashboard for submissions
- Verify your email address in Formspree settings
- Check spam folder

## Alternative Services

If you prefer a different service:
- **EmailJS**: [https://www.emailjs.com](https://www.emailjs.com)
- **Getform**: [https://getform.io](https://getform.io)
- **Web3Forms**: [https://web3forms.com](https://web3forms.com)

For any of these, you'll need to update the form `action` URL and potentially adjust the JavaScript in `main.js`.

