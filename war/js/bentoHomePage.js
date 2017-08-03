function redirectHomePage(){
	// creating the form and setting its attributes.
	var controllerForm = document.createElement("form");
	controllerForm.setAttribute("method", "post");
	// tells the controller to be called.
	controllerForm.setAttribute("action", "/Index");
	controllerForm.submit();
}