function resetScroll() {
  window.scrollTo({ top: 0, behavior: "instant" });
}

function nextPage() {
  let tempData = ueData;

  let page = tempData.currentPage + 1;
  page = page >= tempData.totalOfPages ? tempData.totalOfPages : page;

  if (page >= tempData.lastPageSeen) {
    tempData.lastPageSeen = page;
  }

  tempData.currentPage = page;

  ueData = tempData;

  updateLessonPage(tempData);
  resetScroll();
}

function previousPage() {
  let tempData = ueData;

  let page = tempData.currentPage - 1;
  page = page <= 1 ? 1 : page;

  tempData.currentPage = page;

  ueData = tempData;
  updateLessonPage(tempData);

  resetScroll();
}

function hidePageButton() {
  let previousButton = document.getElementById("previous-page");
  let nextButton = document.getElementById("next-page");

  if (ueData.currentPage <= 1) {
    disableButton(previousButton);
  } else {
    enableButton(previousButton);
  }

  if (ueData.currentPage >= ueData.totalOfPages) {
    disableButton(nextButton);
  } else {
    enableButton(nextButton);
  }
}

function disableButton(button) {
  button.setAttribute("disabled", "");
  button.classList.remove("hover:underline");
  button.classList.add("opacity-0");
  button.classList.add("cursor-default");
}

function enableButton(button) {
  button.removeAttribute("disabled");
  button.classList.add("hover:underline");
  button.classList.remove("opacity-0");
  button.classList.remove("cursor-default");
}
