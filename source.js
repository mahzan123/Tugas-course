document.getElementById("year").innerHTML = new Date().getFullYear();

function buy(product_name, product_price) {
  const message = `Halo saya mau beli ${product_name} - ${product_price}`
  const whatsapp = `https://wa.me/6285933650257?text=${message}`
  open(whatsapp, "_blank")
}

function chat() {
  const message = `Halo saya mau beli ${'harganya berapa ya.. Apakah boleh ngutang'}`
  const whatsapp = `https://wa.me/6285933650257?text=${message}`
  open(whatsapp, "_blank")
}

/*my brand*/
function img() {
  alert('Yah kok di pencet 😜')
}

/*PRODUCT*/
function beli() {
  const message = `Halo saya mau beli, ${'Harga bajunya berapa kaka'}`
  const whatsapp = `https://wa.me/6285933650257?text=${message}`
  open(whatsapp, "_blank")
}

/*CONTACT*/
function instagram() {
  alert('Yah mimin belum punya akun tuh.. 😌')
}

function telegram() {
  alert('Yah mimin belum punya akun tuh.. 😌')
}

function twitter() {
  alert('Yah mimin belum punya akun tuh.. 😌')
}

function linkedin() {
  alert('Yah mimin belum punya akun tuh.. 😌')
}



/*menu toggle*/
const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function() {
  nav.classList.toggle("slide");
})
