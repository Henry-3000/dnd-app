import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css'
import ImageGal from "./Pages/ImageGal"
import Login from "./Pages/Login"
import { ToastContainer } from 'react-toastify';


function App() {
    return(
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/gallery" element={<ImageGal/>}/>
                </Routes>
            </Router>
            <ToastContainer
            position='bottom-center'
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme='dark'
            />
       </>
    )
}


export default App;
