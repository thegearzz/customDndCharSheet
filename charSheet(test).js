console.log(document.getElementsByClassName("checkBox"));
function getStorage() {
	document.getElementById("strVal").value = localStorage.getItem("str");
	document.getElementById("conVal").value = localStorage.getItem("con");
	document.getElementById("dexVal").value = localStorage.getItem("dex");
	document.getElementById("intVal").value = localStorage.getItem("int");
	document.getElementById("wisVal").value = localStorage.getItem("wis");
	document.getElementById("chaVal").value = localStorage.getItem("cha");
	document.getElementById("expVal").value = localStorage.getItem("exp");
	document.getElementById("cycVal").value = localStorage.getItem("cyc");
 	document.getElementById("potVal").value = localStorage.getItem("pot");
 	document.getElementById("hthVal").value = localStorage.getItem("hth");
 	var chk = document.getElementsByClassName("checkBox");
 	for(var i = 0; i < chk.length; i++) {
 		var chker = JSON.parse(localStorage.getItem("chk" + i));
 		document.getElementsByClassName("checkBox")[i].checked = chker;
 	}
}

getStorage();
setInterval(update, 100); //sets the timer for the update timer
setInterval(storage, 100);
setInterval(expBar, 100);
setInterval(cycle, 100);

function storage() {
	localStorage.setItem("str", document.getElementById("strVal").value);
	localStorage.setItem("con", document.getElementById("conVal").value);
	localStorage.setItem("dex", document.getElementById("dexVal").value);
	localStorage.setItem("int", document.getElementById("intVal").value);
	localStorage.setItem("wis", document.getElementById("wisVal").value);
	localStorage.setItem("cha", document.getElementById("chaVal").value);
	localStorage.setItem("exp", document.getElementById("expVal").value);
	localStorage.setItem("cyc", document.getElementById("cycVal").value);
 	localStorage.setItem("pot", document.getElementById("potVal").value);
 	localStorage.setItem("hth", document.getElementById("hthVal").value);
 	var chk = document.getElementsByClassName("checkBox");
 	for(var i = 0; i < chk.length; i++) {
 		localStorage.setItem("chk" + i, chk[i].checked);
 	}
}

function cycle() {
	var cycVal = document.getElementById("cycVal").value;
	if(cycVal > 5){
		cycVal = 5
		document.getElementById("cycVal").value = cycVal;
	}
	var lfeSpn = Math.pow(2, cycVal);
	document.getElementById("lfeSpn").value = lfeSpn;
}


function expBar() {
	var expVal = document.getElementById("expVal").value
	if(expVal < 300){
		var lvl = 1;
		var expMax = 300;
	} else if(expVal < 900){
		var lvl = 2;
		var expMax = 900;
	} else if(expVal < 2700){
		var lvl = 3;
		var expMax = 2700;
	} else if(expVal < 6500){
		var lvl = 4;
		var expMax = 6500;
	} else if(expVal < 14000){
		var lvl = 5;
		var expMax = 14000;
	} else if(expVal < 23000){
		var lvl = 6;
		var expMax = 23000;
	} else if(expVal < 34000){
		var lvl = 7;
		var expMax = 34000;
	} else if(expVal < 48000){
		var lvl = 8;
		var expMax = 48000;
	} else if(expVal < 64000){
		var lvl = 9;
		var expMax = 64000;
	} else if(expVal < 85000){
		var lvl = 10;
		var expMax = 85000;
	} else if(expVal < 100000){
		var lvl = 11;
		var expMax = 100000;
	} else if(expVal < 120000){
		var lvl = 12;
		var expMax = 120000
	} else if(expVal < 140000){
		var lvl = 13;
		var expMax = 140000;
	} else if(expVal < 165000){
		var lvl = 14;
		var expMax = 165000;
	} else if(expVal < 195000){
		var lvl = 15;
		var expMax = 195000;
	} else if(expVal < 225000){
		var lvl = 16;
		var expMax = 225000;
	} else if(expVal < 265000){
		var lvl = 17;
		var expMax = 265000;
	} else if(expVal < 305000){
		var lvl = 18;
		var expMax = 305000;
	} else if(expVal < 355000){
		var lvl = 19;
		var expMax = 355000;
	} else if(expVal < 710000){
		var lvl = 20;
		var expMax = 710000;
	} else if(expVal >= 710000){
		var cycVal = document.getElementById("cycVal").value;
		cycVal++
		var expVal = 0
		document.getElementById("cycVal").value = cycVal
		document.getElementById("expVal").value = expVal
	} else{
		var lvl = "Broke"
		var expMax = "???"
	}
	document.getElementById("expBar").value = expVal / expMax
	document.getElementById("lvl").value = lvl

}

function update() { 
	var val = document.getElementsByClassName("val");
	var mod = [0]
	for (var i = 0; i < val.length; i++ ) {
		mod[i] = val[i].value - 10;
		mod[i] = mod[i] / 2;
		mod[i] = Math.round(mod[i] - .01);
	}
	var chk = document.getElementsByClassName("checkBox");
	var prof = [0]
	for (var i = 0; i < chk.length; i++){
		if(chk[i].checked == true) {
			prof[i] = 2;
		}
		else {
			prof[i] = 0;
		}
	}

	var skill = [0];
	skill[0] = mod[2]+prof[0];
	skill[1] = mod[4]+prof[1];
	skill[2] = mod[3]+prof[2];
	skill[3] = mod[0]+prof[3];
	skill[4] = mod[5]+prof[4];
	skill[5] = mod[3]+prof[5];
	skill[6] = mod[4]+prof[6];
	skill[7] = mod[5]+prof[7];
	skill[8] = mod[3]+prof[8];
	skill[9] = mod[4]+prof[9];
	skill[10] = mod[3]+prof[10];
	skill[11] = mod[4]+prof[11];
	skill[12] = mod[5]+prof[12];
	skill[13] = mod[5]+prof[13];
	skill[14] = mod[2]+prof[14];
	skill[15] = mod[2]+prof[15];
	skill[16] = mod[4]+prof[16];
	
	var skl  = document.getElementsByClassName("skill");
	for (var i = 0; i < skl.length; i++) {
		if (skill[i] < 0) {
			document.getElementsByClassName("skill")[i].style.color = "red";
		} 
		else if(skill[i] > 0) {
			document.getElementsByClassName("skill")[i].style.color = "blue"
		} 
		else {
			document.getElementsByClassName("skill")[i].style.color = "black"
		}
	}

	for (i = 0; i < mod.length; i++) {
		if (mod[i] < 0) {
			document.getElementsByClassName("mod")[i].style.color = "red";
		} 
		else if(mod[i] > 0) {
			document.getElementsByClassName("mod")[i].style.color = "blue";
		} 
		else {
			document.getElementsByClassName("mod")[i].style.color = "black";
		}
	}

	for (var i = 0; i < mod.length; i++) {
		document.getElementsByClassName("mod")[i].innerText = mod[i]
	}

	var skl = document.getElementsByClassName("skill")
	for (var i =0; i < skl.length; i++ ) {
		document.getElementsByClassName("skill")[i].innerText = skill[i]
	}
}