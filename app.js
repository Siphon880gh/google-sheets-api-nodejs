const { google } = require('googleapis');
const fs = require('fs');

// Configure for your app: service account file, spreadsheet ID, and tab name
const REQ_SERVICE_ACCOUNT_FILE = 'secrets/service-account-private-key.json';
const REQ_SPREADSHEET_ID = 'XXXXXXXX';
const REQ_TAB_NAME = "Sheet1";

// Define the required scopes
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

// Load the service account credentials
const auth = new google.auth.GoogleAuth({
  keyFile: REQ_SERVICE_ACCOUNT_FILE,
  scopes: SCOPES,
});

// Create the Sheets API client
async function appendRow() {
  const sheets = google.sheets({ version: 'v4', auth });

  // The ID of the Google Sheet
  const SPREADSHEET_ID = REQ_SPREADSHEET_ID;

  // Data to be added (each inner array is a row)
  const newValues = [
    ['Column 1', 'Column 2', 'Column 3', 'Column 4'],
    ['Value A', 'Value B', 'Value C', 'Value D'],
  ];

  // The range where the data will be appended (adjust as needed)
  const RANGE = `${REQ_TAB_NAME}!A1`;

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
