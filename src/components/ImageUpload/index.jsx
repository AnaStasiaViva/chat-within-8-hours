import React from "react";
import "./styles.scss";
import ImageUploading from "react-images-uploading";
import { UpdateIcon, RemoveIcon, RemoveAllIcon, UploadIcon } from "../Icons";

const ImageUpload = ({ images, maxNumber, onChange }) => {
  return (
    <ImageUploading
      multiple
      value={images}
      onChange={onChange}
      maxNumber={maxNumber}
      dataURLKey="data_url"
    >
      {({
        imageList,
        onImageUpload,
        onImageRemoveAll,
        onImageUpdate,
        onImageRemove,
        isDragging,
        dragProps,
      }) => (
        //  UI
        <div className="upload__image-wrapper">
          <UploadIcon
            isDragging={isDragging}
            onImageUpload={onImageUpload}
            dragProps={dragProps}
          />

          {images.length !== 0 && (
            <RemoveAllIcon onImageRemoveAll={onImageRemoveAll} />
          )}
          {imageList.map((image, index) => (
            <div key={index} className="image-item">
              <img src={image["data_url"]} alt="" width="100" />
              <div className="image-item__btn-wrapper">
                <a href="#" onClick={() => onImageUpdate(index)}>
                  <UpdateIcon />
                </a>
                <a href="#" onClick={() => onImageRemove(index)}>
                  <RemoveIcon />
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </ImageUploading>
  );
};

export default ImageUpload;
