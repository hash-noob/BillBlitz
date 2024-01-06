import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyBsEQvIeuUWf3oOcD4DUcnqeQWTkFGwJq0",
authDomain: "user-database-3c73e.firebaseapp.com",
projectId: "user-database-3c73e",
storageBucket: "user-database-3c73e.appspot.com",
messagingSenderId: "297917761223",
appId: "1:297917761223:web:e393234ccc505d4af2a0e2",
measurementId: "G-F9R46P3KDX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



const auth = firebase.auth()
const database = firebase.database()


function register(){

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var cpass = document.getElementById("cpass").value;
    if(cpass !== pass){
        alert("Password mismatch");
        return 
    }

    if (validate_email(email) == false || validate_password(password) == false) {
        alert('Email or Password is Outta Line!!')
        return
      }
      if (validate_field(name) == false) {
        alert('One or More Extra Fields is Outta Line!!')
        return
      }
     
      auth.createUserWithEmailAndPassword(email, password)
      .then(function() {
        var user = auth.currentUser
    
        var database_ref = database.ref()
    
        var user_data = {
          email : email,
          full_name : name,
          password: pass,
          last_login : Date.now()
        }
    
        database_ref.child('users/' + user.uid).set(user_data)
    
        alert('User Created!!')
      })
      .catch(function(error) {
        var error_code = error.code
        var error_message = error.message
    
        alert(error_message)
      })
}



function login () {
  email = document.getElementById('email').value
  password = document.getElementById('password').value

  if (validate_email(email) == false || validate_password(password) == false) {
    alert('Email or Password is Outta Line!!')
    return
  }
  auth.signInWithEmailAndPassword(email, password).then(function() {
    var user = auth.currentUser

    var database_ref = database.ref()

    var user_data = {
      last_login : Date.now()
    }

    database_ref.child('users/' + user.uid).update(user_data)

    alert('User Logged In!!')

  })
  .catch(function(error) {
    var error_code = error.code
    var error_message = error.message

    alert(error_message)
  })
}




function validate_email(email) {
  expression = /^[^@]+@\w+(\.\w+)+\w$/
  if (expression.test(email) == true) {
    return true
  } else {
    return false
  }
}

function validate_password(password) {
  if (password < 6) {
    return false
  } else {
    return true
  }
}

function validate_field(field) {
  if (field == null) {
    return false
  }
  if (field.length <= 0) {
    return false
  } else {
    return true
  }
}