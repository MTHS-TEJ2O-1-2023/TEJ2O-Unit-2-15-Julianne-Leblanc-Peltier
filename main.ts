/* Copyright (c) 2023 MTHS All rights reserved
 *
 * Created by: Julianne Leblanc-Peltier
 * Created on: Nov 2023
 * This program ...
*/

// variables
let sprite: game.LedSprite = null
let loopCounter = 0
let loopCounter2 = 0

// setup
basic.showIcon(IconNames.Happy)
basic.pause(500)
basic.clearScreen()

input.onButtonPressed(Button.A, function () {
  basic.clearScreen()
  loopCounter = 0
  sprite = game.createSprite(0, 0)

  while (loopCounter <= 4)
    sprite.turn(Direction.Right, 90)
        
    while (loopCounter <= 5) {
        basic.pause(500)
        sprite.move(1)
        loopCounter++
    }
  sprite.delete()
  basic.showIcon(IconNames.Happy)
})
