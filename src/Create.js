import {useState} from 'react';
import {useNavigate } from 'react-router-dom';
// import{useHistory}from 'react-router-dom; //old version'
const Create=()=>{
    const [title,setTitle]=useState('');
    const [body,setBody]=useState('');
    const [author,setAuthor]=useState('jane');
    const [isPending,setIsPending]=useState('false');
    const history=useNavigate ();

    const handleSubmit=(e)=>{
        e.preventDefault();
        const blog={title,body,author};
        setIsPending(true);
        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(blog)
        }).then(()=>{
            console.log('new blog added');
            setIsPending(false)
            // history.go(1);//old version
            history('/');
        });
        
    }

    return(
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                type="text"
                required
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                required
                value={body}
                onChange={(e)=>setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select
                value={author}
                onChange={(e)=>setAuthor(e.target.value)}
                >
                    <option value="jane">Jane</option>
                    <option value="john">John</option>
                </select>
                {/* {!isPending&&<button>Add Blog</button>}
                {isPending&&<button disabled>Adding blog...</button>} */}
                <button>Add Blog</button>
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </div>
    );
}
export default Create;