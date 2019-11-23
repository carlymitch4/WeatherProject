$(document).ready(function() {

  $("#getWeather").click(function(){
    var city = $("#city").val();
    var key = '05150bdbb9d4749f5377c3e253ec015d';

    $.ajax({
      url: 'https://api.openweathermap.org/data/2.5/weather',
      dataType: 'json',
      type: 'GET',
      data: {q:city, appid: key, units: 'metric'},

      success: function(data){
          var wf= '';
          $.each(data.weather, function(index,val){
          wf += '<p><b>' + data.name + "</b><img src=" + val.icon + ".png></p>" +
          data.main.temp + '&deg;C' + ' | ' + val.main;


          if(data.weather[0].id === 701) {
            $('.bg').css('background-image', 'url(bg_rain.gif)');
          }

        });

        $("#show").html(wf);
      }
    });
  });

  $('.bg').mousemove (function(e){
      var moveX = (e.pageX * -1/40);
      var moveY = (e.pageY * -1/40);
    $(this).css('background-position', moveX + 'px ' + moveY + 'px ')
  });

  $('.search2').click(function() {
  $("#show").empty();
  $('#city').val('')
});

   $("#city").keypress(function(event) { 
    if (event.keyCode === 13) { 
    $("#getWeather").click();
    } 
}); 

});
