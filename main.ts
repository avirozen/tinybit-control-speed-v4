basic.forever(function () {
    basic.showLeds(`
        . . . . #
        . . . . #
        . . . . #
        . . . . #
        . . . . #
        `)
    Tinybit.CarCtrlSpeed2(Tinybit.CarState.Car_Run, 0, 255)
    basic.pause(400)
    basic.showLeds(`
        # . . . .
        . . . . #
        . . . . #
        . . . . #
        . . . . #
        `)
    Tinybit.CarCtrlSpeed2(Tinybit.CarState.Car_Run, 50, 200)
    basic.pause(400)
    basic.showLeds(`
        # . . . .
        # . . . .
        . . . . #
        . . . . #
        . . . . #
        `)
    Tinybit.CarCtrlSpeed2(Tinybit.CarState.Car_Run, 100, 150)
    basic.pause(400)
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        . . . . #
        . . . . #
        `)
    Tinybit.CarCtrlSpeed2(Tinybit.CarState.Car_Run, 150, 100)
    basic.pause(400)
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        . . . . #
        `)
    Tinybit.CarCtrlSpeed2(Tinybit.CarState.Car_Run, 200, 50)
    basic.pause(400)
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        `)
    Tinybit.CarCtrlSpeed2(Tinybit.CarState.Car_Run, 255, 0)
    basic.pause(400)
})
