const container=document.getElementById('fig');
function inner(item){
container.innerHTML='<a href="'+item.link+'" target="_blank"><img id="slideimg" src="'+item.src+'" alt="image" width="900px" height="500px"></a>'+'<figcaption>'+item.name+'</figcaption>'+
'<p id="desc">'+item.desc+'</p>';
}
const arr=[{name:'Colmar Academy', src:'./resources/colmar.png', link:'../Colmar/index.html', desc:'This project is about the website'+ 
' developed for Academy called colmar. It is designed as a responsive website.'+'<br/>'+
'Technologies : HTML, CSS.'+'<br/>'+
'Source: (Images and Design) by Codecademy.'},
{name:'E-commerce', src:'./resources/ecommerce.png', link:'../e-commerce/index.html',desc:'This project is developed for e-commerce'+ 
' purpose and is under development.'+'<br/>'+
'Technologies : HTML, CSS, Bootstrap'+'<br/>'+
'Source: (Images - Online) and (Design - Naresh S)'},
{name:'Dasmoto', src:'./resources/dasmoto.png', link:'../Dasmoto/index.html', desc:'This project is about the website'+ 
' developed for Arts and crafts for Dasmoto'+'<br/>'+
'Technologies : HTML, CSS.'+'<br/>'+
'Source: (Images and design) by Codecademy.'},
{name:'Excursion', src:'./resources/excursion.png', link:'../excursion/index.html', desc:'This project is about the website'+ 
' developed for advertising an app called excursion for traveling.'+'<br/>'+
'Technologies : HTML, CSS.'+'<br/>'+
'Source: (Images and design) by Codecademy.'}];

let i=1;
function handle(){
    if(i<arr.length){
    inner(arr[i]);
    i++;
}
    else{
        i=0;
        inner(arr[i]);
        i++;
    }
}


const button=document.getElementById('btn');
button.addEventListener('click', handle);
const show=document.getElementById('show');

const fig=document.getElementById('fig');
show.addEventListener('click', visible);

function visible(){
    if(fig.style.display=='none'){
    inner(arr[0]);
    fig.style.display='block';
    button.style.display='flex';
    show.innerHTML='Less...';

    }
    else{
    show.innerHTML='More...';
    fig.style.display='none';
    button.style.display='none';
    }
}
