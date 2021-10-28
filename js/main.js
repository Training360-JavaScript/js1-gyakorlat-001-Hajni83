handleClick = () => {
    for (i = 0; i < 3; i++){
        document.getElementsByClassName("button")[i].addEventListener("click", function(event){
            console.log(event.target.innerHTML);
        })
    }
};

