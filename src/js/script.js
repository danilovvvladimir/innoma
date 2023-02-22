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

const programmModules = document.querySelectorAll(".programm__module-info");
const programmModulesParent = document.querySelector(".programm__module-top");
const programmModulesBtn = document.querySelectorAll(
  ".programm__module-arrow-btn"
);

function hideModulesInfo() {
  programmModules.forEach((item) =>
    item.classList.remove("programm__module-info--active")
  );
  programmModulesBtn.forEach((btn) => {
    btn.classList.remove("programm__module-arrow-btn--active");
  });
}

function showModulesInfo(index = 0) {
  programmModules[index].classList.toggle("programm__module-info--active");
  programmModulesBtn[index].classList.toggle(
    "programm__module-arrow-btn--active"
  );
}

hideModulesInfo();
showModulesInfo();

programmModulesBtn.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    showModulesInfo(index);
  });
});
