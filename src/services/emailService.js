import emailjs from '@emailjs/browser';

const recipientEmail = 'dsaimtm@gmail.com';

async function sendWithFormSubmit({ name, email, subject, message }) {
  try {
    const response = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        _replyto: email,
        _subject: subject,
        subject,
        message,
        _template: 'table',
      }),
    });
    const result = await response.json();

    if (!response.ok || result.success === false || result.success === 'false') {
      throw new Error(result.message || `Form service returned status ${response.status}.`);
    }

    return {
      success: true,
      message: `${result.message || 'Your message was submitted.'} If this is the first submission, confirm the verification email sent to ${recipientEmail} to activate delivery.`,
    };
  } catch (error) {
    console.error('[EmailService] Error sending email via FormSubmit:', error);
    return {
      success: false,
      message: error?.message || 'Failed to send message. Please use the email link below.',
    };
  }
}

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
    return sendWithFormSubmit({ name, email, subject, message });
  }

  try {
    const templateParams = {
      from_name: name,
      reply_to: email,
      to_email: recipientEmail,
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
