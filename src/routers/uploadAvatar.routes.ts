import { Router } from 'express';

import { uploadController } from 'src/modules/upload';

const uploadAvatarRouter = Router();

uploadAvatarRouter.post('/avatar', (request, response) =>
  uploadController.handle(request, response)
);

export { uploadAvatarRouter };
