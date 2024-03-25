function toggleStyleSheet(){
    // Task 1
    // Steps
    // 1 (a) Get style element by ID (hint: getElementById)
    const element = document.getElementById("mainStyleSheet");
    // 1 (b) Check the current stylesheet file name. (hint: element.getAttribute)
   const curr =  element.getAttribute("href");
    // 1 (c) Determine new stylesheet file name
    if( curr == "alt.css") {
        element.setAttribute("href", "index.css");
    }
    else {
        element.setAttribute("href","alt.css");
    }
    // 1 (d) replace stylesheet with new stylesheet (hint: element.setAttribute)
    

    // TASK 2
    // 2 (d) For persistence when page is refreshed. save new stylesheet name to localStorage
    // hint: localStorage.setItem(name, value)
    localStorage.setItem("var", element.getAttribute("href"));
}


    window.onload = function(){
    // TASK 2
    // TODO: Make the last div color persist even when someone refreshes the page.

    // Steps
    // 2 (a) get stylesheet name from local storage hint: localStorage.getItem(name)
    const sty =  localStorage.getItem("var");
    // 2 (b) get html style element by ID
    const element = document.getElementById("mainStyleSheet");
    // 2 (c) replace href attribute of html element.
		

		
		
		
	const element2 = document.getElementById("secondary");
		
	if(sty == "alt.css" && element.getAttribute("href") == "portfolio.css") {
		element.setAttribute("href", "altport.css");
	}
	else if(sty == "index.css" && element.getAttribute("href") == "portfolio.css"){
		element.setAttribute("href","portfolio.css");
	}
	else if (sty == "alt.css") {
		element.setAttribute("href",sty);			
	}
    else {
		element.setAttribute("href","index.css");					
	}

}
	
	
