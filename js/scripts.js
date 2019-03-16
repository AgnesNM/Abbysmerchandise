//Business Logic
// function User (name, email, password) {
//   this.name = name;
//   this.email = email;
//   this.password = password;
// })
//UI Logic
$(document).ready(function(){
  $("#formToggle").click(function(){
    $("#userInput").show();
    $("#signup").hide();
  });
  $("#userInput").submit(function(event){
    var userName = $("newName").val();
    var userEmail = $("newEmail").val();
    var userPass = $("newPass").val();

  });
    // var newUser = new User (name,email,password);
    // var userData = [];
    // userData.push(userName, userEmail,userPass);

  eventPreventDefault();
});
