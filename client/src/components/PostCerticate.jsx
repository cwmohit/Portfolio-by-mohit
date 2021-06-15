import React, {useState} from 'react';
import axios from 'axios';
import FileBase from 'react-file-base64';
const PostCertificate = () => {
    const [postData, setPostData] = useState({
       company: '', title: '', duration: "" ,selectedFile: null
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('https://portfolio-by-mohit.herokuapp.com/portfolio/certificates', postData).then((response) => {

            console.log(response);
            alert('Data saved')
          });
          setPostData({
            company: '', title: '', duration: "" ,selectedFile: null
         })
      }

    return (
        <div className='container text-white text-left  w-100'>
         <h1 className='  certificateContainer'>Add New Certificate</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label for="creator">Company</label>
                    <input type="text" className="form-control" id="Company" value={postData.company} onChange={(e) => setPostData({ ...postData, company: e.target.value })} aria-describedby="company" placeholder="Enter Company Name" />
                </div>
                <div className="form-group">
                    <label for="title">Title</label>
                    <input type="text" className="form-control" id="title" value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} aria-describedby="title" placeholder="Title" />
                </div>
                <div className="form-group">
                    <label for="duration">Duration</label>
                    <input type="text" className="form-control" id="duration" value={postData.duration} onChange={(e) => setPostData({ ...postData, duration: e.target.value })} aria-describedby="duration" placeholder="Duration" />
                </div>
                <div class="form-group">
                <label className='d-block' for="message">File :</label>
                <input type="text" className="form-control" id="selectedFile" value={postData.selectedFile} onChange={(e) => setPostData({ ...postData, selectedFile: e.target.value })} aria-describedby="selectedFile" placeholder="File link" />
                {/* <FileBase type='file' multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}  />    */}
                </div>

                <button type="submit" className="btn btn-block btn-primary">Submit</button>
            </form>

        </div>
    );
};

export default PostCertificate;