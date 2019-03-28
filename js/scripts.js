//The point here was to try and use an already existing array of user info, doesn't work

//Business Logic
var users = [
	{
		name:"Raych",
		email:"raych@gmail.com",
		password:"hey"
	},
	{
		name:"Abby",
		email:"abby@gmail.com",
		password:"you"
	},
	{
		name:"Peter",
		email:"Peter@gmail.com",
		password:"him"
	}
];

//UI Logic
$(document).ready(function(){
	$("#userLogIn").click(function(){
		$("#loginForm").show();
		$("#login").hide();
	});

	function getInfo(){
		var custName = $("#newName").val();
		var custEmail = $("#newEmail").val();
		var custPassword = $("#newPass").val();
		for (i=0;i<users.length;i++){
			if(custName === users[i].name && custEmail === users[i].email && custPassword === users[i].password){
				("#userLogIn").text("name " + " you are logged in!");
			}
		}
	}

});
