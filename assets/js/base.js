$(document).ready(function(){
  $('.main')
      .transition('fade in');
  $('.ui.sidebar').sidebar();
  $('.ui.accordion').accordion();

  var $dimmer = $('.ui.page.dimmer');

  window.dimmerMessage = function(title, subtitle, callback, timeout) {
    $dimmer.find('h1').html(title);
    $dimmer.find('h2').html(subtitle);
    $dimmer
      .dimmer('show');
    setTimeout(function(){
      $dimmer.dimmer('hide');
      callback();
    }, timeout);
  };
  // For the time now
  Date.prototype.timeNow = function(){ return ((this.getHours() < 10)?"0":"") + ((this.getHours()>12)?(this.getHours()-12):this.getHours()) +":"+ ((this.getMinutes() < 10)?"0":"") + this.getMinutes() +":"+ ((this.getSeconds() < 10)?"0":"") + this.getSeconds() + " " + ((this.getHours()>12)?('PM'):'AM'); };

  $("#currentTime").html(new Date().timeNow());

  setInterval(function() {
    $("#currentTime").html(new Date().timeNow());
  }, 1000)

});
