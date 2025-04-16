// for list
const openL = document.getElementById('openL');
const closeL = document.getElementById('closeL');
const list = document.getElementById('list');

openL.addEventListener('click' , function () {
    openL.style.display = 'none';
    list.style.display = 'block';
});
closeL.addEventListener('click' , function () {
    openL.style.display = 'block';
    list.style.display = 'none';
});

//for breakfast , lunch and dinner
const open5 = document.getElementById('open5');
const open6 = document.getElementById('open6');
const open7 = document.getElementById('open7');

const d5 = document.getElementById('d5');
const d6 = document.getElementById('d6');
const d7 = document.getElementById('d7');

open5.addEventListener('click' , function () {
    d5.style.display = 'block';
    d5.style.display = 'grid';
    d6.style.display = 'none';
    d7.style.display = 'none';
});
open6.addEventListener('click' , function () {
    d5.style.display = 'none';
    d6.style.display = 'block';
    d6.style.display = 'grid';
    d7.style.display = 'none';
});
open7.addEventListener('click' , function () {
    d5.style.display = 'none';
    d6.style.display = 'none';
    d7.style.display = 'block';
    d7.style.display = 'grid';
});