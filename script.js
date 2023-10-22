var menuLinks = document.querySelectorAll('.menu-link a')


 menuLinks.forEach((item, p) =>{
    
    item.addEventListener('click', (e)=>{
        e.preventDefault();
       
       document.querySelector('.menu-link a.selecionado').classList.remove('selecionado');
       item.classList.add('selecionado')

    });

 })
