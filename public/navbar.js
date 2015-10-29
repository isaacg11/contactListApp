Stamplay.init('contactlistapp');

function logout(){
	var user = new Stamplay.User().Model;
	user.logout();
}

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



//GET CUSTOMERS DATA
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

//GET TEAM DATA
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