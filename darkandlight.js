const light=document.getElementById('lightbtn');
const tops=document.getElementById('top');
light.addEventListener('click',()=>{
    if(light.innerHTML=="Light"){
    document.body.style.backgroundColor='white';
    document.body.style.color='black';
    tops.style.backgroundColor='black';
    tops.style.color='white';
    light.innerHTML='Dark';
}
    else{
    document.body.style.backgroundColor='black';
    document.body.style.color='white';
    light.innerHTML='Light';
    tops.style.backgroundColor='white';
    tops.style.color='black';
    }

});