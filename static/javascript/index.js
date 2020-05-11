var string = "A junior developer \\n <br><span class=corrupter>in love with innovation.</span>"

function loader(){
    var type = new Typed("#typer",{
        strings:[string], 
        startDelay:50,
        typeSpeed:75,
        cursorChar:'|',
        autoInsertCss:true,
        fadeOutDelay:500
    });
    type.start();
    $(".data").hide(0).delay(5000).fadeIn(500);
}

colors:["#000066","#003366","#330000","#330033","#ff6666","#ffcccc","#ffcc66","#ffcc99","#ff6699","#ff9999","#cc9966","#cccc99","#ccccff","#99cc99","#6699cc","#339999","#336699","#333399","#333399","#330066","#339966","#663366","#99ccff","#99cccc","#996699","#9999cc","#666699","#336666","#333366","#333366","#006666","#003333","#c05030","#cc8019","#6a9a71","#0b321c","#104c21","#56508b","#5f5ba4","#37386d","#cdb5cd","#8b7b8b"]

$(document).ready(function(){
    loader();

})