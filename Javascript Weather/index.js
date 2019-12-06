$(document).ready(function() {

  $("#getWeather").click(function(){

    var city = $("#city").val();
    var key = '05150bdbb9d4749f5377c3e253ec015d';

    if (city != ''){

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


          if(data.weather[0].main === 'Rain') {
            $('.bg').css('background-image', 'url(bg_rain.gif)');
            $('.maintitle').css('color', "#FFFFFF");
          } else if (data.weather[0].main === 'Drizzle') {
            $('.bg').css('background-image', 'url(bg_rain.gif)');
            $('.maintitle').css('color', "#FFFFFF");
          } else if (data.weather[0].main === 'Thunderstorm') {
            $('.bg').css('background-image', 'url(bg_storm.gif)');
            $('.maintitle').css('color', "#FFFFFF");
          } else if (data.weather[0].main === 'Mist') {
            $('.bg').css('background-image', 'url(bg_fog.png)');
            $('.maintitle').css('color', "#FFFFFF");
          } else if (data.weather[0].main === 'Smoke') {
            $('.bg').css('background-image', 'url(bg_fog.png)');
            $('.maintitle').css('color', "#FFFFFF");
          } else if (data.weather[0].main === 'Haze') {
            $('.bg').css('background-image', 'url(bg_fog.png)');
            $('.maintitle').css('color', "#FFFFFF");
          } else if (data.weather[0].main === 'Dust') {
            $('.bg').css('background-image', 'url(bg_fog.png)');
            $('.maintitle').css('color', "#FFFFFF");
          } else if (data.weather[0].main === 'Fog') {
            $('.bg').css('background-image', 'url(bg_fog.png)');
            $('.maintitle').css('color', "#FFFFFF");
          } else if (data.weather[0].main === 'Sand') {
            $('.bg').css('background-image', 'url(bg_fog.png)');
            $('.maintitle').css('color', "#FFFFFF");
          } else if (data.weather[0].main === 'Ash') {
            $('.bg').css('background-image', 'url(bg_fog.png)');
            $('.maintitle').css('color', "#FFFFFF");
          } else if (data.weather[0].main === 'Squall') {
            $('.bg').css('background-image', 'url(bg_fog.png)');
            $('.maintitle').css('color', "#FFFFFF");
          } else if (data.weather[0].main === 'Tornado') {
            $('.bg').css('background-image', 'url(bg_fog.png)');
            $('.maintitle').css('color', "#FFFFFF");
          } else if (data.weather[0].main === 'Snow') {
            $('.bg').css('background-image', 'url(bg_snow.gif)');
          } else if (data.weather[0].main === 'Clouds') {
            $('.bg').css('background-image', 'url(bg_sunclouds.png)');
          } else {
            $('.bg').css('background-image', 'url(bg_sunny.png)');
          }

        $("#show").html(wf)
       });
      }
    }) } else { 
      $('#error').html('<div class="alert alert-danger alert-dismissible fade show" role="alert"> Field cannot be empty <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>')
    };

    $('.search2').click(function() {
      $("#show").empty();
      $('.maintitle').css('color', "#308296");
      $('.bg').css('background-image', 'url(bg_sunny.png)');
      $('#city').val('')
     });
    });

    $('.bg').mousemove (function(e){
        var moveX = (e.pageX * -1/40);
        var moveY = (e.pageY * -1/40);
      $(this).css('background-position', moveX + 'px ' + moveY + 'px ')
    });

     $("#city").keypress(function(event) { 
       if (event.keyCode === 13) { 
       $("#getWeather").click();
       } 
      }); 

});
