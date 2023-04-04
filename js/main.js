const tabs = document.querySelectorAll(".tabs__item");
const contents = document.querySelectorAll(".tabs__content");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {

    tabs.forEach((tab) => tab.classList.remove("active"))
    tab.classList.add("active");

    contents.forEach(c => c.classList.remove("active"));
    contents[index].classList.add("active");
  });
});

tabs[0].click();