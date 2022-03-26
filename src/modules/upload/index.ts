import { GoShirtsProvider } from 'src/providers/GoShirtsProvider/implementations/GoShirtsProvider';
import { UploadUseCase } from './UploadUseCase';
import { UploadController } from './UploadController';

const goShirtsProvider = new GoShirtsProvider();

const uploadUseCase = new UploadUseCase(goShirtsProvider);

const uploadController = new UploadController(uploadUseCase);

export { uploadController };
