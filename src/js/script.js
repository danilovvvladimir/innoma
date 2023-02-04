const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("menu--active");
  hamburger.classList.toggle("hamburger--active");
});

const tabsParent = document.querySelector(".market__tabs");
const tabs = document.querySelectorAll(".market__tab");
const tabsContents = document.querySelectorAll(".market__tab-content");

tabsContents.forEach((tab) => tab.classList.add("fade"));
function hideTabs() {
  tabs.forEach((tab) => tab.classList.remove("market__tab--active"));
  tabsContents.forEach((tabsContent) => (tabsContent.style.display = "none"));
}
hideTabs();

function showTabs(index = 0) {
  tabs[index].classList.add("market__tab--active");
  tabsContents[index].style.display = "flex";
}

showTabs();
tabsParent.addEventListener("click", (e) => {
  if (e.target.classList.contains("market__tab")) {
    tabs.forEach((tab, index) => {
      if (e.target === tab) {
        hideTabs();
        showTabs(index);
      }
    });
  }
});
