function updateTime() {
  // Los Angeles
  let angelesElement = document.querySelector("#angeles");
  let angelesDateElement = angelesElement.querySelector(".date");
  let angelesTimeElement = angelesElement.querySelector(".time");
  let angelesTime = moment().tz("America/Los_Angeles");

  angelesDateElement.innerHTML = angelesTime.format("MMMM Do YYYY");
  angelesTimeElement.innerHTML = angelesTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  // Sydney
  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  let sydneyTime = moment().tz("Australia/Sydney");

  sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do YYYY");
  sydneyTimeElement.innerHTML = sydneyTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);
