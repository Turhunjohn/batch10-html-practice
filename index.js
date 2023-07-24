function updateName() {
  	var newNameValue=document.getElementById("name-input").value;
  	document.getElementById("name-display").innerText=newNameValue;
    document.getElementById("name-input").value="";
  	}

 	function updateDob(){
  	var newDobValue=document.getElementById("dob-input").value;
  	document.getElementById("dob-display").innerText = newDobValue;
    document.getElementById("dob-input").value = "";
}