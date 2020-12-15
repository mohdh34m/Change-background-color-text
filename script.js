var color = ["#FE2E2E", "#FF8000", "#FFFF00", "#80FF00", "#00FFFF", "#FF00FF"]

var i = 0;
document.getElementById("button").addEventListener("click", 
    function(){
        i = i < color.length ? ++i : 0;
        document.querySelector("body").style.background = color[i];
        console.log(color[i])
        const hex = document.getElementById('hex-value')
        hex.innerHTML = color[i]
})

