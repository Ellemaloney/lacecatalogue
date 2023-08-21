import '../styles/upload-form.css';
import {useState} from "react";
import {useStore} from "@nanostores/react";

export default function UploadForm() {
    const [isImageUploaded, setIsImageUploaded] = useState(false);
    const [title, setTitle] = useState('')
    const [content , setContent] =  useState('');

return (
    isImageUploaded ?
        <div className="step-2-wrapper">
            <div className="title-wrapper">
                <h2 className="title">{title}</h2>

            </div>

            <p className="text">{content}</p>

            <div className="image-wrapper">
                <img src="/assets/image-5-kUo.png" alt="Samplw image"/>
                <p className="m-l-10">Sample image</p>
            </div>

            <div className="actions">
                <a href="/upload-success" className="btn btn-primary">Publish</a>
            </div>
        </div>
        :
    <form>
        <div className="form-group">
            <select>
                <option>Categories</option>
                <option>Catalogue</option>
                <option>Events</option>
                <option>News</option>
            </select>
        </div>

        <div className="form-group">
            <input onChange={(e) => setTitle(e.target.value) } id="title" name="title" type="text" placeholder="Add title" />
        </div>

        <div className="form-group">
            <textarea onChange={(e) => setContent(e.target.value)} id="content" name="content" rows={16} placeholder="Type post"></textarea>
        </div>

        <div className="form-group no-background file-upload-wrapper">
            <input onChange={() => setIsImageUploaded(true)} className="custom-file-input hidden" type="file" accept="image/*" />
                <button type="button" className="btn btn-primary">
                    <img alt="Upload icon" className="upload-icon" src="/assets/icons8-image-50-1-bg.png" />
                        Upload image
                </button>
        </div>
    </form>
  );

}
