function openProgress() {
  $(function () {
    $("#root").load("components/progressPage/progress.html", function () {
      loadCards();
      pagesComplete();
      showHeaderAndFooter(false);
      continueCourse();
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

var lastPage = ueData.lastPageSeen;
var totalOfPages = ueData.totalOfPages

function continueCourse(){
  const continueCourse = document.getElementById("continue-course");
  continueCourse.addEventListener("click", function() {
    $("#root").load("aulas/ue" + lastPage + ".html#root", function () {
      currentPage = lastPage;

      // updateLessonPage();

      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;

      loadUeInformation(lastPage);

      hidePageButton();
      createImages();
      summaryInit(currentPage);
      sideBarInit();
      configPs();
      showHeaderAndFooter(true);
    });
  });
}

function pagesComplete(){
  const barPagesComplete = document.getElementById("bar-pages-complete");
  barPagesComplete.style.width = ((lastPage / totalOfPages) * 100)+"%"

  const pagesComplete = document.getElementById("pages-complete");
  pagesComplete.innerHTML = "<strong>" + lastPage + "</strong> / " + totalOfPages
}

function loadCards() {
  const ueCards = document.getElementById("ue-cards");

  capes.forEach((data) => {
    const disabled = data.page > lastPage;

    const buttonMain = document.createElement("button");
    buttonMain.className = 
    "w-full p-4 rounded-md border border-gray-500 bg-gray-overlay-120 text-gray-200 dark:text-gray-900 text-left flex flex-col items-start min-h-135 "
    + (lastPage == data.page ? "border-secondary-500 border-secondary-700 " : "border-gray-500 ")
    + (!disabled ? "hover:border-secondary-500" : "opacity-50")

    buttonMain.disabled = disabled;

    buttonMain.addEventListener("click", function() {
      // Navigate to the new page
      $("#root").load("aulas/ue" + data.page + ".html#root", function () {
        currentPage = data.page;

        // updateLessonPage();

        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;

        loadUeInformation(data.page);

        hidePageButton();
        createImages();
        summaryInit(currentPage);
        sideBarInit();
        configPs();
        showHeaderAndFooter(true);
      });
    });

    let divPageAndName = createPageAndName(data);
    let divDescription = createDescription(data);
    let divBar = createBar(data);
    
    buttonMain.appendChild(divPageAndName)
    buttonMain.appendChild(divDescription)
    buttonMain.appendChild(divBar)

    ueCards.appendChild(buttonMain);
  });
}

function createPageAndName(data){

  let divPageName = document.createElement("div");
  divPageName.className = "flex flex-row items-center "

  let h1Page = document.createElement("h1");
  h1Page.className = "font-semibold text-5xl mr-4 "
  h1Page.innerHTML = data.page

  let h2Name = document.createElement("h2");
  h2Name.className = "font-bold text-lg "
  h2Name.innerHTML = data.title

  divPageName.appendChild(h1Page)
  divPageName.appendChild(h2Name)

  return divPageName;
}

function createDescription(data){

  let divDescription = document.createElement("div");
  divDescription.className = "flex flex-grow text-xs font-normal my-4"

  let spanDescription = document.createElement("span");
  spanDescription.innerHTML = data.description

  divDescription.appendChild(spanDescription)

  return divDescription;

}

function createBar(data){

  let divBar = document.createElement("div");
  divBar.className = "flex items-center justify-center w-full "

  let divBar2 = document.createElement("div");
  divBar2.className = "relative w-full h-1 bg-surface-900 dark:bg-gray-500 "

  let divBar3 = document.createElement("div");
  divBar3.className = "absolute top-0 left-0 h-full "
  + (data.page < lastPage ? "bg-primary-700 w-full " : "bg-secondary-700 ")
  + (lastPage === data.page ? "dark:bg-secondary-800 w-1/2" : "")

  divBar2.appendChild(divBar3)
  divBar.appendChild(divBar2)

  return divBar;

}

function handleClickUeCard(ue) {
  ueData.currentPage = ue;

  carregarHTML(ueData.currentPage);
}
