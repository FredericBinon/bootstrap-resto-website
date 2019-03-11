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

  let now = new Date();
  let annee = now.getFullYear();
  let mois = now.getMonth() + 1;
  let day = now.getDay();
  let tab_day=new Array("dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi");
  let jour = now.getDate();
  let heure = now.getHours();
  let minute = now.getMinutes();

  document.querySelector(".date").innerHTML="Nous sommes le "+tab_day[day]+" "+jour+"/"+mois+"/"+annee+" et il est "+heure+" heure "+minute+" minutes."

  if ((heure<10)&&(heure>1)||(day==1)){
    document.querySelector(".ouvertureParis").style.color="red";
    document.querySelector(".ouvertParis").style.color="red";
    document.querySelector(".ouvertParis").innerText="Le restaurant est fermè..";
    document.querySelector(".ouvertParis").style.display = "inherit";
  }
  else{
    document.querySelector(".ouvertParis").style.display = "inherit";
    document.querySelector(".ouvertureParis").style.color="green";
    document.querySelector(".ouvertParis").innerText="Le restaurant est ouvert!";
  }

  if ((heure<12)||(heure>23)||(day==1)){
    document.querySelector(".ouvertureBruxelles").style.color="red";
    document.querySelector(".ouvertBruxelles").style.color="red";
    document.querySelector(".ouvertBruxelles").innerText="Le restaurant est fermè..";
    document.querySelector(".ouvertBruxelles").style.display = "inherit";
  }
  else{
    document.querySelector(".ouvertBruxelles").style.display = "inherit";
    document.querySelector(".ouvertureBruxelles").style.color="green";
    document.querySelector(".ouvertBruxelles").innerText="Le restaurant est ouvert!";
  }

  if ((heure<11)||(heure>23)||(day==1)){
    document.querySelector(".ouvertureQeqertanut").style.color="red";
    document.querySelector(".ouvertQeqertanut").style.color="red";
    document.querySelector(".ouvertQeqertanut").innerText="Le restaurant est fermè..";
    document.querySelector(".ouvertQeqertanut").style.display = "inherit";
  }
  else{
    document.querySelector(".ouvertQeqertanut").style.display = "inherit";
    document.querySelector(".ouvertureQeqertanut").style.color="green";
    document.querySelector(".ouvertQeqertanut").innerText="Le restaurant est ouvert!";
  }

  document.querySelector(".paris").addEventListener("click", ()=>{
    document.querySelector(".map").innerHTML = "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.2496369472306!2d2.3147018154032786!3d48.85344990900906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6702bc443b145%3A0xcfadda8932120f5f!2s24+Rue+Barbet+de+Jouy%2C+75007+Paris%2C+France!5e0!3m2!1sfr!2sbe!4v1551783989758' width='600' height='450' frameborder='0' style='border:0' allowfullscreen></iframe>";
  });

  document.querySelector(".bruxelles").addEventListener("click", ()=>{
    document.querySelector(".map").innerHTML = "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d629.1438911650281!2d4.341159829237995!3d50.89456544462225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c24a103d4233%3A0x90a7d5a379108a90!2sSquare+de+l&#39;Atomium%2C+1020+Bruxelles!5e0!3m2!1sfr!2sbe!4v1551783824217' width='600' height='450' frameborder='0' style='border:0' allowfullscreen></iframe>";
  });

  document.querySelector(".qeqertanut").addEventListener("click", ()=>{
    document.querySelector(".map").innerHTML = "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1737.731531944447!2d-51.708318683988644!3d64.18024342003878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ea20dc5191053df%3A0x65c7aefa6f30b40!2sQeqertanut%2C+Nuuk+3905%2C+Groenland!5e0!3m2!1sfr!2sbe!4v1551712768667' width='600' height='450' frameborder='0' style='border:0' allowfullscreen></iframe>";
  });

}
