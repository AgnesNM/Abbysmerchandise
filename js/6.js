// //Business Logic
// function Users(name,email,password){
//   this.name = name;
//   this.email = email;
//   this.password = password;
// }
//UI Logic
$(document).ready(function(){
  $("#userSignUp").click(function(){
    $("#signUpForm").show();
    $("#signup").hide();
  });
  $("#userInfo").click(function(event){
    // var newCust = new User(name, email, password);
    var custName = $("#newName").val();
    var custEmail = $("#newEmail").val();
    var custPass = $("#newPass").val();
    var custData = [];
    custData.push(custName, custEmail,custPass);
    $("#userSignUp").text("Thank you for signing up!");
  });
    $("#userLogIn").click(function(){
      $("#loginForm").show();
      $("#login").hide();
    });
  $("#userData").click(function(event){
    var currentName = $("#userName").val();
    var currentEmail = $("#userEmail").val();
    var currentPass = $("#userPass").val();
      for (var i=0; i<custData.length;i++){
        if((currentName === custData[0]) && currentEmail === custData[1] && currentPass === custData[2]){
          $("#userLogIn").text("You are logged in!");
        } else{
          $("#userLogIn").text("Please enter correct name, email and password!");
          }
        };
    });
    // eventPreventDefault();
});
