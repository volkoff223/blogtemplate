/* Open when someone clicks on the span element */
function openNav() {
	document.getElementById("myNav").style.height = "100%";
	document.getElementById("menuButton").style.opacity = "0%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
	document.getElementById("myNav").style.height = "0%";
	setTimeout(() => {document.getElementById("menuButton").style.opacity = "100%"; }, 400);
} 

