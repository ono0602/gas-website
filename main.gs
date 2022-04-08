/**
 * GASでWebサイト作成
 */

function doGet() {
  let output = HtmlService.createTemplateFromFile('index').evaluate();
  output
    .setFaviconUrl('https://drive.google.com/uc?id=#&.ico')
    .setTitle('#')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
  return output;
}

function getSpreadsheetValues() {
  return SpreadsheetApp.getActiveSpreadsheet().getDataRange().getValues();
}