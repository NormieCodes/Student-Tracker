const li = document.querySelectorAll(".list-js");
const main = document.querySelector("#main");

li.forEach((list) => {
  list.addEventListener("click", function (event){
    console.log(event.target.innerText);
    main.classList.toggle("hidden");
    main.parentElement.firstElementChild.classList.toggle("hidden");
  });
})
