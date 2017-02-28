function openNav() {
    var self = document.querySelector('#open')
    var display = document.querySelector('#close');
    var moveLeft = document.querySelector('#sidenav');
    var removeMain = document.querySelector('#main');
    var blacken = document.querySelector('#content');
    blacken.classList.add('cover_black');
    self.classList.add('hide');
    moveLeft.classList.add('moved');
    moveLeft.classList.remove('hidden');
    removeMain.classList.add('remove_main');
    removeMain.classList.remove('add_main');
    var boxes = document.querySelectorAll('.box')
        boxes.forEach(function(element) {
        element.classList.add('hide')
    });
}

function closeNav() {
    var self = document.querySelector('#close')
    var display = document.querySelector('#open');
    var moveLeft = document.querySelector('#sidenav');
    var removeMain = document.querySelector('#main');
    var blacken = document.querySelector('#content');
    blacken.classList.remove('cover_black');
    moveLeft.classList.remove('moved');
    removeMain.classList.remove('remove_main');
    removeMain.classList.add('add_main');
    removeMain.classList.remove('cover_black');
    display.classList.remove('hide');
    moveLeft.classList.add('hidden'); 
    self.classList.add('hide'); 
    var boxes = document.querySelectorAll('.box')
    boxes.forEach(function(element) {
        element.classList.remove('hide')
    });
}

function contentNav(element) {
    if (element.classList.contains('cover_black')) {
        var self = document.querySelector('#close')
        var display = document.querySelector('#open');
        var moveLeft = document.querySelector('#sidenav');
        var removeMain = document.querySelector('#main');
        var blacken = document.querySelector('#content');
        blacken.classList.remove('cover_black');
        moveLeft.classList.remove('moved');
        removeMain.classList.remove('remove_main');
        removeMain.classList.add('add_main');
        removeMain.classList.remove('cover_black');
        display.classList.remove('hide');
        moveLeft.classList.add('hidden'); 
        self.classList.add('hide'); 
        var boxes = document.querySelectorAll('.box')
        boxes.forEach(function(element) {
            element.classList.remove('hide')
        });
    }
}

    var rangeInput1 = document.querySelector(".range1");
    rangeInput1.oninput = function() {
    var x = rangeInput1.value;
    document.querySelector(".value1").innerHTML = x + "%";
    var volumeOff = document.querySelector(".volumeoff1");
    var volumeOn = document.querySelector(".volumeon1");
    var volumeDwn = document.querySelector(".volumedown1");
        if (x == 0) {
            volumeOff.classList.remove('hide');
            volumeDwn.classList.add('hide');
            volumeOn.classList.add('hide');
        }   else if (x >= 100) {
            volumeOff.classList.add('hide');
            volumeDwn.classList.add('hide');
            volumeOn.classList.remove('hide');
        }   else {
            volumeOff.classList.add('hide');
            volumeDwn.classList.remove('hide');
            volumeOn.classList.add('hide');
        }
}

    var rangeInput2 = document.querySelector(".range2");
    rangeInput2.oninput = function() {
    var x = rangeInput2.value;
    document.querySelector(".value2").innerHTML = x + "%";
    var volumeOff = document.querySelector(".volumeoff2");
    var volumeOn = document.querySelector(".volumeon2");
    var volumeDwn = document.querySelector(".volumedown2");
        if (x == 0) {
            volumeOff.classList.remove('hide');
            volumeDwn.classList.add('hide');
            volumeOn.classList.add('hide');
        }   else if (x >= 100) {
            volumeOff.classList.add('hide');
            volumeDwn.classList.add('hide');
            volumeOn.classList.remove('hide');
        }   else {
            volumeOff.classList.add('hide');
            volumeDwn.classList.remove('hide');
            volumeOn.classList.add('hide');
        }
}

    var rangeInput3 = document.querySelector(".range3");
    rangeInput3.oninput = function() {
    var x = rangeInput3.value;
    document.querySelector(".value3").innerHTML = x + "%";
    var volumeOff = document.querySelector(".volumeoff3");
    var volumeOn = document.querySelector(".volumeon3");
    var volumeDwn = document.querySelector(".volumedown3");
        if (x == 0) {
            volumeOff.classList.remove('hide');
            volumeDwn.classList.add('hide');
            volumeOn.classList.add('hide');
        }   else if (x >= 100) {
            volumeOff.classList.add('hide');
            volumeDwn.classList.add('hide');
            volumeOn.classList.remove('hide');
        }   else {
            volumeOff.classList.add('hide');
            volumeDwn.classList.remove('hide');
            volumeOn.classList.add('hide');
        }
}

    var rangeInput4 = document.querySelector(".range4");
    rangeInput4.oninput = function() {
    var x = rangeInput4.value;
    document.querySelector(".value4").innerHTML = x + "%";
    var volumeOff = document.querySelector(".volumeoff4");
    var volumeOn = document.querySelector(".volumeon4");
    var volumeDwn = document.querySelector(".volumedown4");
        if (x == 0) {
            volumeOff.classList.remove('hide');
            volumeDwn.classList.add('hide');
            volumeOn.classList.add('hide');
        }   else if (x >= 100) {
            volumeOff.classList.add('hide');
            volumeDwn.classList.add('hide');
            volumeOn.classList.remove('hide');
        }   else {
            volumeOff.classList.add('hide');
            volumeDwn.classList.remove('hide');
            volumeOn.classList.add('hide');
        }
}

    var rangeInput5 = document.querySelector(".range5");
    rangeInput5.oninput = function() {
    var x = rangeInput5.value;
    document.querySelector(".value5").innerHTML = x + "%";
    var volumeOff = document.querySelector(".volumeoff5");
    var volumeOn = document.querySelector(".volumeon5");
    var volumeDwn = document.querySelector(".volumedown5");
        if (x == 0) {
            volumeOff.classList.remove('hide');
            volumeDwn.classList.add('hide');
            volumeOn.classList.add('hide');
        }   else if (x >= 100) {
            volumeOff.classList.add('hide');
            volumeDwn.classList.add('hide');
            volumeOn.classList.remove('hide');
        }   else {
            volumeOff.classList.add('hide');
            volumeDwn.classList.remove('hide');
            volumeOn.classList.add('hide');
        }
}

    var rangeInput6 = document.querySelector(".range6");
    rangeInput6.oninput = function() {
    var x = rangeInput6.value;
    document.querySelector(".value6").innerHTML = x + "%";
    var volumeOff = document.querySelector(".volumeoff6");
    var volumeOn = document.querySelector(".volumeon6");
    var volumeDwn = document.querySelector(".volumedown6");
        if (x == 0) {
            volumeOff.classList.remove('hide');
            volumeDwn.classList.add('hide');
            volumeOn.classList.add('hide');
        }   else if (x >= 100) {
            volumeOff.classList.add('hide');
            volumeDwn.classList.add('hide');
            volumeOn.classList.remove('hide');
        }   else {
            volumeOff.classList.add('hide');
            volumeDwn.classList.remove('hide');
            volumeOn.classList.add('hide');
        }

}