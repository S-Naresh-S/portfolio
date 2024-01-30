const container=document.getElementById('fig');
function inner(item){
container.innerHTML='<a href="'+item.link+'" target="_blank"><img id="slideimg" src="'+item.src+'" alt="image" height="150px"></a>'+
'<figcaption>'+item.name+'</figcaption>'+
'<p id="desc">'+item.desc+'</p>';

}
const arr=[{name:'Colmar Academy', src:'./resources/colmar.png', link:'https://s-naresh-s.github.io/Colmar/', desc:'This project is about the website'+ 
' developed for Academy called colmar. It is designed as a responsive website.'+'<br/>'+
'Technologies : HTML, CSS.'+'<br/>'+
'Source: (Images and Design) by Codecademy.'},
{name:'E-commerce', src:'./resources/ecommerce.png', link:'https://s-naresh-s.github.io/E-commerce/',desc:'This project is developed for e-commerce'+ 
' purpose and is under development.'+'<br/>'+
'Technologies : HTML, CSS, Bootstrap'+'<br/>'+
'Source: (Images - Online) and (Design - Naresh S)'},
{name:'Dasmoto', src:'./resources/dasmoto.png', link:'https://s-naresh-s.github.io/Dasmoto/', desc:'This project is about the website'+ 
' developed for Arts and crafts for Dasmoto'+'<br/>'+
'Technologies : HTML, CSS.'+'<br/>'+
'Source: (Images and design) by Codecademy.'},
{name:'Excursion', src:'./resources/excursion.png', link:'https://s-naresh-s.github.io/excursion/', desc:'This project is about the website'+ 
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

const show=document.getElementById('show');
show.addEventListener('click', visible);

const arrow=document.getElementById('arrow');
arrow.addEventListener('click', handle);

function visible(){
    if(container.style.display=='none'){
    inner(arr[0]);
    arrow.style.display='block';
    container.style.display='block';
    show.innerHTML='Less';
    document.styleSheets[0].addRule('#show:after','content: "\\00AB";transform: translateX(22px);');
    }
    else{
    show.innerHTML='More';
    arrow.style.display='none';
    container.style.display='none';
    document.styleSheets[0].addRule('#show:after','content: "\\00BB";transform: translateX(-2px);');
    }
}
