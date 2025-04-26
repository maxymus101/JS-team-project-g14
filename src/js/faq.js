import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";

export function renderProjects() {
  const accordion = new Accordion('.accordion', {
    duration: 300,
    showMultiple: false,
    openOnInit: [0]
  });

  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach((item, index) => {
    const header = item.querySelector('.accordion-question');
    const use = header.querySelector('use');

    
    if (index === 0) {
      use.setAttribute('href', '#icon-button-up');
    } else {
      use.setAttribute('href', '#icon-button-down');
    }

    
    header.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-active');
      if (isOpen) {
        use.setAttribute('href', '#icon-button-down'); 
      } else {
        use.setAttribute('href', '#icon-button-up'); 
      }
    });
  });
}