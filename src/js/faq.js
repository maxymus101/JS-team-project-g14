
import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";

export function faqProjects() {
  const accordion = new Accordion('.accordion', {
    duration: 300,
    showMultiple: false,
    openOnInit: [0],
    elementClass: 'accordion-item',
    triggerClass: 'accordion-header',
    panelClass: 'accordion-content',
    activeClass: 'open'
  });

  const accordionItems = document.querySelectorAll('.accordion-item');

  /*обробка кожного акордеону*/
  accordionItems.forEach((item, index) => {
    const headerButton = item.querySelector('.accordion-header');
    const contentElement = item.querySelector('.accordion-content');
    const useElement = headerButton.querySelector('.icon-dropdown use');

    /*іконка на початку*/
     if (useElement) {
      useElement.setAttribute('href', index === 0 && item.classList.contains('open')
        ? './img/svg/icons.svg#icon-button-down' 
        : './img/svg/icons.svg#icon-button-down'
       );
        }

    /*click*/
    headerButton.addEventListener('click', () => {
      setTimeout(() => {
        if (item.classList.contains('open') && contentElement) {
          contentElement.style.height = 'auto';
        }
      }, accordion.settings.duration + 50);

      /*зміна іконки*/
      if (useElement) {
        const isOpen = item.classList.contains('open');
        useElement.setAttribute('href', isOpen ? './img/svg/icons.svg#icon-button-up' : './img/svg/icons.svg#icon-button-down');
      }
    });
  });
}

    
