const texts = [
    "ATHIS MITHUN",
    "AEROSPACE ENGINEER"
]

let speed  =100;
const textElements = document.querySelector(".text");

let textIndex = 0;
let charcterIndex = 0;

function typeWriter(){
    if (charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed); 
    }
    else{
        setTimeout(eraseText, 1000)
    }
}

function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1);
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500)
    }
}

document.addEventListener('DOMContentLoaded', () => {
    AOS.init({offset:0});
  });


  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
  
    var formData = new FormData(this);
  
    fetch(this.action, {
      method: this.method,
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        console.log('Sample Button Clicked')
        document.getElementById('successMessage').classList.add('active');
        this.reset(); // Reset the form fields
      } else {
        alert('There was a problem with your submission.');
      }
    }).catch(error => {
      console.error('Error:', error);
      alert('There was a problem with your submission.');
    });
  });
  
  
const circles = document.querySelectorAll('.circle');

circles.forEach(circle => {
    const dots = parseInt(circle.getAttribute("data-dots"));
    const marked = parseInt(circle.getAttribute("data-percent"));
    const percent = Math.floor((dots * marked) / 100);
    let points = '';
    const rotate = 360 / dots;
    // console.log(rotate)
    
    for (let i = 0; i < dots; i++) {
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }

    circle.innerHTML = points;
    const pointsMarked = circle.querySelectorAll('.points');

    for (let i = 0; i < percent; i++) {
        pointsMarked[i].classList.add('marked');
    }
});


window.onload = typeWriter