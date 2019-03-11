window.onload = () => {
  let changement=0;

  setTimeout(()=>{
    let name = prompt("Hello, can we have your name please ?");
    if (name!=null){
      document.querySelector(".connexion").innerText = ("Bonjour " + name + " !");
    }
  },500)

  document.querySelector(".fondheader").addEventListener("mouseover", mouseOver);
  document.querySelector(".fondheader").addEventListener("mouseout", mouseOut);

  function mouseOver() {
    document.querySelector(".fondheader").style.backgroundImage = "url('assets/img/bg3.jpg')";
    document.querySelector(".fondheader").style.transition = ".3s";
    document.querySelector(".presentation").style.display = "inherit";
  };

  function mouseOut() {
    document.querySelector(".fondheader").style.backgroundImage = "url('assets/img/header.jpg')";
    document.querySelector(".presentation").style.display = "none";
  };

  setInterval(()=>{
    console.log(changement);
    changement+=1;
    if (changement==1){
      document.querySelector("#contentNew img").src = "assets/img/platJour1.jpg";
    }
    if (changement==2){
      document.querySelector("#contentNew img").src = "assets/img/platJour2.jpg";
    }
    if(changement>2){
      document.querySelector("#contentNew img").src = "assets/img/platJour.jpg";
      changement=0;
    }
  },4000)

}
