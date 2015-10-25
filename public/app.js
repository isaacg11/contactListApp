Stamplay.init('contactlistapp');

//REGISTER W/EMAIL & PASSWORD
function register(){
	username = document.getElementById('usernameRegister').value;
	email = document.getElementById('emailRegister').value;
	password = document.getElementById('passwordRegister').value;

	var registrationData = {
  		displayName: username,
  		email : email,
  		password: password
	};

	var newUser = new Stamplay.User().Model;
	newUser.signup(registrationData).then(function(){
		document.getElementById('usernameRegister').value = "";
		document.getElementById('emailRegister').value = "";
		document.getElementById('passwordRegister').value = "";
		window.location = "home.html";
	});
}

//LOGIN WITH EMAIL & PASSWORD
function login(){
	email = document.getElementById('emailLogin').value;
	password = document.getElementById('passwordLogin').value;

	var user = new Stamplay.User().Model;
	user.login(email, password).then(function(){
		email = document.getElementById('emailLogin').value = "";
		password = document.getElementById('passwordLogin').value = "";
		window.location = "home.html";
	});

}

//REGISTER WITH FACEBOOK
function registerFB(){
	var user = new Stamplay.User().Model;
	user.login('facebook');
}

//LOGIN WITH FACEBOOK
function loginFB(){
	var user = new Stamplay.User().Model;
	user.login('facebook');
}

//GET ALL DATA FOR APP
window.onload = function(){
	var loggedInUser = new Stamplay.User().Model;
	loggedInUser.currentUser().then(function(){
  		var user = loggedInUser.get('displayName');
		document.getElementById('currentUser').innerHTML = user.toUpperCase();
	});
};

//NEW CONTACT MODAL
 $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
  });


