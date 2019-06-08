let detBtn1, detBtn2, detBtn3, bookBtn, p1, p2, p3, p4, p5, p6, p7, p8, p9;

detBtn1 = document.querySelector("#viewDetails1");
detBtn2 = document.querySelector("#viewDetails2");
detBtn3 = document.querySelector("#viewDetails3");
bookBtn = document.querySelector(".bookNow");
p1 = document.querySelector("#hotelPrice1");
p2 = document.querySelector("#hotelPrice2");
p3 = document.querySelector("#hotelPrice3");
p4 = document.querySelector("#hotelPrice4");
p5 = document.querySelector("#hotelPrice5");
p6 = document.querySelector("#hotelPrice6");
p7 = document.querySelector("#hotelPrice7");
p8 = document.querySelector("#hotelPrice8");
p9 = document.querySelector("#hotelPrice9");


function show1 () {
	let a;
	a = document.querySelector("#moreInfo1").style.visibility;
	if (a == "hidden") {
  document.querySelector("#moreInfo1").style.visibility = "visible";
	} else {
		document.querySelector("#moreInfo1").style.visibility = "hidden";
	}
}

function show2 () {
	let a;
	a = document.querySelector("#moreInfo2").style.visibility;
	if (a == "hidden") {
  document.querySelector("#moreInfo2").style.visibility = "visible";
	} else {
		document.querySelector("#moreInfo2").style.visibility = "hidden";
	}
}

function show3 () {
	let a;
	a = document.querySelector("#moreInfo3").style.visibility;
	if (a == "hidden") {
  document.querySelector("#moreInfo3").style.visibility = "visible";
	} else {
		document.querySelector("#moreInfo3").style.visibility = "hidden";
	}
}

function output1 () {
  document.querySelector("#output1").innerHTML = "50,000";
}

function output2 () {
  document.querySelector("#output1").innerHTML = "25,000";
}

function output3 () {
  document.querySelector("#output1").innerHTML = "15,000";
}

function output4 () {
  document.querySelector("#output2").innerHTML = "35,000";
}

function output5 () {
  document.querySelector("#output2").innerHTML = "10,000";
}

function output6 () {
  document.querySelector("#output2").innerHTML = "60,000";
}

function output7 () {
  document.querySelector("#output3").innerHTML = "5,000";
}

function output8 () {
  document.querySelector("#output3").innerHTML = "100,000";
}

function output9 () {
  document.querySelector("#output3").innerHTML = "75,000";
}

detBtn1.addEventListener("click", show1);
detBtn2.addEventListener("click", show2);
detBtn3.addEventListener("click", show3);
p1.addEventListener("click", output1);
p2.addEventListener("click", output2);
p3.addEventListener("click", output3);
p4.addEventListener("click", output4);
p5.addEventListener("click", output5);
p6.addEventListener("click", output6);
p7.addEventListener("click", output7);
p8.addEventListener("click", output8);
p9.addEventListener("click", output9);





// Galing sa hotel na JS


let p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12;

// Prices Selector
p1 = document.querySelector("#val1");
p2 = document.querySelector("#val2");
p3 = document.querySelector("#val3");
p4 = document.querySelector("#val4");
p5 = document.querySelector("#val5");
p6 = document.querySelector("#val6");
p7 = document.querySelector("#val7");
p8 = document.querySelector("#val8");
p9 = document.querySelector("#val9");
p10 = document.querySelector("#val10");
p11 = document.querySelector("#val11");
p12 = document.querySelector("#val12");


// Prices Function
function showPrice1 (e) {
	let output, input;
	output = e.target.innerHTML;
	input = document.querySelector("#p1").innerHTML = output;
	console.log(output);
}

function showPrice2 (e) {
	let output, input;
	output = e.target.innerHTML;
	input = document.querySelector("#p2").innerHTML = output;
	console.log(output);
}

function showPrice3 (e) {
	let output, input;
	output = e.target.innerHTML;
	input = document.querySelector("#p3").innerHTML = output;
	console.log(output);
}

function showPrice4 (e) {
	let output, input;
	output = e.target.innerHTML;
	input = document.querySelector("#p4").innerHTML = output;
	console.log(output);
}

// Click Events Price
p1.addEventListener("click", showPrice1);
p2.addEventListener("click", showPrice1);
p3.addEventListener("click", showPrice1);
p4.addEventListener("click", showPrice2);
p5.addEventListener("click", showPrice2);
p6.addEventListener("click", showPrice2);
p7.addEventListener("click", showPrice3);
p8.addEventListener("click", showPrice3);
p9.addEventListener("click", showPrice3);
p10.addEventListener("click", showPrice4);
p11.addEventListener("click", showPrice4);
p12.addEventListener("click", showPrice4);

// Close Events Tabs
info1.addEventListener("click", close1);
info2.addEventListener("click", close2);
info3.addEventListener("click", close3);
info4.addEventListener("click", close4);
