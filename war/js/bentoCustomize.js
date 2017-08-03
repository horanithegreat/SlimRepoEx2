/** ------------------------------------------------------------------------------
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Copyright (C) Rococo Global Technologies, Inc - All Rights Reserved 2016
 * --------------------------------------------------------------------------- **/
 
/**
* This file contains the functionalities for the 'Customize Bento' screen.
* @author Lehmar Cabrillos
* @version 0.01
* Version History
* [04/11/2016] 0.01 – Lehmar Cabrillos – initial codes
**/

/**
* This function is used to initialize the elements in the 'customize bento' screen.
* Clears the input fields, sets the selected option, and the number of rows for the 
* 'side dishes'.
**/
function initCustomizeBentoScreen() {
	console.log("bentoCustomize.initCustomizeBentoScreen" + " start");
	
	document.getElementById("bentoName").value = "";
	var mainDishSelect = document.getElementById("bentoMainDish");
	var soupSelect = document.getElementById("bentoSoup");
	var sideDish1Select = document.getElementById("bentoSideDish1");
	var mainDishPrice = document.getElementById("mainDishPrice");
	var soupPrice = document.getElementById("soupPrice");
	var sideDish1Price = document.getElementById("sideDishPrice1");
	
	populateSelect(mainDishSelect, "mainDish");
	populateSelect(soupSelect, "soup");
	populateSelect(sideDish1Select, "sideDish");
	
	mainDishSelect.selectedIndex = 0;
	soupSelect.selectedIndex = 0;
	sideDish1Select.selectedIndex = 0;
	
	// Setting the values of the 'dish' price with the corresponding 'dish' select.
	mainDishPrice.value = mainDishSelect.options[mainDishSelect.selectedIndex].getAttribute("data-price");
	soupPrice.value = soupSelect.options[soupSelect.selectedIndex].getAttribute("data-price");
	sideDish1Price.value = sideDish1Select.options[sideDish1Select.selectedIndex].getAttribute("data-price");
	
	// removing the other row for the sideDish
	removeAllSideDishRow();
	// recalculating the total price of the bento
	calculateTotalPrice();
	console.log("bentoDish.initRegisterDishScreen" + " end");
}

/**
* This function is used to clear the 'dishSelect' select element, 
* and populate with list of 'dish' with the same 'dishType'.
* @param dishSelect - the select element to be updated.
* @param distType - the type of 'dish' to be matched.
**/
function populateSelect(dishSelect, distType) {
	console.log("bentoCustomize.populateSelect" + " start");
	
	var i = 0;
	// traverse through the list of options in 'mainDish' select
	for (i = (dishSelect.options.length - 1); i >= 0; i--) {
		// removing each option.
		dishSelect.remove(i);
	}

	// populating the 'dishSelect' with from the 'dishArray' 
	// traversing through the 'dishArray'
	for (i = 0; i < dishArray.length; i++) {
		// create an option that will be added to the 'dishSelect'
		if (distType == dishArray[i].type) {
			var optionItem = document.createElement("option");
			optionItem.text = dishArray[i].name;
			optionItem.setAttribute("value", dishArray[i].id);
			optionItem.setAttribute("data-price", dishArray[i].price);
			optionItem.setAttribute("data-type", dishArray[i].type);
			dishSelect.add(optionItem);
		}
	}
	console.log("bentoCustomize.populateSelect" + " end");
}


/**
* Change the value of the 'price' input field for the corresponding change of the
* select element.
* @param dishSelect - the select element id that will be checked
* @param priceInput - the input field id for the 'price' of the corresponding select
**/
function changePriceDisplay(dishSelectId, priceInputId) {
	console.log("bentoCustomize.changePriceDisplay" + " start");
	var selectElement = document.getElementById(dishSelectId);
	var inputElement = document.getElementById(priceInputId);

	inputElement.value = selectElement.options[selectElement.selectedIndex].getAttribute("data-price");
	calculateTotalPrice();
	console.log("bentoCustomize.changePriceDisplay" + " end");
}

/**
* This function is used to insert a new row in the 'tblSideDish' table.
* The row that is inserted contains: select for the 'sideDishes', input for the
* 'sideDishPrie', and a button for removing the inserted row.
**/
function insertSideDishRow() {
	console.log("bentoCustomize.insertSideDishRow" + " start");
	// getting the table element
	var tblSideDish = document.getElementById("tblSideDish");
	var tableRow = tblSideDish.insertRow(tblSideDish.rows.length);
	
	// creating the columns for the row
	var tableCell1 = tableRow.insertCell(0);
	var tableCell2 = tableRow.insertCell(1);
	var tableCell3 = tableRow.insertCell(2);

	// creating the elements that will be inserted to the row
	var btnRemove = document.createElement("button");
	var inputPriceField = document.createElement("input");
	var sideDishSelect = document.createElement("select");
	
	// setting the id of the elements
	tableRow.setAttribute("id", "sideDishRow" + tblSideDishRowId);
	btnRemove.setAttribute("id", "btnRemoveDishRow" + tblSideDishRowId);
	sideDishSelect.setAttribute("id", "bentoSideDish" + tblSideDishRowId);
	inputPriceField.setAttribute("id", "sideDishPrice" + tblSideDishRowId);
	// updating the counter for the row
	tblSideDishRowId++;
	
	// setting the attributes for the select element
	populateSelect(sideDishSelect,"sideDish");
	sideDishSelect.setAttribute("class", "inputField");
	sideDishSelect.onchange = function() {
		changePriceDisplay(sideDishSelect.id, inputPriceField.id);
	} 
	
	// setting the attributes for the input element
	inputPriceField.setAttribute("class", "inputPrice");
	inputPriceField.value = sideDishSelect.options[0].getAttribute("data-price");
	
	// setting the attributes for the button
	btnRemove.innerHTML = "Remove";
	btnRemove.onclick = function() {
		removeSideDishRow(tableRow.id);
	};
	
	// attaching the elements to their corresponding column.
	tableCell1.appendChild(sideDishSelect);
	tableCell2.appendChild(inputPriceField);
	tableCell3.appendChild(btnRemove);
	
	// recalculating the total price of the bento
	calculateTotalPrice();
	console.log("bentoCustomize.insertSideDishRow" + " end");
}

/**
* This function is used to delete a row in the 'tbleSideDish' table.
* @param rowId - the 'id' of the row in the 'tbleSideDish' table to be deleted.
**/
function removeSideDishRow(rowId) {
	console.log("bentoCustomize.removeSideDishRow" + "  start");
	var tableRow = document.getElementById(rowId);
	var tableParent = tableRow.parentNode;
	
	tableParent.deleteRow(tableRow.rowIndex);
	
	// recalculating the total price of the bento
	calculateTotalPrice();
	console.log("bentoCustomize.removeSideDishRow" + "  end");
}


/**
* Used to remove all the 'sideDishRow' in the 'tbleSideDish' table,
* except for the header (row 1), and the 'sideDishRow1' row. 
**/
function removeAllSideDishRow() {
	console.log("bentoCustomize.removeAllSideDishRow" + "  start");
	var table = document.getElementById("tblSideDish");
	var lastRow = table.rows.length;

	// delete everything else except for the table header and row 2.
	for (var rowIndex = 2; rowIndex < lastRow;) {
		table.deleteRow(rowIndex);
		// updating the lastRow number because there was a deletion
		lastRow = table.rows.length;
	}

	// changing the rowID for the next toppingRowId
	tblSideDishRowId = 2;
	console.log("bentoCustomize.removeAllSideDishRow" + "  end");
}

/**
* This function is used to calculate the totalPrice of all the dishes that
* were used in the 'bento' object.
* The 'bentoTotalPrice' input field value is automatically updated.
**/
function calculateTotalPrice() {
	console.log("bentoCustomize.calculateTotalPrice" + "  start");
	var totalPrice = 0;

	// adding the values of the 'price' input fields.
	totalPrice += Number(document.getElementById("mainDishPrice").value);
	totalPrice += Number(document.getElementById("soupPrice").value);
	
	// traversing through the 'tblSideDish' table to add all the values of 'price' input fields.
	var tblSideDish = document.getElementById("tblSideDish");
	var priceInputFields = tblSideDish.getElementsByTagName("input");

	for (var i = 0; i < (tblSideDish.rows.length-1); i++) {
		totalPrice += Number(priceInputFields[i].value);
	}
	
	// updating the value of the 'bentoTotalPrice' input field
	document.getElementById("bentoTotalPrice").value = totalPrice;
	console.log("bentoCustomize.calculateTotalPrice" + "  end");
}


/**
* This function is used to validate if the 'bento name' already exists in the 
* 'bentoArray' list.
* @param bentoIndex - the index of the bento that will not be included in the validation.
* @param true-if the name does not exists; false-otherwise
**/
function validateBentoNameExists(bentoIndex) {
	console.log("bentoCustomize.validateBentoNameExists" + "  start");
	var name = document.getElementById("bentoName").value;
	var valid = true;
	
	// Note: The 'required' field is automatically validated in the html file.	
	// Traverse through the 'dishArray' to check if there exists an object with the same name
	for (var i = 0; i < bentoArray.length; i++) {
		if (i == bentoIndex) {
			// do not include in the validation
			continue;
		} else if (name.toLowerCase() == bentoArray[i].name.toLowerCase()) {
			alert("Name already exists.");
			valid = false;
			break;
		}
	}

	console.log("bentoCustomize.validateBentoNameExists" + "  end");
	return valid;
}


/**
* This function is used to insert/update a 'bento' into the 'bentoArray' list.
**/
function registerBento() {
	console.log("bentoCustomize.registerBento" + " start");
	var confirmation = null;
	var btnSaveBento = document.getElementById("btnSaveBento");
	var bentoIndex = btnSaveBento.getAttribute("data-bentoIndex");
	// displaying a confirmation message to the user and storing its result to a variable
	if (-1 < bentoIndex) {
		confirmation = window.confirm("Are you sure you want to update bento?");
	} else {
		confirmation = window.confirm("Are you sure you want to add bento?");
	}
	if (confirmation) {
		if (true == validateBentoNameExists(bentoIndex)) {
			var nameField = document.getElementById("bentoName");
			var mainDishField = document.getElementById("bentoMainDish");
			var soupDishField = document.getElementById("bentoSoup");
			var priceField = document.getElementById("bentoTotalPrice");
			
			// creating the array of 'sideDishIds'
			var sideDishIdList = [];
			var table = document.getElementById("tblSideDish");
			
			for (var i = 1; i < table.rows.length; i++) {
				var sideDishSelect = document.getElementById("bentoSideDish" + i);
				sideDishIdList.push(sideDishSelect.options[sideDishSelect.selectedIndex].value);
			}
			
			// create the 'bento' object that will be inserted to the 'bentoArray' list.
			var bento = {
				// id: bentoArray.length,
				name: nameField.value,
				mainDishId: mainDishField.options[mainDishField.selectedIndex].value,
				soupDishId: soupDishField.options[soupDishField.selectedIndex].value,
				sideDishIds: sideDishIdList,
				price: priceField.value
			}
			
			if (-1 < bentoIndex) {
				// updating the 'id' of the 'bento'
				bento.id = bentoIndex;
				// updating the value of the 'bento' object that is stored in 'bentoIndex' index
				bentoArray[bentoIndex] = bento;
				// transition back to 'Bento Menu' Screen
				changeContent("screenMenu");
			} else {
				// updating the 'id' of the 'bento'
				bento.id = bentoArray.length;
				// inserting the 'bento' object to the array.
				bentoArray.push(bento);
				alert("Added item to 'bentoArray' was successful.");
				// initialize the screen
				initCustomizeBentoScreen();
			}
			
			for (var i=0; i < bentoArray.length; i++) {
				console.log(bentoArray[i]);
			}
			
		}
	}	
	console.log("bentoCustomize.registerBento" + " end");
}

/**
* Used to populate the 'Customize Bento' screen with the data of the 'bento' to be updated.
**/
function populateCustomizeBentoScreen(bento) {
	var sideDishList = bento.sideDishIds;

	// change the value of the default selects
	document.getElementById("bentoName").value = bento.name;
	document.querySelector('#bentoMainDish [value="' + bento.mainDishId + '"]').selected = true;
	document.querySelector('#bentoSoup [value="' + bento.soupDishId + '"]').selected = true;
	document.querySelector('#bentoSideDish1 [value="' + sideDishList[0] + '"]').selected = true;	

	// changing the values for the 'price' of each 'sideDish'
	document.getElementById("mainDishPrice").value = dishArray[bento.mainDishId].price;
	document.getElementById("soupPrice").value = dishArray[bento.soupDishId].price;
	document.getElementById("sideDishPrice1").value = dishArray[sideDishList[0]].price;
	
	// traverse through the list of 'sideDishes'
	for (var i = 1; i < sideDishList.length; i++) {
		// insert new row for the side dish.
		insertSideDishRow();
		
		// change the selected value of the 'sideDishSelect' and 'price' input field.
		document.querySelector('#bentoSideDish' + (i+1) + ' [value="' + sideDishList[i] + '"]').selected = true;	
		document.getElementById("sideDishPrice" + (i+1)).value = dishArray[sideDishList[i]].price;
	}
	// recalculating the total price of the bento
	calculateTotalPrice();
}
