import React from "react";

const Create = () => {
  return (
    <div className="create">
      <h2>Add a new blog</h2>
      <form>
        <div>
          <label>Blog title</label>
          <input type="text" required />
        </div>
        <span></span>
        <div>
          <label>blog author</label>
          <input type="text" required />
        </div>
        <label>Blog body</label>
        <textarea required></textarea>
        <button>Add Blog</button>
      </form>
    </div>
  );
}

export default Create;
