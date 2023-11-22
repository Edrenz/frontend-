const tabs = document.querySelectorAll('.tab-btn div');
const contents = document.querySelectorAll('.content');
const forms = document.querySelectorAll('.form');
const modalContent = document.querySelector('.modal-content');

//grab all the tab-btn div class
tabs.forEach((tab, index) => {
  //grab all the tab of tabs then click event
  tab.addEventListener('click', () => {
    //foreach item of tabs every click remove the prev class 'active'
    tabs.forEach((e) => {
      e.classList.remove('active');
    });

    //and then every click we add the next class 'active'
    tab.classList.add('active');

    //grab all the content of contents then remove the prev class 'active'
    contents.forEach((c) => {
      c.classList.remove('active');
    });

    //and the add the class 'active' to the next index
    contents[index].classList.add('active');
  });
});

forms.forEach((form) => {
  form.addEventListener('click', () => {
    modalContent.classList.add('show-modal');
  });
});

const cancelBtn = document.querySelector('.cancel');
cancelBtn.addEventListener('click', () => {
  modalContent.classList.remove('show-modal');
});
