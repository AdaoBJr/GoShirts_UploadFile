import { Router } from 'express';
import { uploadAvatarRouter } from './uploadAvatar.routes';

const router = Router();

router.use('/upload', uploadAvatarRouter);

export { router };
