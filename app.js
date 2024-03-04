const form = document.getElementById('form');
const submitBtn = document.getElementById('submit-btn');

const serviceId = 'service_0i6u5wu'
const templateId = "template_i3bw1j9"

form.addEventListener("submit", (e) => {
   e.preventDefault();
   const params = {
      name: e.target["name"].value,
      email: e.target["email"].value,
      message: e.target["message"].value.trim()
   }
   // console.log(props);
   sendEmail(params, e)
})

async function sendEmail(params, e) {
   if (!params.name || !params.email || !params.message) {
      alert("Form could not be empty!!")
      return
   }

   submitBtn.disabled = true
   try {
      const response = await emailjs.send(serviceId, templateId, params)
      console.log('SUCCESS YOUR MESSAGE!', response.status, response.text);
      alert('SUCCESS YOUR MESSAGE!', response.status, response.text)
      e.target.reset()
      submitBtn.disabled = false
   } catch (error) {
      console.log('FAILED...', error);
      alert('FAILED...', error)
   }
}




class TextAnimator {
   constructor(selector, options) {
       this.text = document.querySelector(selector);
       this.strText = this.text.textContent.trim();
       this.splitText = this.strText.split("");
       this.text.textContent = "";
       this.options = options || {};
       this.margin = this.options.margin || '0px';
       this.delay = this.options.delay || 0;
       this.class = this.options.class || 'text-span';
   }

   animate() {
       for (let i = 0; i < this.splitText.length; i++) {
           if (this.splitText[i] === " ") {
               this.text.innerHTML += "&nbsp;";
           } else {
               this.text.innerHTML += "<span class='"+ this.class + "' style='margin-right:" + this.margin + ";animation-delay:" + (i * this.delay) + "ms;'><span class='fade-in' style='animation-delay:" + (i * this.delay) + "ms;'>" + this.splitText[i] + "</span></span>";
           }
       }
   }
   
}

const animator = new TextAnimator('.text-blob', {
  
   delay: 100,
   class: "text-blob__letter"
});
animator.animate();




const words = ["Freelancer", "Web Developer", "Coder","Designer", "Programmar"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type() {
  currentWord = words[i];
  if (isDeleting) {
    document.getElementById("typewriter").textContent = currentWord.substring(0, j-1);
    j--;
    if (j == 0) {
      isDeleting = false;
      i++;
      if (i == words.length) {
        i = 0;
      }
    }
  } else {
    document.getElementById("typewriter").textContent = currentWord.substring(0, j+1);
    j++;
    if (j == currentWord.length) {
      isDeleting = true;
    }
  }
  setTimeout(type, 100);
}

type();