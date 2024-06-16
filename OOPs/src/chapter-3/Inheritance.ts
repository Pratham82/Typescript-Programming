interface ILocation {
  coOrdX: number
  coOrdY: number
}

interface IAnimalProperties {
  name: string
  health: number
  hunger: number
  location: ILocation
  noise: string
}

class Animal {
  private name: string
  private health: number
  private hunger: number
  protected location: ILocation
  private noise: string

  constructor(animalProperties: IAnimalProperties) {
    this.name = animalProperties.name
    this.health = animalProperties.health
    this.hunger = animalProperties.hunger
    this.location = {
      coOrdX: animalProperties.location.coOrdX,
      coOrdY: animalProperties.location.coOrdY,
    }
    this.noise = animalProperties.noise
  }

  eat() {
    this.health = this.health + 5
    console.log()
  }

  sleep() {
    this.health = this.health + 10
  }

  move() {
    console.log('Animal is moving')
    this.health = this.health + 0.5
  }

  makeNoise(): void {
    console.log(`I'm ${this.name} and I'm making a noise ${this.noise} !!!`)
  }

  getName() {
    return this.name
  }

  getNoise() {
    return this.noise
  }
}

export class Dog extends Animal {
  makeNoise(): void {
    console.log(`I'm ${this.getName()} and I'm making a noise Woof Woof!!`)
  }
  getLocation() {
    return `X: ${this.location.coOrdX} \nY: ${this.location.coOrdY}`
  }
  move() {
    console.log(`moving from dog class`)
    super.move()
  }
}

export class Cat extends Animal {
  makeNoise(): void {
    console.log(`I'm ${this.getName()} and I'm making a noise Meow!!`)
  }
}
