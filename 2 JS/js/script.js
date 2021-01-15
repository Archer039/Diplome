
function counter() {
    let count = 0;
    let messageCounter = count + ' секунд';
    let ending;

    $("span.first-counter").show().text(messageCounter);
    count++;

    setInterval(function () {
        if (count <= 6) {
            if (count == 1) { ending = 'а' }
            if ((count >= 2) && (count <= 4)) { ending = 'ы' }
            if (count == 5) { ending = '' }

            messageCounter = count + ' секунд' + ending;

            if (count == 6) {
                messageCounter = 'Готово'
            }

            count++;

            $("span.first-counter").text(messageCounter);
        }
    }, 1000);

    setTimeout(function () {
        $("span.first-counter").addClass("done")
    }, 7000)
    setTimeout(function () {
        $("span.first-counter").css({
            "background-color":  "#e02c2c",
            "color": "#fff",
            "border": "none"
        })
    }, 9000)
    setTimeout(function() {
        let secondCount = 1;

        $("span.second-counter").show().text('0');

        setInterval(function() {
            if(secondCount < 50){
                secondCount++;
                $("span.second-counter").text(secondCount);
                if(secondCount == 50){
                    $(".success-box").show();
                }
            }
        }, 50);


    }, 10000)
}


$("button.start").on('click', function () {
    $("button.start").hide();
    counter();
});


$("button.clear").on('click', function () {
    $("*").remove();
})