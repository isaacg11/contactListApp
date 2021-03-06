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

	var myTeamCounter = 0;
	var myBusinessCounter = 0;
	var selectionArr = [];

	var objectCollection = new Stamplay.Cobject('contact').Collection;
	objectCollection.equalTo("active_status", true).fetch().then(function() {

		for(var i = 0; i<objectCollection.length; i ++){
			selectionArr.push(objectCollection.instance[i].instance.name);
			selectOutput = document.getElementById("userSelection");

			for (var j=0;j<selectionArr.length;j++) {
			option = new Option(selectionArr[j],selectionArr[j]);
			selectOutput.options[j] = option;
			}

			var contactName = objectCollection.instance[i].instance.name;
			var contactPhone = objectCollection.instance[i].instance.phone;
			var contactEmail = objectCollection.instance[i].instance.email;
			var contactCustomerTag = objectCollection.instance[i].instance.customer;
			var contactTeamTag = objectCollection.instance[i].instance.team;
			var contactBusinessTag = objectCollection.instance[i].instance.business;
			var contactCustomTag = objectCollection.instance[i].instance.customTag;
			var contactId = objectCollection.instance[i].instance.id;

			document.getElementById('numberOfPeople').innerHTML = "(" + objectCollection.length + ")";
			document.getElementById('searchFractionOutput').innerHTML = "<i class='fa fa-smile-o'></i>" + " " + "<b>" + objectCollection.length + " / " + objectCollection.length + "</b>" + " " + "users";


			if(contactCustomerTag === true){
				contactCustomerTag = "Customer";
			}
			else{
				contactCustomerTag = "";
			}
			if(contactTeamTag === true){
				myTeamCounter += 1;
				document.getElementById('numberOfTeam').innerHTML = "(" + myTeamCounter + ")";
				contactTeamTag = "Team";
			}
			else{
				contactTeamTag = "";
			}
			if(contactBusinessTag === true){
				myBusinessCounter += 1;
				document.getElementById('numberOfCompanies').innerHTML = "(" + myBusinessCounter + ")";
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

			var elemStrId = "<div id=contact>" + "<ul id=selection class=collection >";
			elemStrId += "<li class=collection-item>" + contactId + "</li>"; 
			elemStrId += "</ul>" + "</div>";


			document.getElementById('contactOutputName').innerHTML += elemStrName;
			document.getElementById('contactOutputEmail').innerHTML += elemStrEmail;
			document.getElementById('contactOutputPhone').innerHTML += elemStrPhone;
			document.getElementById('contactOutputTag').innerHTML += elemStrTag;
			document.getElementById('contactOutputId').innerHTML += elemStrId;
			// document.getElementById('selectUser').innerHTML += elemStrSelectUser;
		}
	});
};


//GET ALL DATA

function getAll(){
	document.getElementById('contactOutputName').innerHTML = '';
	document.getElementById('contactOutputEmail').innerHTML = '';
	document.getElementById('contactOutputPhone').innerHTML = '';
	document.getElementById('contactOutputTag').innerHTML = '';
	document.getElementById('contactOutputId').innerHTML = '';

	var objectCollection = new Stamplay.Cobject('contact').Collection;
	objectCollection.equalTo("active_status", true).fetch().then(function() {
		var totalPeople = objectCollection.instance.length;
		for(var i = 0; i<objectCollection.length; i ++){
			var contactName = objectCollection.instance[i].instance.name;
			var contactPhone = objectCollection.instance[i].instance.phone;
			var contactEmail = objectCollection.instance[i].instance.email;
			var contactCustomerTag = objectCollection.instance[i].instance.customer;
			var contactTeamTag = objectCollection.instance[i].instance.team;
			var contactBusinessTag = objectCollection.instance[i].instance.business;
			var contactCustomTag = objectCollection.instance[i].instance.customTag;
			var contactId = objectCollection.instance[i].instance.id;

			document.getElementById('searchFractionOutput').innerHTML = "<i class='fa fa-smile-o'></i>" + " " + "<b>" + totalPeople + " / " + totalPeople + "</b>" + " " + "users";

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

			var elemStrId = "<div id=contact>" + "<ul id=selection class=collection >";
			elemStrId += "<li class=collection-item>" + contactId + "</li>"; 
			elemStrId += "</ul>" + "</div>";

			document.getElementById('contactOutputName').innerHTML += elemStrName;
			document.getElementById('contactOutputEmail').innerHTML += elemStrEmail;
			document.getElementById('contactOutputPhone').innerHTML += elemStrPhone;
			document.getElementById('contactOutputTag').innerHTML += elemStrTag;
			document.getElementById('contactOutputId').innerHTML += elemStrId;

		}
	});
}

//GET TEAM DATA
function getTeam(){
	document.getElementById('contactOutputName').innerHTML = '';
	document.getElementById('contactOutputEmail').innerHTML = '';
	document.getElementById('contactOutputPhone').innerHTML = '';
	document.getElementById('contactOutputTag').innerHTML = '';
	document.getElementById('contactOutputId').innerHTML = '';

	var myTeamCounter = 0;
	var objectCollection = new Stamplay.Cobject('contact').Collection;
	objectCollection.equalTo("active_status", true).fetch().then(function() {
		var totalPeople = objectCollection.instance.length;
		objectCollection.equalTo("team", true).fetch().then(function() {
			for(var i = 0; i<objectCollection.length; i ++){
				var contactName = objectCollection.instance[i].instance.name;
				var contactPhone = objectCollection.instance[i].instance.phone;
				var contactEmail = objectCollection.instance[i].instance.email;
				var contactTeamTag = objectCollection.instance[i].instance.team;
				var contactId = objectCollection.instance[i].instance.id;
			
				if(contactTeamTag === true){
					myTeamCounter += 1;
					document.getElementById('searchFractionOutput').innerHTML = "<i class='fa fa-smile-o'></i>" + " " + "<b>" + myTeamCounter + " / " + totalPeople + "</b>" + " " + "users";
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

				var elemStrId = "<div id=contact>" + "<ul id=selection class=collection >";
				elemStrId += "<li class=collection-item>" + contactId + "</li>"; 
				elemStrId += "</ul>" + "</div>";
			
				document.getElementById('contactOutputName').innerHTML += elemStrName;
				document.getElementById('contactOutputEmail').innerHTML += elemStrEmail;
				document.getElementById('contactOutputPhone').innerHTML += elemStrPhone;
				document.getElementById('contactOutputTag').innerHTML += elemStrTag;
				document.getElementById('contactOutputId').innerHTML += elemStrId;
			}
		});
	});
}

//GET BUSINESS DATA
function getBusiness(){
	document.getElementById('contactOutputName').innerHTML = '';
	document.getElementById('contactOutputEmail').innerHTML = '';
	document.getElementById('contactOutputPhone').innerHTML = '';
	document.getElementById('contactOutputTag').innerHTML = '';
	document.getElementById('contactOutputId').innerHTML = '';

	var myTeamCounter = 0;
	var objectCollection = new Stamplay.Cobject('contact').Collection;
	objectCollection.equalTo("active_status", true).fetch().then(function() {
	var totalPeople = objectCollection.instance.length;

		objectCollection.equalTo("business", true).fetch().then(function() {
			for(var i = 0; i<objectCollection.length; i ++){
				var contactName = objectCollection.instance[i].instance.name;
				var contactPhone = objectCollection.instance[i].instance.phone;
				var contactEmail = objectCollection.instance[i].instance.email;
				var contactBusinessTag = objectCollection.instance[i].instance.business;
				var contactId = objectCollection.instance[i].instance.id;
			
				if(contactBusinessTag === true){
					myTeamCounter += 1;
					document.getElementById('searchFractionOutput').innerHTML = "<i class='fa fa-smile-o'></i>" + " " + "<b>" + myTeamCounter + " / " + totalPeople + "</b>" + " " + "users";
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

				var elemStrId = "<div id=contact>" + "<ul id=selection class=collection >";
				elemStrId += "<li class=collection-item>" + contactId + "</li>"; 
				elemStrId += "</ul>" + "</div>";

				document.getElementById('contactOutputName').innerHTML += elemStrName;
				document.getElementById('contactOutputEmail').innerHTML += elemStrEmail;
				document.getElementById('contactOutputPhone').innerHTML += elemStrPhone;
				document.getElementById('contactOutputTag').innerHTML += elemStrTag;
				document.getElementById('contactOutputId').innerHTML += elemStrId;
			}
		});
	});
}

//NEW CONTACT MODAL
 $(document).ready(function(){
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

//EDIT CONTACT 
function openNameEdit(){
	var checked = document.getElementById('nameBox').checked;
	if(checked === true){
		document.getElementById("nameEdit").className = "";
	}
	else{
		document.getElementById("nameEdit").className = "hiddenNameEdit";
	}
}
function openPhoneEdit(){
	var checked = document.getElementById('phoneBox').checked;
	if(checked === true){
		document.getElementById("phoneEdit").className = "";
	}
	else{
		document.getElementById("phoneEdit").className = "hiddenPhoneEdit";
	}
}
function openEmailEdit(){
	var checked = document.getElementById('emailBox').checked;
	if(checked === true){
		document.getElementById("emailEdit").className = "";
	}
	else{
		document.getElementById("emailEdit").className = "hiddenEmailEdit";
	}
}
function openTagEdit(){
	var checked = document.getElementById('tagBox').checked;
	if(checked === true){
		document.getElementById("tagEdit").className = "";
	}
	else{
		document.getElementById("tagEdit").className = "hiddenTagEdit";
	}
}
//CUSTOM SEARCH
$("#search-input").on("submit", function(e) {
	e.preventDefault();
	document.getElementById('contactOutputName').innerHTML = '';
	document.getElementById('contactOutputEmail').innerHTML = '';
	document.getElementById('contactOutputPhone').innerHTML = '';
	document.getElementById('contactOutputTag').innerHTML = '';
	document.getElementById('contactOutputId').innerHTML = '';

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
			var contactId = objectCollection.instance[i].instance.id;


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

			var elemStrId = "<div id=contact>" + "<ul id=selection class=collection >";
			elemStrId += "<li class=collection-item>" + contactId + "</li>"; 
			elemStrId += "</ul>" + "</div>";

			document.getElementById('contactOutputName').innerHTML += elemStrName;
			document.getElementById('contactOutputEmail').innerHTML += elemStrEmail;
			document.getElementById('contactOutputPhone').innerHTML += elemStrPhone;
			document.getElementById('contactOutputTag').innerHTML += elemStrTag;
			document.getElementById('contactOutputId').innerHTML += elemStrId;

			document.getElementById('searchTag').value = '';

		}
	});
});

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
	document.getElementById('contactOutputId').innerHTML = '';

	var nameIs = document.getElementById("nameIs").checked;
	var nameIsNot = document.getElementById("nameIs").checked;
	var searchParam = document.getElementById("searchName").value;
	var objectCollection = new Stamplay.Cobject('contact').Collection;

	if(nameIs === true){
		objectCollection.equalTo("active_status", true).fetch().then(function() {
		var totalPeople = objectCollection.instance.length;

		objectCollection.equalTo("name", searchParam).fetch().then(function() {
		var totalMatchingNames = objectCollection.instance.length;

		document.getElementById('searchFractionOutput').innerHTML = "<i class='fa fa-smile-o'></i>" + " " + "<b>" + totalMatchingNames + " / " + totalPeople + "</b>" + " " + "users";

			for(var i = 0; i<objectCollection.length; i ++){
			var contactName = objectCollection.instance[i].instance.name;
			var contactPhone = objectCollection.instance[i].instance.phone;
			var contactEmail = objectCollection.instance[i].instance.email;
			var contactCustomerTag = objectCollection.instance[i].instance.customer;
			var contactTeamTag = objectCollection.instance[i].instance.team;
			var contactBusinessTag = objectCollection.instance[i].instance.business;
			var contactCustomTag = objectCollection.instance[i].instance.customTag;
			var contactId = objectCollection.instance[i].instance.id;

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

			var elemStrId = "<div id=contact>" + "<ul id=selection class=collection >";
			elemStrId += "<li class=collection-item>" + contactId + "</li>"; 
			elemStrId += "</ul>" + "</div>";

			document.getElementById('contactOutputName').innerHTML += elemStrName;
			document.getElementById('contactOutputEmail').innerHTML += elemStrEmail;
			document.getElementById('contactOutputPhone').innerHTML += elemStrPhone;
			document.getElementById('contactOutputTag').innerHTML += elemStrTag;
			document.getElementById('contactOutputId').innerHTML += elemStrId;

			document.getElementById('searchName').value = "";
			var nameIs = document.getElementById("nameIs").checked = false;
			}
		});
		});
	}
	else{
		objectCollection.equalTo("active_status", true).fetch().then(function() {
		var totalPeople = objectCollection.instance.length;

		var req = new XMLHttpRequest();
		req.open("GET", 'https://contactlistapp.stamplayapp.com/api/cobject/v1/contact?where={"name":{"$ne": "'+searchParam+'"}}', true);
		req.onload = function() {
			var data = JSON.parse(req.response);
			var totalMatchingNames = data.data.length;

			document.getElementById('searchFractionOutput').innerHTML = "<i class='fa fa-smile-o'></i>" + " " + "<b>" + totalMatchingNames + " / " + totalPeople + "</b>" + " " + "users";

			for(var i = 0; i<data.data.length; i ++){
			var contactName = data.data[i].name;
			var contactPhone = data.data[i].phone;
			var contactEmail = data.data[i].email;
			var contactCustomerTag = data.data[i].customer;
			var contactTeamTag = data.data[i].team;
			var contactBusinessTag = data.data[i].business;
			var contactCustomTag = data.data[i].customTag;
			var contactId = data.data[i].id;

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

			var elemStrId = "<div id=contact>" + "<ul id=selection class=collection >";
			elemStrId += "<li class=collection-item>" + contactId + "</li>"; 
			elemStrId += "</ul>" + "</div>";

			document.getElementById('contactOutputName').innerHTML += elemStrName;
			document.getElementById('contactOutputEmail').innerHTML += elemStrEmail;
			document.getElementById('contactOutputPhone').innerHTML += elemStrPhone;
			document.getElementById('contactOutputTag').innerHTML += elemStrTag;
			document.getElementById('contactOutputId').innerHTML += elemStrId;

			document.getElementById('searchName').value = "";
			var nameIs = document.getElementById("nameIsNot").checked = false;
			}
		};
		req.send();
	});
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
	document.getElementById('contactOutputId').innerHTML = '';

	var emailIs = document.getElementById("emailIs").checked;
	var emailIsNot = document.getElementById("emailIs").checked;
	var searchParam = document.getElementById("searchEmail").value;
	var objectCollection = new Stamplay.Cobject('contact').Collection;

	if(emailIs === true){
		objectCollection.equalTo("active_status", true).fetch().then(function() {
		var totalPeople = objectCollection.instance.length;

		objectCollection.equalTo("email", searchParam).fetch().then(function() {
		var totalMatchingEmails = objectCollection.instance.length;

		document.getElementById('searchFractionOutput').innerHTML = "<i class='fa fa-smile-o'></i>" + " " + "<b>" + totalMatchingEmails + " / " + totalPeople + "</b>" + " " + "users";

			for(var i = 0; i<objectCollection.length; i ++){
			var contactName = objectCollection.instance[i].instance.name;
			var contactPhone = objectCollection.instance[i].instance.phone;
			var contactEmail = objectCollection.instance[i].instance.email;
			var contactCustomerTag = objectCollection.instance[i].instance.customer;
			var contactTeamTag = objectCollection.instance[i].instance.team;
			var contactBusinessTag = objectCollection.instance[i].instance.business;
			var contactCustomTag = objectCollection.instance[i].instance.customTag;
			var contactId = objectCollection.instance[i].instance.id;

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

			var elemStrId = "<div id=contact>" + "<ul id=selection class=collection >";
			elemStrId += "<li class=collection-item>" + contactId + "</li>"; 
			elemStrId += "</ul>" + "</div>";

			document.getElementById('contactOutputName').innerHTML += elemStrName;
			document.getElementById('contactOutputEmail').innerHTML += elemStrEmail;
			document.getElementById('contactOutputPhone').innerHTML += elemStrPhone;
			document.getElementById('contactOutputTag').innerHTML += elemStrTag;
			document.getElementById('contactOutputId').innerHTML += elemStrId;

			document.getElementById('searchEmail').value = "";
			var nameIs = document.getElementById("emailIs").checked = false;
			}
		});
		});
	}
	else{
		objectCollection.equalTo("active_status", true).fetch().then(function() {
		var totalPeople = objectCollection.instance.length;

		var req = new XMLHttpRequest();
		req.open("GET", 'https://contactlistapp.stamplayapp.com/api/cobject/v1/contact?where={"email":{"$ne": "'+searchParam+'"}}', true);
		req.onload = function() {
			var data = JSON.parse(req.response);
			var totalMatchingEmails = data.data.length;

			document.getElementById('searchFractionOutput').innerHTML = "<i class='fa fa-smile-o'></i>" + " " + "<b>" + totalMatchingEmails + " / " + totalPeople + "</b>" + " " + "users";

			for(var i = 0; i<data.data.length; i ++){
			var contactName = data.data[i].name;
			var contactPhone = data.data[i].phone;
			var contactEmail = data.data[i].email;
			var contactCustomerTag = data.data[i].customer;
			var contactTeamTag = data.data[i].team;
			var contactBusinessTag = data.data[i].business;
			var contactCustomTag = data.data[i].customTag;
			var contactId = data.data[i].id;

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

			var elemStrId = "<div id=contact>" + "<ul id=selection class=collection >";
			elemStrId += "<li class=collection-item>" + contactId + "</li>"; 
			elemStrId += "</ul>" + "</div>";

			document.getElementById('contactOutputName').innerHTML += elemStrName;
			document.getElementById('contactOutputEmail').innerHTML += elemStrEmail;
			document.getElementById('contactOutputPhone').innerHTML += elemStrPhone;
			document.getElementById('contactOutputTag').innerHTML += elemStrTag;
			document.getElementById('contactOutputId').innerHTML += elemStrId;

			document.getElementById('searchEmail').value = "";
			document.getElementById("emailIsNot").checked = false;
			}
		};
		req.send();
	});
	}
});

//OPEN TAG FILTER
function openTagBoolean(){
	var radioBtn = document.getElementById("openTag").checked;
	if(radioBtn === true){
		document.getElementById('hiddenTagIs').className = "";
		document.getElementById('hiddenTagIsNot').className = "";
		document.getElementById('tagSearchInput').className = "";
	}
	else{
		document.getElementById('hiddenTagIs').className = "hiddenTagBoolean";
		document.getElementById('hiddenTagIsNot').className = "hiddenTagBoolean";
		document.getElementById('tagSearchInput').className = "hiddenTagBoolean";
	}	
}

//SEARCH TAG FILTER
$("#tagSearchInput").on("submit", function(e) {
	e.preventDefault();
	document.getElementById('contactOutputName').innerHTML = '';
	document.getElementById('contactOutputEmail').innerHTML = '';
	document.getElementById('contactOutputPhone').innerHTML = '';
	document.getElementById('contactOutputTag').innerHTML = '';
	document.getElementById('contactOutputId').innerHTML = '';

	var tagIs = document.getElementById("tagIs").checked;
	var tagIsNot = document.getElementById("tagIsNot").checked;
	var searchParam = document.getElementById("searchByTag").value;
	var objectCollection = new Stamplay.Cobject('contact').Collection;

	if(tagIs === true){
		objectCollection.equalTo("active_status", true).fetch().then(function() {
		var totalPeople = objectCollection.instance.length;

		objectCollection.equalTo("customTag", searchParam).fetch().then(function() {
		var totalMatchingTags = objectCollection.instance.length;

		document.getElementById('searchFractionOutput').innerHTML = "<i class='fa fa-smile-o'></i>" + " " + "<b>" + totalMatchingTags + " / " + totalPeople + "</b>" + " " + "users";

			for(var i = 0; i<objectCollection.length; i ++){
			var contactName = objectCollection.instance[i].instance.name;
			var contactPhone = objectCollection.instance[i].instance.phone;
			var contactEmail = objectCollection.instance[i].instance.email;
			var contactCustomerTag = objectCollection.instance[i].instance.customer;
			var contactTeamTag = objectCollection.instance[i].instance.team;
			var contactBusinessTag = objectCollection.instance[i].instance.business;
			var contactCustomTag = objectCollection.instance[i].instance.customTag;
			var contactId = objectCollection.instance[i].instance.id;

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

			var elemStrId = "<div id=contact>" + "<ul id=selection class=collection >";
			elemStrId += "<li class=collection-item>" + contactId + "</li>"; 
			elemStrId += "</ul>" + "</div>";

			document.getElementById('contactOutputName').innerHTML += elemStrName;
			document.getElementById('contactOutputEmail').innerHTML += elemStrEmail;
			document.getElementById('contactOutputPhone').innerHTML += elemStrPhone;
			document.getElementById('contactOutputTag').innerHTML += elemStrTag;
			document.getElementById('contactOutputId').innerHTML += elemStrId;

			var tagIs = document.getElementById("tagIs").checked = false;
			document.getElementById('searchTag').value = "";
			}
		});
		});
	}
	else{
		objectCollection.equalTo("active_status", true).fetch().then(function() {
		var totalPeople = objectCollection.instance.length;

		var req = new XMLHttpRequest();
		req.open("GET", 'https://contactlistapp.stamplayapp.com/api/cobject/v1/contact?where={"customTag":{"$ne": "'+searchParam+'"}}');
		req.onload = function() {
			var data = JSON.parse(req.response);
			var totalMatchingTags = data.data.length;

			document.getElementById('searchFractionOutput').innerHTML = "<i class='fa fa-smile-o'></i>" + " " + "<b>" + totalMatchingTags + " / " + totalPeople + "</b>" + " " + "users";

			for(var i = 0; i<data.data.length; i ++){
			var contactName = data.data[i].name;
			var contactPhone = data.data[i].phone;
			var contactEmail = data.data[i].email;
			var contactCustomerTag = data.data[i].customer;
			var contactTeamTag = data.data[i].team;
			var contactBusinessTag = data.data[i].business;
			var contactCustomTag = data.data[i].customTag;
			var contactId = data.data[i].id;

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

			var elemStrId = "<div id=contact>" + "<ul id=selection class=collection >";
			elemStrId += "<li class=collection-item>" + contactId + "</li>"; 
			elemStrId += "</ul>" + "</div>";

			document.getElementById('contactOutputName').innerHTML += elemStrName;
			document.getElementById('contactOutputEmail').innerHTML += elemStrEmail;
			document.getElementById('contactOutputPhone').innerHTML += elemStrPhone;
			document.getElementById('contactOutputTag').innerHTML += elemStrTag;
			document.getElementById('contactOutputId').innerHTML += elemStrId;

			document.getElementById('searchTag').value = "";
			document.getElementById("tagIsNot").checked = false;
			}
		};
		req.send();
	});
	}
});

//OPEN ID FILTER
function openIdBoolean(){
	var radioBtn = document.getElementById("openId").checked;
	if(radioBtn === true){
		document.getElementById('hiddenIdIs').className = "";
		document.getElementById('hiddenIdIsNot').className = "";
		document.getElementById('IdSearchInput').className = "";
	}
	else{
		document.getElementById('hiddenIdIs').className = "hiddenIdBoolean";
		document.getElementById('hiddenIdIsNot').className = "hiddenIdBoolean";
		document.getElementById('IdSearchInput').className = "hiddenIdBoolean";
	}	
}

//SEARCH ID FILTER
$("#IdSearchInput").on("submit", function(e) {
	e.preventDefault();
	document.getElementById('contactOutputName').innerHTML = '';
	document.getElementById('contactOutputEmail').innerHTML = '';
	document.getElementById('contactOutputPhone').innerHTML = '';
	document.getElementById('contactOutputTag').innerHTML = '';
	document.getElementById('contactOutputId').innerHTML = '';

	var IdIs = document.getElementById("IdIs").checked;
	var IdIsNot = document.getElementById("IdIsNot").checked;
	var searchParam = document.getElementById("searchById").value;
	var objectCollection = new Stamplay.Cobject('contact').Collection;

	if(IdIs === true){
		objectCollection.equalTo("active_status", true).fetch().then(function() {
		var totalPeople = objectCollection.instance.length;

		objectCollection.equalTo("_id", searchParam).fetch().then(function() {
		var totalMatchingIds = objectCollection.instance.length;

		document.getElementById('searchFractionOutput').innerHTML = "<i class='fa fa-smile-o'></i>" + " " + "<b>" + totalMatchingIds + " / " + totalPeople + "</b>" + " " + "users";

			for(var i = 0; i<objectCollection.length; i ++){
			var contactName = objectCollection.instance[i].instance.name;
			var contactPhone = objectCollection.instance[i].instance.phone;
			var contactEmail = objectCollection.instance[i].instance.email;
			var contactCustomerTag = objectCollection.instance[i].instance.customer;
			var contactTeamTag = objectCollection.instance[i].instance.team;
			var contactBusinessTag = objectCollection.instance[i].instance.business;
			var contactCustomTag = objectCollection.instance[i].instance.customTag;
			var contactId = objectCollection.instance[i].instance.id;

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

			var elemStrId = "<div id=contact>" + "<ul id=selection class=collection >";
			elemStrId += "<li class=collection-item>" + contactId + "</li>"; 
			elemStrId += "</ul>" + "</div>";

			document.getElementById('contactOutputName').innerHTML += elemStrName;
			document.getElementById('contactOutputEmail').innerHTML += elemStrEmail;
			document.getElementById('contactOutputPhone').innerHTML += elemStrPhone;
			document.getElementById('contactOutputTag').innerHTML += elemStrTag;
			document.getElementById('contactOutputId').innerHTML += elemStrId;

			document.getElementById("IdIs").checked = false;
			document.getElementById('searchById').value = "";
			}
		});
		});
	}
	else{
			var query = new Stamplay.Query('cobject','contact');
			console.log(searchParam);
			console.log(query);
			query.notEqualTo('_id', searchParam);
			query.exec().then(function(response){

				console.log(response);
			});

			for(var i = 0; i<data.data.length; i ++){
				var contactName = data.data[i].name;
				var contactPhone = data.data[i].phone;
				var contactEmail = data.data[i].email;
				var contactCustomerTag = data.data[i].customer;
				var contactTeamTag = data.data[i].team;
				var contactBusinessTag = data.data[i].business;
				var contactCustomTag = data.data[i].customTag;
				var contactId = data.data[i].id;

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

				var elemStrId = "<div id=contact>" + "<ul id=selection class=collection >";
				elemStrId += "<li class=collection-item>" + contactId + "</li>"; 
				elemStrId += "</ul>" + "</div>";

				document.getElementById('contactOutputName').innerHTML += elemStrName;
				document.getElementById('contactOutputEmail').innerHTML += elemStrEmail;
				document.getElementById('contactOutputPhone').innerHTML += elemStrPhone;
				document.getElementById('contactOutputTag').innerHTML += elemStrTag;
				document.getElementById('contactOutputId').innerHTML += elemStrId;

				document.getElementById('searchById').value = "";
				document.getElementById("IdIsNot").checked = false;
			}
		}
	});

//OPEN SIGN UP FILTER
function openSignUpBoolean(){
	var radioBtn = document.getElementById("openSignUp").checked;
	if(radioBtn === true){
		document.getElementById('hiddenSignUpIs').className = "";
		document.getElementById('hiddenSignUpIsNot').className = "";
		document.getElementById('hiddenSignUpIsEqual').className = "";
		document.getElementById('signUpSearchInput').className = "";
	}
	else{
		document.getElementById('hiddenSignUpIs').className = "hiddenSignUpBoolean";
		document.getElementById('hiddenSignUpIsNot').className = "hiddenSignUpBoolean";
		document.getElementById('hiddenSignUpIsEqual').className = "hiddenSignUpBoolean";
		document.getElementById('signUpSearchInput').className = "hiddenSignUpBoolean";
	}	
}

//SEARCH ID FILTER
$("#signUpSearchInput").on("submit", function(e) {
	e.preventDefault();
	document.getElementById('contactOutputName').innerHTML = '';
	document.getElementById('contactOutputEmail').innerHTML = '';
	document.getElementById('contactOutputPhone').innerHTML = '';
	document.getElementById('contactOutputTag').innerHTML = '';
	document.getElementById('contactOutputId').innerHTML = '';

	var signUpIsMore = document.getElementById("signUpIsMore").checked;
	var signUpIsLess = document.getElementById("signUpIsLess").checked;
	var searchParam = document.getElementById("searchBySignUp").value;
	var objectCollection = new Stamplay.Cobject('contact').Collection;
	var inputDays = parseInt(searchParam);
	var todayDate = new Date();
	var totalMatchingDates = 0;

	if(signUpIsMore === true){
		objectCollection.equalTo("active_status", true).fetch().then(function() {
		var totalPeople = objectCollection.instance.length;

			for(var i = 0; i<objectCollection.length; i ++){
				var contactName = objectCollection.instance[i].instance.name;
				var contactPhone = objectCollection.instance[i].instance.phone;
				var contactEmail = objectCollection.instance[i].instance.email;
				var contactCustomerTag = objectCollection.instance[i].instance.customer;
				var contactTeamTag = objectCollection.instance[i].instance.team;
				var contactBusinessTag = objectCollection.instance[i].instance.business;
				var contactCustomTag = objectCollection.instance[i].instance.customTag;
				var contactId = objectCollection.instance[i].instance.id;
				var contactSignUp = objectCollection.instance[i].instance.dt_create;
				var signUpDate = new Date(contactSignUp);

				var timeDiff = Math.abs(todayDate.getTime() - signUpDate.getTime());
				var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 

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

				if(diffDays > inputDays){
					totalMatchingDates += 1;

					document.getElementById('searchFractionOutput').innerHTML = "<i class='fa fa-smile-o'></i>" + " " + "<b>" + totalMatchingDates + " / " + totalPeople + "</b>" + " " + "users";

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

					var elemStrId = "<div id=contact>" + "<ul id=selection class=collection >";
					elemStrId += "<li class=collection-item>" + contactId + "</li>"; 
					elemStrId += "</ul>" + "</div>";

					document.getElementById('contactOutputName').innerHTML += elemStrName;
					document.getElementById('contactOutputEmail').innerHTML += elemStrEmail;
					document.getElementById('contactOutputPhone').innerHTML += elemStrPhone;
					document.getElementById('contactOutputTag').innerHTML += elemStrTag;
					document.getElementById('contactOutputId').innerHTML += elemStrId;

					document.getElementById("signUpIsMore").checked = false;
					document.getElementById('searchBySignUp').value = "";
				}
			}
		});
	}
	else if(signUpIsLess === true){
		objectCollection.equalTo("active_status", true).fetch().then(function() {
			for(var i = 0; i<objectCollection.length; i ++){
				var contactName = objectCollection.instance[i].instance.name;
				var contactPhone = objectCollection.instance[i].instance.phone;
				var contactEmail = objectCollection.instance[i].instance.email;
				var contactCustomerTag = objectCollection.instance[i].instance.customer;
				var contactTeamTag = objectCollection.instance[i].instance.team;
				var contactBusinessTag = objectCollection.instance[i].instance.business;
				var contactCustomTag = objectCollection.instance[i].instance.customTag;
				var contactId = objectCollection.instance[i].instance.id;
				var contactSignUp = objectCollection.instance[i].instance.dt_create;
				var signUpDate = new Date(contactSignUp);
				var totalPeople = objectCollection.instance.length;

				var timeDiff = Math.abs(todayDate.getTime() - signUpDate.getTime());
				var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 

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

				if(diffDays < inputDays){
					totalMatchingDates += 1;

					document.getElementById('searchFractionOutput').innerHTML = "<i class='fa fa-smile-o'></i>" + " " + "<b>" + totalMatchingDates + " / " + totalPeople + "</b>" + " " + "users";

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

					var elemStrId = "<div id=contact>" + "<ul id=selection class=collection >";
					elemStrId += "<li class=collection-item>" + contactId + "</li>"; 
					elemStrId += "</ul>" + "</div>";

					document.getElementById('contactOutputName').innerHTML += elemStrName;
					document.getElementById('contactOutputEmail').innerHTML += elemStrEmail;
					document.getElementById('contactOutputPhone').innerHTML += elemStrPhone;
					document.getElementById('contactOutputTag').innerHTML += elemStrTag;
					document.getElementById('contactOutputId').innerHTML += elemStrId;

					document.getElementById("signUpIsLess").checked = false;
					document.getElementById('searchBySignUp').value = "";
				}
			}
		});
	}
	else{
		objectCollection.equalTo("active_status", true).fetch().then(function() {
			for(var i = 0; i<objectCollection.length; i ++){
				var contactName = objectCollection.instance[i].instance.name;
				var contactPhone = objectCollection.instance[i].instance.phone;
				var contactEmail = objectCollection.instance[i].instance.email;
				var contactCustomerTag = objectCollection.instance[i].instance.customer;
				var contactTeamTag = objectCollection.instance[i].instance.team;
				var contactBusinessTag = objectCollection.instance[i].instance.business;
				var contactCustomTag = objectCollection.instance[i].instance.customTag;
				var contactId = objectCollection.instance[i].instance.id;
				var contactSignUp = objectCollection.instance[i].instance.dt_create;
				var signUpDate = new Date(contactSignUp);
				var totalPeople = objectCollection.instance.length;

				var timeDiff = Math.abs(todayDate.getTime() - signUpDate.getTime());
				var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 

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

				if(diffDays === inputDays){
					totalMatchingDates += 1;

					document.getElementById('searchFractionOutput').innerHTML = "<i class='fa fa-smile-o'></i>" + " " + "<b>" + totalMatchingDates + " / " + totalPeople + "</b>" + " " + "users";

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

					var elemStrId = "<div id=contact>" + "<ul id=selection class=collection >";
					elemStrId += "<li class=collection-item>" + contactId + "</li>"; 
					elemStrId += "</ul>" + "</div>";

					document.getElementById('contactOutputName').innerHTML += elemStrName;
					document.getElementById('contactOutputEmail').innerHTML += elemStrEmail;
					document.getElementById('contactOutputPhone').innerHTML += elemStrPhone;
					document.getElementById('contactOutputTag').innerHTML += elemStrTag;
					document.getElementById('contactOutputId').innerHTML += elemStrId;

					document.getElementById("signUpIsEqual").checked = false;
					document.getElementById('searchBySignUp').value = "";
				}
			}
		});
	}	
});
