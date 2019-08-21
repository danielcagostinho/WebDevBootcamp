const rp = require("request-promise");

rp(
  "http://api.sunrise-sunset.org/json?lat=33.4996&lng=126.5312&date=2019-08-17&formatted=0"
)
  .then(body => {
    const parsedData = JSON.parse(body);
    var date = parsedData.results.sunset.substring(0, 10);
    var sunsetTime = parsedData.results.sunset.substring(11, 19);
    console.log(`The sunset time in Jeju for ${date} is ${sunsetTime}`);
  })
  .catch(err => {
    console.log("Error: ", err);
  });
