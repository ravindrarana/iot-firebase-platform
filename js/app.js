// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDQEW0_j2wuZwcEMoxnrcB4nCX9Aalnnfw",
    authDomain: "dhniot.firebaseapp.com",
    databaseURL: "https://dhniot.firebaseio.com",
    projectId: "dhniot",
    storageBucket: "dhniot.appspot.com",
    messagingSenderId: "961728067508"
  };
  firebase.initializeApp(config);





// code for led
	$(document).ready(function(){
		var database = firebase.database();
		var ledStatus = 0;
		var fanStatus = 0;
		var tvStatus = 0;
		var acStatus = 0;


		database.ref().on("value", function(snap)
		{
			ledStatus = snap.val().ledStatus;
			if(ledStatus == 1)
			{
				$(".lightStatus").text("The Light is on");
			}
			else
			{
				$(".lightStatus").text("The Light is Off");
			}
		});

		$(".buttonStatus").click(function(){
			var firebaseRef = firebase.database().ref().child("ledStatus");
			if(ledStatus == 1)
			{
				firebaseRef.set(0);
				ledStatus = 0;
			}
			else
			{
				firebaseRef.set(1);
				ledStatus = 1;
			}
		});

// code for fan
		database.ref().on("value", function(snap)
		{
			fanStatus = snap.val().fanStatus;
			if(fanStatus == 1)
			{
				$(".fanStatus").text("The Fan is on");
			}
			else
			{
				$(".fanStatus").text("The Fan is off");
			}
		});

		$(".fanButton").click(function(){
			var firebaseRef = firebase.database().ref().child("fanStatus");
			if(fanStatus == 1)
			{
				firebaseRef.set(0);
				fanStatus = 0;
			}
			else
			{
				firebaseRef.set(1);
				fanStatus = 1;
			}
		});

		// code for Tv
		database.ref().on("value", function(snap)
		{
			tvStatus = snap.val().tvStatus;
			if(tvStatus == 1)
			{
				$(".tvStatus").text("The TV is on");
			}
			else
			{
				$(".tvStatus").text("The TV is off");
			}
		});

		$(".tvButton").click(function(){
			var firebaseRef = firebase.database().ref().child("tvStatus");
			if(tvStatus == 1)
			{
				firebaseRef.set(0);
				tvStatus = 0;
			}
			else
			{
				firebaseRef.set(1);
				tvStatus = 1;
			}
		});

		// code for AC

		database.ref().on("value", function(snap)
		{
			acStatus = snap.val().acStatus;
			if(acStatus == 1)
			{
				$(".acStatus").text("AC is ON");
			}
			else
			{
				$(".acStatus").text("AC is OFF");
			}
		});

		$(".acButton").click(function(){
			var firebaseRef = firebase.database().ref().child("acStatus");
			if(acStatus == 1)
			{
				firebaseRef.set(0);
				acStatus = 0;
			}
			else
			{
				firebaseRef.set(1);
				acStatus = 1;
			}
		});

	});



// for toggle button

