import { useState } from 'react'
import './App.css'
import allPosts from "./db/db.js"

const initialFormData = {
  title: "",
  image: "",
  content: "",
  category: "",
  tags: [],
  isPublished: true,
};


function App() {

  // logic
  const [posts, setPosts] = useState(allPosts);
  const [formData, setFormData] = useState(initialFormData);

  // handle form submit
  function handleFormSubmit(e) {
    e.preventDefault();

    // creo un nuovo oggetto con un nuovo id e i dati del form
    const newItem = {
      id: Date.now(),
      ...formData,
    };

    // aggiorno l'array posts con il nuovo oggetto
    setPosts([
      newItem,
      ...posts
    ]);

    // resetto il form
    setFormData(initialFormData);
  };


  // handle input change
  function handleFormField(e) {

    // aggiorno lo stato con il nuovo valore dell'input
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };




  // render
  return (
    <>
      <div className="container">
        <h1>Form</h1>

        <button className="btn btn-primary btn-lg" type="button" popovertarget="off-canvas-form">
          Add
        </button>


        {/* Off-canvas form */}
        <div id="off-canvas-form" popover="true" className="p-3" style={{ minHeight: "100vh" }}>
          <div className="d-flex justify-content-between align-items-center">
            <h3>Add a new post</h3>
            <button className="btn btn-dark" type="button" popovertarget="off-canvas-form" popovertargetaction="hide">
              Close
            </button>
          </div>
          <p>Use the form below to add a new post to the blog</p>


          {/* form here */}
          <form onSubmit={handleFormSubmit}>

            {/* title */}
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Title</label>
              <input
                type="text"
                className="form-control"
                name="title"
                id="title"
                aria-describedby="titleHelpers"
                placeholder="Phyton for beginners"
                value={formData.title}
                onChange={handleFormField}
                required
              />
              <small id="titleHelper" className="form-text text-muted">Type the title of your post</small>
            </div>

            {/* image */}
            <div className="mb-3">
              <label htmlFor="image" className="form-label">Image</label>
              <input
                type="text"
                className="form-control"
                name="image"
                id="image"
                aria-describedby="imageHelpers"
                placeholder="https://picsum.photos/600/400"
                value={formData.image}
                onChange={handleFormField}
                required
              />
              <small id="imageHelper" className="form-text text-muted">Add the image of your post</small>
            </div>

            {/* content */}
            <div className="mb-3">
              <label htmlFor="content" className="form-label">Content</label>
              <textarea
                type="text"
                className="form-control"
                name="content"
                id="content"
                aria-describedby="contentHelpers"
                placeholder="Add your content"
                value={formData.content}
                onChange={handleFormField}
              />
              <small id="imageHelper" className="form-text text-muted">Add the content of your post</small>
            </div>

            {/* category */}
            {/* <div className="mb-3">
              <label htmlFor="category" className="form-label">Category</label>
              <select
                className="form-select"
                aria-label="Default select example"
                name="category"
                id="category"
                placeholder="Select a category"
                value={formData.category}
                onChange={handleFormField}
              >
                <option value="1">Programmazione</option>
                <option value="2">Frontend</option>
                <option value="3">Backend</option>
              </select>
              <small id="imageHelper" className="form-text text-muted">Select the category</small>
            </div> */}

            {/* tags */}
            {/* <div className="mb-3">
              <label htmlFor="tags" className="form-label">Tags</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="javascript"
                  name='javascript'
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  JavaScript
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="coding"
                  name='coding'
                />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  Coding
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="tutorial"
                  name='tutorial'
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Tutorial
                </label>
              </div>
              <small id="imageHelper" className="form-text text-muted">Select the tags</small>
            </div> */}















            {/* submit */}
            <button
              type="submit"
              className="btn btn-dark mt-4"
            >
              Save
            </button>
          </form>

        </div>



        {/* posts */}
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">

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
