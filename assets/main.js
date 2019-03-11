window.onload = () => {

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

}
