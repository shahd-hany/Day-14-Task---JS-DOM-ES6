/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particlesjs-config.json', function() {
  console.log('callback - particles.js config loaded');
});

// box content
var box1=''
for (i=1 ;i<=2 ;i++){
 box1+=`
                <div class="card-image shadow" style="cursor:pointer ;background-color:white; padding:10px ;">
                        <img src="./images/${i}.jpeg">
                </div>
 `
}
var box2=''
for (i=3 ;i<=6 ;i++){
 box2+=`
                <div class="card-image shadow" style="cursor:pointer ;background-color:white; padding:10px ;">
                        <img src="./images/${i}.jpeg">
                </div>
 `
}
document.getElementById("side-imgs").innerHTML=box1;
document.getElementById("down-imgs").innerHTML=box2;
let mainImage=document.querySelector("#main-img img");
let cards=document.querySelectorAll(".card-image");
let firstImage=document.querySelector(".card-image")
let index=0;
for (let i = 0; i < cards.length; i++) {
  //click event
  cards[i].addEventListener("click", (e) => {
    let img = e.target;
    if (img.tagName === "IMG") {
      mainImage.setAttribute("src", img.getAttribute("src"));
    }
  });

 //mouseenter event 
  cards[i].addEventListener("mouseenter",()=>{
    console.log("you are now on a furniture card");
    
  })
}

document.addEventListener("keypress",(e)=>{
  if(e.key=='r'||e.key=='R'){
    index+=1;
    if(index == cards.length){
      index=0;
    }
    let currentImage=cards[index];
    let img=currentImage.querySelector("img");
    mainImage.setAttribute("src",img.getAttribute("src"));
    
    
    
  }
  if(e.key=='l'||e.key=='L'){
    index=index-1;
    if(index == -1){
      index=cards.length-1;
    }
    let currentImage=cards[index];
    let img=currentImage.querySelector("img");
    mainImage.setAttribute("src",img.getAttribute("src"));
    
  }
  
})




