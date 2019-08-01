var firebaseConfig = {
  apiKey: "AIzaSyCOzRzgJEBlowb9DarRkqPyFLEG0h71opo",
  authDomain: "zirk-portfolio.firebaseapp.com",
  databaseURL: "https://zirk-portfolio.firebaseio.com",
  projectId: "zirk-portfolio",
  storageBucket: "zirk-portfolio.appspot.com",
  messagingSenderId: "451035445400",
  appId: "1:451035445400:web:74333cff964a041f"
};

//initialize firebase
firebase.initializeApp(firebaseConfig);

//Reference messages collection
var messagesRef = firebase.database().ref('messages');

//Listen for form submit

document.getElementById('contactForm').addEventListener('submit', submitForm);

//Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save Message
  saveMessage(name, email, phone, message);
  document.getElementById('contactForm').reset();
}

// function to get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

//Save message to firebase
function saveMessage(name, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    phone: phone,
    message: message
  });
}

function recaptcha_callback(){
  var submitbutton = document.querySelector('#submit');
  submitbutton.removeAttribute('disabled');
  submitbutton.getElementsByClassName.cursor = 'pointer';
}



// functions.config().mygmail.key

// functions.config().mygmailpassword.key

// $("#submit").submit(function(event) {

//   var recaptcha = $("#g-recaptcha-response").val();
//   if (recaptcha === "") {
//      event.preventDefault();
//      alert("Please check the recaptcha");
//   }
// });


//  const functions = require('firebase-functions');
//  const nodemailer = require('nodemailer');
// // // Configure the email transport using the default SMTP transport and a GMail account.
// // // For Gmail, enable these:
// // // 1. https://www.google.com/settings/security/lesssecureapps
// // // 2. https://accounts.google.com/DisplayUnlockCaptcha
// // // For other types of transports such as Sendgrid see https://nodemailer.com/transports/
// // // TODO: Configure the `gmail.email` and `gmail.password` Google Cloud environment variables.
//  const gmailEmail = functions.config().gmail.email;
//  let transporter = nodemailer.createTransport({
//    service: 'gmail',
//    auth: {
//       user: 'zadendorff16@gmail.com'
    
//   }
// });


// $( 'form' ).click(function(){
//   var $captcha = $( '#recaptcha' ),
//       response = grecaptcha.getResponse();
  
//   if (response.length === 0) {
//     $( '.msg-error').text( "reCAPTCHA is mandatory" );
//     if( !$captcha.hasClass( "error" ) ){
//       $captcha.addClass( "error" );
//     }
//   } else {
//     $( '.msg-error' ).text('');
//     $captcha.removeClass( "error" );
//     alert( 'reCAPTCHA marked' );
//   }
// });


// function initMap(){

//   const loc = { lat: 33.9178, lng: 18.4247};

//   const map = new google.maps.Map(document.querySelector('.map')
//   , {
//     zoom: 14,
//     center: loc
//   });

//   const marker = new google.maps.Marker({ position: loc, map:map
//   });

// } 

