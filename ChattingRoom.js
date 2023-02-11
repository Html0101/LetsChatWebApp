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


room_name = localStorage.getItem("room_name");
user_name = localStorage.getItem("names");

function send() 
{ 
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0
    });
}
