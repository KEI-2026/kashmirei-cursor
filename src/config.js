/**
 * Kashmir Education Initiative App Configuration
 * 
 * BACKEND INTEGRATION GUIDE:
 * To connect a Google Form to this page as a dynamic backend:
 * 
 * 1. Create a Google Form with the following fields (all text/paragraph unless specified):
 *    - Type (Multiple choice or dropdown: "Event" or "Announcement")
 *    - Name (Short text: name/title of the event/announcement)
 *    - Description (Paragraph: details of the event/announcement)
 *    - Date (Date picker or text field)
 *    - Sign-up Link (Text/URL: link for registration or more info - optional)
 * 
 * 2. In the Google Form responses tab, click "Link to Sheets" to create/link a Google Sheet.
 * 3. Open the linked Google Sheet.
 * 4. Go to File -> Share -> Publish to web.
 * 5. Under Link, change "Entire Document" to your sheet tab name (e.g. "Form Responses 1").
 * 6. Change "Web Page" format dropdown to "Comma-separated values (.csv)".
 * 7. Click "Publish" and copy the generated link.
 * 8. Paste the link below as GOOGLE_SHEET_CSV_URL.
 */

// Replace this empty string with your published Google Sheet CSV link
export const GOOGLE_SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/1VLLM9O7fcVnCpcmvui8MQvr1tG29zwhSanX9BAqI38g/export?format=csv";
