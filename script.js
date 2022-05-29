const API_WHATSAPP = "https://web.whatsapp.com/send?phone=";

const cliente = document.querySelector("#number-client");
const message = document.querySelector("#mensaje-client");
function send() {
  const phone = cliente.value;
  const text = message.value;
  const url = API_WHATSAPP + phone + "&text=" + text;
  window.open(url);
}
