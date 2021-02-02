import React, { useState, useEffect } from "react";
import AboutHead from "../Images/AboutHead2.jpg";

import axios from 'axios';

import "../styles.css";

const About = () => {
  let search=document.getElementById('searchTxt');
  
  const searchBlog = (e) => {
    let inputVal=search.value;
    console.log(inputVal)
    let contents=document.getElementsByClassName('content');
    Array.from(contents).forEach(function(element){
        let cardTxt=element.querySelectorAll("p")[0].innerText;
        cardTxt=cardTxt.toLowerCase();
        if(cardTxt.includes(inputVal)){
            element.style.display="flex";
        }else{
            element.style.display="none";
        }
    })
  }
  const [posts, setPost] = useState([]);



  const _refreshPosts = () => {
    axios.get('https://portfolio-by-mohit.herokuapp.com/portfolio/certificates').then((response) => {
      setPost(response.data)
    });
  }
  useEffect(() => {
    _refreshPosts();
  }, [posts])

  return (
    <div className="App mt-4">
      <div className="container mt-5">
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100" src={AboutHead} alt="First slide" />
            </div>
          </div>
        </div>
      </div>

      <div className='container text-white '>
        <h1 className='text-left mt-5'>Let Me tell you About myself</h1>
        <p className='text-left'>
          I am currently pursuing Bachelor of Electronics and Computer Science Engineering from MBM Engineering College Jodhpur.
          I am a creative guy who loves Javascript, reactJs, Nodejs and building website with them.
  </p>

      </div>

      <div className='container mt-5'>
        <h1 className='text-white my-5'>Certifications</h1>
        <div className='row'>

          {!posts.length ? <div class="spinner-border text-primary" role="status">
  <span class="sr-only">Loading...</span>
</div> :
            posts.map((post) => (
              <div className='col-lg-4 col-md-4 col-10 m-auto'>
                <div class="card mb-3 text-white" style={{ background: "black" }}>
                  <img class="card-img-top" src={post.selectedFile} alt="Card image cap" />
                  <div class="card-body">
                    <h5 class="card-title">{post.company}</h5>
                    <p class="card-text my-0">{post.title}</p>
                    <p class="card-text"><small class="text-muted my-0">{post.duration}</small></p>
                  </div>
                </div>
              </div>
            ))}
         

        </div>

      </div>

      <div class="container mt-5">
        
        <div class="row ">
          <div class="col-lg-10 mx-auto text-light ">
            <div class="row m-auto">
              <div class="col-lg-4 col-md-4 m-auto col-12">
                <h2 class="text-left my-3 text-info">Featured Articles</h2>
              </div>
              <div class="col-lg-8 col-md-8 col-12 m-auto form-inline align-items-baseline" style={{ justifyContent: "flex-end", flexWrap: "nowrap", flexFlow: "nowrap" }} >
                <div class="form-check mx-2 w-50">
                  <input class="form-check-input" type="radio" name="year" id="All" value="All" checked />
                  <label class="form-check-label" for="All">
                    All
                            </label>
                </div>
                <div class="form-group w-100 mx-auto mt-0"  >
          <input type="email" class="form-control w-100" id="searchTxt"  onChange={searchBlog} aria-describedby="searchTxt" placeholder="Search An Article" />
        </div>
                
              </div>
            </div>

            <div id="NewArticles">

              <div class="row content mt-3">
                <div class="col-lg-4 col-md-6 col-12 m-auto">
                  <figure style={{ width: "200px", margin: "auto" }} >
                    <img style={{ width: "200px" }} class="image-responsive rounded-circle"
                      src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_center,h_175,q_auto:good,w_175/v1/gcs/platform-data-dsc/events/dsc%20web%2030-05_MBTJVPS.png"
                      alt="" />
                  </figure>
                </div>
                <div class="col-lg-8 col-md-6 col-12 m-auto">
                  <a href="https://portfolio-a7a25.web.app/article.html" target='_blank' style={{ textDecoration: "none" }}>
                    <h3 class="title">30 Days of Web Development
                                </h3>
                  </a>
                  <p>
                    30 Days of Web Development will provide you with an opportunity to kick start your
                    journey
                    in web development and get hands-on experience with HTML, CSS, JS,
                    Bootstrap, and some basics of back-end. It is organized by a total of 50+ DSC Leads over
                    the
                    world.

                    Our main objective behind this program is to provide the best content possible at no
                    cost,
                    with sessions from awesome speakers and skilled mentors who are there to help you
                    throughout
                                the process....<span> <a href="https://portfolio-a7a25.web.app/article.html" target='_blank'>Read More</a> </span></p>
                </div>
              </div>
              <div class="row content mt-3">
                <div class="col-lg-4 col-md-6 col-12 m-auto">
                  <figure style={{ width: "200px", margin: "auto" }} >
                    <img style={{ width: "200px" }} class="image-responsive rounded-circle"
                      src="data:image/png;base64,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"
                      alt="" />
                  </figure>
                </div>
                <div class="col-lg-8 col-md-6 col-12 m-auto">
                  <a href="https://dev.to/datastructures/awesome-javascript-best-blogs-books-people-podcasts-conferences-newsletters-videos-and-documentaries-on-the-web-updated-3ank" target='_blank' style={{ textDecoration: "none" }}>
                    <h3 class="title">  Learn Javascript in 2021
                                </h3>
                  </a>
                  <p>
                
JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions......<span> <a href="https://dev.to/datastructures/awesome-javascript-best-blogs-books-people-podcasts-conferences-newsletters-videos-and-documentaries-on-the-web-updated-3ank" target='_blank'>Read More</a> </span></p>
                </div>
              </div>

            </div>


          </div>
        </div>
      </div>


    </div>
  );
};

export default About;
