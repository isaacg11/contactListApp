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
	var myArr = [];
	var objectCollection = new Stamplay.Cobject('contact').Collection;
	objectCollection.equalTo("active_status", true).fetch().then(function() {
		for(var i = 0; i<objectCollection.length; i ++){
			var contactName = objectCollection.instance[i].instance.name;
			var contactPhone = objectCollection.instance[i].instance.phone;
			var contactEmail = objectCollection.instance[i].instance.email;
			var contactCustomerTag = objectCollection.instance[i].instance.customer;
			var contactTeamTag = objectCollection.instance[i].instance.team;
			var contactBusinessTag = objectCollection.instance[i].instance.business;
			var contactCustomTag = objectCollection.instance[i].instance.customTag;

			document.getElementById('numberOfPeople').innerHTML = "(" + objectCollection.length + ")";
			// console.log(objectCollection.instance[i].instance.business);

			if(contactCustomTag) { 
				myArr.push(contactCustomTag);
			}

			if(contactCustomerTag === true){
				contactCustomerTag = "Customer";
			}
			else{
				contactCustomerTag = "";
			}
			if(contactTeamTag === true){
				
				document.getElementById('numberOfTeam').innerHTML = "(" + contactTeamTag + ")";
				contactTeamTag = "Team";
			}
			else{
				contactTeamTag = "";
			}
			if(contactBusinessTag === true){
				
				document.getElementById('numberOfCompanies').innerHTML = "(" + contactBusinessTag + ")";
				contactBusinessTag = "Business";
			}
			else{
				contactBusinessTag = "";
			}
			if(contactCustomTag === undefined){
				contactCustomTag = "";
			}
			else{
				contactCustomTag = contactCustomTag;
			}


			var elemStrName = "<div id=contact>" + "<ul id=selection class=collection >";
			elemStrName += "<li class=collection-item>" + contactName + "</li>"; 
			elemStrName += "</ul>" + "</div>";

			var elemStrEmail = "<div id=contact>" + "<ul id=selection class=collection >";
			elemStrEmail += "<li class=collection-item>" + contactEmail + "</li>"; 
			elemStrEmail += "</ul>" + "</div>";
			
			var elemStrPhone = "<div id=contact>" + "<ul id=selection class=collection >";
			elemStrPhone += "<li class=collection-item>" + contactPhone + "</li>"; 
			elemStrPhone += "</ul>" + "</div>";

			var elemStrTag = "<div id=contact>" + "<ul id=selection class=collection >";
			elemStrTag += "<li class=collection-item>" + contactCustomerTag + contactTeamTag + contactBusinessTag + contactCustomTag + "</li>"; 
			elemStrTag += "</ul>" + "</div>";

			document.getElementById('contactOutputName').innerHTML += elemStrName;
			document.getElementById('contactOutputEmail').innerHTML += elemStrEmail;
			document.getElementById('contactOutputPhone').innerHTML += elemStrPhone;
			document.getElementById('contactOutputTag').innerHTML += elemStrTag;

		}

		var result = myArr.filter(function(item, pos) {
    		return myArr.indexOf(item) == pos;
		});

		for(j = 0; j < result.length; j ++){
			var elemStrCustomTag = 	"<div id=contact>" + 
										"<ul id=selection class=collection >";
			elemStrCustomTag += 			"<li class=collection-item>" + 
												"<a onclick = goToCustomTag() id=customHTML>" + result[j] +"</a>" + 
											"</li>"; 
			elemStrCustomTag += 		"</ul>" + 
									"</div>";
		}
	});
};


//GET ALL DATA
function getAll(){
	document.getElementById('contactOutputName').innerHTML = '';
	document.getElementById('contactOutputEmail').innerHTML = '';
	document.getElementById('contactOutputPhone').innerHTML = '';
	document.getElementById('contactOutputTag').innerHTML = '';
	var objectCollection = new Stamplay.Cobject('contact').Collection;
	objectCollection.equalTo("active_status", true).fetch().then(function() {
		for(var i = 0; i<objectCollection.length; i ++){
			var contactName = objectCollection.instance[i].instance.name;
			var contactPhone = objectCollection.instance[i].instance.phone;
			var contactEmail = objectCollection.instance[i].instance.email;
			var contactCustomerTag = objectCollection.instance[i].instance.customer;
			var contactTeamTag = objectCollection.instance[i].instance.team;
			var contactBusinessTag = objectCollection.instance[i].instance.business;
			var contactCustomTag = objectCollection.instance[i].instance.customTag;
			
			if(contactCustomerTag === true){
				contactCustomerTag = "Customer";
			}
			else{
				contactCustomerTag = "";
			}
			if(contactTeamTag === true){
				contactTeamTag = "Team";
			}
			else{
				contactTeamTag = "";
			}
			if(contactBusinessTag === true){
				contactBusinessTag = "Business";
			}
			else{
				contactBusinessTag = "";
			}
			if(contactCustomTag === undefined){
				contactCustomTag = "";
			}
			else{
				contactCustomTag = contactCustomTag;
			}

			var elemStrName = "<div id=contact>" + "<ul id=selection class=collection >";
			elemStrName += "<li class=collection-item>" + contactName + "</li>"; 
			elemStrName += "</ul>" + "</div>";

			var elemStrEmail = "<div id=contact>" + "<ul id=selection class=collection >";
			elemStrEmail += "<li class=collection-item>" + contactEmail + "</li>"; 
			elemStrEmail += "</ul>" + "</div>";
			
			var elemStrPhone = "<div id=contact>" + "<ul id=selection class=collection >";
			elemStrPhone += "<li class=collection-item>" + contactPhone + "</li>"; 
			elemStrPhone += "</ul>" + "</div>";

			var elemStrTag = "<div id=contact>" + "<ul id=selection class=collection >";
			elemStrTag += "<li class=collection-item>" + contactCustomerTag + contactTeamTag + contactBusinessTag + contactCustomTag + "</li>"; 
			elemStrTag += "</ul>" + "</div>";

			document.getElementById('contactOutputName').innerHTML += elemStrName;
			document.getElementById('contactOutputEmail').innerHTML += elemStrEmail;
			document.getElementById('contactOutputPhone').innerHTML += elemStrPhone;
			document.getElementById('contactOutputTag').innerHTML += elemStrTag;
		}
	});
}



//GET FRIENDS DATA
function getCustomers(){
	document.getElementById('contactOutputName').innerHTML = '';
	document.getElementById('contactOutputEmail').innerHTML = '';
	document.getElementById('contactOutputPhone').innerHTML = '';
	document.getElementById('contactOutputTag').innerHTML = '';

	var objectCollection = new Stamplay.Cobject('contact').Collection;
	objectCollection.equalTo("customer", true).fetch().then(function() {
		for(var i = 0; i<objectCollection.length; i ++){
			var contactName = objectCollection.instance[i].instance.name;
			var contactPhone = objectCollection.instance[i].instance.phone;
			var contactEmail = objectCollection.instance[i].instance.email;
			var contactCustomerTag = objectCollection.instance[i].instance.customer;
			if(contactCustomerTag === true){
				contactCustomerTag = "Customer";
			}
			else{
				contactCustomerTag = "";
			}

			var elemStrName = "<div id=contact>" + "<ul id=selection class=collection >";
			elemStrName += "<li class=collection-item>" + contactName + "</li>"; 
			elemStrName += "</ul>" + "</div>";

			var elemStrEmail = "<div id=contact>" + "<ul id=selection class=collection >";
			elemStrEmail += "<li class=collection-item>" + contactEmail + "</li>"; 
			elemStrEmail += "</ul>" + "</div>";
			
			var elemStrPhone = "<div id=contact>" + "<ul id=selection class=collection >";
			elemStrPhone += "<li class=collection-item>" + contactPhone + "</li>"; 
			elemStrPhone += "</ul>" + "</div>";

			var elemStrTag = "<div id=contact>" + "<ul id=selection class=collection >";
			elemStrTag += "<li class=collection-item>" + contactCustomerTag + "</li>"; 
			elemStrTag += "</ul>" + "</div>";

			document.getElementById('contactOutputName').innerHTML += elemStrName;
			document.getElementById('contactOutputEmail').innerHTML += elemStrEmail;
			document.getElementById('contactOutputPhone').innerHTML += elemStrPhone;
			document.getElementById('contactOutputTag').innerHTML += elemStrTag;

		}
	});
}

//GET FAMILY DATA
function getTeam(){
	document.getElementById('contactOutputName').innerHTML = '';
	document.getElementById('contactOutputEmail').innerHTML = '';
	document.getElementById('contactOutputPhone').innerHTML = '';
	document.getElementById('contactOutputTag').innerHTML = '';

	var objectCollection = new Stamplay.Cobject('contact').Collection;
	objectCollection.equalTo("team", true).fetch().then(function() {
		for(var i = 0; i<objectCollection.length; i ++){
			var contactName = objectCollection.instance[i].instance.name;
			var contactPhone = objectCollection.instance[i].instance.phone;
			var contactEmail = objectCollection.instance[i].instance.email;
			var contactTeamTag = objectCollection.instance[i].instance.team;
			
			if(contactTeamTag === true){
				contactTeamTag = "Team";
			}
			else{
				contactTeamTag = "";
			}
			
			var elemStrName = "<div id=contact>" + "<ul id=selection class=collection >";
			elemStrName += "<li class=collection-item>" + contactName + "</li>"; 
			elemStrName += "</ul>" + "</div>";

			var elemStrEmail = "<div id=contact>" + "<ul id=selection class=collection >";
			elemStrEmail += "<li class=collection-item>" + contactEmail + "</li>"; 
			elemStrEmail += "</ul>" + "</div>";
			
			var elemStrPhone = "<div id=contact>" + "<ul id=selection class=collection >";
			elemStrPhone += "<li class=collection-item>" + contactPhone + "</li>"; 
			elemStrPhone += "</ul>" + "</div>";

			var elemStrTag = "<div id=contact>" + "<ul id=selection class=collection >";
			elemStrTag += "<li class=collection-item>" + contactTeamTag + "</li>"; 
			elemStrTag += "</ul>" + "</div>";
			
			document.getElementById('contactOutputName').innerHTML += elemStrName;
			document.getElementById('contactOutputEmail').innerHTML += elemStrEmail;
			document.getElementById('contactOutputPhone').innerHTML += elemStrPhone;
			document.getElementById('contactOutputTag').innerHTML += elemStrTag;

		}
	});
}

//GET BUSINESS DATA
function getBusiness(){
	document.getElementById('contactOutputName').innerHTML = '';
	document.getElementById('contactOutputEmail').innerHTML = '';
	document.getElementById('contactOutputPhone').innerHTML = '';
	document.getElementById('contactOutputTag').innerHTML = '';

	var objectCollection = new Stamplay.Cobject('contact').Collection;
	objectCollection.equalTo("business", true).fetch().then(function() {
		for(var i = 0; i<objectCollection.length; i ++){
			var contactName = objectCollection.instance[i].instance.name;
			var contactPhone = objectCollection.instance[i].instance.phone;
			var contactEmail = objectCollection.instance[i].instance.email;
			var contactBusinessTag = objectCollection.instance[i].instance.business;
			
			if(contactBusinessTag === true){
				contactBusinessTag = "Business";
			}
			else{
				contactBusinessTag = "";
			}
			
			var elemStrName = "<div id=contact>" + "<ul id=selection class=collection >";
			elemStrName += "<li class=collection-item>" + contactName + "</li>"; 
			elemStrName += "</ul>" + "</div>";

			var elemStrEmail = "<div id=contact>" + "<ul id=selection class=collection >";
			elemStrEmail += "<li class=collection-item>" + contactEmail + "</li>"; 
			elemStrEmail += "</ul>" + "</div>";
			
			var elemStrPhone = "<div id=contact>" + "<ul id=selection class=collection >";
			elemStrPhone += "<li class=collection-item>" + contactPhone + "</li>"; 
			elemStrPhone += "</ul>" + "</div>";

			var elemStrTag = "<div id=contact>" + "<ul id=selection class=collection >";
			elemStrTag += "<li class=collection-item>" + contactBusinessTag + "</li>"; 
			elemStrTag += "</ul>" + "</div>";

			document.getElementById('contactOutputName').innerHTML += elemStrName;
			document.getElementById('contactOutputEmail').innerHTML += elemStrEmail;
			document.getElementById('contactOutputPhone').innerHTML += elemStrPhone;
			document.getElementById('contactOutputTag').innerHTML += elemStrTag;
		}
	});
}

//CUSTOM SEARCH
$("#search-input").on("submit", function(e) {
	e.preventDefault();
	document.getElementById('contactOutputName').innerHTML = '';
	document.getElementById('contactOutputEmail').innerHTML = '';
	document.getElementById('contactOutputPhone').innerHTML = '';
	document.getElementById('contactOutputTag').innerHTML = '';

	var select = document.getElementById("dropdown");
	var searchCategory = select.options[select.selectedIndex].value;
	var queryParam = document.getElementById('searchTag').value;

	var objectCollection = new Stamplay.Cobject('contact').Collection;
	objectCollection.equalTo(searchCategory, queryParam).fetch().then(function() {

		for(var i = 0; i<objectCollection.length; i ++){
			var contactName = objectCollection.instance[i].instance.name;
			var contactPhone = objectCollection.instance[i].instance.phone;
			var contactEmail = objectCollection.instance[i].instance.email;
			var contactCustomerTag = objectCollection.instance[i].instance.customer;
			var contactTeamTag = objectCollection.instance[i].instance.team;
			var contactBusinessTag = objectCollection.instance[i].instance.business;
			var contactCustomTag = objectCollection.instance[i].instance.customTag;


			if(contactCustomerTag === true){
				contactCustomerTag = "Customer";
			}
			else{
				contactCustomerTag = "";
			}
			if(contactTeamTag === true){
				contactTeamTag = "Team";
			}
			else{
				contactTeamTag = "";
			}
			if(contactBusinessTag === true){
				contactBusinessTag = "Business";
			}
			else{
				contactBusinessTag = "";
			}
			if(contactCustomTag === undefined){
				contactCustomTag = "";
			}
			else{
				contactCustomTag = contactCustomTag;
			}


			var elemStrName = "<div id=contact>" + "<ul id=selection class=collection >";
			elemStrName += "<li class=collection-item>" + contactName + "</li>"; 
			elemStrName += "</ul>" + "</div>";

			var elemStrEmail = "<div id=contact>" + "<ul id=selection class=collection >";
			elemStrEmail += "<li class=collection-item>" + contactEmail + "</li>"; 
			elemStrEmail += "</ul>" + "</div>";
			
			var elemStrPhone = "<div id=contact>" + "<ul id=selection class=collection >";
			elemStrPhone += "<li class=collection-item>" + contactPhone + "</li>"; 
			elemStrPhone += "</ul>" + "</div>";

			var elemStrTag = "<div id=contact>" + "<ul id=selection class=collection >";
			elemStrTag += "<li class=collection-item>" + contactCustomerTag + contactTeamTag + contactBusinessTag + contactCustomTag + "</li>"; 
			elemStrTag += "</ul>" + "</div>";

			document.getElementById('contactOutputName').innerHTML += elemStrName;
			document.getElementById('contactOutputEmail').innerHTML += elemStrEmail;
			document.getElementById('contactOutputPhone').innerHTML += elemStrPhone;
			document.getElementById('contactOutputTag').innerHTML += elemStrTag;
		}
	});
});

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
	var customTag = document.getElementById('customTag').value;
	var team = document.getElementById("teamBox").checked;
	var customer = document.getElementById("customerBox").checked;
	var business = document.getElementById("businessBox").checked;

	var objectInstance = new Stamplay.Cobject('contact').Model;
	objectInstance.set('name', name );
	objectInstance.set('phone', phone );
	objectInstance.set('email', email );
	objectInstance.set('team', team );
	objectInstance.set('customer', customer );
	objectInstance.set('business', business );
	objectInstance.set('customTag', customTag );
	objectInstance.set('active_status', true );
	objectInstance.save().then(function(){

		window.location = "home.html";
	});
}

//OPEN NAME FILTER
function openNameBoolean(){
	var radioBtn = document.getElementById("openName").checked;
	if(radioBtn === true){
		document.getElementById('hiddenNameIs').className = "";
		document.getElementById('hiddenNameIsNot').className = "";
		document.getElementById('nameSearchInput').className = "";
	}
	else{
		document.getElementById('hiddenNameIs').className = "hiddenNameBoolean";
		document.getElementById('hiddenNameIsNot').className = "hiddenNameBoolean";
		document.getElementById('nameSearchInput').className = "hiddenNameBoolean";
	}	
}

//SEARCH NAME FILTER
$("#nameSearchInput").on("submit", function(e) {
	e.preventDefault();
	document.getElementById('contactOutputName').innerHTML = '';
	document.getElementById('contactOutputEmail').innerHTML = '';
	document.getElementById('contactOutputPhone').innerHTML = '';
	document.getElementById('contactOutputTag').innerHTML = '';

	var nameIs = document.getElementById("nameIs").checked;
	var nameIsNot = document.getElementById("nameIs").checked;
	var searchParam = document.getElementById("searchName").value;
	var objectCollection = new Stamplay.Cobject('contact').Collection;

	if(nameIs === true){
		objectCollection.equalTo("name", searchParam).fetch().then(function() {
			for(var i = 0; i<objectCollection.length; i ++){
			var contactName = objectCollection.instance[i].instance.name;
			var contactPhone = objectCollection.instance[i].instance.phone;
			var contactEmail = objectCollection.instance[i].instance.email;
			var contactCustomerTag = objectCollection.instance[i].instance.customer;
			var contactTeamTag = objectCollection.instance[i].instance.team;
			var contactBusinessTag = objectCollection.instance[i].instance.business;
			var contactCustomTag = objectCollection.instance[i].instance.customTag;

			if(contactCustomerTag === true){
				contactCustomerTag = "Customer";
			}
			else{
				contactCustomerTag = "";
			}
			if(contactTeamTag === true){
				contactTeamTag = "Team";
			}
			else{
				contactTeamTag = "";
			}
			if(contactBusinessTag === true){
				contactBusinessTag = "Business";
			}
			else{
				contactBusinessTag = "";
			}
			if(contactCustomTag === undefined){
				contactCustomTag = "";
			}
			else{
				contactCustomTag = contactCustomTag;
			}

			var elemStrName = "<div id=contact>" + "<ul id=selection class=collection >";
			elemStrName += "<li class=collection-item>" + contactName + "</li>"; 
			elemStrName += "</ul>" + "</div>";

			var elemStrEmail = "<div id=contact>" + "<ul id=selection class=collection >";
			elemStrEmail += "<li class=collection-item>" + contactEmail + "</li>"; 
			elemStrEmail += "</ul>" + "</div>";
			
			var elemStrPhone = "<div id=contact>" + "<ul id=selection class=collection >";
			elemStrPhone += "<li class=collection-item>" + contactPhone + "</li>"; 
			elemStrPhone += "</ul>" + "</div>";

			var elemStrTag = "<div id=contact>" + "<ul id=selection class=collection >";
			elemStrTag += "<li class=collection-item>" + contactCustomerTag + contactTeamTag + contactBusinessTag + contactCustomTag + "</li>"; 
			elemStrTag += "</ul>" + "</div>";

			document.getElementById('contactOutputName').innerHTML += elemStrName;
			document.getElementById('contactOutputEmail').innerHTML += elemStrEmail;
			document.getElementById('contactOutputPhone').innerHTML += elemStrPhone;
			document.getElementById('contactOutputTag').innerHTML += elemStrTag;

			document.getElementById('searchName').value = "";
			var nameIs = document.getElementById("nameIs").checked = false;
			}
		});
	}
	else{
		var req = new XMLHttpRequest();
		req.open("GET", 'https://contactlistapp.stamplayapp.com/api/cobject/v1/contact?where={"name":{"$ne": "'+searchParam+'"}}', true);
		req.onload = function() {
			var data = JSON.parse(req.response);

			for(var i = 0; i<data.data.length; i ++){
			var contactName = data.data[i].name;
			var contactPhone = data.data[i].phone;
			var contactEmail = data.data[i].email;
			var contactCustomerTag = data.data[i].customer;
			var contactTeamTag = data.data[i].team;
			var contactBusinessTag = data.data[i].business;
			var contactCustomTag = data.data[i].customTag;

			if(contactCustomerTag === true){
				contactCustomerTag = "Customer";
			}
			else{
				contactCustomerTag = "";
			}
			if(contactTeamTag === true){
				contactTeamTag = "Team";
			}
			else{
				contactTeamTag = "";
			}
			if(contactBusinessTag === true){
				contactBusinessTag = "Business";
			}
			else{
				contactBusinessTag = "";
			}
			if(contactCustomTag === undefined){
				contactCustomTag = "";
			}
			else{
				contactCustomTag = contactCustomTag;
			}

			var elemStrName = "<div id=contact>" + "<ul id=selection class=collection >";
			elemStrName += "<li class=collection-item>" + contactName + "</li>"; 
			elemStrName += "</ul>" + "</div>";

			var elemStrEmail = "<div id=contact>" + "<ul id=selection class=collection >";
			elemStrEmail += "<li class=collection-item>" + contactEmail + "</li>"; 
			elemStrEmail += "</ul>" + "</div>";
			
			var elemStrPhone = "<div id=contact>" + "<ul id=selection class=collection >";
			elemStrPhone += "<li class=collection-item>" + contactPhone + "</li>"; 
			elemStrPhone += "</ul>" + "</div>";

			var elemStrTag = "<div id=contact>" + "<ul id=selection class=collection >";
			elemStrTag += "<li class=collection-item>" + contactCustomerTag + contactTeamTag + contactBusinessTag + contactCustomTag + "</li>"; 
			elemStrTag += "</ul>" + "</div>";

			document.getElementById('contactOutputName').innerHTML += elemStrName;
			document.getElementById('contactOutputEmail').innerHTML += elemStrEmail;
			document.getElementById('contactOutputPhone').innerHTML += elemStrPhone;
			document.getElementById('contactOutputTag').innerHTML += elemStrTag;

			document.getElementById('searchName').value = "";
			var nameIs = document.getElementById("nameIsNot").checked = false;
			}
		};
		req.send();
	}
});

//OPEN EMAIL FILTER
function openEmailBoolean(){
	var radioBtn = document.getElementById("openEmail").checked;
	if(radioBtn === true){
		document.getElementById('hiddenEmailIs').className = "";
		document.getElementById('hiddenEmailIsNot').className = "";
		document.getElementById('emailSearchInput').className = "";
	}
	else{
		document.getElementById('hiddenEmailIs').className = "hiddenEmailBoolean";
		document.getElementById('hiddenEmailIsNot').className = "hiddenEmailBoolean";
		document.getElementById('emailSearchInput').className = "hiddenEmailBoolean";
	}	
}


//SEARCH EMAIL FILTER
$("#emailSearchInput").on("submit", function(e) {
	e.preventDefault();
	document.getElementById('contactOutputName').innerHTML = '';
	document.getElementById('contactOutputEmail').innerHTML = '';
	document.getElementById('contactOutputPhone').innerHTML = '';
	document.getElementById('contactOutputTag').innerHTML = '';

	var emailIs = document.getElementById("emailIs").checked;
	var emailIsNot = document.getElementById("emailIs").checked;
	var searchParam = document.getElementById("searchEmail").value;
	var objectCollection = new Stamplay.Cobject('contact').Collection;

	if(emailIs === true){
		objectCollection.equalTo("email", searchParam).fetch().then(function() {
			for(var i = 0; i<objectCollection.length; i ++){
			var contactName = objectCollection.instance[i].instance.name;
			var contactPhone = objectCollection.instance[i].instance.phone;
			var contactEmail = objectCollection.instance[i].instance.email;
			var contactCustomerTag = objectCollection.instance[i].instance.customer;
			var contactTeamTag = objectCollection.instance[i].instance.team;
			var contactBusinessTag = objectCollection.instance[i].instance.business;
			var contactCustomTag = objectCollection.instance[i].instance.customTag;

			if(contactCustomerTag === true){
				contactCustomerTag = "Customer";
			}
			else{
				contactCustomerTag = "";
			}
			if(contactTeamTag === true){
				contactTeamTag = "Team";
			}
			else{
				contactTeamTag = "";
			}
			if(contactBusinessTag === true){
				contactBusinessTag = "Business";
			}
			else{
				contactBusinessTag = "";
			}
			if(contactCustomTag === undefined){
				contactCustomTag = "";
			}
			else{
				contactCustomTag = contactCustomTag;
			}

			var elemStrName = "<div id=contact>" + "<ul id=selection class=collection >";
			elemStrName += "<li class=collection-item>" + contactName + "</li>"; 
			elemStrName += "</ul>" + "</div>";

			var elemStrEmail = "<div id=contact>" + "<ul id=selection class=collection >";
			elemStrEmail += "<li class=collection-item>" + contactEmail + "</li>"; 
			elemStrEmail += "</ul>" + "</div>";
			
			var elemStrPhone = "<div id=contact>" + "<ul id=selection class=collection >";
			elemStrPhone += "<li class=collection-item>" + contactPhone + "</li>"; 
			elemStrPhone += "</ul>" + "</div>";

			var elemStrTag = "<div id=contact>" + "<ul id=selection class=collection >";
			elemStrTag += "<li class=collection-item>" + contactCustomerTag + contactTeamTag + contactBusinessTag + contactCustomTag + "</li>"; 
			elemStrTag += "</ul>" + "</div>";

			document.getElementById('contactOutputName').innerHTML += elemStrName;
			document.getElementById('contactOutputEmail').innerHTML += elemStrEmail;
			document.getElementById('contactOutputPhone').innerHTML += elemStrPhone;
			document.getElementById('contactOutputTag').innerHTML += elemStrTag;

			document.getElementById('searchEmail').value = "";
			var nameIs = document.getElementById("emailIs").checked = false;
			}
		});
	}
	else{
		var req = new XMLHttpRequest();
		req.open("GET", 'https://contactlistapp.stamplayapp.com/api/cobject/v1/contact?where={"email":{"$ne": "'+searchParam+'"}}', true);
		req.onload = function() {
			var data = JSON.parse(req.response);

			for(var i = 0; i<data.data.length; i ++){
			var contactName = data.data[i].name;
			var contactPhone = data.data[i].phone;
			var contactEmail = data.data[i].email;
			var contactCustomerTag = data.data[i].customer;
			var contactTeamTag = data.data[i].team;
			var contactBusinessTag = data.data[i].business;
			var contactCustomTag = data.data[i].customTag;

			if(contactCustomerTag === true){
				contactCustomerTag = "Customer";
			}
			else{
				contactCustomerTag = "";
			}
			if(contactTeamTag === true){
				contactTeamTag = "Team";
			}
			else{
				contactTeamTag = "";
			}
			if(contactBusinessTag === true){
				contactBusinessTag = "Business";
			}
			else{
				contactBusinessTag = "";
			}
			if(contactCustomTag === undefined){
				contactCustomTag = "";
			}
			else{
				contactCustomTag = contactCustomTag;
			}

			var elemStrName = "<div id=contact>" + "<ul id=selection class=collection >";
			elemStrName += "<li class=collection-item>" + contactName + "</li>"; 
			elemStrName += "</ul>" + "</div>";

			var elemStrEmail = "<div id=contact>" + "<ul id=selection class=collection >";
			elemStrEmail += "<li class=collection-item>" + contactEmail + "</li>"; 
			elemStrEmail += "</ul>" + "</div>";
			
			var elemStrPhone = "<div id=contact>" + "<ul id=selection class=collection >";
			elemStrPhone += "<li class=collection-item>" + contactPhone + "</li>"; 
			elemStrPhone += "</ul>" + "</div>";

			var elemStrTag = "<div id=contact>" + "<ul id=selection class=collection >";
			elemStrTag += "<li class=collection-item>" + contactCustomerTag + contactTeamTag + contactBusinessTag + contactCustomTag + "</li>"; 
			elemStrTag += "</ul>" + "</div>";

			document.getElementById('contactOutputName').innerHTML += elemStrName;
			document.getElementById('contactOutputEmail').innerHTML += elemStrEmail;
			document.getElementById('contactOutputPhone').innerHTML += elemStrPhone;
			document.getElementById('contactOutputTag').innerHTML += elemStrTag;

			document.getElementById('searchEmail').value = "";
			document.getElementById("emailIsNot").checked = false;
			}
		};
		req.send();
	}
});






