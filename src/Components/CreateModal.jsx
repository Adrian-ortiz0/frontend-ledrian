import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';

export const CreateModal = ({ onClose }) => {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState('');

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Publicación creada:', { image, caption });
    onClose();
  };

  return (
    <div className='modal-overlay'>
      <div className='modal-content'>
        <div className='modal-header'>
          <h2>Create a new post</h2>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='image-upload'>
            {image ? (
              <img src={image} alt='Preview' className='image-preview' />
            ) : (
              <label htmlFor='file-upload' className='upload-label'>
                <span>Upload an image</span>
                <input
                  id='file-upload'
                  type='file'
                  accept='image/*'
                  onChange={handleImageChange}
                  style={{ display: 'none' }}
                />
              </label>
            )}
          </div>
          <textarea
            id='caption-textarea' // ID para el textarea
            placeholder='Write a caption...'
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
          />
          <button
            id='publish-button' // ID para el botón
            type='submit'
            disabled={!image}
          >
            Publish
          </button>
        </form>
      </div>
    </div>
  );
};