import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";

export function faqProjects() {
  const accordion = new Accordion('.accordion', {
    duration: 300,
    showMultiple: false,
    openOnInit: [0],
     elementClass: 'accordion-item',
    triggerClass: 'accordion-header',  // <- Повертаємо правильно!
    panelClass: 'accordion-content',
    activeClass: 'open'
  });


const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach((item, index) => {
    const button = item.querySelector('.btn-accordion-question');
    const use = button.querySelector('use');

    if (index === 0) {
      use.setAttribute('href', './img/svg/icons.svg#icon-button-up');
    } else {
      use.setAttribute('href', './img/svg/icons.svg#icon-button-down');
    }

    button.addEventListener('click', () => {
      const isOpen = item.classList.contains('open'); // open - це activeClass
      if (isOpen) {
        use.setAttribute('href', './img/svg/icons.svg#icon-button-up');
      } else {
        use.setAttribute('href', './img/svg/icons.svg#icon-button-down');
      }
    });
  });
}