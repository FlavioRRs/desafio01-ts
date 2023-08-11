export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  public getName = (): string => {
    return this.name
  }

  public deposit(value: number): void {
    if(this.validateStatus()){
      this.balance += value
    }
  }

  public withdraw = (value: number): void => {
    if(this.validateStatus() && this.validateBalance(value)) {
      this.balance -= value
    }
  }

  public getBalance = (): number => {
    return this.balance
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }

  private validateBalance = (value: number): boolean => {
    if(value <= this.balance) {
      return true
    }

    throw new Error("Saldo insuficiente")
  }
}
