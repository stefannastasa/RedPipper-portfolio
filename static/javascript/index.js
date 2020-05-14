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
let pStat = true;
let gStat = false;
function toggleAnimation(){
    profile = document.getElementsByClassName("data-profile")[0];
    button = document.getElementsByClassName("ic-btn")[0];
    github = document.getElementsByClassName("data-github")[0];
    


    if(profile.classList.contains("hide-profile") || profile.classList.contains("show-profile")){
        profile.classList.toggle("hide-profile");
        profile.classList.toggle("show-profile");
    }
    else profile.classList.add("hide-profile");
    
    
    if(github.classList.contains("hide-github") || github.classList.contains("show-github")){
        github.classList.toggle("hide-github");
        github.classList.toggle("show-github");
        
    }
    else github.classList.add("show-github");
    
    
    if(!pStat){
        setTimeout(()=>{
            profile.style.display = 'flex';
            github.style.display = 'none';
        },1000);
        
        pStat = true;
    }else{
        setTimeout(()=>{
            profile.style.display = 'none';
            github.style.display = "flex";
        },1000);
        pStat = false;
    }
    

    
    
}

$(document).ready(function(){
    loader();
    setTimeout(()=>{
        profile = document.getElementsByClassName("data-profile")[0];
        if(profile.classList.contains("first-entry"))
            profile.classList.remove("first-entry");
    },5500);
})

button = document.getElementsByClassName("ic-btn"); 
button[0].addEventListener("click", toggleAnimation);
button[1].addEventListener("click", toggleAnimation);
