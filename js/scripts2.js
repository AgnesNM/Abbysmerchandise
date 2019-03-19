//Business Logic
function Users (name, email, password){
  this.name = name;
  this.email = email;
  this.password = password;
}
//UI Logic
$(document).ready(function(){
  $("#formToggle").click(function(){
    $("#userInput").show();
    $("#signup").hide();
  });
  $("#userInput").submit(function(event){
    eventPreventDefault();
    var userName = $("newName").val();
    var userEmail = $("newEmail").val();
    var userPass = $("newPass").val();
    var newUser = new User(name,email,password);
    var userData1 = [];
    userData.push(userName, userEmail,userPass);
    for(i=0;i<userData1.length;i++){
      if(userData1[0] === userName && userData1[1] === userEmail && userData1[2] === userPass){
        alert("You are logged in!");
      } else{
        alert("Please check your log in details!")
      }
    }
  });

});
