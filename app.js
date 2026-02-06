// Access all anchor elements in the DOM
const link = document.querySelectorAll("a");
const home = document.getElementById('home');
const tasks = document.getElementById('task-manager');

// add event listeners to anchor tags
link.forEach(link => {
 link.addEventListener("click", event => {
   const clickedLink = event.currentTarget;
   const target = clickedLink.getAttribute("href");
   
    alert('it is working!'); 
   console.log(clickedLink);
   console.log(target);
    if (target === '#task-manager') {
        home.classList.add('hidden');
        tasks.classList.remove('hidden');
    }
 });
});