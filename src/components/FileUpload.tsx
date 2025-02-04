import React, { useState } from 'react';
import { Upload, FileSpreadsheet, CheckCircle, XCircle } from 'lucide-react';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState(null);

  const handleFileUpload = async (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === 'text/csv') {
      setFile(selectedFile);
      const formData = new FormData();
      formData.append('file', selectedFile);

      setUploading(true);
      try {
        const response = await fetch('http://localhost:5000/upload', {
          method: 'POST',
          body: formData,
        });
        if (response.ok) {
          setUploadStatus('success');
        } else {
          setUploadStatus('error');
        }
      } catch (error) {
        setUploadStatus('error');
      }
      setUploading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="max-w-xl">
        <label className="block text-sm font-medium text-gray-700">Upload Dataset</label>
        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
          <div className="space-y-1 text-center">
            <FileSpreadsheet className="mx-auto h-12 w-12 text-gray-400" />
            <div className="flex text-sm text-gray-600">
              <label className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                <span>Upload a CSV file</span>
                <input
                  type="file"
                  className="sr-only"
                  accept=".csv"
                  onChange={handleFileUpload}
                />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs text-gray-500">CSV up to 10MB</p>
          </div>
        </div>
      </div>

      {uploadStatus && (
        <div className={`rounded-md p-4 ${
          uploadStatus === 'success' ? 'bg-green-50' : 'bg-red-50'
        }`}>
          <div className="flex">
            <div className="flex-shrink-0">
              {uploadStatus === 'success' ? (
                <CheckCircle className="h-5 w-5 text-green-400" />
              ) : (
                <XCircle className="h-5 w-5 text-red-400" />
              )}
            </div>
            <div className="ml-3">
              <h3 className={`text-sm font-medium ${
                uploadStatus === 'success' ? 'text-green-800' : 'text-red-800'
              }`}>
                {uploadStatus === 'success' ? 'Upload successful' : 'Upload failed'}
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUpload;