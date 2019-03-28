$(document).ready(function(){
  $('.form-survey').on('submit', function(event){
    event.preventDefault();

    var $answer2 = $("select#salary").val();
    var $answer3 = $("select#travelFreq").val();
    var $answer4 = $("select#businessOr").val();
    var $answer5 = $("select#hotOr").val();
  //  console.log($answer2);
  //  console.log($answer3);
  //  console.log($answer4);
  //  console.log($answer5);
    if ($answer2 === "above-2m"&&$answer5==="hot"){
      alert("consider travelling to the Bahamas!");
      $(".wrapper").hide();
      $("body").addClass("hide-bg");
      $("#bahamas").fadeIn(3000);
      $("#bahamas").click(function(){
        $(".wrapper").show();
        $("body").removeClass("hide-bg");
        $("#bahamas").hide();
      })
    }else if ($answer2 === "above-2m"&&$answer5==="cold") {
      alert("consider travelling to Sweden!");
      $(".wrapper").hide();
      $("body").addClass("hide-bg");
      $("#sweden").fadeIn(3000);
      $("#sweden").click(function(){
        $(".wrapper").show();
        $("body").removeClass("hide-bg");
        $("#sweden").hide();
      })
    }else if ($answer2 === "btn-500k-2m"&&$answer3==="more-than-5-times"&&$answer5==="hot") {
      alert("Consider travelling to Zanzibar!");
      $(".wrapper").hide();
      $("body").addClass("hide-bg");
      $("#zanzibar").fadeIn(3000);
      $("#zanzibar").click(function(){
        $(".wrapper").show();
        $("body").removeClass("hide-bg");
        $("#zanzibar").hide();
      })
    }else if ($answer2 === "btn-500k-2m"&&$answer3==="more-than-5-times"&&$answer5==="cold") {
      alert("Consider travelling to the rwenzori moutains!")
      $(".wrapper").hide();
      $("body").addClass("hide-bg");
      $("#rwenzori").fadeIn(3000);
      $("#rwenzori").click(function(){
        $(".wrapper").show();
        $("body").removeClass("hide-bg");
        $("#rwenzori").hide();
      })
    }else if ($answer2 === "btn-500k-2m"&&($answer3==="never"||$answer3==="1-to-5-times")&&$answer5==="hot") {
      alert("Consider travelling to Moroto!");
      $(".wrapper").hide();
      $("body").addClass("hide-bg");
      $("#moroto").fadeIn(3000);
      $("#moroto").click(function(){
        $(".wrapper").show();
        $("body").removeClass("hide-bg");
        $("#moroto").hide();
      })
    }else if ($answer2 === "btn-500k-2m"&&($answer3==="never"||$answer3==="1-to-5-times")&&$answer5==="cold") {
      alert("Consider travelling to Kabale!");
      $(".wrapper").hide();
      $("body").addClass("hide-bg");
      $("#kabale").fadeIn(3000);
      $("#kabale").click(function(){
        $(".wrapper").show();
        $("body").removeClass("hide-bg");
        $("#kabale").hide();
      })
    }else if ($answer2 === "less-than-500k"&&($answer3==="never"||$answer3==="1-to-5-times"||$answer3==="more-than-5-times")&&$answer5==="cold") {
      alert("Consider travelling to Kabale!");
      $(".wrapper").hide();
      $("body").addClass("hide-bg");
      $("#kabale").fadeIn(3000);
      $("#kabale").click(function(){
        $(".wrapper").show();
        $("body").removeClass("hide-bg");
        $("#kabale").hide();
      })
    }else if ($answer2 === "less-than-500k"&&($answer3==="never"||$answer3==="1-to-5-times"||$answer3==="more-than-5-times")&&$answer5==="hot") {
      alert("Consider travelling to Moroto!");
      $(".wrapper").hide();
      $("body").addClass("hide-bg");
      $("#moroto").fadeIn(3000);
      $("#moroto").click(function(){
        $(".wrapper").show();
        $("body").removeClass("hide-bg");
        $("#moroto").hide();
      })
    }
  });

});
