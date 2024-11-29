import React, { useState } from "react";
import "./upload.css";

function Upload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleConfirm = () => {
    if (selectedFile) {
      alert(`Tài liệu "${selectedFile.name}" đã được tải lên thành công!`);
    } else {
      alert("Vui lòng chọn tài liệu trước khi xác nhận!");
    }
  };

  return (
    <div className="upload-page">
      <h2 className="upload-title">Trang In Tài Liệu</h2>

      <div className="upload-container">
        {/* Bảng 1: Cài đặt thuộc tính trang in */}
        <div className="settings-section">
          <h3>Cài đặt thuộc tính trang in và tài liệu</h3>
          <form>
            <label>
              Máy in / Nơi giao nhận tài liệu:
              <select>
                <option>H1-102</option>
                <option>H2-103</option>
                <option>H3-106</option>
                <option>H6-602</option>
              </select>
            </label>
            <label>
              Khổ giấy:
              <select>
                <option>A5</option>
                <option>A4</option>
                <option>A3</option>
              </select>
            </label>
            <label>
              Loại in:
              <select>
                <option>2 mặt</option>
                <option>1 mặt</option>
              </select>
            </label>
            <label>
              Màu in:
              <select>
                <option>Trắng đen</option>
                <option>Màu</option>
              </select>
            </label>
            <label>
              Số lượng bản in:
              <input type="number" defaultValue={1} min={1} />
            </label>
            <label>
              Ghi chú cho nhân viên in:
              <textarea placeholder="Nhập ghi chú..."></textarea>
            </label>
          </form>
        </div>

        {/* Bảng 2: Tải tài liệu */}
        <div className="upload-section">
          <h3>Tải tài liệu</h3>
          <label>
            Tải lên tài liệu của bạn:
            <input
              type="file"
              accept=".pdf,.doc,.docx,.ppt,.pptx"
              onChange={handleFileChange}
            />
          </label>
          {selectedFile && (
            <p className="file-info">Đã chọn: {selectedFile.name}</p>
          )}
          <div className="upload-actions">
            <button
              type="button"
              className="confirm-button"
              onClick={handleConfirm}
            >
              Xác nhận in
            </button>
            <button type="button" className="cancel-button">
              Hủy giao dịch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Upload;
