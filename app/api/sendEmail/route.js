
import sgMail from '@sendgrid/mail'
console.log(process.env.SENDGRID_API_KEY)
sgMail.setApiKey(process.env.SENDGRID_API_KEY)



export async function POST(request) {
  const msg = {
    to: 'marcelo.e.villalba@gmail.com', // Change to your recipient
    from: 'info@megasoftwaresolutions.com', // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  }

  try {
    await sgMail.send(msg)
    console.log('Email sent')
    return new Response('Email sent successfully!', {
      status: 200,
     
    })
  } catch (error) {
    console.error(error)
    return new Response('Failed to send email.', {
      status: 500,
     
    })
  }
}

export async function GET(request) {
  return new Response('Use POST to send an email.', {
    status: 200,
  })
}