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
	$("#userData").click(function(e) {
		event.PreventDefault;
		var custName = $("#newName").val();
		var custEmail = $("#newEmail").val();
		var custPass = $("#newPass").val();
		var custData = [];
		custData.push(custName, custEmail, custPass);
		var currentName = $("#userName").val();
		var currentEmail = $("#userEmail").val();
		var currentPass = $("#userPass").val();
			if ((currentName === custData[0]) && (currentEmail === custData[1]) && (currentPass === custData[2])) {
				alert('You are looged in!');
			}
		});

	$("#price").click(function(){
		var cost = $("#price").val();
		var choice = prompt("This card holder costs 700. Would you like to choose a decoration type?");
			if (choice != null && choice === "yes") {
				$("#display").text("Great, please,go ahead!");
				$("#preference").show();
			} else{
				$(".options").hide();
				$("#display").text("Your total cost is " + cost);
			}
	});

	$("#preference").click(function(){
		var cost = $("#price").val();
		var decoCost = $("#decoChoice").find(":selected").attr('value');
		var totalCost = parseInt(cost) + parseInt(decoCost);
		alert("Your total cost is KES: " + totalCost);
		alert("Thank you for purchasing from us!");
	});
});
