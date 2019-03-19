//Business Logic
var users = [
  {
    userName: "Cynthia",
    userEmail:"cynthia@gmail.com",
    userPass: "girl"
  },
  {
    userName:"matt",
    userEmail:"matt@gmail.com",
    userPass: "guy"
  }
  {
    userName:"Raych",
    userEmail:"raych@gmail.com",
    userPass: "lady"
  }

];
//UI Logic
$(document).ready(function(){
  $("#userSignUp").click(function(){
    $("#signUpForm").show();
    $("#signup").hide();

  });
  $("#userInput").submit(function(event){
    var userName = $("newName").val();
    var userEmail = $("newEmail").val();
    var userPass = $("newPass").val();
    for (i=0; i<users.length; i++){
      if (userName === users[i].userName && userEmail === users[i].userEmail && userPass === users[i].userPass){
        console.log(userName + " is logged in!")
      }
    }
    // $("#login").show();//this needs to show after the page refreshes
  });

    // var newUser = new User (name,email,password);
    // var userData = [];
    // userData.push(userName, userEmail,userPass);

  // eventPreventDefault();
});
