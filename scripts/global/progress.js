function openProgress() {
  $(function () {
    $("#root").load("components/progressPage/progress.html", function () {
      loadCards();
      showHeaderAndFooter(false);
    });
  });
}

function showHeaderAndFooter(show) {
  document.getElementById("navbar").style.display = show ? "flex" : "none";
  document.getElementById("footer").style.display = show ? "flex" : "none";
}

// page: 1,
// title: "Visão geral",
// description:
//   "Identificar as propriedades em uma blockchain e sua relação com as criptomoedas",

function loadCards() {
  const ueCards = document.getElementById("ue-cards");

  capes.forEach((data) => {
    console.log(data);

    const div = document.createElement("div");

    div.innerHTML = data.page + "\n\n" + data.title + "\n\n" + data.description;

    ueCards.appendChild(div);
  });
}

function handleClickUeCard(ue) {
  ueData.currentPage = ue;

  carregarHTML(ueData.currentPage);
}
