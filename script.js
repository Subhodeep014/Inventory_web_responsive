const toggle = document.querySelector('.toggle');
const sidebar = document.querySelector('.sidebar');
const main = document.querySelector('.main');
const sideIcon = document.querySelectorAll('.side-icon');
const sideTitle = document.querySelectorAll('.side-title');

toggle.onclick = function(){ 
    sidebar.classList.toggle('active');
    main.classList.toggle('active');
}
console.log(sideIcon,sideTitle);
function changeColor(element){
    sideIcon.forEach(function(icon){
        icon.classList.remove('active');
    })
    sideTitle.forEach(function(title){
        title.classList.remove('active');
    })
    var icon = element.querySelector('.icon.side-icon');
    var title = element.querySelector('.title.side-title');
    icon.classList.add('active');
    title.classList.add('active');

}