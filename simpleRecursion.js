const simpleCountdownR = function(number) {
    if (number < 0) return;
    console.log(number)
    simpleCountdownR(number - 1)
}

simpleCountdownR(10)