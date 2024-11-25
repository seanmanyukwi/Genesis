let icon0 = document.getElementById("icon0");
icon0.onclick = function(){
    document.body.classList.toggle("dark-theme");
        if(document.body.classList.contains("dark-theme")){
            icon0.src = "Assets/moon (1).png";
}else{
    icon0.src = "Assets/moon.png";
}
}