import { Router } from 'express';
import PostController from '../controllers/posts';
const routes = Router();

routes.get('/', (req, res) => {
    return res.json({ message: 'Welcome to Hello World' });
});

routes.get('/posts', PostController.getPosts);
routes.get('/posts/:id', PostController.getPost);
routes.put('/posts/:id', PostController.updatePost);
routes.delete('/posts/:id', PostController.deletePost);
routes.post('/posts', PostController.addPost);

export default routes;