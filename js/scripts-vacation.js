$(document).ready(function(){
  $('.form-survey').on('submit', function(event){
    event.preventDefault();
  //  var $answer1 = $("#age-answer");
  //  var answer1 = $answer1.val();
    var $answer2 = $("salary-answer");
    var answer2 = $answer2.val();
    var $answer3 = $("travel-answer");
    var answer3 = $answer3.val();
    var $answer4 = $("business-answer");
    var answer4 = $answer4.val();
    var $answer5 = $("choice-answer");
    var answer5 = $answer5.val();
  //  console.log(answer1);
    console.log(answer2);
    console.log(answer3);
    console.log(answer4);
    console.log(answer5);

  });

});
