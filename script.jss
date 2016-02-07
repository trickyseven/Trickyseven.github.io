$(function() {
  var handleWeatherResponse = function(data) {
    console.log(data);

var iframeElement   = document.querySelector('iframe');
var iframeElementID = iframeElement.id;
var widget1         = SC.Widget(iframeElement);
var widget2         = SC.Widget(iframeElementID);
// widget1 === widget2

$('.currently-weather').html(currently);
$('.day0-weather').html(day0);
$('.day1-weather').html(day1);
$('.day2-weather').html(day2);
