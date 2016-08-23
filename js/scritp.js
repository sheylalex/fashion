
$(document).ready(function(){
    $('.next').click(function(){
      $(".cont-slider").animate({"left": "-50%"}, "slow");
  });
    $('.prev').click(function(){
      $(".cont-slider").animate({"left": "+0%"}, "slow");
  });
});

