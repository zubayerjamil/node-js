import {Request, Response} from 'express';
import axios, {AxiosResponse} from 'axios';
import IPost from "../models/IPost";

// getting all posts
const getPosts = async (req: Request, res: Response) => {
    // get some posts
    let result: AxiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
    let posts: [IPost] = result.data;
    return res.status(200).json({
        data: posts,
        message : 'Posts fetched successfully'
    });
};

// getting a single post
const getPost = async (req: Request, res: Response) => {
    // get the post id from the req
    let id: string = req.params.id;
    // get the post
    let result: AxiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    let post: IPost = result.data;
    return res.status(200).json({
        data: post,
        message : 'Post fetched successfully'
    });
};

// updating a post
const updatePost = async (req: Request, res: Response) => {
    // get the post id from the req.params
    let id: string = req.params.id;
    // get the data from req.body
    let title: string = req.body.title ?? null;
    let body: string = req.body.body ?? null;
    // update the post
    let response: AxiosResponse = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        ...(title && {title}),
        ...(body && {body})
    });
    // return response
    return res.status(200).json({
        data: response.data,
        message : 'Post updated successfully'
    });
};

// deleting a post
const deletePost = async (req: Request, res: Response) => {
    // get the post id from req.params
    let id: string = req.params.id;
    // delete the post
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    // return response
    return res.status(200).json({
        data : [],
        message: 'post deleted successfully'
    });
};

// adding a post
const addPost = async (req: Request, res: Response) => {
    // get the data from req.body
    let title: string = req.body.title;
    let body: string = req.body.body;
    // add the post
    let response: AxiosResponse = await axios.post(`https://jsonplaceholder.typicode.com/posts`, {
        title,
        body
    });
    // return response
    return res.status(201).json({
        data: response.data,
        message : 'Post created successfully'
    });
};

export default {getPosts, getPost, updatePost, deletePost, addPost};