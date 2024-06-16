interface IPlayerProps {
  name: string
  health: number
  isInvincible: boolean
  crush?: Player
}

export class Player {
  private name: string
  private health: number
  private isInvincible: boolean
  private crush?: Player

  constructor(props: IPlayerProps) {
    this.name = props.name
    this.health = props.health
    this.isInvincible = props.isInvincible
    this.crush = props.crush
  }

  greet(): void {
    console.log(`Hello my name is ${this.name}`)
  }

  getCrush(): undefined | string {
    if (!this.crush) {
      return `Sorry no crush Found :(`
    }
    return `${this.name}'s crush is ${this.crush.name}`
  }

  setCrush(crush: Player): void {
    if (crush !== this.crush) {
      this.crush = crush
    }
  }

  getPlayerStats(): string {
    return `Player Stats: \n Name: ${this.name}\n Health: ${
      this.health
    }\n Invincible: ${this.isInvincible ? 'Yes' : 'No'}`
  }
}
