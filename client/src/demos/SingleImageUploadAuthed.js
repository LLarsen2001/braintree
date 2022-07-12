import React, { useState } from 'react'


// Import React FilePond
import { FilePond, File, registerPlugin } from 'react-filepond'

// Import FilePond styles
import 'filepond/dist/filepond.min.css'

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)

function SingleImageUploadAuthed({ id, setUser }) {
    const [file, setFile] = useState([])
    const accesToken = localStorage.getItem('access-token')
    const client = localStorage.getItem('client')
    const uid = localStorage.getItem('uid')
    return (
        <div className="App">
            <FilePond
                files={file}
                onupdatefiles={setFile}
                allowMultiple={false}
                server={{
                    url: "/api/users/update_image_auth",
                    process: {
                        headers: {
                            "access-token": accesToken,
                            client,
                            uid,
                            "token-type": 'Bearer'

                        },
                        onload: (res) => {
                            setUser(res)
                        }
                    }
                }}
                name="files"
                labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
            />
        </div>
    )
}

export default SingleImageUploadAuthed;