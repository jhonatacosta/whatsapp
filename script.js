const API_WHATSAPP = "https://api.whatsapp.com/send?phone=";

const cliente = document.querySelector("#number-client");
function send() {
  let phone = cliente.value;
  let url = API_WHATSAPP + phone;
  window.open(url);
}

(function () {
  $("form").each(function () {
    $(this)
      .find("input")
      .keypress(function (e) {
        // Enter pressed?
        if (e.which == 10 || e.which == 13) {
          this.form.submit();
        }
      });

    $(this).find("input[type=submit]").hide();
  });
});
