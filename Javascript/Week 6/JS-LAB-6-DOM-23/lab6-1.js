/** LAB 6-1 IMAGE MOUSEOVER GALLERY*/
//CREATE AN ONLOAD LISTENER
window.onload = pageReady;

//CREATE AN ONLOAD FUNCTION TO HOLD OUR CODE THAT NEEDS THE document OBJECT.
function pageReady(){

	//CREATE A HANDLE FOR THE MAIN IMAGE
	var bigImage = document.getElementById("mainImg");

	//GET THE GALLERY IMAGES
	var image1 = document.getElementById("pic1");
	var image2 = document.getElementById("pic2");
	var image3 = document.getElementById("pic3");
	//image4
	//image5
	//image6

	//SETUP LISTENERS FOR THE GALLERY IMAGES
	image1.onmouseover = switchPic1;
	image2.onmouseover = switchPic2;
	image3.onmouseover = switchPic3;
	//
	//
	//

	//CREATE FUNCTIONS TO CHANGE PICTURES
	function switchPic1(){
		bigImage.src = image1.src;
	}

	function switchPic2(){
		bigImage.src = image2.src;
	}

	function switchPic3(){
		bigImage.src = image3.src;
	}

	//CREATE FUNCTION TO RESET IMAGE
	function resetPic(){
			bigImage.src = "images/title.png";
	}

	//RESET THE IMAGE WHEN MOUSE LEAVES
	//SETUP LISTENERS
	image1.onmouseout = resetPic;
	image2.onmouseout = resetPic;
	image3.onmouseout = resetPic;
	//
	//
	//
}//END onload FUNCTION