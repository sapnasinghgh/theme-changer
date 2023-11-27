// in this project we ckick come button and than change the bcakground color of body
// theme color changer
const buttons = document.querySelectorAll(".button");
const bodyvar = document.querySelector("body");

  buttons.forEach((button) =>{
    console.log(button);
    button.addEventListener("click", (e) =>{
       console.log(e)
       console.log(e.target)

       if(e.target.id === "grey")
       {
        bodyvar.style.backgroundColor = e.target.id
       }
        if(e.target.id === "white")
       {
        bodyvar.style.backgroundColor = e.target.id
       }
        if(e.target.id === "blue")
       {
        bodyvar.style.backgroundColor = e.target.id
       }
        if(e.target.id === "yellow")
       {
        bodyvar.style.backgroundColor = e.target.id
       }

    })
})



     
  
