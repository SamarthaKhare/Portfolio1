import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

document.getElementById("root").style.display = "none";
// wait until window, stylesheets, images, links, and other media assets are loaded
{
  document.addEventListener("DOMContentLoaded", function (event) {

    // wait until window, stylesheets, images, links, and other media assets are loaded
    window.onload = function () {

      document.getElementById("root").style.display = "block";


    };
  });
}

ReactDOM.createRoot(document.getElementById('root')).render(

  <App />
)


