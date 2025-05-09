//Enviar formulario para api

let formElement = document.querySelector(".form");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(formElement);
  const data = Object.fromEntries(formData.entries());

  fetch("https://681cf9b7f74de1d219ae6c50.mockapi.io/eletronicos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      alert("Enviado com sucesso");
    })
    .catch((error) => console.error("Erro:", error));
});
