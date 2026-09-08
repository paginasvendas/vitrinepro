const menuBtn = document.querySelector(".menu-btn");

const container = document.querySelector(".container");

const sidebar = document.querySelector(".sidebar");

menuBtn.addEventListener("click",()=>{

    if(window.innerWidth <= 768){

        sidebar.classList.toggle("active");

    }else{

        container.classList.toggle("sidebar-collapse");

    }

});

document.addEventListener("click", function (evento) {

    if (window.innerWidth > 768) return;

    if (!sidebar.classList.contains("active")) return;

    const clicouNaSidebar = sidebar.contains(evento.target);
    const clicouNoMenu = menuBtn && menuBtn.contains(evento.target);

    if (!clicouNaSidebar && !clicouNoMenu) {
        sidebar.classList.remove("active");
    }

});