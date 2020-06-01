export class Session {
  userName: string;
  token: string;
  expirationDate: Date;
  constructor({
    userName,
    token,
    expirationDate,
  }: {
    userName: string;
    token: string;
    expirationDate: Date;
  }) {
    this.userName = userName;
    this.token = token;
    this.expirationDate = expirationDate;
  }
}
