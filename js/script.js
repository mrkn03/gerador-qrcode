const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");

const qrCodeInput = document.querySelector("#qr-form input");

const qrCodeImg = document.querySelector("#qr-code img");

// Events

// Gerar QR Code
function generateQrCode() {
  const qrcodeInputValue = qrCodeInput.value;

  if (!qrcodeInputValue) return;

  qrCodeBtn.innerText = "Gerando código...";

  qrCodeImg.src = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrcodeInputValue}`;

  qrCodeImg.addEventListener("load", () => {
    container.classList.add("active");
    qrCodeBtn.innerText = "Código criado!"
  });
}

qrCodeBtn.addEventListener("click", () => {
  generateQrCode();
});

qrCodeInput.addEventListener("keydown", () => {
  if(event.code === "Enter"){
    generateQrCode()
  }
});

// Limpar area do qrcode
qrCodeInput.addEventListener("keyup", ()=>{
    if(!qrCodeInput.value){
        container.classList.remove("active")
        qrCodeBtn.innerText = "Gerar QR Code"
    }
})