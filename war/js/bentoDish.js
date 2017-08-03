/** ------------------------------------------------------------------------------
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Copyright (C) Rococo Global Technologies, Inc - All Rights Reserved 2016
 * --------------------------------------------------------------------------- **/
 
/**
* This file contains the functionalities for the 'Register Dish' screen.
* @author Lehmar Cabrillos
* @version 0.01
* Version History
* [04/11/2016] 0.01 – Lehmar Cabrillos – initial codes
**/

/**
* This function is used to initialize the elements in the 'register dish' screen.
* Clears the input fields, sets the selected option, and the image.
**/
function initRegisterDishScreen(){
	console.log("bentoDish.initRegisterDishScreen" + " start");

	document.getElementById("dishName").value = "";
	document.getElementById("dishType").selectedIndex = 0;
	document.getElementById("dishPrice").value = "";
	document.getElementById("imgDishType").src = "..\\assets\\main_dish_type.png";

	console.log("bentoDish.initRegisterDishScreen" + " end");
}

/**
* This function is used to change the image of the 'imgDishType' depending 
* on the selected value in the 'dishType' select box.
**/
function changeTypeImage() {
	console.log("bentoDish.changeType" + " start");
	var dishTypeField = document.getElementById("dishType");
	var imgDishTypeField = document.getElementById("imgDishType");
	var imageLocation = "..\\assets\\";
	
	switch (dishTypeField.value) {
		case "mainDish":
			imageLocation += "main_dish_type.png";
			break;
		case "sideDish":
			imageLocation += "side_dish_type.png";
			break;
		case "soup":
			imageLocation += "soup_type.png";
			break;
	}
	
	imgDishTypeField.src = imageLocation;
	console.log("bentoDish.changeType" + "  end");
}

/**
* This function is called to validate if the inputted 'name' of the dish
* is already in the list.
* @return true - name doest not exists in the list; false - otherwise
**/
function validateDishNameExists() {
	console.log("bentoDish.validateDishName" + "  start");
	var dishNameField = document.getElementById("dishName").value;
	var valid = true;

	
	// Note: The 'required' field is automatically validated in the html file.	
	// Traverse through the 'dishArray' to check if there exists an object with the same name
	for (var i = 0; i < dishArray.length; i++){
		if (dishNameField.toLowerCase() == dishArray[i].name.toLowerCase()) {
			alert("Name already exists.");
			valid = false;
			break;
		}
	}

	return valid;
	console.log("bentoDish.validateDishName" + "  end");
}

/**
* This function is used to add the 'dish' into the 'dishArray'.
**/
function registerDish() {
	console.log("bentoDish.registerDish" + " start");
	
	// displaying a confirmation message to the user and storing its result to a variable
	var confirmation = window.confirm("Are you sure you want to add dish?");
	
	// check if the confirmation is true/false
	if (confirmation) {
		if (true == validateDishNameExists()) {
			submitDish();
			// initializing the screen to its original state
			initRegisterDishScreen();
		}
	}
	
	return false;
	console.log("bentoDish.registerDish" + " end");
}


/**
* This function is created for the slim3 implementation.
* A form which contains the request data,is submitted to the 
* 'RegisterDishController'.
* Creates a hidden form where the values of the inputs be placed.
 **/
function submitDish() {
	console.log("bentoDish.submitDish" + " start");
	// Getting the elements to be copied into
	var scrDishName = document.getElementById("dishName");
	var scrDishType = document.getElementById("dishType");
	var scrDishPrice = document.getElementById("dishPrice");

	// creating the form and setting its attributes.
	var controllerForm = document.createElement("form");
	controllerForm.setAttribute("method", "post");
	// tells the controller to be called.
	controllerForm.setAttribute("action", "/RegisterDish");

	var dishNameField = createFormInputFields("dishName", scrDishName.value);
	var dishTypeField = createFormInputFields("dishType", scrDishType.value);
	var dishPriceField = createFormInputFields("dishPrice", scrDishPrice.value);
	
	controllerForm.appendChild(dishNameField);
	controllerForm.appendChild(dishTypeField);
	controllerForm.appendChild(dishPriceField);
	document.body.appendChild(controllerForm);
	controllerForm.submit();
	
	console.log("bentoDish.submitDish" + " end");
}


