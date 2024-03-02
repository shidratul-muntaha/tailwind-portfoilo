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

