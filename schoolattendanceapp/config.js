 import firebase from "firebase";

//initialize your database
const firebaseConfig = {
  apiKey: "AIzaSyCmQEhKBKSPlp0iL5G64pniimXRq0aU7YQ",
  authDomain: "schoolattendence-5a195.firebaseapp.com",
  databaseURL: "https://schoolattendence-5a195-default-rtdb.firebaseio.com",
  projectId: "schoolattendence-5a195",
  storageBucket: "schoolattendence-5a195.appspot.com",
  messagingSenderId: "246187035764",
  appId: "1:246187035764:web:6aebee2c42c8a670005521"
};

firebase.initializeApp(firebaseConfig);

  export default firebase.database()


  