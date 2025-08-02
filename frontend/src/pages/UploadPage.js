// // src/pages/UploadPage.js
// import React, { useState, useEffect } from "react";

// const UploadPage = () => {
//   const [file, setFile] = useState(null);
//   const [images, setImages] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const accessToken = localStorage.getItem("access_token");

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const uploadImage = async () => {
//     if (!file) {
//       alert("Please select a file.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("image", file);

//     try {
//       const res = await fetch("http://localhost:5000/api/image/upload", {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//         },
//         body: formData,
//       });

//       const data = await res.json();

//       if (res.ok) {
//         alert("Upload successful!");
//         setFile(null);
//         fetchImages(); // refresh list
//       } else {
//         console.error("Upload failed:", data);
//         alert(data.msg || "Upload failed.");
//       }
//     } catch (err) {
//       console.error("Upload error:", err);
//       alert("Network error when uploading.");
//     }
//   };

//   const fetchImages = async () => {
//     setLoading(true);
//     try {
//       const res = await fetch("http://localhost:5000/api/image/images", {
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//         },
//       });

//       const data = await res.json();
//       console.log("Fetched image data:", data);

//       if (Array.isArray(data)) {
//         setImages(data);
//       } else {
//         setImages([]);
//         console.warn("Expected array from backend, got:", data);
//       }
//     } catch (err) {
//       console.error("Error fetching images:", err);
//       alert("Could not fetch image list.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const deleteImage = async (id) => {
//     try {
//       await fetch(`http://localhost:5000/api/image/delete/${id}`, {
//         method: "DELETE",
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//         },
//       });
//       fetchImages(); // refresh list
//     } catch (err) {
//       console.error("Delete error:", err);
//       alert("Failed to delete image.");
//     }
//   };

//   useEffect(() => {
//     fetchImages();
//   }, []);

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Upload Image</h2>
//       <input type="file" onChange={handleFileChange} />
//       <button onClick={uploadImage}>Upload</button>

//       <h3>My Images</h3>
//       {loading ? (
//         <p>Loading images...</p>
//       ) : (
//         <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
//           {images.length === 0 ? (
//             <p>No images uploaded.</p>
//           ) : (
//             images.map((img) => (
//               <div
//                 key={img._id}
//                 style={{
//                   border: "1px solid #ccc",
//                   padding: "10px",
//                   textAlign: "center",
//                 }}
//               >
//                 <img
//                   src={`http://localhost:5000/api/image/uploads/${img.filename}`}
//                   alt=""
//                   width="200"
//                 />
//                 <br />
//                 <button onClick={() => deleteImage(img._id)}>Delete</button>
//               </div>
//             ))
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default UploadPage;



// src/pages/UploadPage.js
import React, { useState, useEffect, useRef } from "react";

export default function UploadPage() {
  const [file, setFile] = useState(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cameraOn, setCameraOn] = useState(false);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);

  const accessToken = localStorage.getItem("access_token");

  const fetchImages = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/image/images", {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      const data = await res.json();
      if (Array.isArray(data)) {
        setImages(data);
      } else {
        setImages([]);
      }
    } catch (err) {
      console.error("Lỗi khi tải ảnh:", err);
    } finally {
      setLoading(false);
    }
  };

  const uploadImage = async (imageFile) => {
    const formData = new FormData();
    formData.append("image", imageFile);

    try {
      const res = await fetch("http://localhost:5000/api/image/upload", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: formData,
      });

      const data = await res.json();
      if (res.ok) {
        alert("✅ Upload thành công!");
        fetchImages();
      } else {
        alert(data.msg || "❌ Upload thất bại.");
      }
    } catch (err) {
      alert("❌ Lỗi mạng khi upload.");
    }
  };

  const handleUpload = () => {
    if (file) {
      uploadImage(file);
      setFile(null);
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
      setCameraOn(false);
    }
  };

  useEffect(() => {
    // Khi cameraOn = true và videoRef đã render
    const initCamera = async () => {
      if (cameraOn && videoRef.current) {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ video: true });
          videoRef.current.srcObject = stream;
          streamRef.current = stream;
        } catch (err) {
          alert("⚠️ Không thể truy cập camera. Hãy kiểm tra quyền trình duyệt.");
          console.error("Camera error:", err);
          setCameraOn(false);
        }
      }
    };
    initCamera();

    return () => stopCamera(); // Cleanup
  }, [cameraOn]);

  const captureImage = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;

    if (!canvas || !video) return;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext("2d").drawImage(video, 0, 0);

    canvas.toBlob((blob) => {
      const imageFile = new File([blob], `camera_${Date.now()}.png`, {
        type: "image/png",
      });
      uploadImage(imageFile);
    }, "image/png");
  };

  const deleteImage = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/image/delete/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      fetchImages();
    } catch (err) {
      alert("❌ Xóa ảnh thất bại.");
    }
  };

  useEffect(() => {
    fetchImages();
    return () => stopCamera();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>📤 Tải ảnh lên</h2>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Tải ảnh đã chọn</button>

      <hr />
      <h3>📷 Camera</h3>
      {!cameraOn ? (
        <button onClick={() => setCameraOn(true)}>Bật Camera</button>
      ) : (
        <div>
          <video ref={videoRef} autoPlay playsInline width="400" />
          <br />
          <button onClick={captureImage}>📸 Chụp và Upload</button>
          <button onClick={stopCamera}>❌ Tắt Camera</button>
          <canvas ref={canvasRef} style={{ display: "none" }} />
        </div>
      )}

      <h3 style={{ marginTop: 30 }}>🖼 Ảnh đã upload</h3>
      {loading ? (
        <p>Đang tải ảnh...</p>
      ) : images.length === 0 ? (
        <p>Chưa có ảnh nào được upload.</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          {images.map((img) => (
            <div key={img._id} style={{ border: "1px solid #ccc", padding: 10 }}>
              <img
                src={`http://localhost:5000/api/image/uploads/${img.filename}`}
                alt=""
                width="200"
              />
              <br />
              <button onClick={() => deleteImage(img._id)}>🗑 Xóa</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
