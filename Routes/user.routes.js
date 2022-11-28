import {Router} from 'express';
import { GetUser } from '../Controller/user.controller.js';

export const UserRouter = Router();


UserRouter.get('/:id',GetUser);