var button = document.querySelector('#devs');

var txt = document.querySelector('#txt-dev');

button.addEventListener('click', function(){

    if(txt.style.display === 'block') {
        txt.style.display = 'none';
    } else{
        txt.style.display = 'block';
    }
});