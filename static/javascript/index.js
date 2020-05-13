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

function toggleAnimation(){
    profile = document.getElementsByClassName("data-profile")[0];
    button = document.getElementsByClassName("ic-btn")[0];
    github = document.getElementsByClassName("data-github")[0];
    
    if(profile.classList.contains("hide-profile") || profile.classList.contains("show-profile")){
        profile.classList.toggle("hide-profile");
        profile.classList.toggle("show-profile");
        if(profile.style.display != 'flex')
            profile.style.display = 'none';
        else profile.style.display = 'flex';
    }
    else profile.classList.add("hide-profile");
    
    if(github.classList.contains("hide-github") || github.classList.contains("show-github")){
        github.classList.toggle("hide-github");
        github.classList.toggle("show-github");
        
        if(github.style.display == 'none')
            github.style.display = 'flex';
        else github.style.display = 'none';
    }
    else github.classList.add("show-github");
    
    profile.hidden = !profile.hidden;
    github.hidden = !github.hidden;
    
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
