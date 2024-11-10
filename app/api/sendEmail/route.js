// We will use aws ses to send the email. 
//ensure we have the proper credentials in the .env file.
// we will use the aws-sdk to send the email 

export async function POST(request) {
  return new Response('Use POST to send an email.', {
    status: 200,
  })
}