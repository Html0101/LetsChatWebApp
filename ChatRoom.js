var firebaseConfig = {
  apiKey: "AIzaSyDvE3zYmd927gVHnrt-rVzvHOoW08ujsE4",
  authDomain: "letschatwebapp-5ebe3.firebaseapp.com",
  databaseURL: "https://letschatwebapp-5ebe3-default-rtdb.firebaseio.com",
  projectId: "letschatwebapp-5ebe3",
  storageBucket: "letschatwebapp-5ebe3.appspot.com",
  messagingSenderId: "791203296034",
  appId: "1:791203296034:web:ca956d6fe96b1c64c7eb7b"
  };

// Initialize Firebase
  firebase.initializeApp(firebaseConfig);



function getData() {firebase.database().ref("/").on('value',function(snapshot) {document.getElementById("output").innerHTML ="";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
  Room_names = childKey;
  //Start code
  row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names +"</div><hr>";
  document.getElementById("roome").innerHTML += row;
  //End code
});});}
getData();

function addRoom() 
{ 
  room_name = document.getElementById("roome_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "ChattingRoom.html";
}

function redirectToRoomName(name) 
{ 
  console.log(name);
  localStorage.setItem("room_name", names);
  window.location = "ChattingRoom.html";
}

function logout() 
{ 
  localStorage.removeItem("room_name");
  localStorage.removeItem("names");
  window.location("index.html")
}

