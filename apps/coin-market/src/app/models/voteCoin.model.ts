export class VoteCoin {
  value: number;
  expireDate: number;

  constructor(value: number, expireDate: number) {
    this.value = value;
    this.expireDate = expireDate;
  }
}
