'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const pc = document.querySelector('.pc'),
    pc1 = document.querySelector('#pc'),
    mobile = document.querySelector('.mobile'),
    mobile1 = document.querySelector('#mobile'),
    softWare = document.querySelector('.softWare'),
    softWare1 = document.querySelector('#softWare'),
    hardWare = document.querySelector('.hardWare'),
    hardWare1 = document.querySelector('#hardWare'),
    signin = document.querySelector('.signin'),
    start = document.querySelector('#start'),
    sigin = document.querySelector('.sigin'),
    cancel = document.querySelector('#cancel'),
    cancel2 = document.querySelector('#cancel2'),
    sigup = document.querySelector('.sigup'),
    sigi = document.querySelector('#sigi'),
    sigu = document.querySelector('#sigu');

  // Sign up

  signin.addEventListener('click', (e) => {
    sigin.style = 'display:block;';
  });

  start.addEventListener('click', (e) => {
    sigup.style = 'display:block;';
  });

  cancel.addEventListener('click', (e) => {
    sigin.style = 'display:none;';
  });

  cancel2.addEventListener('click', (e) => {
    sigup.style = 'display:none;';
  });

  sigi.addEventListener('click', (e) => {
    sigup.style = 'display:block;';
    sigin.style = 'display:none;';
  });

  sigu.addEventListener('click', (e) => {
    sigup.style = 'display:none;';
    sigin.style = 'display:block;';
  });

  // Sign up

  // service
  pc.addEventListener('click', (e) => {
    setTimeout((e) => {
      pc1.style =
        'background-color: #353A40; color: white; border-radius: 10px;';
    }, 1000);

    setTimeout((e) => {
      pc1.style = 'background-color: none; color: black; border-radius: 50%;';
    }, 2300);
  });

  pc1.addEventListener('mouseover', (e) => {
    pc1.style = 'background-color: #353A40; color: white; border-radius: 10px;';
  });

  pc1.addEventListener('mouseout', (e) => {
    pc1.style = 'background-color: none; color: black; border-radius: 50%;';
  });

  mobile.addEventListener('click', (e) => {
    setTimeout((e) => {
      mobile1.style =
        'background-color: #353A40; color: white; border-radius: 10px;';
    }, 1000);

    setTimeout((e) => {
      mobile1.style =
        'background-color: none; color: black; border-radius: 50%;';
    }, 2300);
  });

  mobile1.addEventListener('mouseover', (e) => {
    mobile1.style =
      'background-color: #353A40; color: white; border-radius: 10px;';
  });

  mobile1.addEventListener('mouseout', (e) => {
    mobile1.style = 'background-color: none; color: black; border-radius: 50%;';
  });

  softWare.addEventListener('click', (e) => {
    setTimeout((e) => {
      softWare1.style =
        'background-color: #353A40; color: white; border-radius: 10px;';
    }, 1000);

    setTimeout((e) => {
      softWare1.style =
        'background-color: none; color: black; border-radius: 50%;';
    }, 2300);
  });

  softWare1.addEventListener('mouseover', (e) => {
    softWare1.style =
      'background-color: #353A40; color: white; border-radius: 10px;';
  });

  softWare1.addEventListener('mouseout', (e) => {
    softWare1.style =
      'background-color: none; color: black; border-radius: 50%;';
  });

  hardWare.addEventListener('click', (e) => {
    setTimeout((e) => {
      hardWare1.style =
        'background-color: #353A40; color: white; border-radius: 10px;';
    }, 1000);

    setTimeout((e) => {
      hardWare1.style =
        'background-color: none; color: black; border-radius: 50%;';
    }, 2300);
  });

  hardWare1.addEventListener('mouseover', (e) => {
    hardWare1.style =
      'background-color: #353A40; color: white; border-radius: 10px;';
  });

  hardWare1.addEventListener('mouseout', (e) => {
    hardWare1.style =
      'background-color: none; color: black; border-radius: 50%;';
  });

  // End service
});
