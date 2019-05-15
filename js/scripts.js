//Business Logic
function totalCost (decoCost,cost){
	return decoCost + cost;
 }
//UI Logic
$(document).ready(function() {
	$("#userSignUp").click(function() {
		$("#signUpForm").show();
		$("#signup").hide();
	});
	$("#userInfo").click(function(event) {
		var custName = $("#newName").val();
		var custEmail = $("#newEmail").val();
		var custPass = $("#newPass").val();
		localStorage.setItem("name", "Raych") +
		localStorage.setItem("email", "raych@gmail.com") +
		localStorage.setItem("password", "hey");
		$("#userSignUp").text("Thank you for signing up!");
	});
	$("#userLogIn").click(function() {
		$("#loginForm").show();
		$("#login").hide();
	});
	$("#userData").click(function(event) {
		event.PreventDefault;

		var currentName = $("#userName").val();
		var currentEmail = $("#userEmail").val();
		var currentPass = $("#userPass").val();
		localStorage.getItem("name") +
		localStorage.getItem("email") +
		localStorage.getItem("password");
		$("#userLogIn").text("You are logged in!");
		});

	$("#price").click(function(){
		var cost = $("#price").val();
		var choice = prompt("This card holder costs 700. Would you like to choose a decoration type?");
			if (!null &&choice === "yes") {
				$("#display").text("Great, please,go ahead!");
				$("#preference").show();
			} else{

				$("#display").text("Your total cost is " + cost);
			}
	});

	$("#decoPrice").click(function(){
		var decoCost = $("#decoPrice").val();
		$("#displayArea").text("This decoration costs " + decoCost);
		$("#decoOptions").show();
	});
	$("#itemPrice").click(function(){
		var cost = $("#itemPrice").val();
		$("#displayArea").text("This item costs " + cost);
	});
	$("#decoPreference").click(function(){
		var decoCost = $("#decoPrice").val();
		var cost = $("#itemPrice").val();
		var result = parseInt(decoCost) + parseInt(cost);
		$("#displayArea").text("Your total cost is " + result);
	});
	
});
