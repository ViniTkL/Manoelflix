var btn = document.querySelector('.aviso-btn');

btn.addEventListener('click',()=>{
    var aviso = document.querySelector('.aviso');

    aviso.style.display = 'none';

});



var videos = document.getElementsByClassName('video-content');

videos[0].addEventListener('click', ()=>{
    var link = document.querySelector('#link-video1');

    link.style.display = 'flex';
});


videos[1].addEventListener('click', ()=>{
    var link = document.querySelector('#link-video2');

    link.style.display = 'flex';
});


videos[2].addEventListener('click', ()=>{
    var link = document.querySelector('#link-video3');

    link.style.display = 'flex';
});

videos[3].addEventListener('click', ()=>{
    var link = document.querySelector('#link-video4');

    link.style.display = 'flex';
});

videos[4].addEventListener('click', ()=>{
    var link = document.querySelector('#link-video5');

    link.style.display = 'flex';
});

videos[5].addEventListener('click', ()=>{
    var link = document.querySelector('#link-video6');

    link.style.display = 'flex';
});

videos[6].addEventListener('click', ()=>{
    var link = document.querySelector('#link-video7');

    link.style.display = 'flex';
});

videos[7].addEventListener('click', ()=>{
    var link = document.querySelector('#link-video8');

    link.style.display = 'flex';
});



