import { Request, Response } from "express";
import { httpHandle } from "../utils/error.handle";

const getBlog = (req: Request, res: Response) => {
  try {

  } catch (error) {
    httpHandle(res, 'ERROR_GET_BLOG');
  }
};

const getBlogs = (req: Request, res: Response) => {
  try {

  } catch (error) {
    httpHandle(res, 'ERROR_GET_IBLOG');
  }
};

const updateBlog = (req: Request, res: Response) => {
  try {

  } catch (error) {
    httpHandle(res, 'ERROR_UPDATE_BLOG');
  }
};

const createBlog = (req: Request, res: Response) => {
  try {
    const { body } = req;
    res.send(body);
  } catch (error) {
    httpHandle(res, 'ERROR_CREATE_BLOG');
  }
};

const deleteBlog = (req: Request, res: Response) => {
  try {

  } catch (error) {
    httpHandle(res, 'ERROR_DELETE_BLOG');
  }
};

export {
  getBlog,
  getBlogs,
  updateBlog,
  createBlog,
  deleteBlog
}
