import { Request } from 'express';

function parseRequestBody(request: Request) {
  const requestBody = request.body;

  const requestGraphQL = requestBody.input?.data || requestBody.input;
  const body = requestGraphQL || requestBody;
  const token = request.headers.authorization;

  return { token, body };
}

export { parseRequestBody };
