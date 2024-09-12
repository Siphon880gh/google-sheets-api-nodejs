# Google Sheets API Node.js Example

![Last Commit](https://img.shields.io/github/last-commit/Siphon880gh/firebase-authentication-email-password--firestore-create/main)
<a target="_blank" href="https://github.com/Siphon880gh" rel="nofollow"><img src="https://img.shields.io/badge/GitHub--blue?style=social&logo=GitHub" alt="Github" data-canonical-src="https://img.shields.io/badge/GitHub--blue?style=social&logo=GitHub" style="max-width:8.5ch;"></a>
<a target="_blank" href="https://www.linkedin.com/in/weng-fung/" rel="nofollow"><img src="https://img.shields.io/badge/LinkedIn-blue?style=flat&logo=linkedin&labelColor=blue" alt="Linked-In" data-canonical-src="https://img.shields.io/badge/LinkedIn-blue?style=flat&amp;logo=linkedin&amp;labelColor=blue" style="max-width:10ch;"></a>
<a target="_blank" href="https://www.youtube.com/@WayneTeachesCode/" rel="nofollow"><img src="https://img.shields.io/badge/Youtube-red?style=flat&logo=youtube&labelColor=red" alt="Youtube" data-canonical-src="https://img.shields.io/badge/Youtube-red?style=flat&amp;logo=youtube&amp;labelColor=red" style="max-width:10ch;"></a>

By Weng (Weng Fei Fung). This project demonstrates how to use the Google Sheets API to append data to a Google Sheet using a Node.js script.

## Prerequisites
- **Node.js**: Ensure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org).
- **Google Cloud Project**: Set up a project in the [Google Cloud Console](https://console.cloud.google.com/).
- **Service Account**: Create a service account and download the JSON key file.
- **Google Sheets API**: Enable the Google Sheets API for your project.

## Setup

1. **Clone the repository.**

2. **Install dependencies:**

```
npm install
```

3. **Service Account Key:**
- Place your service account JSON key file in the secrets directory and rename it to service-account-private-key.json.

4. **Configure the script:**
- Open app.js and update the following constants with your specific details:

```
const REQ_SERVICE_ACCOUNT_FILE = 'secrets/service-account-private-key.json';
const REQ_SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID';
const REQ_TAB_NAME = "Sheet1";
```

5. **Usage:**

Run the script:
```
node app.js
```

## Code Explanation

- **Dependencies**: The script uses googleapis for interacting with the Google Sheets API and fs for file system operations.
- **Configuration**: The script requires a service account key file, the ID of the spreadsheet, and the name of the tab where data will be appended.
- **Authentication**: The script uses google.auth.GoogleAuth to authenticate using the service account credentials.
- **Appending Data**: The appendRow function creates a Sheets API client and appends data to the specified Google Sheet.

## Example

Refer to `app.js`

## Full Tutorial
For a detailed step-by-step tutorial, visit wengindustries.com/app/devbrain/?open=Google%20Sheet%20API%20-%20_PRIMER.md.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgements
- Google Sheets API Overview: https://developers.google.com/sheets/api/guides/concepts
- Google Sheets NodeJS Client: https://github.com/googleapis/google-api-nodejs-client