import React from "react";
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import AddUser from "./pages/AddUser";
import Edit from "./pages/Edit";
import AddComment from "./pages/AddComment";
import ViewPost from "./pages/ViewPost";
import { ToastContainer } from 'react-toastify'

// to start local db - npm run server

const App = () => {
    return (
        <>
            <div className="App feedBG">
                <div className="head">
                    <p>Publish your passions, your way</p>
                    <p>Create a unique and beautiful blog easily.</p>
                </div>
                <div className=" headButton">
                    <div className="ui secondary menu ">
                        <div className="item">
                            <img src="https://static.vecteezy.com/system/resources/thumbnails/004/284/047/small/vk-logo-monogram-emblem-style-with-crown-shape-design-template-free-vector.jpg" alt="/" />
                        </div>
                        <a href="/add" className="item" style={{ color: "white" }}>NewPost</a>
                        <a href="/" className="item" style={{ color: "white" }}>Feed</a>
                    </div>
                </div>
            </div>
            <ToastContainer />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add" element={<AddUser />} />
                <Route path="/edit/:id" element={<Edit />} />
                <Route path="/comment/:id" element={<AddComment />} />
                <Route path="/viewpost/:id" element={<ViewPost />} />
            </Routes>
        </>
    );
};



export default App;