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
			
			var elemStr = "<div id=contact>" + "<ul id=selection class=collection >";
			elemStr += "<li id=contactHeaderBar class=collection-item>" + "</li>"; 
			elemStr += "<li class=collection-item>" + "<span>NAME: </span>" + contactName + "</li>"; 
			elemStr += "<li class=collection-item>" + "<span>PHONE: </span>" + contactPhone + "</li>"; 
			elemStr += "<li class=collection-item>" + "<span>EMAIL: </span>" + contactEmail + "</li>"; 
			elemStr += "</ul>" + "</div>";
			
			document.getElementById('contactOutput').innerHTML += elemStr;
		}
	});
};

//GET ALL DATA
function getAll(){
	document.getElementById('contactOutput').innerHTML ="";
	var objectCollection = new Stamplay.Cobject('contact').Collection;
	objectCollection.equalTo("active_status", true).fetch().then(function() {
		for(var i = 0; i<objectCollection.length; i ++){
			var contactName = objectCollection.instance[i].instance.name;
			var contactPhone = objectCollection.instance[i].instance.phone;
			var contactEmail = objectCollection.instance[i].instance.email;
			
			var elemStr = "<div id=contact>" + "<ul id=selection class=collection >";
			elemStr += "<li id=contactHeaderBar class=collection-item>" + "</li>"; 
			elemStr += "<li class=collection-item>" + "<span>NAME: </span>" + contactName + "</li>"; 
			elemStr += "<li class=collection-item>" + "<span>PHONE: </span>" + contactPhone + "</li>"; 
			elemStr += "<li class=collection-item>" + "<span>EMAIL: </span>" + contactEmail + "</li>"; 
			elemStr += "</ul>" + "</div>";
			
			document.getElementById('contactOutput').innerHTML += elemStr;
		}
	});
}



//GET FRIENDS DATA
function getFriends(){
	var objectCollection = new Stamplay.Cobject('contact').Collection;
	objectCollection.equalTo("friends", true).fetch().then(function() {
		for(var i = 0; i<objectCollection.length; i ++){
			var contactName = objectCollection.instance[i].instance.name;
			var contactPhone = objectCollection.instance[i].instance.phone;
			var contactEmail = objectCollection.instance[i].instance.email;
			
			var elemStr = "<div id=contact>" + "<ul id=selection class=collection >";
			elemStr += "<li id=contactHeaderBar class=collection-item>" + "</li>"; 
			elemStr += "<li class=collection-item>" + "<span>NAME: </span>" + contactName + "</li>"; 
			elemStr += "<li class=collection-item>" + "<span>PHONE: </span>" + contactPhone + "</li>"; 
			elemStr += "<li class=collection-item>" + "<span>EMAIL: </span>" + contactEmail + "</li>"; 
			elemStr += "</ul>" + "</div>";
			
			document.getElementById('contactOutput').innerHTML ="";
			document.getElementById('contactOutput').innerHTML += elemStr;
		}
	});
}

//GET FAMILY DATA
function getFamily(){
	var objectCollection = new Stamplay.Cobject('contact').Collection;
	objectCollection.equalTo("family", true).fetch().then(function() {
		for(var i = 0; i<objectCollection.length; i ++){
			var contactName = objectCollection.instance[i].instance.name;
			var contactPhone = objectCollection.instance[i].instance.phone;
			var contactEmail = objectCollection.instance[i].instance.email;
			
			var elemStr = "<div id=contact>" + "<ul id=selection class=collection >";
			elemStr += "<li id=contactHeaderBar class=collection-item>" + "</li>"; 
			elemStr += "<li class=collection-item>" + "<span>NAME: </span>" + contactName + "</li>"; 
			elemStr += "<li class=collection-item>" + "<span>PHONE: </span>" + contactPhone + "</li>"; 
			elemStr += "<li class=collection-item>" + "<span>EMAIL: </span>" + contactEmail + "</li>"; 
			elemStr += "</ul>" + "</div>";
			
			document.getElementById('contactOutput').innerHTML ="";
			document.getElementById('contactOutput').innerHTML += elemStr;
		}
	});
}

//GET BUSINESS DATA
function getBusiness(){
	var objectCollection = new Stamplay.Cobject('contact').Collection;
	objectCollection.equalTo("business", true).fetch().then(function() {
		for(var i = 0; i<objectCollection.length; i ++){
			var contactName = objectCollection.instance[i].instance.name;
			var contactPhone = objectCollection.instance[i].instance.phone;
			var contactEmail = objectCollection.instance[i].instance.email;
			
			var elemStr = "<div id=contact>" + "<ul id=selection class=collection >";
			elemStr += "<li id=contactHeaderBar class=collection-item>" + "</li>"; 
			elemStr += "<li class=collection-item>" + "<span>NAME: </span>" + contactName + "</li>"; 
			elemStr += "<li class=collection-item>" + "<span>PHONE: </span>" + contactPhone + "</li>"; 
			elemStr += "<li class=collection-item>" + "<span>EMAIL: </span>" + contactEmail + "</li>"; 
			elemStr += "</ul>" + "</div>";
			
			document.getElementById('contactOutput').innerHTML ="";
			document.getElementById('contactOutput').innerHTML += elemStr;
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









