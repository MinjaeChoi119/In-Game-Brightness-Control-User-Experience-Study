function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
      .setSandboxMode(HtmlService.SandboxMode.IFRAME);
}


function saveSurveyData(data) {
  const sheet = SpreadsheetApp.openById('1o8Onq0DLCw5Q654kk5s6biiVs3ejdJe_XGgRS8Y7tfU').getActiveSheet();
  const row = [
    data.id || '',
    data.image || '',
    data.brightness || '',
    data.satisfaction || '',
    data.duration || '',
    data.finalBrightness || ''
  ];
  sheet.appendRow(row);
}