
const gifts = [
  {
    name: "Fralda M - Huggies Tripla Proteção",
    image: "fralda.jpg"
  },
  {
    name: "Lenço Umedecido Huggies",
    image: "lenço.jpg"
  },
  {
    name: "Pomada Bepantol Baby",
    image: "pomada.jpg"
  },
  {
    name: "Álcool 70% Giovanna Baby",
    image: "alcool.jpg"
  },
  {
    name: "3 Pacotes de Gaze Estéril",
    image: "gazes.jpg"
  },
  {
    name: "Óleo Mamãe e Bebê",
    image: "oleo.webp"
  },
  {
    name: "Tesourinha e Kit Unhas",
    image: "tesoura.jpg"
  },
  {
    name: "Cotonete Bellacotton",
    image: "Contonete.jpg"
  }
];

const list = document.getElementById("gift-list");
gifts.forEach(item => {
  const div = document.createElement("div");
  div.className = "gift-item";
  div.innerHTML = `
    <img src="\${item.image}" alt="\${item.name}" />
    <p>\${item.name}</p>
  `;
  list.appendChild(div);
});
