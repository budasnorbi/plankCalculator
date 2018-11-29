import Element from '../vendor/elementManager';
import calcPlankWidth from "../vendor/calcPlankWidth";

const createPlankResult = (plankArr, restWidth, plankIndex) => {
    
    Element.create(
        [`plankResultItem-${plankIndex}`, '<div class="plank-item"></div>'],
        [`plankResultPlaceholder-${plankIndex}`, '<div class="plank"></div>'],
        [`plankResultPartList-${plankIndex}`, '<div class="plank-result-list"></div>'],
        [`plankResultPartOl-${plankIndex}`, `<ol class="plank-ol"></ol>`],

        [`plankResultRestWidthLi-${plankIndex}`, `<li class="plank-rest-width">Maradék: ${restWidth}mm</li>`],
        [`plankResultRestWidth-${plankIndex}`, `<div style="--plank-width:${ calcPlankWidth(restWidth)}" class="plank-result-item plank-restWidth"></div>`]
    );

    const partItemObj = Element.create(
        ...plankArr.map( (el, index) => {
            return [`plankResultPartItem-${plankIndex}-${index}`, `<div data-relation="${`plankResultPartLi-${plankIndex}-${index}`}"  style="--plank-width:${ calcPlankWidth(el)}" class="plank-result-item"></div>`]
        })
    );

    const ulItemObj = Element.create(
        ...plankArr.map( (el, index) => {
            return [`plankResultPartLi-${plankIndex}-${index}`, `<li>${el}</li>`]
        })
    );

    //plank-result-hover
    const onMouseEnter = (el, item) => {

        el.addEventListener('mouseenter', onMouseEnter);

        function onMouseEnter(e){
            var collection = [...e.target.parentElement.parentElement.children[0].children]
            var selectedElement = collection.filter( el => el.getAttribute('data-relation') == item)[0];

            selectedElement.classList.add('plank-result-hover');
        }

    }

    const onMouseLeave = (el, item) => {
        el.addEventListener('mouseleave', onMouseLeave);

        function onMouseLeave(e){
            var collection = [...e.target.parentElement.parentElement.children[0].children]
            var selectedElement = collection.filter( el => el.getAttribute('data-relation') == item)[0];

            selectedElement.classList.remove('plank-result-hover');
        }

    }

    for(let item in ulItemObj){
       const el = Element.get(item);

       onMouseEnter(el, item);
       onMouseLeave(el, item);
    }

    Element.append({
        parent: 'plankResultList',
        children: [{
            parent:`plankResultItem-${plankIndex}`,
            children:[
                {parent:`plankResultPlaceholder-${plankIndex}`, children:[ ...Object.keys(partItemObj),  `plankResultRestWidth-${plankIndex}` ]},
                {
                    parent:`plankResultPartOl-${plankIndex}`,
                    children:[ 
                        ...Object.keys(ulItemObj),
                        `plankResultRestWidthLi-${plankIndex}`
                    ]
                }
            ]   
        }]
    });

}

export default createPlankResult;
