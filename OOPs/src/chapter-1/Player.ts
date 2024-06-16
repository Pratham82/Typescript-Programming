export class Player {
  _health: number
  _speed: number

  constructor({ health = 0, speed = 0 }: { health: number; speed: number }) {
    this._health = health
    this._speed = speed
  }

  greet() {
    console.log(`Hi from player`)
  }
}
