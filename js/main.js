// var teamMember1 = {
// 		firstName: "Bengy",
// 		lastName: "Phan",
// 		portrait: "https://images-na.ssl-images-amazon.com/images/I/71ETFshoRDL._SY879_.jpg",
// 		title: "co-founder"
// };
// var teamMember2 = {
// 		firstName: "Jo",
// 		lastName: "Shmoe",
// 		portrait: "https://images-na.ssl-images-amazon.com/images/I/71SvzDgNFuL._SX466_.jpg",
// 		title: "co-founder"
// };
// var teamMember3 = {
// 		firstName: "Raphael",
// 		lastName: "Little",
// 		portrait: "https://d3ieicw58ybon5.cloudfront.net/ex/350.350/shop/product/bb6a989d40d14f3f997bcbcd78f6f8df.jpg",
// 		title: "cto"
// };
// var teamMember4 = {
// 		firstName: "Donatello",
// 		lastName: "Bigs",
// 		portrait: "https://i.ebayimg.com/images/g/xkUAAOSwceNZXHG-/s-l300.jpg",
// 		title: "cfo"
// };
// var teamMember5 = { 
// 		firstName: "Candy",
// 		lastName: "Cane",
// 		portrait: "https://static.comicvine.com/uploads/square_medium/4/49448/5635222-master+splinter+1.jpg",
// 		title: "cmo"
// };

// console.log(teamMember1, teamMember2, teamMember3, teamMember4, teamMember5);



var companyTeam = [];

function TeamMember(first, last, portrait, titles){
	this.first = first,
	this.last = last,
	this.portrait = portrait,
	this.titles = titles
	// this.concatenate = (function(a, b) {
	// 	return a + " " + b;
	// })(this.first, this.last), 

	pushToArray(companyTeam, this);
}

function pushToArray(arr, object) {
	arr.push(object)
}


var teamMember1 = new TeamMember("Bengy", "Phan", "https://images-na.ssl-images-amazon.com/images/I/71ETFshoRDL._SY879_.jpg", "co-founder");

var teamMember2 = new TeamMember("Jo", "Shmoe", "https://images-na.ssl-images-amazon.com/images/I/71SvzDgNFuL._SX466_.jpg", "co-founder");

var teamMember3 = new TeamMember("Raphael", "Smalls", "https://d3ieicw58ybon5.cloudfront.net/ex/350.350/shop/product/bb6a989d40d14f3f997bcbcd78f6f8df.jpg", "cto");

var teamMember4 = new TeamMember("Donatello", "Bigs", "https://i.ebayimg.com/images/g/xkUAAOSwceNZXHG-/s-l300.jpg", "cfo");

var teamMember5 = new TeamMember("Candy", "Cane", "https://static.comicvine.com/uploads/square_medium/4/49448/5635222-master+splinter+1.jpg", "cmo");

TeamMember.prototype.concatenate = function () {
										return this.first + " " + this.last;
}
TeamMember.prototype.isFounder = function () {
											if(this.titles == "co-founder") {
												return true;
											} else false;
										}

console.log(teamMember5.concatenate());
console.log(companyTeam);


for(i = 0; i < companyTeam.length; i++) {
	var myDiv = document.createElement("div");
	var myH2 = document.createElement("h2");
	var myImg = document.createElement("img");
	var myH3 = document.createElement("h3");


	myH2.innerText = companyTeam[i].concatenate();
	myImg.src = companyTeam[i].portrait;
	myImg.alt = "Photo of Team Member"
	myImg.className = "same-size"
	myH3.innerText = companyTeam[i].titles;

	if (companyTeam[i].isFounder() == true) {
		myDiv.style.border = '2px solid black';
	} else myDiv.style.border = 'none';

	myDiv.appendChild(myH2);
	myDiv.appendChild(myImg);
	myDiv.appendChild(myH3);
	myDiv.className = "col-4 text-center"


	var main = document.getElementById("main")
	main.appendChild(myDiv);
}



