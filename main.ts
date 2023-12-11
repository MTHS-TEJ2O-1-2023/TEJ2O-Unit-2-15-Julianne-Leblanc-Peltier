/* Copyright (c) 2023 MTHS All rights reserved
 *
 * Created by: Julianne Leblanc-Peltier
 * Created on: Nov 2023
 * This program moves the led around the microbit
*/

// variables
let ledCoordinate: number = 0
let loopCounter: number = 0
let sprite: game.LedSprite = null

// setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// when button A is pressed, move sprite around edge
input.onButtonPressed(Button.A, function () {
  // setup
  basic.clearScreen()
  sprite = game.createSprite(0, 0)
  loopCounter = 0

  // reset
  while (loopCounter <= 3) {
    ledCoordinate = 0

    // move ledCoordinate
    while (ledCoordinate <= 4) {
      basic.pause(500)
      sprite.move(1)
      ledCoordinate++
    }

    // turn 90 degrees
    sprite.turn(Direction.Right, 90)
    loopCounter++
  }

  // clean up
  sprite.delete()
  basic.pause(500)
  basic.showIcon(IconNames.Happy)
})
