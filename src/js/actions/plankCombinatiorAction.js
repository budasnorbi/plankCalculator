import Element from '../vendor/elementManager';
import getPlankCombination from '../vendor/plankManager';
import createPlankResult from '../components/createPlankResult';

const plankCombinatiorAction = (elementObj) => {
  
    const { plankBtn, plankInput, plankResultHeading, overSizeInput } = elementObj;
        
    const onClick = _ => {

        const plankInputValue = plankInput.value.replace(/\s/g, "");
        var plankArr = plankInputValue.split(',').map(el => parseInt(el));

        // Exception checking
        if(plankInputValue == ''){ alert('Üres mezővel nem lehet számolni'); return };

        if(overSizeInput.value == '' || overSizeInput.value == 0){ alert('Nem megengedett érték'); return};

        // Recalculate plankArr values with overSizing value;

        plankArr = plankArr.map( (plank) => plank + parseInt(overSizeInput.value) );

        plankArr.forEach( el => { if( el > 6000 )  alert(`${el}mm nagyobb mint 6000mm`); return });
        
        // Clear the plank results
        for(let item of Element.fetch()) if(item[0].match(/\d+/) && item[0].includes('plankType-') == false) Element.delete(item[0])
        
        // Get combination
        const plankCombinations = getPlankCombination(plankArr);

        // Generate the dynamic content
        plankResultHeading.textContent = `Szükséges fríz mennyiség ${plankCombinations.length}db`;

        plankCombinations.forEach( (el, index) => { createPlankResult(el.planks, el.restWidth, index) });

        // Apend to dynamic contet parent to the dom
        Element.append({
            parent:'feature-frízkalkulátor-box',
            children: ['plankResultHeading', 'plank-print', 'plankResultList']
        });

        Element.get('plank-print').removeEventListener('click', onPrintClick);
        Element.get('plank-print').addEventListener('click', onPrintClick);

    }
    
    // Add a click event for the button
    plankBtn.addEventListener('click', onClick);

}

const onPrintClick = _ => {

    const selectedList = [], selectedParents = [];
        
    for(let item of Element.fetch()){
        if(item[0].includes('plankResultPartOl')) selectedList.push(item[0]);
        if(item[0].includes('plankResultItem'))  selectedParents.push(item[0]);
    }

    Element.get('playTypeResult').textContent = Element.get('plankTypeOption').value;

    //Render print layout
    Element.append({
        parent:'print-result',
        children:[ 
            ...selectedList 
        ]
    }); 

    document.body.append(
        Element.get('playTypeResult'),
        Element.get('print-result')
    );

    window.print();

    // Render normal layout
    selectedParents.forEach( (el,index) => {
        Element.append({
            parent: el,
            children:[selectedList[index]]
        });
    });

}

export default plankCombinatiorAction;