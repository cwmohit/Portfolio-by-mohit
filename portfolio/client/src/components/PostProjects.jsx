import React, {useState} from 'react';
import axios from 'axios';
import FileBase from 'react-file-base64';
const PostProjects = () => {
    const [postData, setPostData] = useState({
       name: '', link: '',selectedFile: null
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('https://portfolio-by-mohit.herokuapp.com/portfolio/projects', postData).then((response) => {

            console.log(response);
            alert('Data saved')
          });
          setPostData({
            name: '', link: '',selectedFile: null
         })
      }

    return (
        <div className='container text-white text-left m-auto d-flex flex-column justify-content-center align-items-center  w-100' style={{height: '100vh'}}>
         <h1 className='  certificateContainer'>Add New Project</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label for="name">Project Name</label>
                    <input type="text" className="form-control" id="name" value={postData.name} onChange={(e) => setPostData({ ...postData, name: e.target.value })} aria-describedby="name" placeholder="Enter Project Name" />
                </div>
                <div className="form-group">
                    <label for="link">Link</label>
                    <input type="text" className="form-control" id="link" value={postData.link} onChange={(e) => setPostData({ ...postData, link: e.target.value })} aria-describedby="link" placeholder="Github Link" />
                </div>
                <div class="form-group">
                <label className='d-block' for="message">File :</label>
                <input type="text" className="form-control" id="link" value={postData.selectedFile} onChange={(e) => setPostData({ ...postData, selectedFile: e.target.value })} aria-describedby="link" placeholder="Image Link" />
                {/* <FileBase type='file' multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}  />    */}
                </div>

                <button type="submit" className="btn btn-block btn-primary">Submit</button>
            </form>

        </div>
    );
};

export default PostProjects;