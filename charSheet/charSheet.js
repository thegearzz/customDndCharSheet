
setInterval(update, 100); //sets the timer for the update timer
function update() { 
	var strVal = document.getElementById("strVal").value; //pulls the value of the textarea from the html
	var strMod = strVal - 10;
	var strMod = strMod / 2; //calculates the modifier from your stats
	var strMod = Math.round(strMod - .01); //used so it rounds down not up
	var conVal = document.getElementById("conVal").value;
	var conMod = conVal - 10;
	var conMod = conMod / 2;
	var conMod = Math.round(conMod - .01);
	var dexVal = document.getElementById("dexVal").value;
	var dexMod = dexVal - 10;
	var dexMod = dexMod / 2;
	var dexMod = Math.round(dexMod - .01);
	var intVal = document.getElementById("intVal").value;
	var intMod = intVal - 10;
	var intMod = intMod / 2;
	var intMod = Math.round(intMod - .01);
	var wisVal = document.getElementById("wisVal").value;
	var wisMod = wisVal - 10;
	var wisMod = wisMod / 2;
	var wisMod = Math.round(wisMod - .01);
	var chaVal = document.getElementById("chaVal").value;
	var chaMod = chaVal - 10;
	var chaMod = chaMod / 2;
	var chaMod = Math.round(chaMod - .01);
	if (document.getElementById("athProf").checked == true) {
		var athProf = 2;
	} else {
		var athProf = 0;
	}
	var athSkill = strMod+athProf
	if (strMod < 0) {
		document.getElementById("strMod").style.color = "red";
	} else if(strMod > 0) {
		document.getElementById("strMod").style.color = "blue"
	} else {
		document.getElementById("strMod").style.color = "black"
	}
	if (conMod < 0) {
		document.getElementById("conMod").style.color = "red";
	} else if(conMod > 0) {
		document.getElementById("conMod").style.color = "blue"
	} else {
		document.getElementById("conMod").style.color = "black"
	}
	if (dexMod < 0) {
		document.getElementById("dexMod").style.color = "red";
	} else if(dexMod > 0) {
		document.getElementById("dexMod").style.color = "blue"
	} else {
		document.getElementById("dexMod").style.color = "black"
	}
	if (intMod < 0) {
		document.getElementById("intMod").style.color = "red";
	} else if(intMod > 0) {
		document.getElementById("intMod").style.color = "blue"
	} else {
		document.getElementById("intMod").style.color = "black"
	}
	if (wisMod < 0) {
		document.getElementById("wisMod").style.color = "red";
	} else if(wisMod > 0) {
		document.getElementById("wisMod").style.color = "blue"
	} else {
		document.getElementById("wisMod").style.color = "black"
	}
	if (chaMod < 0) {
		document.getElementById("chaMod").style.color = "red";
	} else if(chaMod > 0) {
		document.getElementById("chaMod").style.color = "blue"
	} else {
		document.getElementById("chaMod").style.color = "black"
	}
	if (athSkill < 0) {
		document.getElementById("athSkill").style.color = "red";
	} else if(athSkill > 0) {
		document.getElementById("athSkill").style.color = "blue"
	} else {
		document.getElementById("athSkill").style.color = "black"
	}
	document.getElementById("strMod").innerText = strMod;
	document.getElementById("conMod").innerText = conMod;
	document.getElementById("dexMod").innerText = dexMod;
	document.getElementById("intMod").innerText = intMod;
	document.getElementById("wisMod").innerText = wisMod;
	document.getElementById("chaMod").innerText = chaMod;
	document.getElementById("athSkill").innerText = athSkill;
}