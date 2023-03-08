let li_menu = document.querySelectorAll('.li-menu');
let menu_hr = document.querySelectorAll('.hr-menu');

li_menu.forEach((value, i)=>{
    value.addEventListener('mouseover', ()=>{
        menu_hr[i].color = 'red';
        
    })
})

li_menu.forEach((value, i)=>{
    value.addEventListener('mouseout', ()=>{
        menu_hr[i].color = 'gray';
        
    })
})