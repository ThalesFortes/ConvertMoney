// Cotação de moedas do dias
const USD = 4.87;
const EUR = 5.32;
const GBP = 6.08;

// Obtendo os elementos do formulario.
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const description = document.getElementById("description")
const footer = document.querySelector("main footer")

// Manipulando o input para receber somente numeros
amount.addEventListener("input", () => {
  const hasCharacterRegex = /\D+/g
  amount.value = amount.value.replace(hasCharacterRegex, "")
})

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$")
      break
    case "EUR":
      convertCurrency(amount.value, EUR, "€")
      break
    case "GBP":
      convertCurrency(amount.value, GBP, "£")
      break
  }
})


// Função para converter a moeda
function convertCurrency (amount, price, symbol){
  try {
    // Exibindo cotação da moeda selecionada
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

    // Aplica a classe que exibe o fotter para mostra o resultado
    footer.classList.add("show-result")
  } catch (error){
    console.log(error)
    // Remove a classe que exibe o fotter para mostra o resultado
    footer.classList.remove("show-result")
    alert("Não foi possivel converter. Tente novamente")
  };
  
  
}

function formatCurrencyBRL(value){
  return Number(value).toLocaleString("pt-BR",{
      style:"currency",
      currency:"BRL",
    }
  )
}