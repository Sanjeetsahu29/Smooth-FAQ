const accordians =document.querySelectorAll('.accordian');

console.log(accordians);
accordians.forEach(element => {
    const icon = element.querySelector(".icon");
    const answer = element.querySelector(".answer");

    element.addEventListener('click', ()=>{
        
        /*icon.classList.toggle('active');
        answer.classList.toggle('active');
        */
       if(icon.classList.contains('active')){
        icon.classList.remove('active');
        answer.style.maxHeight=null;
       }
       else{
        icon.classList.add('active');
        answer.style.maxHeight=answer.scrollHeight+'px';
       }
    })
});