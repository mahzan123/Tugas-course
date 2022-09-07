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

/*CATEGORY*/
function beli() {
  const message = `Halo saya mau beli, ${'Harga bajunya berapa kaka'}`
  const whatsapp = `https://wa.me/6285933650257?text=${message}`
  open(whatsapp, "_blank")
}
