const https = require('https');

/**
 * // make an http request to the API with substr
    // based on no of page in response make subsequent request if necessary
    // store all the results of movie list in an obj
    // in each object traverse through the title property & find the matching title
    // sort the titles in ascending order
 */

function getMovieTitles(substr) {
  let titles = [];
  let pageNum = 1;
  let url = 'https://jsonmock.hackerrank.com/api/movies/search/?Title=' + substr + '&page=' + pageNum;

  https.get(url, function (res) {
    let body = '';
    res.on('data', function (chunk) {
      body += chunk;
    });
    res.on('end', function () {
      let json = JSON.parse(body);
      for (let i = 0; i < json.data.length; i++) {
        titles.push(json.data[i].Title);
      }

      for (let i = 2; i <= json.total_pages; i++) {
        url = 'https://jsonmock.hackerrank.com/api/movies/search/?Title=' + substr + '&page=' + i;
        https.get(url, function (res) {
          let body = '';
          res.on('data', function (chunk) {
            body += chunk;
          })
          res.on('end', function () {
            let json = JSON.parse(body);
            for (let i = 0; i < json.data.length; i++) {
              titles.push(json.data[i].Title);
            }
            if (i === json.total_pages) {
              console.log(titles.sort());
            }
          })
        }).on('err', function (e) {
          console.log('Error occurred on page no: ' + i + ', with error messsage: ' + e);
        });
      }
    });
  }).on('error', function (e) {
    console.log('error occurred while requesting to the API');
  });
}

console.log(getMovieTitles('spiderman'));
