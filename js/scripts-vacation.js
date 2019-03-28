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
      alert("consider travelling to the Bahamas");
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
    }else if ($answer2 === "btn-500k-2m"&&$answer3==="more-than-5-times"&&$answer5==="hot") {
      alert("Consider travelling to Zanzibar");
    }else if ($answer2 === "btn-500k-2m"&&$answer3==="more-than-5-times"&&$answer5==="cold") {
      alert("Consider travelling to the rwenzori moutains!")
    }else if ($answer2 === "btn-500k-2m"&&($answer3==="never"||$answer3==="1-to-5-times")&&$answer5==="hot") {
      alert("Consider travelling to Moroto");
    }else if ($answer2 === "btn-500k-2m"&&($answer3==="never"||$answer3==="1-to-5-times")&&$answer5==="cold") {
      alert("Consider travelling to Kabale");
    }else if ($answer2 === "less-than-500k"&&($answer3==="never"||$answer3==="1-to-5-times"||$answer3==="more-than-5-times")&&$answer5==="cold") {
      alert("Consider travelling to Kabale");
    }else if ($answer2 === "less-than-500k"&&($answer3==="never"||$answer3==="1-to-5-times"||$answer3==="more-than-5-times")&&$answer5==="hot") {
      alert("Consider travelling to Moroto");
    }
  });

});
