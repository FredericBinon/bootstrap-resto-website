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

  document.querySelector("#list").addEventListener("change",function(e){
    console.log(e.target.value);
    if (e.target.value==2){
      console.log(document.querySelector("#reservResto"));
      document.querySelector("#reservResto").style.display="block";
    }
    else{
      document.querySelector("#reservResto").style.display="none";
      document.querySelector("#reservJour").style.display="none";
      document.querySelector("#reservParis").style.display="none";
      document.querySelector("#reservBruxelles").style.display="none";
      document.querySelector("#reservQeqertanut").style.display="none";
    }
  });

  document.querySelector("#reservResto").addEventListener("change",function(e){
    console.log(e.target.value);
    document.querySelector("#reservJour").style.display="block";
    if (e.target.value=="paris"){
      document.querySelector("#reservParis").style.display="block";
    }
    else{
      document.querySelector("#reservParis").style.display="none";
    }
    if (e.target.value=="bruxelles"){
      document.querySelector("#reservBruxelles").style.display="block";
    }
    else{
      document.querySelector("#reservBruxelles").style.display="none";
    }
    if (e.target.value=="qeqertanut"){
      document.querySelector("#reservQeqertanut").style.display="block";
    }
    else{
      document.querySelector("#reservQeqertanut").style.display="none";
    }
  });
}
