import { useState } from 'react'
import './App.css'
import allPosts from "./db/db.js"


function App() {

  // logic
  const [posts, setPosts] = useState(allPosts);
  const [newPost, setNewPost] = useState("");

  // add a post
  function addPost(e) {
    e.preventDefault();

    // aggiorno la UI in modo reattivo
    setPosts([
      newPost,
      ...posts
    ]);

    // resetto il form
    setNewPost("");
  };


  // remove a post
  function handleTrashClick(e) {

    const deletePost = Number(e.target.closest("button").getAttribute("data-index"));
    console.log(deletePost);

    // remove the task
    const newPost = posts.filter((post, index) => index != deletePost);

    // update the UI
    setPosts(newPost);
  };


  // edit a post
  function handleEditClick(e) {

    // get the index of the post to edit
    const editPost = Number(e.target.closest("button").getAttribute("data-index"));
    console.log(editPost);
  };

  // render
  return (
    <>
      <div className="container">
        <h1>Form</h1>

        {/* new post form */}
        <form onSubmit={addPost}>

          {/* input title */}
          <div className="mb-3">
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
          </div>

          {/* submit */}
          <button type="submit" className="btn btn-primary">Add</button>
        </form>


        {/* post title list */}
        <ul className='list-group mt-4'>

          {posts.map((post, index) => <li key={index} className='list-group-item d-flex justify-content-between align-items-center'>
            {post}

            <div className='functions'>

              {/* edit a post */}
              <button onClick={handleEditClick} data-index={index} className='btn btn-outline-secondary'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                </svg>
              </button>

              {/* delete a post */}
              <button onClick={handleTrashClick} data-index={index} className='btn btn-outline-secondary mx-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                </svg>
              </button>
            </div>
          </li>)}
        </ul>
      </div>
    </>
  );
};

export default App
