$(document).ready(function () {
    var currentFloor = 2;
    var floorPath = $(".home-image path");
    var counterUp = $(".counter-up");
    var counterDown = $(".counter-down");

    // функция при наведении мышью на этаж
    floorPath.on("mouseover", function () {
        floorPath.removeClass("current-floor"); // удаляем выделение этажа на схеме
        currentFloor = $(this).attr('data-floor'); // получаем значение текущего этажа
        $(".counter").text(currentFloor); // записываем в счетчик значение этажа
    });

    counterUp.on("click", function() { // отслеживаем клик вверх
        if (currentFloor < 18) { 
            currentFloor++;
            usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2,
            useGrouping: false }); // форматируем число - 02, 03, 04 ... при ++
            $(".counter").text(usCurrentFloor);
            floorPath.removeClass("current-floor"); 
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor'); // подсвечиваем текущий этаж
        }
    });

    counterDown.on('click', function () {
        if(currentFloor > 2) {
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2,
            useGrouping: false });
            $(".counter").text(usCurrentFloor);
            floorPath.removeClass("current-floor");
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
        }
    })
});

