interface IErrors {
  message: string;
  status: number;
}

class ApiError {
  public readonly message: string;
  public readonly status: number;

  constructor({ message, status = 400 }: IErrors) {
    this.message = message;
    this.status = status;
  }
}

export default ApiError;
