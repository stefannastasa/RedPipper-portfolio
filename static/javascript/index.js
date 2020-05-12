var string = "A junior developer \\n <br><span class=corrupter>in love with innovation.</span>"

function loader(){
    var type = new Typed("#typer",{
        strings:[string], 
        startDelay:50,
        typeSpeed:50,
        cursorChar:'|',
        autoInsertCss:true,
        fadeOutDelay:500
    });
    type.start();
}

$(document).ready(function(){
    loader();
    
})
document.getElementsByClassName("ic-btn").onclick = function(){toggleAnimation()}
