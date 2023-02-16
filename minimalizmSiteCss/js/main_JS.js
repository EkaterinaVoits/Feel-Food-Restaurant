// function funcChange() {
// 	buttonBurg=document.querySelector(".header_burger"); 
// 	buttonBurg.classList.toggle("change"); 
// 	menu=document.querySelector(".nav");
// 	menu.classList.toggle("change"); 
// 	noScroll=document.body.classList.toggle("stop_scroll"); 
// }
$(document).ready(function(){
    $('.header_burger').click(function(event){
        $('.header_burger, .header_menu').toggleClass('active');
        $('body').toggleClass('lock');
    })
});