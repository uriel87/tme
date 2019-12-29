


import React from 'react'
import axios from 'axios'


const FileUploader = () => {

    const uploadFileUrl = 'http://localhost:8000/uploadFile/'

    const uploadFile = async (event, file) => {
        console.log("In upload function")
        event.preventDefault()
        // const uploadFileReq = await axios.post(uploadFileUrl, {
        //     data: file
        // });

        const body = new FormData(file);
        axios.post(uploadFileUrl, body, {
            headers: {
            'Content-Type': 'application/pdf'
            }
        })
    }

    return (
        <div>
            <form onSubmit={uploadFile}>
                <label>Upload file<input type="file" name="myFile" /></label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default FileUploader;