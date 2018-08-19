let links = document.getElementsByClassName('header_link');

let button = document.querySelector('.ham_button');
let list = document.querySelector('.link_list');



function openService(evt) {
    for (let i = 0; i < links.length; i++) {
        links[i].className = links[i].className.replace(' header_link-active', '');
    }
    evt.currentTarget.className += ' header_link-active';
}

for (let i = 0; i < links.length; i++) {
    links[i].onclick = function () {
        openService(event);
    }
}

button.onclick = function () {
list.classList.toggle('link_list-active');
    setTimeout(function () {
        list.classList.toggle('link_list-show')
    }, 500);

};



