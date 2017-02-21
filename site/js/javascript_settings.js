function openNav() {
    var self = document.querySelector('#open')
    var display = document.querySelector('#close');
    var moveLeft = document.querySelector('#sidenav');
    var removeMain = document.querySelector('#main');
    var blacken = document.querySelector('#content')
    blacken.classList.add('cover_black');
    moveLeft.classList.add('moved');
    moveLeft.classList.remove('hidden');
    removeMain.classList.add('remove_main');
    removeMain.classList.remove('add_main');
    self.classList.add('hide');
}

function closeNav() {
    var self = document.querySelector('#close')
    var display = document.querySelector('#open');
    var moveLeft = document.querySelector('#sidenav');
    var removeMain = document.querySelector('#main');
    var blacken = document.querySelector('#content')
    blacken.classList.remove('cover_black');
    moveLeft.classList.remove('moved');
    removeMain.classList.remove('remove_main');
    removeMain.classList.add('add_main');
    removeMain.classList.remove('cover_black');
    display.classList.remove('hide');
    moveLeft.classList.add('hidden'); 
    self.classList.add('hide');       
}

function contentNav(element) {
    if (element.classList.contains('cover_black')) {
        var self = document.querySelector('#close');
        self.classList.add('hide');
        var display = document.querySelector('#open');
        var moveLeft = document.querySelector('#sidenav');
        var removeMain = document.querySelector('#main');
        var blacken = document.querySelector('#content')
        blacken.classList.remove('cover_black');
        moveLeft.classList.remove('moved');
        removeMain.classList.remove('remove_main');
        removeMain.classList.add('add_main');
        removeMain.classList.remove('cover_black');
        display.classList.remove('hide');
        moveLeft.classList.add('hidden');
    }
}
