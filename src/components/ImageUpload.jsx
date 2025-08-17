import React, { useRef } from "react";
import { toast } from "react-toastify";
import { IKContext, IKUpload } from "imagekitio-react";

const ImageUpload = ({ children, type, setProgress, setData, customId }) => {
  const ref = useRef(null);

  const authenticator = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/posts/upload-auth`
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `Request failed with status ${response.status}: ${errorText}`
        );
      }

      const data = await response.json();
      const { signature, expire, token } = data;
      return { signature, expire, token };
    } catch (error) {
      throw new Error(`Authentication request failed: ${error.message}`);
    }
  };

  const onError = (error) => {
    console.log("Error: ", error);
    toast.error("Error uploading image");
  };

  const onSuccess = (success) => {
    console.log("Success: ", success);
    setData(success.url);
    toast.success("Image uploaded successfully");
  };

  const onUploadProgress = (progress) => {
    if (setProgress) {
      console.log("Progress: ", progress);
      setProgress(Math.round((progress.loaded / progress.total) * 100));
    } else {
      return;
    }
  };

  return (
    <IKContext
      publicKey={import.meta.env.VITE_IMAGEKIT_PUBLIC_KEY}
      urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
      authenticator={authenticator}
    >
      <IKUpload
        useUniqueFileName={true}
        onSuccess={onSuccess}
        onError={onError}
        onUploadProgress={onUploadProgress}
        className="hidden"
        ref={ref}
        accept={`${type}/*`}
      />
      <div
        className="cursor-pointer"
        id={customId}
        onClick={() => ref.current.click()}
      >
        {children}
      </div>
    </IKContext>
  );
};

export default ImageUpload;
