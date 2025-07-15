const giftList = [
    { id: 1, nome: "Fralda RN + Pacote algodão bolinha", total: 1, reservado: 0 },
    { id: 2, nome: "Fralda RN + Sabonete neutro", total: 1, reservado: 0 },
    { id: 3, nome: "Fralda P + Pacote algodão quadrado", total: 1, reservado: 0 },
    { id: 4, nome: "Fralda P + Sabonete neutro", total: 1, reservado: 0 },
    { id: 5, nome: "Fralda P + Lenço umedecido", total: 1, reservado: 0 },
    { id: 6, nome: "Fralda GG + Lenço umedecido", total: 1, reservado: 0 },
    { id: 7, nome: "Fralda GG + Pomada de prevenção contra assaduras", total: 1, reservado: 0 },
    { id: 8, nome: "Fralda P + Pomada de prevenção contra assaduras", total: 1, reservado: 0 },
    { id: 9, nome: "Fralda G + Lenço umedecido", total: 1, reservado: 0 },
    { id: 10, nome: "Fralda G + Pomada de prevenção contra assaduras", total: 1, reservado: 0 },
    { id: 11, nome: "Fralda M + Pomada de prevenção contra assaduras", total: 1, reservado: 0 },
    { id: 12, nome: "Fralda M + Pacote algodão quadrado", total: 1, reservado: 0 },
    { id: 13, nome: "Fralda M + Shampoo para bebê neutro", total: 1, reservado: 0 },
    { id: 14, nome: "Fralda M + Pomada de prevenção contra assaduras", total: 1, reservado: 0 },
    { id: 15, nome: "Fralda M + Lenço umedecido", total: 1, reservado: 0 },
    { id: 16, nome: "Fralda M + Caixinha de cotonetes", total: 1, reservado: 0 },
    { id: 17, nome: "Fralda M + Caixinha de cotonetes", total: 1, reservado: 0 },
    { id: 18, nome: "Fralda M + Pacote de algodão bolinha", total: 1, reservado: 0 },
    { id: 19, nome: "Fralda M + Óleo para bebê", total: 1, reservado: 0 },
    { id: 20, nome: "Fralda M + Lenço umedecido", total: 1, reservado: 0 },
    { id: 21, nome: "Fralda M + Álcool 70%", total: 2, reservado: 0 },
    { id: 22, nome: "Fralda M + 3 pacotinhos de gaze estéril", total: 2, reservado: 0 },
    { id: 23, nome: "Fralda M + Tesourinha p/ unhas de bebê", total: 1, reservado: 0 },
    { id: 24, nome: "Fralda M + Lenço umedecido", total: 1, reservado: 0 },
    { id: 25, nome: "Fralda G + Escova p/ cabelo de bebê", total: 1, reservado: 0 },
    { id: 26, nome: "Fralda G + Pomada de prevenção contra assaduras", total: 1, reservado: 0 },
    { id: 27, nome: "Fralda G + Lenço umedecido", total: 1, reservado: 0 },
    { id: 28, nome: "Fralda G + Lenço umedecido", total: 1, reservado: 0 }
];


function renderGifts() {
    const container = document.getElementById("gift-list");
    container.innerHTML = "";
    giftList.forEach(item => {
        const restante = item.total - item.reservado;
        const div = document.createElement("div");
        div.className = "gift-item";
        div.innerHTML = `
            <h3>${item.nome}</h3>
            <p>Preciso de: ${item.total}</p>
            <p><strong>Faltam: ${restante}</strong></p>
            <button onclick="alert('Esse item será marcado para você. Obrigado!')">Vou levar</button>
        `;
        container.appendChild(div);
    });
}
renderGifts();
