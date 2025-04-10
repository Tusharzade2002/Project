import React from "react";
import "./Home.css";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import createPost from "../Store/Post/postThunk.js";
function Home() {
//   const dispatch = useDispatch();
//   const { loading, post, error } = useSelector((state) => state.posts);
//   const [formData, setFormData] = useState({
//     title: "",
//     body: "",
//   });

//   console.log(formData);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(createPost(formData));
//   };
  return (
    <>
      <div className="container">
        <div className="items" style={{ backgroundColor: "#1a53ff" }}>
          <div className="m-4" style={{ color: "white" }}>
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>Total Income</p>
            <p>$ 567654</p>
            <p>saved 20%</p>
          </div>
        </div>
        <div className="items" style={{ backgroundColor: "#4da6ff" }}>
          <div className="m-4" style={{ color: "white" }}>
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>
              Total Expense
            </p>
            <p>$ 567654</p>
            <p>saved 20%</p>
          </div>
        </div>
        <div className="items" style={{ backgroundColor: "#8c1aff" }}>
          <div className="m-4" style={{ color: "white" }}>
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>Total Income</p>
            <p>$ 567654</p>
            <p>saved 20%</p>
          </div>
        </div>
        <div className="items" style={{ backgroundColor: "#70db70" }}>
          <div className="m-4" style={{ color: "white" }}>
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>Total Income</p>
            <p>$ 567654</p>
            <p>saved 20%</p>
          </div>
        </div>
      </div>

      {/* <div className="p-4">
        <form onSubmit={handleSubmit}>
          <input
            value={formData.title}
            name="title"
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
            placeholder="Enter title"
            className="border p-2 mr-2"
          />

          <input
            value={formData.body}
            name="body"
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
            placeholder="Enter body"
            className="border p-2 mr-2"
          />

          <button type="submit" className="bg-blue-500 text-white px-4 py-2">
            Submit
          </button>
        </form>

        {loading && <p>Sending...</p>}
        {post && <p>✅ Post sent: {post.title}</p>}
        {error && <p className="text-red-500">❌ {error}</p>}
      </div> */}
    </>
  );
}

export default Home;
