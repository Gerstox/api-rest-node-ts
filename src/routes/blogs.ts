import { Router } from "express";
import { createBlog, deleteBlog, getBlog, getBlogs, updateBlog } from "../controllers/blog.controller";

const router = Router();

router.get('/', getBlogs);
router.get('/:id', getBlog);
router.post('/', createBlog);
router.put('/', updateBlog);
router.delete('/', deleteBlog);


export { router };
