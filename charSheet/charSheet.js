function getStorage() {
	document.getElementById("strVal").value = localStorage.getItem("str");
	document.getElementById("conVal").value = localStorage.getItem("con");
	document.getElementById("dexVal").value = localStorage.getItem("dex");
	document.getElementById("intVal").value = localStorage.getItem("int");
	document.getElementById("wisVal").value = localStorage.getItem("wis");
	document.getElementById("chaVal").value = localStorage.getItem("cha");
	document.getElementById("expVal").value = localStorage.getItem("exp");
}
getStorage();
setInterval(update, 100); //sets the timer for the update timer
setInterval(storage, 100);
setInterval(expBar, 1000);

function expBar() {
	var expVal = document.getElementById("expVal").value
	if(expVal < 300){
		var lvl = 1;
		var expMax = 300;
	} else if(expVal < 900){
		var lvl = 2;
		var expMax = 900;
	} else if(expVal < 2700) {
		var lvl = 3;
		var expMax = 2700;
	}
	document.getElementById("expBar").value = expVal / expMax
	document.getElementById("lvl").value = lvl

}

function storage() {
	localStorage.setItem("str", document.getElementById("strVal").value);
	localStorage.setItem("con", document.getElementById("conVal").value);
	localStorage.setItem("dex", document.getElementById("dexVal").value);
	localStorage.setItem("int", document.getElementById("intVal").value);
	localStorage.setItem("wis", document.getElementById("wisVal").value);
	localStorage.setItem("cha", document.getElementById("chaVal").value);
	localStorage.setItem("exp", document.getElementById("expVal").value);
}

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
	if (document.getElementById("acrProf").checked == true) {
		var acrProf = 2;
	} else {
		var acrProf = 0;
	}
	if (document.getElementById("aniProf").checked == true) {
		var aniProf = 2;
	} else {
		var aniProf = 0;
	}
	if (document.getElementById("arcProf").checked == true) {
		var arcProf = 2;
	} else {
		var arcProf = 0;
	}
	if (document.getElementById("athProf").checked == true) {
		var athProf = 2;
	} else {
		var athProf = 0;
	}
	if (document.getElementById("decProf").checked == true) {
		var decProf = 2;
	} else {
		var decProf = 0;
	}
	if (document.getElementById("hisProf").checked == true) {
		var hisProf = 2;
	} else {
		var hisProf = 0;
	}
	if (document.getElementById("insProf").checked == true) {
		var insProf = 2;
	} else {
		var insProf = 0;
	}
	if (document.getElementById("intProf").checked == true) {
		var intProf = 2;
	} else {
		var intProf = 0;
	}
	if (document.getElementById("invProf").checked == true) {
		var invProf = 2;
	} else {
		var invProf = 0;
	}
	if (document.getElementById("medProf").checked == true) {
		var medProf = 2;
	} else {
		var medProf = 0;
	}
	if (document.getElementById("natProf").checked == true) {
		var natProf = 2;
	} else {
		var natProf = 0;
	}
	if (document.getElementById("perProf").checked == true) {
		var perProf = 2;
	} else {
		var perProf = 0;
	}
	if (document.getElementById("pefProf").checked == true) {
		var pefProf = 2;
	} else {
		var pefProf = 0;
	}
	if (document.getElementById("pesProf").checked == true) {
		var pesProf = 2;
	} else {
		var pesProf = 0;
	}
	if (document.getElementById("sleProf").checked == true) {
		var sleProf = 2;
	} else {
		var sleProf = 0;
	}
	if (document.getElementById("steProf").checked == true) {
		var steProf = 2;
	} else {
		var steProf = 0;
	}
	if (document.getElementById("surProf").checked == true) {
		var surProf = 2;
	} else {
		var surProf = 0;
	}
	
	var acrSkill = dexMod+acrProf
	var aniSkill = wisMod+aniProf
	var arcSkill = intMod+arcProf
	var athSkill = strMod+athProf
	var decSkill = chaMod+decProf
	var hisSkill = intMod+hisProf
	var insSkill = wisMod+insProf
	var intSkill = chaMod+intProf
	var invSkill = intMod+invProf
	var medSkill = wisMod+medProf
	var natSkill = intMod+natProf
	var perSkill = wisMod+perProf
	var pefSkill = chaMod+pefProf
	var pesSkill = chaMod+pesProf
	var sleSkill = dexMod+sleProf
	var steSkill = dexMod+steProf
	var surSkill = wisMod+surProf
	
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
	if (acrSkill < 0) {
		document.getElementById("acrSkill").style.color = "red";
	} else if(acrSkill > 0) {
		document.getElementById("acrSkill").style.color = "blue"
	} else {
		document.getElementById("acrSkill").style.color = "black"
	}
	if (aniSkill < 0) {
		document.getElementById("aniSkill").style.color = "red";
	} else if(aniSkill > 0) {
		document.getElementById("aniSkill").style.color = "blue"
	} else {
		document.getElementById("aniSkill").style.color = "black"
	}
	if (arcSkill < 0) {
		document.getElementById("arcSkill").style.color = "red";
	} else if(arcSkill > 0) {
		document.getElementById("arcSkill").style.color = "blue"
	} else {
		document.getElementById("arcSkill").style.color = "black"
	}
	if (athSkill < 0) {
		document.getElementById("athSkill").style.color = "red";
	} else if(athSkill > 0) {
		document.getElementById("athSkill").style.color = "blue"
	} else {
		document.getElementById("athSkill").style.color = "black"
	}
	if (decSkill < 0) {
		document.getElementById("decSkill").style.color = "red";
	} else if(decSkill > 0) {
		document.getElementById("decSkill").style.color = "blue"
	} else {
		document.getElementById("decSkill").style.color = "black"
	}
	if (hisSkill < 0) {
		document.getElementById("hisSkill").style.color = "red";
	} else if(hisSkill > 0) {
		document.getElementById("hisSkill").style.color = "blue"
	} else {
		document.getElementById("hisSkill").style.color = "black"
	}
	if (insSkill < 0) {
		document.getElementById("insSkill").style.color = "red";
	} else if(insSkill > 0) {
		document.getElementById("insSkill").style.color = "blue"
	} else {
		document.getElementById("insSkill").style.color = "black"
	}
	if (intSkill < 0) {
		document.getElementById("intSkill").style.color = "red";
	} else if(intSkill > 0) {
		document.getElementById("intSkill").style.color = "blue"
	} else {
		document.getElementById("intSkill").style.color = "black"
	}
	if (invSkill < 0) {
		document.getElementById("invSkill").style.color = "red";
	} else if(invSkill > 0) {
		document.getElementById("invSkill").style.color = "blue"
	} else {
		document.getElementById("invSkill").style.color = "black"
	}
	if (medSkill < 0) {
		document.getElementById("medSkill").style.color = "red";
	} else if(medSkill > 0) {
		document.getElementById("medSkill").style.color = "blue"
	} else {
		document.getElementById("medSkill").style.color = "black"
	}
	if (natSkill < 0) {
		document.getElementById("natSkill").style.color = "red";
	} else if(natSkill > 0) {
		document.getElementById("natSkill").style.color = "blue"
	} else {
		document.getElementById("natSkill").style.color = "black"
	}
	if (perSkill < 0) {
		document.getElementById("perSkill").style.color = "red";
	} else if(perSkill > 0) {
		document.getElementById("perSkill").style.color = "blue"
	} else {
		document.getElementById("perSkill").style.color = "black"
	}
	if (pefSkill < 0) {
		document.getElementById("pefSkill").style.color = "red";
	} else if(pefSkill > 0) {
		document.getElementById("pefSkill").style.color = "blue"
	} else {
		document.getElementById("pefSkill").style.color = "black"
	}
	if (pesSkill < 0) {
		document.getElementById("pesSkill").style.color = "red";
	} else if(pesSkill > 0) {
		document.getElementById("pesSkill").style.color = "blue"
	} else {
		document.getElementById("pesSkill").style.color = "black"
	}
	if (sleSkill < 0) {
		document.getElementById("sleSkill").style.color = "red";
	} else if(sleSkill > 0) {
		document.getElementById("sleSkill").style.color = "blue"
	} else {
		document.getElementById("sleSkill").style.color = "black"
	}
	if (steSkill < 0) {
		document.getElementById("steSkill").style.color = "red";
	} else if(steSkill > 0) {
		document.getElementById("steSkill").style.color = "blue"
	} else {
		document.getElementById("steSkill").style.color = "black"
	}
	if (surSkill < 0) {
		document.getElementById("surSkill").style.color = "red";
	} else if(surSkill > 0) {
		document.getElementById("surSkill").style.color = "blue"
	} else {
		document.getElementById("surSkill").style.color = "black"
	}
	document.getElementById("strMod").innerText = strMod;
	document.getElementById("conMod").innerText = conMod;
	document.getElementById("dexMod").innerText = dexMod;
	document.getElementById("intMod").innerText = intMod;
	document.getElementById("wisMod").innerText = wisMod;
	document.getElementById("chaMod").innerText = chaMod;
	document.getElementById("acrSkill").innerText = acrSkill;
	document.getElementById("aniSkill").innerText = aniSkill;
	document.getElementById("arcSkill").innerText = arcSkill;
	document.getElementById("athSkill").innerText = athSkill;
	document.getElementById("decSkill").innerText = decSkill;
	document.getElementById("hisSkill").innerText = hisSkill;
	document.getElementById("insSkill").innerText = insSkill;
	document.getElementById("intSkill").innerText = intSkill;
	document.getElementById("invSkill").innerText = invSkill;
	document.getElementById("medSkill").innerText = medSkill;
	document.getElementById("natSkill").innerText = natSkill;
	document.getElementById("perSkill").innerText = perSkill;
	document.getElementById("pefSkill").innerText = pefSkill;
	document.getElementById("pesSkill").innerText = pesSkill;
	document.getElementById("sleSkill").innerText = sleSkill;
	document.getElementById("steSkill").innerText = steSkill;
	document.getElementById("surSkill").innerText = surSkill;
}