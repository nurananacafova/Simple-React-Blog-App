import { useState, useEffect } from 'react';
import BlogList from '../src/BlogList.js';
import useFetch from './useFetch.js';
const Home = () => {
   const {data: blogs,isPending,error}=useFetch('http://localhost:8000/blogs');
    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    // }//when we refresh page, all datas come back

    
    return (
        <div className="home">
            {error&&<div>{error}</div>}
            {isPending&&<div>Loading...</div>}
            {/* use props for connect data from Homes to BlogList Template
            <BlogList blog={blogs} title="All blogs" handleDelete={handleDelete} />
            <BlogList blog={blogs.filter((author)=>author.author==='John')} title="John`s blogs" handleDelete={handleDelete} /> */}
            {blogs && <BlogList blog={blogs} title="All blogs!" />}
        </div>
    );
}
export default Home;