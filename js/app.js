var firebaseConfig = {
    apiKey: "AIzaSyCw1O47NYLqDZV94-ZGSrUXUoYbI4NRjZA",
    authDomain: "nauloghar.firebaseapp.com",
    databaseURL: "https://nauloghar.firebaseio.com",
    projectId: "nauloghar",
    storageBucket: "nauloghar.appspot.com",
    messagingSenderId: "308708186885",
    appId: "1:308708186885:web:153567c2f50e3eecfd756c",
    measurementId: "G-5WSNLQZ7GV"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// code for buuton declaration on firebase
$(document).ready(function() {
    var database = firebase.database();
    // Fore Bedroom
    var bedroomFan = 0;
    var bedroomLightOne = 0;
    var beddroomLightTwo = 0;
    var bedroomTv = 0;
    // End Bedroom

    // Kitchen
    var kitchenLight = 0;
    var kitchenStove = 0;
    var kitchenTub = 0;
    // End Kitchen

    // Garden
    var gardenCamera = 0;
    var gardenPump = 0;
    // End Garden

    // Store Room
    var storeroomCamera = 0;
    var storeroomDoor = 0;
    var storeroomFan = 0;
    var storeroomLight = 0;
    // End Store Room


    // Bedroom appliances control
    // Light One
    database.ref().on("value", function(snap) {
        bedroomLightOne = snap.val().bedroomLightOne;
        if (bedroomLightOne == 1) {
            $(".bedroomLightOneStatus").text("Light 1 is on");
        } else {
            $(".bedroomLightOneStatus").text("Light 1 is Off");
        }
    });

    $(".buttonBedroomLightOne").click(function() {
        var firebaseRef = firebase.database().ref().child("bedroomLightOne");
        if (bedroomLightOne == 1) {
            firebaseRef.set(0);
            bedroomLightOne = 0;
        } else {
            firebaseRef.set(1);
            bedroomLightOne = 1;
        }
    });
    // End Light One

    // Light Second
    database.ref().on("value", function(snap) {
        beddroomLightTwo = snap.val().beddroomLightTwo;
        if (beddroomLightTwo == 1) {
            $(".beddroomLightTwoStatus").text("Light 2 is on");
        } else {
            $(".beddroomLightTwoStatus").text("light 2 is off");
        }
    });

    $(".buttonBeddroomLightTwo").click(function() {
        var firebaseRef = firebase.database().ref().child("beddroomLightTwo");
        if (beddroomLightTwo == 1) {
            firebaseRef.set(0);
            beddroomLightTwo = 0;
        } else {
            firebaseRef.set(1);
            beddroomLightTwo = 1;
        }
    });
    // End Light Second

    // TV
    database.ref().on("value", function(snap) {
        bedroomTv = snap.val().bedroomTv;
        if (bedroomTv == 1) {
            $(".bedroomTvStatus").text("TV is on");
        } else {
            $(".bedroomTvStatus").text("TV is off");
        }
    });

    $(".buttonBedroomTv").click(function() {
        var firebaseRef = firebase.database().ref().child("bedroomTv");
        if (bedroomTv == 1) {
            firebaseRef.set(0);
            bedroomTv = 0;
        } else {
            firebaseRef.set(1);
            bedroomTv = 1;
        }
    });
    // End TV

    // Fan
    database.ref().on("value", function(snap) {
        bedroomFan = snap.val().bedroomFan;
        if (bedroomFan == 1) {
            $(".bedroomFanStatus").text("Fan is ON");
        } else {
            $(".bedroomFanStatus").text("Fan is OFF");
        }
    });

    $(".buttonBedroomFan").click(function() {
        var firebaseRef = firebase.database().ref().child("bedroomFan");
        if (bedroomFan == 1) {
            firebaseRef.set(0);
            bedroomFan = 0;
        } else {
            firebaseRef.set(1);
            bedroomFan = 1;
        }
    });
    // End Fan
    // End Bedroom Appliances

    // Kitchen Appliances Control
    // Kitchen Light
    database.ref().on("value", function(snap) {
        kitchenLight = snap.val().kitchenLight;
        if (kitchenLight == 1) {
            $(".kitchenLightStatus").text("light is ON");
        } else {
            $(".kitchenLightStatus").text("light is OFF");
        }
    });

    $(".buttonKitchenLight").click(function() {
        var firebaseRef = firebase.database().ref().child("kitchenLight");
        if (kitchenLight == 1) {
            firebaseRef.set(0);
            bedroomFan = 0;
        } else {
            firebaseRef.set(1);
            kitchenLight = 1;
        }
    });
    // End Kitchen Light

    // Kitchen Stove
    database.ref().on("value", function(snap) {
        kitchenStove = snap.val().kitchenStove;
        if (kitchenStove == 1) {
            $(".kitchenStoveStatus").text("stove is ON");
        } else {
            $(".kitchenStoveStatus").text("stove is OFF");
        }
    });

    $(".buttonKitchenStove").click(function() {
        var firebaseRef = firebase.database().ref().child("kitchenStove");
        if (kitchenStove == 1) {
            firebaseRef.set(0);
            kitchenStove = 0;
        } else {
            firebaseRef.set(1);
            kitchenStove = 1;
        }
    });
    // End Kitchen Stove

    // Kitchen Tub
    database.ref().on("value", function(snap) {
        kitchenTub = snap.val().kitchenTub;
        if (kitchenTub == 1) {
            $(".kitchenTubStatus").text("Water tub is ON");
        } else {
            $(".kitchenTubStatus").text("water tub is OFF");
        }
    });

    $(".buttonKitchenTub").click(function() {
        var firebaseRef = firebase.database().ref().child("kitchenTub");
        if (kitchenTub == 1) {
            firebaseRef.set(0);
            kitchenTub = 0;
        } else {
            firebaseRef.set(1);
            kitchenTub = 1;
        }
    });
    // End Kitchen Tub

    // Store Room
    // Security Camera
    database.ref().on("value", function(snap) {
        storeroomCamera = snap.val().storeroomCamera;
        if (storeroomCamera == 1) {
            $(".storeroomCameraStatus").text("Security Camera is ON");
        } else {
            $(".storeroomCameraStatus").text("security camera is OFF");
        }
    });

    $(".buttonStoreroomCamera").click(function() {
        var firebaseRef = firebase.database().ref().child("storeroomCamera");
        if (storeroomCamera == 1) {
            firebaseRef.set(0);
            storeroomCamera = 0;
        } else {
            firebaseRef.set(1);
            storeroomCamera = 1;
        }
    });
    // End Security Camera

    // Door
    database.ref().on("value", function(snap) {
        storeroomDoor = snap.val().storeroomDoor;
        if (storeroomDoor == 1) {
            $(".storeroomDoorStatus").text("Door Locked");
        } else {
            $(".storeroomDoorStatus").text("Door Unlocked");
        }
    });

    $(".buttonStoreroomDoor").click(function() {
        var firebaseRef = firebase.database().ref().child("storeroomDoor");
        if (storeroomDoor == 1) {
            firebaseRef.set(0);
            storeroomDoor = 0;
        } else {
            firebaseRef.set(1);
            storeroomDoor = 1;
        }
    });
    // End Door

    // Fan
    database.ref().on("value", function(snap) {
        storeroomFan = snap.val().storeroomFan;
        if (storeroomFan == 1) {
            $(".storeroomFanStatus").text("fan is on");
        } else {
            $(".storeroomFanStatus").text("fan is off");
        }
    });

    $(".buttonStoreroomFan").click(function() {
        var firebaseRef = firebase.database().ref().child("storeroomFan");
        if (storeroomFan == 1) {
            firebaseRef.set(0);
            storeroomFan = 0;
        } else {
            firebaseRef.set(1);
            storeroomFan = 1;
        }
    });

    // End Fan

    // Light
    database.ref().on("value", function(snap) {
        storeroomLight = snap.val().storeroomLight;
        if (storeroomLight == 1) {
            $(".storeroomLightStatus").text("Light is on");
        } else {
            $(".storeroomLightStatus").text("Light is off");
        }
    });

    $(".buttonStoreroomLight").click(function() {
        var firebaseRef = firebase.database().ref().child("storeroomLight");
        if (storeroomLight == 1) {
            firebaseRef.set(0);
            storeroomLight = 0;
        } else {
            firebaseRef.set(1);
            storeroomLight = 1;
        }
    });
    // End Light
    // End Store Room

    // Garden
    // Garden Camera
    database.ref().on("value", function(snap) {
        gardenCamera = snap.val().gardenCamera;
        if (gardenCamera == 1) {
            $(".gardenCameraStatus").text("Garden Camera is ON");
        } else {
            $(".gardenCameraStatus").text("Garden Camera is OFF");
        }
    });

    $(".buttonGardenCamera").click(function() {
        var firebaseRef = firebase.database().ref().child("gardenCamera");
        if (gardenCamera == 1) {
            firebaseRef.set(0);
            gardenCamera = 0;
        } else {
            firebaseRef.set(1);
            gardenCamera = 1;
        }
    });
    // End Garden Camera

    // Garden Water Pump
    database.ref().on("value", function(snap) {
        gardenPump = snap.val().gardenPump;
        if (gardenPump == 1) {
            $(".gardenPumpStatus").text("water Pump is ON");
        } else {
            $(".gardenPumpStatus").text("Water Pump is OFF");
        }
    });

    $(".buttonGardenPump").click(function() {
        var firebaseRef = firebase.database().ref().child("gardenPump");
        if (gardenPump == 1) {
            firebaseRef.set(0);
            gardenPump = 0;
        } else {
            firebaseRef.set(1);
            gardenPump = 1;
        }
    });
    // End Garden Water Pump

    // End Garden
    // End Kitchen Appliances Control

});
// End Document