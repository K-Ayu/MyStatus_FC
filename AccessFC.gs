function Access() {
  //HTTP GET(パラメータなし)の通信
  // const url = "https://www.feelcycle.com/";
  // let responseDataGET = UrlFetchApp.fetch(url).getContentText();
  // console.log(responseDataGET);
  //HTTP GET(パラメータ付き)の通信(amazonの「googleappsscript」の検索結果ページ)
  const url = "https://m.feelcycle.com/menu/instructor/index?_ga=2.17814832.827411646.1628869550-1443221834.1628869550";
  let responseDataGET2 = UrlFetchApp.fetch(url).getContentText();
  console.log(responseDataGET2);

  let venues = Parser.data(responseDataGET2).from('<ul data-v-54d7d659 class="tab-lists instructor_lists">').to('</ul>').iterate();
  for (let index = 0; index < venues.length; index++) {
    let venue = venues[index];

    Logger.log(Parser.data(venue).from('<li data-v-54d7d659 data-insref="name0-ins0">').to('</li>').build());
  }
}