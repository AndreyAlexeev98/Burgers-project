/* Burger menu for section hero */

  let burger  = document.querySelector('.hamburger-menu');
  let overlay = document.querySelector('.modal');
  let body = document.querySelector('body');

  let links = document.querySelectorAll('.menu__link-for-script');

  links.forEach(function(element){
    element.addEventListener('click' , toggleMenu);
  })

  function toggleMenu(){
    burger.classList.toggle('hamburger-menu--active');
    overlay.classList.toggle('modal--active');
    body.classList.toggle('body--active-menu');
  }

  burger.addEventListener('click' , toggleMenu);


/* burger section composition close btn */

    const closeBtn = document.querySelector('.composition__close');
    const composDown = document.querySelector('.composition__down');
    const compositionBtn = document.querySelector('.composition');

    compositionBtn.addEventListener('click', hidden=> {
      composDown.classList.toggle('no-visible');
    });



/* form section */

const myForm = document.querySelector('#myForm');
const send = document.querySelector('#send');


      send.addEventListener('click', event => {
        event.preventDefault();
  
       if (validateForm(myForm)) {
        const data = {
          name: myForm.elements.name.value,
          phone: myForm.elements.phone.value,
          comment: myForm.elements.comment.value,
          to: myForm.elements.to.value
        };
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
        xhr.setRequestHeader('content-type', 'application/json');
        xhr.send(JSON.stringify(data));
        xhr.addEventListener ('load', () => {

          if(xhr.response.status === 1) {
            formMessage.textContent = "Сообщение отправлено";
          }

          if(xhr.response.status === 0) {
            formMessage.textContent = "Повторите попытку еще раз";
          } 
        });


        }
      });

      function validateForm(form) {
        let valid = true;

        if(!validateField(form.elements.name)) {
          valid = false;
        }
        if(!validateField(form.elements.phone)) {
          valid = false;
        }
        if(!validateField(form.elements.comment)) {
          valid = false;
        }
        if(!validateField(form.elements.to)) {
          valid = false;
        }
        return valid;
      }

      function validateField(field) {
        if (!field.checkValidity()) {
          field.nextElementSibling.textContent = field.validationMessage;
          return false; 
        } else {
          field.nextElementSibling.textContent = '';
        return true; 
        }
      }


/* modal for form section */
          
  let formModal = document.querySelector('.form__modal');
  let sendClose = document.querySelector('#sendClose');

  const formMessage = document.querySelector('#formMessage');
  
  send.addEventListener('click', (toggleCreate));
  sendClose.addEventListener('click' , (toggleCreate));
  
  function toggleCreate(){
    formModal.classList.toggle('form__modal--vision');
  }




  /* team section */


      function accordionTeam(){
        const workers = document.querySelectorAll(".team-acco__item");
        const teamAccord = document.querySelector(".team__acco");
    
        teamAccord.addEventListener("click" , function(event){
            event.preventDefault(); // скидываем стандартное состояние (что бы не кидало страницу вверх / или не перенаправляло на другую)
            const target = event.target; // то на что мы кликнули

            if(target.classList.contains("team-acco__trigger")){
                const worker = target.parentNode; // родитель нашей ссылки (li.accordeon__item)
                const content = target.nextElementSibling; //  элемент который находится рядом с рашей ссылкой на уровне (accordeon__content)
                const contentHeight = content.firstElementChild.clientHeight; // высота wrapper который лежит в accordeon__content
            
                    for (const iterator of workers) {
                        if(iterator !== worker){
                            iterator.classList.remove("team-acco__item--active");
                            iterator.lastElementChild.style.height= 0;
                        }
                    }

                    if(worker.classList.contains("team-acco__item--active")){
                        worker.classList.remove("team-acco__item--active");
                        content.style.height = 0;
                    }else{
                        worker.classList.add("team-acco__item--active");
                        content.style.height = contentHeight + "px";
                    }
            }
        });
    }

    accordionTeam();


/* modals reviews  */

  function popupReview(){
    const reviewList = document.querySelector('.reviews__list');
    
    reviewList.addEventListener('click' , function(e){
      if(e.target.classList.contains('review__btn')){
        const title = e.target.parentNode.querySelector('.review__username').textContent;
        const text = e.target.parentNode.querySelector('.review__content').textContent;
        
        renderPopup(title, text);
      }
    })
    
    function renderPopup(title, text){
      const popup = document.querySelector('.reviews__popup');

      popup.classList.add('reviews__popup--active');
      body.classList.add('body--active-menu');

      popup.querySelector('.popup__title').textContent = title;     
      popup.querySelector('.popup__text').textContent = text;       

      popup.querySelector('.popup__close').addEventListener('click' , e=>{
        e.preventDefault();

        popup.classList.remove('reviews__popup--active');
        body.classList.remove('body--active-menu');
      })
    }
  }

  popupReview();


  /* menus section */
  
  function accordionMenu() {
    const menuItems = document.querySelectorAll('.menus__item'); // полуаем все li элементы
    const menuAccord = document.querySelector('.menus__list'); // полуаем ul элемент
  
    menuAccord.addEventListener('click', event => {
      let target = event.target.parentNode; // родитель спана - ссылка
      let content = target.nextElementSibling; // следующий сосед ссылки - див с контентом
      let item = target.parentNode; // родитель ссылки - лишка
  
      const tarWidth = target.clientWidth; // ширина одной лишки (ссылки)
      const windowWidth = document.documentElement.clientWidth; // ширина окна браузера
      const layoutContentWidth = 520; // ширина контента
      const breakpointPhone = 480; // точка меньше которой меняется поведение слайдера
      const closeMenuWidth = tarWidth * menuItems.length; // ширина закрытого слайдера (3 лишки)
      const openMenuWidth = closeMenuWidth + layoutContentWidth; // ширина открытого слайдера (3 лишки и контент)
  
      // проверяем был ли клик по спану
      if (event.target.classList.contains('menus__title')) {
        moveMenu();
      }
      // клик был не по спану - переопределяем переменные
      target = event.target; // ссылка
      content = target.nextElementSibling;
      item = target.parentNode;
  
      // проверяем был ли клик по ссылке
      if (target.classList.contains('menus__link')) {
        moveMenu();
      }
  
      function moveMenu() {
        // закрываем все лишки, кроме той по которой был клик
        for (const iterator of menuItems) {
          if (iterator != item) {
            iterator.classList.remove('menus__item--active');
            iterator.lastElementChild.style.width = 0;
            menuAccord.style.transform = `translateX(0)`;
          }
        }
  
        if (item.classList.contains('menus__item--active')) {
          item.classList.remove('menus__item--active');
          content.style.width = 0;
        } else {
          item.classList.add('menus__item--active');
  
          if (windowWidth > breakpointPhone && windowWidth < openMenuWidth) {
            content.style.width = windowWidth - closeMenuWidth + 'px';
          } else if (windowWidth <= breakpointPhone) {
            let num;
            // получаем число лишек на которое нужно сдвинуть список
            for (let i = 0; i < menuItems.length; i++) {
              if (menuItems[i] === item) {
                num = menuItems.length - (i + 1);
              }
            }
  
            menuAccord.style.transform = `translateX(${tarWidth * num}px)`;
            content.style.width = windowWidth - tarWidth + 'px';
          } else {
            content.style.width = 520 + 'px';
          }
        }
      }
    });
  }
  
  accordionMenu();



