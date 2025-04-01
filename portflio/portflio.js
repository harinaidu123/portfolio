const menuicon=document.querySelector('#menuicon');
const navbar=document.querySelector('.navbar');
menuicon.onclick =()=>{
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

