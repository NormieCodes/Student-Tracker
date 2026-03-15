const menuItems = document.querySelectorAll(".menu-item");
const pages = document.querySelectorAll(".page");
const menu = document.querySelector(".menu");
const home = document.querySelector(".home");

menuItems.forEach((item) => {
  item.addEventListener("click", function(e) {
    e.preventDefault();
    
    const sectionName = e.target.dataset.section;

    console.log(sectionName);
    menu.classList.add("hidden");
    menu.previousElementSibling.classList.add("hidden");

    pages.forEach((page) => {
      page.classList.remove("active");
    });

    const activePage = document.querySelector(`.page[data-section="${sectionName}"]`);
    activePage.classList.add("active");
  });
})

home.addEventListener("click", () => {
  pages.forEach((page) => {
    page.classList.remove("active");
  });

  menu.classList.remove("hidden");
  menu.previousElementSibling.classList.remove("hidden");
});