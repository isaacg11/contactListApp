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

function logout(){
	var user = new Stamplay.User().Model;
	user.logout();
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

//GET ALL DATA FOR APP ON PAGE LOAD
window.onload = function(){
	var loggedInUser = new Stamplay.User().Model;
	loggedInUser.currentUser().then(function(){
  		var user = loggedInUser.get('displayName');
		document.getElementById('currentUser').innerHTML = user.toUpperCase();
	});
	
	var objectCollection = new Stamplay.Cobject('contact').Collection;
	objectCollection.equalTo("active_status", true).fetch().then(function() {
		for(var i = 0; i<objectCollection.length; i ++){
			var contactName = objectCollection.instance[i].instance.name;
			var contactPhone = objectCollection.instance[i].instance.phone;
			var contactEmail = objectCollection.instance[i].instance.email;
			
			var elemStrName = "<div id=contact>" + "<ul id=selection class=collection >";
			elemStrName += "<li class=collection-item>" + contactName + "</li>"; 
			elemStrName += "</ul>" + "</div>";

			var elemStrEmail = "<div id=contact>" + "<ul id=selection class=collection >";
			elemStrEmail += "<li class=collection-item>" + contactEmail + "</li>"; 
			elemStrEmail += "</ul>" + "</div>";
			
			var elemStrPhone = "<div id=contact>" + "<ul id=selection class=collection >";
			elemStrPhone += "<li class=collection-item>" + contactPhone + "</li>"; 
			elemStrPhone += "</ul>" + "</div>";

			document.getElementById('contactOutputName').innerHTML += elemStrName;
			document.getElementById('contactOutputEmail').innerHTML += elemStrEmail;
			document.getElementById('contactOutputPhone').innerHTML += elemStrPhone;
		}
	});
};

//GET ALL DATA
function getAll(){
	document.getElementById('contactOutputName').innerHTML = '';
	document.getElementById('contactOutputEmail').innerHTML = '';
	document.getElementById('contactOutputPhone').innerHTML = '';
	var objectCollection = new Stamplay.Cobject('contact').Collection;
	objectCollection.equalTo("active_status", true).fetch().then(function() {
		for(var i = 0; i<objectCollection.length; i ++){
			var contactName = objectCollection.instance[i].instance.name;
			var contactPhone = objectCollection.instance[i].instance.phone;
			var contactEmail = objectCollection.instance[i].instance.email;
			
			var elemStrName = "<div id=contact>" + "<ul id=selection class=collection >";
			elemStrName += "<li class=collection-item>" + contactName + "</li>"; 
			elemStrName += "</ul>" + "</div>";

			var elemStrEmail = "<div id=contact>" + "<ul id=selection class=collection >";
			elemStrEmail += "<li class=collection-item>" + contactEmail + "</li>"; 
			elemStrEmail += "</ul>" + "</div>";
			
			var elemStrPhone = "<div id=contact>" + "<ul id=selection class=collection >";
			elemStrPhone += "<li class=collection-item>" + contactPhone + "</li>"; 
			elemStrPhone += "</ul>" + "</div>";

			document.getElementById('contactOutputName').innerHTML += elemStrName;
			document.getElementById('contactOutputEmail').innerHTML += elemStrEmail;
			document.getElementById('contactOutputPhone').innerHTML += elemStrPhone;
		}
	});
}



//GET FRIENDS DATA
function getFriends(){
	document.getElementById('contactOutputName').innerHTML = '';
	document.getElementById('contactOutputEmail').innerHTML = '';
	document.getElementById('contactOutputPhone').innerHTML = '';
	var objectCollection = new Stamplay.Cobject('contact').Collection;
	objectCollection.equalTo("friends", true).fetch().then(function() {
		for(var i = 0; i<objectCollection.length; i ++){
			var contactName = objectCollection.instance[i].instance.name;
			var contactPhone = objectCollection.instance[i].instance.phone;
			var contactEmail = objectCollection.instance[i].instance.email;
			
			var elemStrName = "<div id=contact>" + "<ul id=selection class=collection >";
			elemStrName += "<li class=collection-item>" + contactName + "</li>"; 
			elemStrName += "</ul>" + "</div>";

			var elemStrEmail = "<div id=contact>" + "<ul id=selection class=collection >";
			elemStrEmail += "<li class=collection-item>" + contactEmail + "</li>"; 
			elemStrEmail += "</ul>" + "</div>";
			
			var elemStrPhone = "<div id=contact>" + "<ul id=selection class=collection >";
			elemStrPhone += "<li class=collection-item>" + contactPhone + "</li>"; 
			elemStrPhone += "</ul>" + "</div>";

			document.getElementById('contactOutputName').innerHTML += elemStrName;
			document.getElementById('contactOutputEmail').innerHTML += elemStrEmail;
			document.getElementById('contactOutputPhone').innerHTML += elemStrPhone;
		}
	});
}

//GET FAMILY DATA
function getFamily(){
	document.getElementById('contactOutputName').innerHTML = '';
	document.getElementById('contactOutputEmail').innerHTML = '';
	document.getElementById('contactOutputPhone').innerHTML = '';
	var objectCollection = new Stamplay.Cobject('contact').Collection;
	objectCollection.equalTo("family", true).fetch().then(function() {
		for(var i = 0; i<objectCollection.length; i ++){
			var contactName = objectCollection.instance[i].instance.name;
			var contactPhone = objectCollection.instance[i].instance.phone;
			var contactEmail = objectCollection.instance[i].instance.email;
			
			var elemStrName = "<div id=contact>" + "<ul id=selection class=collection >";
			elemStrName += "<li class=collection-item>" + contactName + "</li>"; 
			elemStrName += "</ul>" + "</div>";

			var elemStrEmail = "<div id=contact>" + "<ul id=selection class=collection >";
			elemStrEmail += "<li class=collection-item>" + contactEmail + "</li>"; 
			elemStrEmail += "</ul>" + "</div>";
			
			var elemStrPhone = "<div id=contact>" + "<ul id=selection class=collection >";
			elemStrPhone += "<li class=collection-item>" + contactPhone + "</li>"; 
			elemStrPhone += "</ul>" + "</div>";

			
			document.getElementById('contactOutputName').innerHTML += elemStrName;
			document.getElementById('contactOutputEmail').innerHTML += elemStrEmail;
			document.getElementById('contactOutputPhone').innerHTML += elemStrPhone;
		}
	});
}

//GET BUSINESS DATA
function getBusiness(){
	document.getElementById('contactOutputName').innerHTML = '';
	document.getElementById('contactOutputEmail').innerHTML = '';
	document.getElementById('contactOutputPhone').innerHTML = '';
	var objectCollection = new Stamplay.Cobject('contact').Collection;
	objectCollection.equalTo("business", true).fetch().then(function() {
		for(var i = 0; i<objectCollection.length; i ++){
			var contactName = objectCollection.instance[i].instance.name;
			var contactPhone = objectCollection.instance[i].instance.phone;
			var contactEmail = objectCollection.instance[i].instance.email;
			
			var elemStrName = "<div id=contact>" + "<ul id=selection class=collection >";
			elemStrName += "<li class=collection-item>" + contactName + "</li>"; 
			elemStrName += "</ul>" + "</div>";

			var elemStrEmail = "<div id=contact>" + "<ul id=selection class=collection >";
			elemStrEmail += "<li class=collection-item>" + contactEmail + "</li>"; 
			elemStrEmail += "</ul>" + "</div>";
			
			var elemStrPhone = "<div id=contact>" + "<ul id=selection class=collection >";
			elemStrPhone += "<li class=collection-item>" + contactPhone + "</li>"; 
			elemStrPhone += "</ul>" + "</div>";

			document.getElementById('contactOutputName').innerHTML += elemStrName;
			document.getElementById('contactOutputEmail').innerHTML += elemStrEmail;
			document.getElementById('contactOutputPhone').innerHTML += elemStrPhone;
		}
	});
}


//NEW CONTACT MODAL
 $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
  });

//ADD NEW CONTACT
function addContact(){
	var name = document.getElementById('username').value;
	var phone = document.getElementById('phone').value;
	var email = document.getElementById('useremail').value;
	var family = document.getElementById("familyBox").checked;
	var friends = document.getElementById("friendsBox").checked;
	var business = document.getElementById("businessBox").checked;

	var objectInstance = new Stamplay.Cobject('contact').Model;
	objectInstance.set('name', name );
	objectInstance.set('phone', phone );
	objectInstance.set('email', email );
	objectInstance.set('family', family );
	objectInstance.set('friends', friends );
	objectInstance.set('business', business );
	objectInstance.set('active_status', true );
	objectInstance.save().then(function(){
		window.location = "home.html";
	});
}









