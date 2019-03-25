// //Business Logic
// function Users(name,email,password){
//   this.name = name;
//   this.email = email;
//   this.password = password;
// }
//UI Logic
$(document).ready(function() {
	$("#userSignUp").click(function() {
		$("#signUpForm").show();
		$("#signup").hide();
	});
	$("#userInfo").click(function(event) {
		// var newCust = new User(name, email, password);
		var custName = $("#newName").val();
		var custEmail = $("#newEmail").val();
		var custPass = $("#newPass").val();
		var custData = [];
		custData.push(custName, custEmail, custPass);
		$("#userSignUp").text("Thank you for signing up!");
	});
	$("#userLogIn").click(function() {
		$("#loginForm").show();
		$("#login").hide();
	});
	$("#userData").click(function(event){
		var currentName = $("#userName").val();
		var currentEmail = $("#userEmail").val();
		var currentPass = $("#userPass").val();
		var loginArray = [];
		loginArray.push(currentName,currentEmail,currentPass);
		//Could not get to compare the elements using arrays and array elements, looping, forEach didn't work, so decided to try objeects.
	});
});
