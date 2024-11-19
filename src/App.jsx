import { useState } from 'react'
import './App.css'
import allPosts from "./db/db.js"


function App() {

  // logic
  const [posts, setPosts] = useState(allPosts);




  // render
  return (
    <>
      <div className="container">
        <h1>Form</h1>

        {/* new post form */}
        {/* <form onSubmit={addPost}> */}

        {/* input title */}
        {/* <div className="mb-3">
            <label htmlFor="postTitle" className="form-label">Add a post</label>

            <input
              type="text"
              className="form-control"
              id="postTitle"
              aria-describedby="emailHelp"
              value={newPost}
              onChange={e => setNewPost(e.target.value)}
              required
            />

            <small id="emailHelp" className="form-text">Add post title</small>
          </div> */}

        {/* submit */}
        {/* <button type="submit" className="btn btn-primary">Add</button> */}
        {/* </form> */}


        {/* posts */}
        <div className="row row-cols-1 row-cols-md-2 g-3">

          {posts.map(post => {
            return (
              <div className="col" key={post.id}>
                <div className="card" style={{ minHeight: "450px" }}>
                  <div className="card-img">
                    <img src={post.image} alt="" className='object-fit-cover' />
                  </div>
                  <div className="card-body">
                    <h4>{post.title}</h4>
                    <p>{post.content}.</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  );
};

export default App
