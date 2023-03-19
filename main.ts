radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 8) {
        Tinybit.CarCtrlSpeed2(Tinybit.CarState.Car_Run, 101, 101)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
})
/**
 * נסיעה שמאלה
 */
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendNumber(4)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(6)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(5)
})
/**
 * נסיעה ימינה
 */
input.onGesture(Gesture.TiltRight, function () {
    radio.sendNumber(6)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    radio.sendNumber(2)
})
radio.setGroup(58)
basic.forever(function () {
	
})
