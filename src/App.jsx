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
  const [checkedValue, setCheckedValue] = useState([]);

  // handle form submit
  function handleFormSubmit(e) {
    e.preventDefault();

    // Creo un nuovo oggetto con un nuovo id e i dati del form
    const newItem = {
      id: Date.now(),
      ...formData,
      tags: checkedValue, // Aggiungo i tag selezionati
    };

    // Aggiorno l'array dei post con il nuovo oggetto
    setPosts([newItem, ...posts]);

    // Resetto il form e i tag selezionati
    setFormData(initialFormData);
    setCheckedValue([]); // Resetta lo stato dei tag selezionati
  };



  // handle input change
  function handleFormField(e) {

    // aggiorno lo stato con il nuovo valore dell'input
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  // handle checkbox change
  function handleCheckForm(e) {
    const { checked, value } = e.target;

    setCheckedValue(prev => {
      if (checked) {
        // Se il tag è selezionato, aggiungilo a `checkedValue`
        return [...prev, value];
      } else {
        // Se il tag è deselezionato, rimuovilo da `checkedValue`
        return prev.filter(tag => tag !== value);
      }
    });
  }




  // render
  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">

          <h1>Form</h1>

          <button className="btn btn-primary btn-lg my-3" type="button" popovertarget="off-canvas-form">
            Add
          </button>
        </div>


        {/* Off-canvas form */}
        <div id="off-canvas-form" popover="true" className="p-3">
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
            <div className="mb-3">
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
                <option value="">Select a category</option>
                <option value="Programmazione" >Programmazione</option>
                <option value="Frontend" >Frontend</option>
                <option value="Backend" >Backend</option>
              </select>
              <small id="imageHelper" className="form-text text-muted">Select the category</small>
            </div>

            {/* tags */}
            <div className="mb-3">
              <label htmlFor="tags" className="form-label">Tags</label>


              {posts.map(post => {
                return post.tags.map((tag, index) => {
                  return (

                    <div className="form-check" key={index}>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value={tag}
                        id=""
                        name='tags'
                        onChange={handleCheckForm}
                      />
                      <label className="form-check-label" htmlFor="flexCheckDefault">
                        {tag}
                      </label>
                    </div>
                  )
                })
              })}
            </div>

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

                <div className="card rounded-3" style={{ minHeight: "450px" }}>
                  <div className="card-img">
                    <img src={post.image} alt="" className='object-fit-cover rounded-top-3' />
                  </div>

                  <div className="card-body">
                    <h4>{post.title}</h4>
                    <p>{post.content}.</p>
                    <p>{post.category}</p>

                    {post.tags.map((tag, index) => {
                      return (
                        <a
                          key={index}
                          href=''
                          className='me-2'
                        >{tag}</a>
                      )
                    })}
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
