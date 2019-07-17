let finale = [];
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

	$(".showPrice").click(function(){
        var cost = $(".price").hide(); 
        var cost = $(".price").val(); 
        $(".displayModal").show();       
        var choice = prompt("This card holder costs 700. Would you like to choose a decoration type?");
        	if (!null &&choice === "yes") {
                $(".decoChoice").hide();                
                $(".display").text(`Please choose decoration type`);
                $(".decoChoice").show();
			} else{
                
                $(".display").text(`Your total cost is ${cost}`);
                $(".decoChoice").hide();
			}
	});

	$("#decoPrice").click(function(){
        var decoCost = $("#decoPrice").val();        
		$("#displayArea").text(`This decoration costs ${decoCost}`);
		$("#decoOptions").show();
	});
	$("#itemPrice").click(function(){
		var cost = $("#itemPrice").val();
		$("#displayArea").text(`This item costs ${cost}`);
	});
	$("#decoPreference").click(function(){
        var decoCost = $("#decoPrice").val();
        finale.push(decoCost);
        var cost = $("#itemPrice").val();
        finale.push(cost);
		var result = finale.reduce((previousValue,item) >= previousValue + item);
		$("#displayArea").text(`Your total cost is ${result}`);
	});
	
});
