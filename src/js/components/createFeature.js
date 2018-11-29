import Element from '../vendor/elementManager';

const createFeature = ({name, text, img, view}, callback) => {
    
    const elementObj = Element.create(

        // Wrapper
        [`feature-${name}-wrapper`, '<div class="toggle-container"></div>'],

        // Toggle checkbox
        [`feature-${name}-checkbox`, `<input type="checkbox" class="toggle-checkbox" id="${name}">`],

        // Label 
        [`feature-${name}-label-open`, `<label class="toggle-label-open" for="${name}"></label>`],

        // Label 
        [`feature-${name}-label-close`, `<label class="toggle-label-close" for="${name}"></label>`],

            // Label's img
            [`feature-${name}-img`, `<img src="${img}" alt="${name}">`],

            // Label's span
            [`feature-${name}-span`, `<span>${text}</span>`],

        // The div that will change itself appearance based on toggle checked or not
        [`feature-${name}-box`, '<section class="toggle-box"></section>'],

    );

    Element.append({
        parent:'app',
        children:[{
            parent:`feature-${name}-wrapper`,
            children:[
                `feature-${name}-checkbox`,
                { parent:`feature-${name}-label-open`, children:[`feature-${name}-img`, `feature-${name}-span`] },
                { parent:`feature-${name}-box`, children:[`feature-${name}-label-close`]}
            ]
        }]
    });


    const viewElements = view(`feature-${name}-box`);
  
    callback( Object.assign({}, elementObj, viewElements) );
}

export default createFeature;