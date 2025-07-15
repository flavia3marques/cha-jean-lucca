
const presentes = [
  "Fralda RN + Pacote algodão bolinha",
  "Fralda RN + Sabonete neutro",
  "Fralda P + Pacote algodão quadrado",
  "Fralda P + Sabonete neutro",
  "Fralda P + Lenço umedecido",
  "Fralda GG + Lenço umedecido",
  "Fralda GG + Pomada de prevenção contra assaduras",
  "Fralda P + Pomada de prevenção contra assaduras",
  "Fralda G + Lenço umedecido",
  "Fralda G + Pomada de prevenção contra assaduras",
  "Fralda M + Pomada de prevenção contra assaduras",
  "Fralda M + Pacote algodão quadrado",
  "Fralda M + Shampoo para bebê neutro",
  "Fralda M + Pomada de prevenção contra assaduras",
  "Fralda M + Lenço umedecido",
  "Fralda M + Caixinha de cotonetes",
  "Fralda M + Caixinha de cotonetes",
  "Fralda M + Pacote de algodão bolinha",
  "Fralda M + Óleo para bebê",
  "Fralda M + Lenço umedecido",
  "Fralda M + Álcool em gel 70%",
  "Fralda M + Álcool em gel 70%",
  "Fralda M + 3 pacotinhos de gaze estéril",
  "Fralda M + 3 pacotinhos de gaze estéril",
  "Fralda M + Tesourinha para unhas de bebê",
  "Fralda M + Lenço umedecido",
  "Fralda G + Escova para cabelo de bebê",
  "Fralda G + Pomada de prevenção contra assaduras",
  "Fralda G + Lenço umedecido",
  "Fralda G + Lenço umedecido",
  "Trocador portátil",
  "Livros para bebês",
  "Babá eletrônica",
  "Almofada de amamentação",
  "Pares de luva + paninhos de boca",
  "Macacão + Gorro",
  "Manta Leve",
  "Burigotto Kit Banho Branco",
  "Bomba tira leite",
  "Body + Calça",
  "Mijão+ Sapatinho",
  "Camiseta com manga + regatas",
  "Meias + luvas"
];

const lista = document.getElementById('lista-presentes');
const contador = {};

presentes.forEach((item, index) => {
  const nomeItem = item.trim();
  contador[nomeItem] = (contador[nomeItem] || 0) + 1;
});

const exibidos = new Set();

presentes.forEach((item, index) => {
  if (exibidos.has(item)) return;
  exibidos.add(item);

  const div = document.createElement('div');
  div.className = 'item';
  const qtd = contador[item];

  div.innerHTML = `
    <h3>${item}</h3>
    <p>Quantidade disponível: ${qtd}</p>
    <button onclick="reservar(${index})">Vou levar</button>
  `;
  lista.appendChild(div);
});

function reservar(index) {
  const item = presentes[index];
  window.location.href = \`reserva.html?item=\${encodeURIComponent(item)}\`;
}
