import { Request, Response } from 'express';
import { parseRequestBody } from 'src/utils/parseRequestBody';
import { UploadUseCase } from './UploadUseCase';

class UploadController {
  constructor(private uploadUseCase: UploadUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { token, body } = parseRequestBody(request);

    const res = await this.uploadUseCase.execute({ token, ...body });
    return response.status(201).json({ token: res.token, uploaded: res.updated });
  }
}

export { UploadController };
