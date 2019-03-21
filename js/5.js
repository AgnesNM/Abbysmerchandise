//UI Logic
$(document).ready(function(){
  $("#userSignUp").click(function(){
    $("#signUpForm").show();
    $("#signup").hide();
  });
  $("#userInfo").click(function(event){

    var custName = $("#newName").val();
    var custEmail = $("#newEmail").val();
    var custPass = $("#newPass").val();
    var custData = [];
    custData.push(custName, custEmail,custPass);
    $("#display").text("Thank you for signing up!");
  });
    eventPreventDefault();
});
