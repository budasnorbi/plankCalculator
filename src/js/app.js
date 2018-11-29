require('../scss/style.scss');
import createElement from'./components/createElement';
import createFeature from './components/createFeature';

// Feature layouts
import plankCombinatorLayout from './layout/plankCombinatorLayout';

// Feature Actions
import plankCombinatorAction from './actions/plankCombinatiorAction';

// IIFE
(function(){
    createElement();

    createFeature({
        name: 'frízkalkulátor',
        text: 'Ablakfríz kalkulátor',
        img: require('../img/feature-icon-1.svg'),
        view: plankCombinatorLayout
    },  plankCombinatorAction);

})();