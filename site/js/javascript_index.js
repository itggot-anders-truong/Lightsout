function removeImg1(element) {
    element.classList.add('hide');
    var display = document.querySelector('.lightsout');
     display.classList.remove('hide');
}

function removeImg2(element) {
    element.classList.add('hide');
    var display = document.querySelector('.lightson');
    display.classList.remove('hide');

}

function openNav() {
    var self = document.querySelector('#open')
    var display = document.querySelector('#close');
    var moveLeft = document.querySelector('#sidenav');
    var removeMain = document.querySelector('#main');
    var display1 = document.querySelector('.lightson');
    var display2 = document.querySelector('.lightsout');
    var blacken = document.querySelector('#content');
    self.classList.add('hide');
    moveLeft.classList.add('moved');
    moveLeft.classList.remove('hidden');
    removeMain.classList.add('remove_main');
    removeMain.classList.remove('add_main');
    blacken.classList.add('cover_black');
    display1.classList.add('hide');
    display2.classList.add('hide');
    display.classList.remove('hide');
}

function closeNav() {
    var self = document.querySelector('#close')
    self.classList.add('hide');
    var display = document.querySelector('#open');
    var moveLeft = document.querySelector('#sidenav');
    var removeMain = document.querySelector('#main');
    var display1 = document.querySelector('.lightson');
    var blacken = document.querySelector('#content')
    blacken.classList.remove('cover_black');
    moveLeft.classList.remove('moved');
    removeMain.classList.remove('remove_main');
    removeMain.classList.add('add_main');
    removeMain.classList.remove('cover_black');
    display.classList.remove('hide');
    display1.classList.remove('hide');
    moveLeft.classList.add('hidden');        
}

function contentNav(element) {
    if (element.classList.contains('cover_black')) {
        var self = document.querySelector('#close');
        self.classList.add('hide');
        var display = document.querySelector('#open');
        var moveLeft = document.querySelector('#sidenav');
        var removeMain = document.querySelector('#main');
        var display1 = document.querySelector('.lightson');
        var blacken = document.querySelector('#content')
        blacken.classList.remove('cover_black');
        moveLeft.classList.remove('moved');
        removeMain.classList.remove('remove_main');
        removeMain.classList.add('add_main');
        removeMain.classList.remove('cover_black');
        display.classList.remove('hide');
        display1.classList.remove('hide');
        moveLeft.classList.add('hidden');
    }
}


