// const listBikes=["Suzuki", "Yamaha","Bullet","Bajaj"]  //step 1
import {listBikes} from '../data/bikes.js'        
let ordererList='<ol>';
listBikes.forEach(
    (bike)=> ordererList+=`<li class="bike-names">${bike}</li>`
);
ordererList+='</ol>'                    

console.log(ordererList)

//document.getElementById('list-bikes').innerHTML=ordererList; //step 2
document.querySelector('#list-bikes').innerHTML=ordererList

const bikeListElements=document.querySelectorAll('.bike-names')
console.log(bikeListElements)

bikeListElements.forEach(
    (bikeListElement)=>{
        bikeListElement.addEventListener('click',
            ()=>{
                //console.log(bikeListElement.innerHTML)
                switch(bikeListElement.innerHTML)
                {
                    case "Suzuki" : document.querySelector('#bike').innerHTML='Alice'; break;
                    case "Yamaha" : document.querySelector('#bike').innerHTML=`${bikeListElement.innerHTML} Owner name is Ben`; break;
                    case "Bullet" : document.querySelector('#bike').innerHTML='Chris'; break;
                    case "Bajaj" : document.querySelector('#bike').innerHTML='David'; break;
                    default : document.querySelector('#bike').innerHTML='Elcid'; break;
                }
            }
        )
    }
)
