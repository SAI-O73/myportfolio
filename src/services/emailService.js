import emailjs from '@emailjs/browser';

/**
 * Sends a message via EmailJS SDK using client-side environment variables.
 *
 * @param {Object} params
 * @param {string} params.name - Sender's full name
 * @param {string} params.email - Sender's email address
 * @param {string} params.subject - Message subject
 * @param {string} params.message - Message body
 * @returns {Promise<{success: boolean, message: string}>}
 */
export async function sendEmail({ name, email, subject, message }) {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  // Validate that environment variables are actually configured
  const isPlaceholder = (val) =>
    !val ||
    val.includes('your_') ||
    val === 'your_service_id' ||
    val === 'your_template_id' ||
    val === 'your_public_key';

  if (isPlaceholder(serviceId) || isPlaceholder(templateId) || isPlaceholder(publicKey)) {
    console.warn(
      '[EmailService] EmailJS is not yet configured with valid credentials in .env.\n' +
      'Please supply VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY.'
    );
    return {
      success: false,
      isConfigMissing: true,
      message:
        'Email service is not yet configured with credentials. You can reach out directly at dsaimtm@gmail.com.',
    };
  }

  try {
    const templateParams = {
      from_name: name,
      reply_to: email,
      to_email: 'dsaimtm@gmail.com',
      subject: subject,
      message: message,
    };

    const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);

    if (response.status === 200) {
      return {
        success: true,
        message: 'Thank you! Your message has been sent successfully.',
      };
    } else {
      throw new Error(`Unexpected response status: ${response.status}`);
    }
  } catch (error) {
    console.error('[EmailService] Error sending email via EmailJS:', error);
    return {
      success: false,
      message: error?.text || error?.message || 'Failed to send message. Please try emailing dsaimtm@gmail.com directly.',
    };
  }
}
