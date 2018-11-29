import Element from '../vendor/elementManager';

const plankCombinatorLayout = (parentContainer) => {
    const elements = Element.create(
        ['feature-heading', '<h1 class="feature-heading">Fríz kalkulátor v0.3</h1>'],
        ['input-container', '<div class="input-container"></div>'],
        ['plankInput', '<input type="text" class="plankInput" placeholder="frízhosszok">'],
        ['overSizeInput', '<input type="text" class="plankInput" placeholder="ráhagyás"></div>'],
        ['plankBtn', '<button class="plankBtn">Számol</button>'],
        ['plankResultHeading', '<h1 class="plank-list-heading"></h1>'],
        ['plankResultList', '<div class="plank-list"></div>'],


        ['plankTypeOption', '<select class="plank-type"></select>'],
        ['playTypeResult', '<h1 class="plank-type"></h1>']
    );

    const options = Element.create(
        ...['68-as ablak', '68-as ajtó', '88-as ablak', '88-as ajtó','48-as belsőajtó'].map( (el,index) => {
            return index === 0 ? [`plankType-${index}`, `<option selected>${el}fríz</option>`]
                             : [`plankType-${index}`, `<option>${el}fríz</option>`];
        })
    );


    Element.append({
        parent: parentContainer,
        children:[
            {parent:'plankTypeOption', children:[...Object.keys(options)]},
            'feature-heading',
            { parent:'input-container', children:['plankInput', 'overSizeInput'] },
            'plankBtn',
            'plankResultHeading',
            'plankResultList'
        ]
    });

    return elements;
}

export default plankCombinatorLayout;