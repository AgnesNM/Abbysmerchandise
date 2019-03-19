alert("hi");
//Business Logic
function User (name, email, password){
  this.name = name;
  this.email = email;
  this.password = password;
}
//UI Logic
$(document).ready(function(){
  $("#userSignUp").click(function(){
    $("#signUpForm").show();
    $("#signup").hide();
  });
  $("#userInfo").submit(function(event){
    eventPreventDefault();
    var currentName = $("newName").val();
    var currentEmail = $("newEmail").val();
    var currentPass = $("newPass").val();
    var currentUser = new User(currentName,currentEmail, currentPassword);
    var userDetails = [];
    userDetails.push(currentName, currentEmail,currentPass);
  });
  $("#userLogIn").click(function(){
    $("#loginForm").show();
    $("#login").hide();
  });
  $("#userData").submit(function(event){
    eventPreventDefault();
    var custName = $("userName").val();
    var custEmail = $("userEmail").val();
    var custPass = $("userPass").val();
      if custName === userDetails[0] && custEmail === userDetails[1] && custPass === userDetails [2]{
        alert("You are logged in!");
      } else {
        alert("Please enter correct name, email and password");
      }
  });

});
