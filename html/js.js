let night = null;
night = localStorage.getItem("css_state");
console.log(night);
//Quand c'est décoché c'est vert
//If night mode running, make sure check button is checked and css is disabled.
function runCheck(){
    if(night!=null)
    {
        console.log('run chec')
        //document.getElementById("mode").attr('checked', true);
    }
}


$(document).ready(function(){
    
    if(night!=null)
    {
       let status_mod =null
       $("#mode").attr('checked', true);
       console.log(status_mod)
    }
    //If the user click folder, display hidden content
    $("#folders").click(function(){
        $("#content").toggleClass("hideme");
    });
    //if the user clicks on the year, display hidden list
    $("#2020").click(function(){
        $("#list").toggleClass("hideme");
    });

    
    if (localStorage['css_state']) {
        night = localStorage['css_state'];
        console.log("There is 'css_state' in session storage " + night);
        $("#night").prop("disabled", "disabled");
    }
    else{
        $("#night").removeAttr('disabled');
        console.log("there isn't a css_state' in session storage")
    }
 
    }); //End jquery_ready



document.getElementById("mode").onclick = function() {
    if ( this.checked ) {
        $("#night").prop("disabled", "disabled");
        localStorage.setItem("css_state", "false");
        night = localStorage.setItem("css_state", "false");
        console.log(localStorage.css_state)
    } else {
        $("#night").removeAttr('disabled'); 
        localStorage.setItem("css_state", "true");
        night = localStorage.setItem("css_state", "true");
        console.log(localStorage.css_state)
    }
}



runCheck();