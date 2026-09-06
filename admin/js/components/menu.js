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