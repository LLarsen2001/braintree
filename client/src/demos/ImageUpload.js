import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import SingleImageUpload from "./SingleImageUpload";
import SingleImageUploadAuthed from "./SingleImageUploadAuthed";


const ImageUpload = () => {
    const { user, setUser } = useContext(AuthContext)
    return (
        <div>
            <h2>Image Upload Page</h2>
            <hr />
            <h3>Welcome {user.email}, ID:{user.id}</h3>
            <p>{user.image || 'no image'}</p>
            <img src={user.image} width={200} height={200} />
            <hr />
            <p>This is a demo for uploading a photo</p>
            <hr />
            <SingleImageUpload id={user.id} />

            <hr />
            <SingleImageUploadAuthed id={user.id} setUser={setUser} />
            <hr />

            {JSON.stringify(user)}

        </div>
    )
}
export default ImageUpload;