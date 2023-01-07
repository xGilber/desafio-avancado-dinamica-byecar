/* 01 - Disponibilização de Dados para Criação de Card */

const ITEM_VIEW = [
  {
    title: "Scooter Elétrica Voltz EV1",
    img: "./assets/img-card-1.png",
    principaltext: "O motor da Scooter Elétrica Voltz EV1 maior autonomia e desempenho, tornando suas viagens econômicas e confortáveis!"
  },
  {
    title: "Honda CB 500X",
    img: "./assets/img-card-2.png",
    principaltext: "O câmbio de 6 marchas da CB 500X oferece maior confiança e performance na pilotagem, tornando as subidas de marcha mais leves e as reduções mais suaves!"

  },
];


/* 02 - Atribuição dos Elementos para uso */
let liEls = document.querySelectorAll(".carousel-cards li");
let modalEl = document.querySelector("#modal");
let index = 0;


/* 03 - Criação da função para incremento do carousel */
function show(increase) {
  index = index + increase;
  index = Math.min(Math.max(index, 0), liEls.length - 1);
  liEls[index].scrollIntoView({ behavior: "smooth" });
}


/* 04 - Criação da função para Exibir e criar Card */
function showModal() {
  modalEl.innerHTML = ` 
  <div class="modal-view">
    <div id="btnclosediv">
      <button onclick="modalClose()" id="btnclose">
        <img src="./assets/close-btn.svg" alt="close-button" />
      </button>
    </div>

    <div id="modaltitle">
      <h2>  
      ${ITEM_VIEW[index].title}
      </h2>
    </div>

    <div id="principaltext">
      <p>
      ${ITEM_VIEW[index].principaltext}
      </p>
    </div>

    <div id="modalimg">
      <img src="${ITEM_VIEW[index].img}" alt="moto" />
    </div>

    <div id="sign">
      <button id="btnsign">Quero Assinar!</button>
    </div>
  
  </div>
  `;
  modalEl.style.visibility = "visible";
}

/* 05 - Função para fechar o Modal */
function modalClose() {
  modalEl.style.visibility = "hidden";
}
