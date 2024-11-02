
// import sgMail from '@sendgrid/mail'

// sgMail.setApiKey(process.env.SENDGRID_API_KEY)



// export async function POST(request) {
//   const msg = {
//     to: 'marcelo.e.villalba@gmail.com', // Change to your recipient
//     from: 'marcelo@4villcorp.com', // Change to your verified sender
//     subject: 'How fast is sendgrid?',
//     text: 'Lets find ouut!',
//     html: '<strong> I will probably remove this, why would i want it?</strong>',
//   }

//   try {
//     await sgMail.send(msg)
//     console.log('Email sent')
//     return new Response('Email sent successfully!', {
//       status: 200,
     
//     })
//   } catch (error) {
//     console.error(error)
//     return new Response('Failed to send email.', {
//       status: 500,
     
//     })
//   }
// }

// export async function GET(request) {
//   return new Response('Use POST to send an email.', {
//     status: 200,
//   })
// }