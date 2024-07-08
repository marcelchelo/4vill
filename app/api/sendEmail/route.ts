import { NextResponse, NextRequest } from "next/server";


export async function POST(req: NextRequest) {

    //log the request body
    console.log(formData);  
  return NextResponse.json({
    messsage: "email sent successfully",
  });
}



// const sgMail = require('@sendgrid/mail')

// sgMail.setApiKey(process.env.SENDGRID_API_KEY)

// const msg = {
//     to: 'marcelo.e.villalba@gmail.com', // Change to your recipient
//     from: 'marcelo95326@live.com', // Change to your verified sender
//     subject: 'Testing SendGrid',
//     text: 'and easy to do anywhere, even with Node.js',
//     html: '<strong>and easy to do anywhere, even with Node.js</strong>',
//   }
//   sgMail
//     .send(msg)
//     .then(() => {
//       console.log('Email sent')
//     })
//     .catch((error) => {
//       console.error(error)
//     })