/* ------------------------------------------------------------------------------
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Copyright (C) Rococo Global Technologies, Inc - All Rights Reserved 2016
 * --------------------------------------------------------------------------- */
 
/*
* This file contains the functionalities for the 'Bento Menu' screen.
* @author Lehmar Cabrillos
* @version 0.01
* Version History
* [04/12/2016] 0.01 – Lehmar Cabrillos – initial codes
*/

/**
* This function is used to initialize the fields in 'Bento Menu' screen.
**/
function initBentoMenuScreen() {
	console.log("bentoMenu.initBentoMenuScreen" + "  start");
	removeAllTableMenuRow();
	populateTableMenu();
	console.log("bentoMenu.initBentoMenuScreen"  + "  end");
}

/**
* This is used to populate the table menu with all the 'bento' object 
* from the 'bentoArray'.
**/
function populateTableMenu() {
	console.log("bentoMenu.populateTableMenu"  + "  start");
	// traverse through the 'bentoArray' list.
	for (var index = 0; index < bentoArray.length; index++) {
		// create a row passing the pizza and the index
		insertTableMenuRow(bentoArray[index]);
	}
	console.log("bentoMenu.populateTableMenu"  + "  end");
}

/**
* Used to insert a row in the 'tblBentoMenu' table. This will contain
* the name, price, main dish name, and soup name for the 'bento'.
* It will also have 'action' buttons for update, delete, and display
* sideDishes.
**/
function insertTableMenuRow(bento) {
	console.log("bentoMenu.insertTableMenuRow"  + "  start");
	// for the table element and its body
	var table = document.getElementById("tblBentoMenu");
	var rowIndex = table.rows.length;

	var tableRow = table.insertRow(rowIndex);
	var tableCell1 = tableRow.insertCell(0);
	var tableCell2 = tableRow.insertCell(1);
	var tableCell3 = tableRow.insertCell(2);
	var tableCell4 = tableRow.insertCell(3);
	var tableCell5 = tableRow.insertCell(4);

	tableCell1.innerHTML = bento.name;
	tableCell2.innerHTML = bento.price;
	tableCell3.innerHTML = dishArray[bento.mainDishId].name;
	tableCell4.innerHTML = dishArray[bento.soupDishId].name;
	
	// creating the buttons for the 'actions' column of the 'tblBentoMenu'
	var btnUpdateBento = document.createElement("button");
	var btnDeleteBento = document.createElement("button");
	var btnShowSideDishes = document.createElement("button");

	// setting the attribute of the 'btnUpdateBento' button
	btnUpdateBento.setAttribute("id", "btnUpdateBento" + rowIndex);
	btnUpdateBento.innerHTML = "Update";
	btnUpdateBento.onclick = function() {
		loadBentoForUpdate(bento);
	};

	// setting the attribute of the 'btnDeleteBento' button
	btnDeleteBento.setAttribute("id", "btnDeleteBento" + rowIndex);
	btnDeleteBento.innerHTML = "Delete";
	btnDeleteBento.onclick = function() {
		deleteBento(bento);
	};

	// setting the attribute of the 'btnShowSideDishes' button
	btnShowSideDishes.setAttribute("id", "btnShowSideDishes" + rowIndex);
	btnShowSideDishes.innerHTML = "Side Dishes";
	btnShowSideDishes.onclick = function() {
		displaySideDishes(bento);
	};

	// attaching the buttons to the 'Actions' column of the 'tblBentoMenu'
	tableCell5.appendChild(btnUpdateBento);
	tableCell5.appendChild(btnDeleteBento);
	tableCell5.appendChild(btnShowSideDishes);
	console.log("bentoMenu.insertTableMenuRow"  + "  end");
}

/**
* This function is used to delete a 'bento' in the 'bentoArray' list.
**/
function deleteBento(bento) {
	console.log("bentoMenu.deleteBento"  + "  start");
	var confirmation = window.confirm("Are you sure you want to delete pizza?");
	if (true == confirmation) {
		// getting the index of the item to be delete
		var index = bentoArray.indexOf(bento);
		if (index > -1) {
			bentoArray.splice(index, 1);
		}
	}
	
	// re-initialize the 'Bento Menu' screen.	
	initBentoMenuScreen();	
	console.log("bentoMenu.deleteBento"  + "  end");
}

/**
* Used to display all the 'side dishes' for a 'bento'.
**/
function displaySideDishes(bento) {
	console.log("bentoMenu.displaySideDishes" + " start");
	// display in an alert the list of 'sideDishes' for a bento.
	var txtSideDishesList = "Here are the SideDishes:";
	var sideDishList = bento.sideDishIds;
	for (var i = 0; i < sideDishList.length; i++) {
		txtSideDishesList += "\n" + dishArray[sideDishList[i]].name;
	}
	
	alert(txtSideDishesList);
	console.log("bentoMenu.displaySideDishes" + " end");
}

/**
* Used to remove all the rows in the 'tblSideDish' except for the header.
**/
function removeAllTableMenuRow() {
	console.log("bentoMenu.removeAllTableMenuRow" + " start");
	var table = document.getElementById("tblBentoMenu");
	var lastRow = table.rows.length;

	// delete everything else except for the table header
	for (var rowIndex = 1; rowIndex < lastRow;) {
		table.deleteRow(rowIndex);
		// updating the lastRow number because there was a deletion
		lastRow = table.rows.length;
	}
	
	console.log("bentoMenu.removeAllTableMenuRow" + " end");
}

/**
* Used to set the 'screen' and index of the 'bento' to be updated.
**/
function loadBentoForUpdate(bento) {
	console.log("bentoMenu.loadBentoForUpdate" + " start");
	// transition to 'Customize Bento' screen.
	changeContent("screenCustomize");
	
	/* use to populate all the elements in the 'Customize Bento' screen.
		This can be found in the 'bentoCustomize.js' file*/
	populateCustomizeBentoScreen(bento);
	
	// change the listener and the text of the 'Register Bento' button.
	var btnSaveBento = document.getElementById("btnSaveBento");
	btnSaveBento.innerHTML = "Update Bento";
	btnSaveBento.setAttribute("data-bentoIndex", bentoArray.indexOf(bento));

	console.log("bentoMenu.loadBentoForUpdate" + " end");
}

