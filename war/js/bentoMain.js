/** ------------------------------------------------------------------------------
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Copyright (C) Rococo Global Technologies, Inc - All Rights Reserved 2016
 * --------------------------------------------------------------------------- **/
 
/**
* This file contains the functionalities and global variables for the application.
* @author Lehmar Cabrillos
* @version 0.01
* Version History
* [04/11/2016] 0.01 – Lehmar Cabrillos – initial codes
**/

/**
* These are the global variables
**/

/**
* The array that will hold the list of 'dishes' that 
* are statically added in the application.
* The items for the array are mocked.
**/
var dishArray = [
	{id:0, name: "Beef Teriyaki", type: "mainDish", price:100},
	{id:1, name: "Onigiri", type: "sideDish", price: 80},
	{id:2, name: "Miso Soup", type: "soup", price: 50},
	{id:3, name: "Vegetable Soup", type: "soup", price: 40},
	{id:4, name: "Kinpira Gobo", type: "sideDish", price: 70},
	{id:5, name: "Chicken Katsu", type: "mainDish", price: 110},	
];

/**
* The array that will hold the list of 'bento' that 
* are statically added in the application.
* The items for the array are mocked.
**/
var bentoArray = [
	{id:0, name: "Beef Bento", mainDishId: 0, soupDishId: 2, sideDishIds: [1,4], price:300},
	{id:1, name: "Chicken Bento", mainDishId: 5, soupDishId: 3, sideDishIds: [1], price:230},
];


/**
* The screen that is currently displayed.
**/
var displayedScreen = "";


/**
* This hold the index for the row that will be inserted in the 'tblSideDish' table.
**/
var tblSideDishRowId = 2;

/*
* This function is called to change the displayed div,
* label and image of the div#content depending on the selected
* 'displayScreen'.
* @param displayScreen - 'id' of the div to be displayed
*/
function changeContent(displayScreen) {
	console.log("bentoMain.changeContent" + " start");
	console.log("bentoMain.changeContent panel: " + displayScreen)
	if (displayedScreen != displayScreen) {
		var lblHeader = "";
		var iconHeader = "";
		
		document.getElementById("screenDish").style.visibility = "hidden";
		document.getElementById("screenDish").style.display = "none";
		document.getElementById("screenCustomize").style.visibility = "hidden";
		document.getElementById("screenCustomize").style.display = "none";
		document.getElementById("screenMenu").style.visibility = "hidden";
		document.getElementById("screenMenu").style.display = "none";
				
		switch (displayScreen) {
			case "screenDish":
				header = "Register Dish";
				iconHeader = "..\\assets\\dish_icon.png";
				// changing the content of the body, displaying the ingredients screen
				document.getElementById("screenDish").style.visibility = "visible";
				document.getElementById("screenDish").style.display = "block";
				initRegisterDishScreen();
				break;
			case "screenCustomize":
				header = "Customize Bento";
				iconHeader = "..\\assets\\customize_icon.png";
				// changing the content of the body, displaying the customize screen
				document.getElementById("screenCustomize").style.visibility = "visible";
				document.getElementById("screenCustomize").style.display = "block";
				initCustomizeBentoScreen();
				break;
			case "screenMenu":
				header = "Bento Menu";
				iconHeader = "..\\assets\\menu_icon.png";
				// changing the content of the body, displaying the menu screen
				document.getElementById("screenMenu").style.visibility = "visible";
				document.getElementById("screenMenu").style.display = "block";
				initBentoMenuScreen();
				break;
			default:
				break;
		}
		
		displayedScreen = displayScreen;
		// clearing the message spanMessage
		document.getElementById("spanMessage").innerHTML = "";
		
		// Change the label and the image of the header.
		document.getElementById("headerLabel").innerHTML = header;
		document.getElementById("headerIcon").src = iconHeader;
	}
	console.log("bentoMain.changeContent" + " start");
}


/**
* This function is used to create input fields that will be attached
* later on in the form before submitting to the controller.
* @param fieldName - the name of the input field. This will be used
* 	as the 'parameter name' when the request is parsed in the 'controller'.
* @param value - the value of the input field. This will be the value 
* 	that will be retrieved when parsing the request.
* @return input field that was created. 
**/
function createFormInputFields(fieldName, fieldValue) {
	// creating 'input field'
	var inputField = document.createElement("input");
	inputField.setAttribute("type", "hidden");
	inputField.setAttribute("name", fieldName);
	inputField.setAttribute("value", fieldValue);
	
	return inputField;
}