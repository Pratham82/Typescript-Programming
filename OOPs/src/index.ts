import { Player } from './chapter-2/Player'
import { Dog, Cat } from './chapter-3/Inheritance'

/**
 * Chapter 1 *
 * /
/*

const mario = new Player({
  health: 10,
  speed: 20,
})
mario.greet()
console.log(mario._health)
console.log(mario._speed)
*/

/**
 * Chapter 2
 */
/*
const mario = new Player({
  health: 100,
  isInvincible: true,
  name: 'Mario',
})

console.log(mario.getPlayerStats())
console.log(mario.getCrush())
mario.greet()

const peach = new Player({
  health: 50,
  isInvincible: false,
  name: 'Peach',
  crush: mario,
})

console.log(peach.getPlayerStats())
console.log(peach.getCrush())
peach.greet()

// Using setter function
mario.setCrush(peach)
console.log(mario.getCrush())
*/

/**
 * Chapter 3
 */
const dog = new Dog({
  name: 'Ron',
  health: 100,
  hunger: 10,
  location: {
    coOrdX: 10,
    coOrdY: 20,
  },
  noise: 'Woof',
})

dog.makeNoise()

const cat = new Cat({
  name: 'Gilbert',
  health: 100,
  hunger: 10,
  location: {
    coOrdX: 10,
    coOrdY: 20,
  },
  noise: 'Meow',
})

cat.makeNoise()

dog.move()
