window.onload = function() {
    // TODO:: Do your initialization job

    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if (e.keyName === "back") {
            try {
                tizen.application.getCurrentApplication().exit();
            } catch (ignore) {}
        }
    });
    
    // Sample code
    var mainPage = document.querySelector('#main');
    
    var btn = mainPage.querySelector('#image');
    var im_f = 0;
    
    btn.addEventListener("click", function() {
    	var tiz_img = mainPage.querySelector('#tiz_img');
    	if (im_f === 0) {
    		tiz_img.style.visibility = "hidden"; 
    		im_f = 1;
    	} else {
    		tiz_img.style.visibility = "visible"; 
    		im_f = 0;
    	}
         	
    });
    
    var btn_res = mainPage.querySelector('#res');
    var res_f = 0;
    
    btn_res.addEventListener("click", function() {
    	var contentText = mainPage.querySelector('#content-text');
    	if (res_f === 0) {
   		contentText.innerHTML = screen.height + "x" + screen.width;
    		res_f = 1;
    	} else {
    		contentText.innerHTML = "";
    		res_f = 0;
    	}
    });

//    mainPage.addEventListener("click", function() {
//        var contentText = document.querySelector('#content-text');
//
//        contentText.innerHTML = (contentText.innerHTML === "Basic") ? "Tizen" : "Basic";
//    });
};