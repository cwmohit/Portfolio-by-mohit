import React,{useState} from "react";
import CallMadeIcon from '@material-ui/icons/CallMade';
import "../styles.css";
import axios from 'axios';
import Home3 from "../Images/home3.svg";
import Home5 from "../Images/home5.svg";
import Mohit from "../Images/mohit1.jpg";
import service from "../Images/service.svg";
import service2 from "../Images/service2.svg";
import Mohit2 from "../Images/mohit2.jpg";
import Education from "../Images/education2.gif";
import { NavLink } from "react-router-dom";
import { Carousel } from "react-bootstrap";
const Home = () => {
  const [postData, setPostData] = useState({
    name: '', email: '', phone: "" ,message: ''
 });

 const handleSubmit = (e) => {
     e.preventDefault();

     axios.post('https://portfolio-by-mohit.herokuapp.com/portfolio/contacts', postData).then((response) => {

         console.log(response);
         alert('Message Has Been Send Successfully')
       });
       setPostData({
        name: '', email: '', phone: "" ,message: ''
     })

    let ele = document.createElement("div");
    let Contact = document.getElementById('contact');
    ele.innerText = `Thanks For connecting.`;
    ele.setAttribute("class","alert alert-success");
    Contact.appendChild(ele);
   }


  return (
    <div className="container mt-5">
      <div className="row row1">
        <div className="col-md-6 col-12 order-md-0 order-1 d-flex justify-content-center align-items-center flex-column">
          <h2 className='text-white'>I AM MOHIT KANDHARI</h2>
          <h4 className='text-white'>Developer | Full Time Learner • Rajasthan, IN </h4>
          <p className='text-white'>
            I am a student of{" "}
            <span className="font-weight-bold text-info">
              MBM ENGINEERING COLLEGE, JODHPUR
            </span>
          </p>
          <div className="row my-3">
            <div className="col-3">
              <a href="https://www.facebook.com/profile.php?id=100025458912741">
                <i
                  className="fa  fa-2x fa-facebook-official text-white"
                  aria-hidden="true"
                ></i>
              </a>
            </div>
            <div className="col-3">
              <a href="https://www.linkedin.com/in/mohit-kandhari-455a48186/">
                {" "}
                <i className="fa fa-2x fa-linkedin text-white" aria-hidden="true"></i>
              </a>
            </div>
            <div className="col-3">
              <a href="https://github.com/cwmohit">
                {" "}
                <i className="fa fa-2x fa-github text-white" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-12 order-md-0 m-auto order-0">
          <Carousel>
            <Carousel.Item>
              <figure className="mohit">
                <img
                  src={Mohit}
                  className="mohitimg  img-responsive rounded-circle"
                  alt="image"
                />
              </figure>
              {/* <img className="d-block  w-100" src={Home3} alt="First slide" /> */}
            </Carousel.Item>
           
          </Carousel>
        </div>
      </div>
      <div >


        <h1 className='text-white my-5'>Education</h1>
       
        <div className="row mt-4">
          <div className="col-md-6 m-auto col-10 order-md-0 order-0">
            <figure>
              <img
                src={Education}
                className="w-100  img-responsive "
                alt="image"
              />
            </figure>
           
          </div>
          <div className="col-md-6 col-12 order-md-0 order-1 d-flex justify-content-center align-items-center flex-column">
            <div className="row">

              <div className="col-10 m-auto">
                <div className="card my-0 text-white" style={{background: "black"}}>
                  <div className="card-body  text-center">
                    <h5 className="card-title ">

                    <img src="https://img.icons8.com/emoji/48/000000/school-emoji.png" className='mx-2' /><br />
                      Bachelor Of Engineering (2018-2022)
                    </h5>
                    {/* <p>Batch - 2018 - 2022</p> */}
                    <p className='my-1 text-muted'>Electronics And Computer</p>
                    <p className='my-1 text-muted'>MBM Engineering College</p>
                    <p className='my-1 text-muted'>Current CGPA - 6.7</p>
                  </div>
                </div>
              </div>
              <div className="col-10 m-auto">
                <div className="card my-0 text-white"  style={{background: "black"}}>
                  <div className="card-body text-center">
                    <h5 className="card-title">
                      <img src="https://img.icons8.com/emoji/48/000000/school-emoji.png" className='mx-2' /><br />
                      Senior Secondary School (2018)
                    </h5>
                    <p className='my-1 text-muted'>Engineers Point Khairhal</p>
                    <p className='my-1 text-muted'>Score - 87%</p>
                  </div>
                </div>
              </div>
              <div className="col-10 m-auto">
                <div className="card my-0 text-white"  style={{background: "black"}}>
                  <div className="card-body text-center">
                    <h5 className="card-title "> <img src="https://img.icons8.com/emoji/48/000000/school-emoji.png" className='mx-2' /><br />Secondary School (2016)</h5>
                    <p className='my-1 text-muted'>Suman Public Sr. Sec. School</p>
                    <p className='my-1 text-muted'>Score - 77%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
      <div className="mt-5">
        <h1 className='mb-5 text-white'>SKILLS</h1>
        <div className='row'>
          <div class="col-md-6 col-12 order-md-0 order-0">
            <figure>
              <img src={Home5} class="w-100" alt="image" />
            </figure>
          </div>
          <div class="col-md-6 col-12 order-md-0 order-0 w-100 m-auto " >
            <div class="progress " style={{ height: "25px" }}>

              <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" style={{ width: "85%" }} aria-valuenow="85%" aria-valuemin="0" aria-valuemax="100">HTML</div>
            </div>
            <div class="progress my-3" style={{ height: "25px" }}>

              <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: "75%" }} aria-valuenow="75%" aria-valuemin="0" aria-valuemax="100">CSS</div>
            </div>
            <div class="progress my-3" style={{ height: "25px" }}>

              <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" style={{ width: "80%" }} aria-valuenow="80%" aria-valuemin="0" aria-valuemax="100">Javascript</div>
            </div>
            <div class="progress my-3" style={{ height: "25px" }}>

              <div class="progress-bar progress-bar-striped progress-bar-animated bg-secondary" role="progressbar" style={{ width: "90%" }} aria-valuenow="90%" aria-valuemin="0" aria-valuemax="100">Bootstrap</div>
            </div>
            <div class="progress my-3" style={{ height: "25px" }}>

              <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" style={{ width: "75%" }} aria-valuenow="75%" aria-valuemin="0" aria-valuemax="100">React</div>
            </div>
            <div class="progress my-3" style={{ height: "25px" }}>

              <div class="progress-bar progress-bar-striped progress-bar-animated bg-dark text-white" role="progressbar" style={{ width: "90%" }} aria-valuenow="90%" aria-valuemin="0" aria-valuemax="100">NodeJS</div>
            </div>
            <div class="progress my-3" style={{ height: "25px" }}>

              <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" style={{ width: "70%" }} aria-valuenow="70%" aria-valuemin="0" aria-valuemax="100">MongoDB</div>
            </div>
            <div class="progress my-3" style={{ height: "25px" }}>

              <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" style={{ width: "60%" }} aria-valuenow="60%" aria-valuemin="0" aria-valuemax="100">Firebase</div>
            </div>
            <div class="progress my-3" style={{ height: "25px" }}>

              <div class="progress-bar progress-bar-striped progress-bar-animated " role="progressbar" style={{ width: "70%" }} aria-valuenow="70%" aria-valuemin="0" aria-valuemax="100">C++</div>
            </div>
            <div class="progress my-3" style={{ height: "25px" }}>

              <div class="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar" style={{ width: "60%" }} aria-valuenow="60%" aria-valuemin="0" aria-valuemax="100">Core Java</div>
            </div>
          </div>

        </div>

      </div>

      <h1 className='text-white my-5'>More Info</h1>
      <div className='row my-4 text-left'>
        <div className='col-lg-4 mt-2'>
          <div class="card text-white infoCard" style={{background: "black"}}>
            <div class="card-body">
              <img src="https://img.icons8.com/fluent/48/000000/group-of-projects.png" />
              <h5 class="card-title">Projects</h5>
              <p class="card-text text-muted">I have Developed some projects.</p>
              <NavLink to="/Project" class="btn btn-outline-light">Get Info <CallMadeIcon/></NavLink>
            </div>
          </div>
        </div>
        <div className='col-lg-4 mt-2'>
          <div class="card text-white infoCard"  style={{background: "black"}}>
            <div class="card-body">
            <img src="https://img.icons8.com/color/48/000000/joomla.png"/>
              <h5 class="card-title">Blogs</h5>
              <p class="card-text text-muted">Some featured Articles</p>
              <NavLink to="/About" class="btn btn-outline-light">Get Info <CallMadeIcon/></NavLink>
            </div>
          </div>
        </div>
        <div className='col-lg-4 mt-2'>
          <div class="card text-white infoCard" style={{background: "black"}} >
            <div class="card-body">
            <img src="https://img.icons8.com/nolan/48/certification.png"/>
              <h5 class="card-title">Certifications</h5>
              <p class="card-text text-muted">Achivements and Certifications</p>
              <NavLink to="/About" class="btn btn-outline-light">Get Info <CallMadeIcon/></NavLink>
            </div>
          </div>
        </div>
      </div>

    
      <div class="row">
    <div class="col-md-12 col-12 mx-auto text-white mt-5">
      <h1 class="text-center">Get In Touch</h1>
      <p class="text-center">I Will Be Happy To Help You</p>
      
      <div class="succussmsg " id="contact"></div>

          <form id="form" onSubmit={handleSubmit}>
                <div class="form-group text-left">
                    <label for="name">Name</label>
                    <input type="text" id="name" value={postData.name} onChange={(e) => setPostData({ ...postData, name: e.target.value })} aria-describedby="name" class="form-control"  
                        placeholder="Enter Name" name="name" required />

                </div>
                <div class="form-group text-left">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" value={postData.email} onChange={(e) => setPostData({ ...postData, email: e.target.value })} id="email" class="form-control"  aria-describedby="emailHelp"
                        placeholder="Enter email" name="email" required />
                   
                </div>
                <div class="form-group text-left">
                    <label for="phone">Phone</label>
                    <input type="number" value={postData.phone} onChange={(e) => setPostData({ ...postData, phone: e.target.value })} id="phone" class="form-control"  placeholder="Phone" name="phone" required />
                </div>
               <div class="form-group text-left">
                    <label for="message">Message</label>
                    <input type="text" value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} id="message" class="form-control"  aria-describedby="emailHelp"
                        placeholder="Enter Message" name="message" required />

                </div>
                <button  id="submit" class="btn btn-info btn-block">Send</button>
              </form>
        </div>

    </div>

    </div>
  );
};

export default Home;