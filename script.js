let imgBox = document.getElementById("imgBox")
let qrImage = document.getElementById("qrImage")
let qrText = document.getElementById("qrText")
let btnApagarText = document.querySelector(".apagarText")
let button = document.querySelector(".genButton")
let modal = document.querySelector(".modal")
let grayBack = document.querySelector(".grayBack")
let closeBtn = document.querySelector(".closeBtn")
let modalError = document.querySelector(".modalError")
let printBtn = document.querySelector(".printBtn")

//Põe o focus do cursor na TextArea

qrText.focus()

//************************************************************ */

//Função para gerar o código QRCode

function generateQR() {
  imgBox.classList.add("show-img")
  qrImage.src =
    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
    qrText.value.replace(/\n/g, "%0A")
}

//************************************************************ */

//Botão para apagar o texto na caixa de input

btnApagarText.addEventListener("click", () => {
  qrText.value = ""
  qrText.focus()
})

//************************************************************ */

//Botão para gerar o QR Code

button.addEventListener("click", () => {
  if (qrText.value.trim() === "") {
    modalError.classList.add("modalErrorShowUp")
    grayBack.classList.add("grayBackShowUp")
  } else {
    grayBack.classList.add("grayBackShowUp")
    modal.classList.add("modalShowUp")
    generateQR()
  }
})

//************************************************************ */

//Botão para fechar o modal

closeBtn.addEventListener("click", () => {
  grayBack.classList.remove("grayBackShowUp")
  modal.classList.remove("modalShowUp")
  qrText.focus()
})

//************************************************************ */

//Escape para fechar o modal

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    grayBack.classList.remove("grayBackShowUp")
    modal.classList.remove("modalShowUp")
    modalError.classList.remove("modalErrorShowUp")
    qrText.focus()
  }
})

//************************************************************ */

//Botão para imprimir o QRCode

printBtn.addEventListener("click", () => {
  if (qrImage) {
    // Adiciona a classe 'printable' ao #qrImage
    qrImage.classList.add("printable")
    window.print()
    // Remove a classe 'printable' após a impressão
    qrImage.classList.remove("printable")
  } else {
    console.log("error")
  }
})
