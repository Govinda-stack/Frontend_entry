const track = document.querySelector('.testimonial-track');
const dots = document.querySelectorAll('.dot');
let index = 0;

function updateSlider() {
  track.style.transform = `translateX(-${index * 430}px)`;
  dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
}

document.querySelector('.next').onclick = () => {
  index = (index + 1) % dots.length;
  updateSlider();
};

document.querySelector('.prev').onclick = () => {
  index = (index - 1 + dots.length) % dots.length;
  updateSlider();
};

dots.forEach((dot, i) => {
  dot.onclick = () => {
    index = i;
    updateSlider();
  };
});

function sendMessage(event) {
  event.preventDefault();
  
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill all fields!");
    return false;
  }
  alert(`Thanks ${name}! Your message has been sent successfully.`);
  document.querySelector(".contact-form").reset();
  return false;
}