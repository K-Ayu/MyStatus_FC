function doGet() {
  const htmlOutput = HtmlService.createTemplateFromFile("index").evaluate();
  htmlOutput
    .setTitle('FEELCYCLE_MyStatus')
    .setFaviconUrl('https://drive.google.com/uc?id=1jDk8h0egYxfKbTTX0YNs-cTHd93Xi68O&.png')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
  return htmlOutput;
}