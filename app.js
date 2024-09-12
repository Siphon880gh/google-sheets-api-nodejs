const { google } = require('googleapis');
const fs = require('fs');

// Path to the service account key file
const SERVICE_ACCOUNT_FILE = 'secrets/service-account-private-key.json';

// Define the required scopes
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

// Load the service account credentials
const auth = new google.auth.GoogleAuth({
  keyFile: SERVICE_ACCOUNT_FILE,
  scopes: SCOPES,
});

// Create the Sheets API client
async function appendRow() {
  const sheets = google.sheets({ version: 'v4', auth });

  // The ID of the Google Sheet
  const SPREADSHEET_ID = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';

  // Data to be added (each inner array is a row)
  const newValues = [
    ['Column 1', 'Column 2', 'Column 3', 'Column 4'],
    ['Value A', 'Value B', 'Value C', 'Value D'],
  ];

  // The range where the data will be appended (adjust as needed)
  const RANGE = 'Sheet1!A1';

  // Append the new rows
  const request = {
    spreadsheetId: SPREADSHEET_ID,
    range: RANGE,
    valueInputOption: 'RAW',
    insertDataOption: 'INSERT_ROWS',
    resource: {
      values: newValues,
    },
  };

  try {
    const response = await sheets.spreadsheets.values.append(request);
    console.log(`${response.data.updates.updatedRows} rows added.`);
  } catch (err) {
    console.error('The API returned an error: ' + err);
  }
}

appendRow();
