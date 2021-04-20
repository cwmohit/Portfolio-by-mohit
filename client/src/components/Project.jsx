import React, {useState, useEffect} from 'react';
import ProjectHead from "../Images/head2.jpg";

import service from "../Images/service.svg";
import service2 from "../Images/service2.svg";

import axios from 'axios';
import '../styles.css';
const Project = ({bg,bgColor}) => {
  const [posts, setPost] = useState([]);



  const _refreshPosts = () => {
    axios.get('https://portfolio-by-mohit.herokuapp.com/portfolio/projects').then((response) => {
      setPost(response.data)
    });
  }
  useEffect(() => {
    _refreshPosts();
  }, [posts])

  return (
    <div className='App'>
      <div className="container mt-5">
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100" src={ProjectHead} alt="First slide" />
            </div>
          </div>
        </div>
      </div>

      <div className={bgColor+" container mt-5"}>
        <h1 >Projects</h1>
        <p className='d-flex justify-content-center align-items-center'>I have developed some project <i className="fa fa-2x fa-github text-white mx-2 " aria-hidden="true"></i></p>
        <div className='row mt-5'>
        {!posts.length ? <div class="spinner-border text-primary" role="status">
  <span class="sr-only">Loading...</span>
</div> :  posts.map((post) => (
          <div className='col-lg-4 col-md-4 col-10 m-auto'>
            <div class={bgColor+" card mb-3 "} style={{ background: bg }}>
              <img class="card-img-top" src={post.selectedFile} alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">{post.name}</h5>
                <a type="button" href={post.link} class="btn btn-outline-light btn-block sourceCode m-auto text-info" target="_blank"> Source Code</a>
              </div>
            </div>
          </div>
        ))
        }
          
        
        </div>
      </div>
      <div className={bgColor+" container"}>
      <h1>Services</h1>
      <p>Grow Your Business with us</p>
        <div className='row'>
        <div class="col-md-4 col-10 mx-auto">
                    <div class="box">
                        <div class="our-services settings">
                            <div class="icon">
                                <img src={service2} width="100px" alt="img" />
                            </div>

                            <h4>Website Development</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, saepe?</p>


                        </div>

                    </div>
                </div>
        <div class="col-md-4 col-10 mx-auto">
                    <div class="box">
                        <div class="our-services settings">
                            <div class="icon">
                                <img src={service} width="100px" alt="img" />
                            </div>

                            <h4>Database Management</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, saepe?</p>


                        </div>

                    </div>
                </div>
        <div class="col-md-4 col-10 mx-auto">
                    <div class="box">
                        <div class="our-services settings">
                            <div class="icon">
                                <img src={service2} width="100px" alt="img" />
                            </div>

                            <h4>Apis Development</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, saepe?</p>


                        </div>

                    </div>
                </div>

        </div>
        

      </div>
    </div>
  );
};

export default Project;