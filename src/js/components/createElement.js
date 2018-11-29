import Element from '../vendor/elementManager';


const createElement = () => {
   Element.create(
       ['app', '<main class="app"></main>'],
       [`plank-print`, `<button class="print-btn"></button>`],
       ['print-result', '<div class="print-result"></div>']
   );

   document.body.appendChild(Element.get('app'));

}

export default createElement;