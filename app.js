// Access all anchor elements in the DOM
const links = document.querySelectorAll("a");
const home = document.getElementById('home');
const tasks = document.getElementById('task-manager');

// add event listeners to anchor tags
links.forEach(link => {
 link.addEventListener("click", event => {
   const clickedLink = event.currentTarget;
   const target = clickedLink.getAttribute("href").replace("#","");
   showView(target);
   history.pushState({view: target}, "", "#" + target);
   history.replaceState({ view: "home" }, "", "#home");
   alert('it is working!'); 
   console.log(clickedLink);
   console.log(target);
});
});

//back/forward navigation 
window.addEventListener('popstate', event => {
    console.log(event.state);
    if (event.state && event.state.view) {
        showView(event.view.state);
    }
});
    
function showView (id) {
    const views = document.querySelectorAll('.view');
    views.forEach(v => v.classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
}

