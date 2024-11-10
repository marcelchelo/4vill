// Verify the user's response to the reCAPTCHA challenge

//The backend takes the request from the frontend and submits it to
// reCAPTCHA Enterprise API endpoint using the client library. You can see, explore, and configure the backend server.

export async function GET(request) {
    return new Response('Recapcha route GET', {
      status: 200,
    })
}

// /**
//  * @license
//  * Copyright 2023 Google Inc. All Rights Reserved.
//  * SPDX-License-Identifier: Apache-2.0
//  */

// const {RecaptchaEnterpriseServiceClient} =
//   require('@google-cloud/recaptcha-enterprise').v1;

// /**
//  * Create an assessment to analyze the risk of a UI action.
//  * @param projectId: GCloud Project ID
//  * @param recaptchaSiteKey: Site key obtained by registering a domain/app to use recaptcha services.
//  * @param token: The token obtained from the client on passing the recaptchaSiteKey.
//  * @param expectedAction: The expected action for this type of event.
//  * @returns Assessment
//  */
// async function createAssessment(
//   projectId,
//   recaptchaSiteKey,
//   token,
//   expectedAction
// ) {
//   // <!-- ATTENTION: reCAPTCHA Example (Server Part 2/2) Starts -->
//   const client = new RecaptchaEnterpriseServiceClient();

//   // Build the assessment request.
//   const [response] = await client.createAssessment({
//     parent: `projects/${projectId}`,
//     assessment: {
//       // Set the properties of the event to be tracked.
//       event: {
//         siteKey: recaptchaSiteKey,
//         token: token,
//         expectedAction: expectedAction,
//       },
//     },
//   });
//   // <!-- ATTENTION: reCAPTCHA Example (Server Part 2/2) Ends -->
//   return response;
// }

// module.exports = {
//   createAssessment,
// };
