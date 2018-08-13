


function myFunction(){
	console.log("here i am");

  let x = document.getElementById("myTopnav");
   if (x.className === "topnav") {
   	    console.log("lets collabo");
        x.className += " responsive";
    
    } else {
    	console.log("dont collabo");
        x.className = "topnav";
        
    }
}