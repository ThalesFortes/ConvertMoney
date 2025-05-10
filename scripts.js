// Obtendo os elementos do formulario.
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")

// Manipulando o input para receber somente numeros
amount.addEventListener("input", () => {
  const hasCharacterRegex = /\D+/g
  amount.value = amount.value.replace(hasCharacterRegex, "")
})

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(currency.value)
})
