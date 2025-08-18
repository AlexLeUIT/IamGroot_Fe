import { useState } from "react";

const Scanner = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
      setResult(null);
      setError("");
    }
  };

  const handleScan = async () => {
    if (!file) {
      setError("Please upload an image first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file); // Flask API expects key = "file"

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const res = await fetch("https://patient-pleased-cub.ngrok-free.app/classify", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Server error: ${res.status} - ${errorText}`);
      }

      const data = await res.json();
      setResult(data);
    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to scan the image.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mb-20 pb-80">
      <h1 className="text-4xl font-bold mb-6">🌱 Plant Disease Scanner</h1>

      {/* Upload button */}
      <input
        type="file"
        accept="image/*"
        capture="camera"
        onChange={handleFileChange}
        className="block mb-4"
      />

      {/* Preview image */}
      {preview && (
        <img
          src={preview}
          alt="Preview"
          className="w-64 h-64 object-cover rounded-lg shadow mb-4"
        />
      )}

      {/* Scan button */}
      <button
        onClick={handleScan}
        disabled={loading}
        className="px-6 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 disabled:opacity-50"
      >
        {loading ? "Scanning..." : "Scan"}
      </button>

      {/* Error message */}
      {error && <p className="mt-4 text-red-600 font-semibold">{error}</p>}

      {/* Scan result */}
      {result && (
        <div className="mt-6 p-4 border rounded-lg bg-gray-50 shadow">
          <p className="font-bold text-lg">Result:</p>
          <p>
            <span className="font-semibold">Disease:</span>{" "}
            {result.predicted_class}
          </p>
          <p>
            <span className="font-semibold">Confidence:</span>{" "}
            {result.confidence.toFixed(2)}%
          </p>
          <p>
            <span className="font-semibold">Cure Info:</span> {result.cure_info}
          </p>
        </div>
      )}
    </div>
  );
};

export default Scanner;

