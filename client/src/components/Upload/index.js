import React, { useState, useEffect } from "react";
import "./upload.css";
import { createPrintingRequest, getAllPrinters } from "../../api"; // Adjust the import path as necessary

function Upload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [printers, setPrinters] = useState([]);
  const [printer, setPrinter] = useState("");
  const [paperSize, setPaperSize] = useState("A4");
  const [printType, setPrintType] = useState("2 mặt");
  const [color, setColor] = useState("Trắng đen");
  const [copies, setCopies] = useState(1);
  const [notes, setNotes] = useState("");

  useEffect(() => {
    const fetchPrinters = async () => {
      const token = localStorage.getItem('userToken'); // Retrieve the token from localStorage
      try {
        const printersData = await getAllPrinters(token);
        console.log(printersData);
        setPrinters(printersData);
        setPrinter(printersData[0]?.id || ""); // Set the first printer as default
      } catch (error) {
        console.error("Failed to fetch printers:", error);
      }
    };

    fetchPrinters();
  }, []);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleConfirm = async () => {
    if (selectedFile) {
      const token = localStorage.getItem('userToken'); // Retrieve the token from localStorage
      const printRequestData = {
        user_id: "DywMGT3eNFOsKRz2izw3", // Replace with actual user ID
        document: {
          name: selectedFile.name
        },
        properties: {
          doubled_size: printType === "2 mặt",
          copies: copies,
          type_of_paper: "70 gms", // Adjust as necessary
          no_pages: 1, // Adjust as necessary
          size: paperSize,
          colored: color === "Màu"
        }
      };

      try {
        const response = await createPrintingRequest(printRequestData, token);
        alert(`Tài liệu "${selectedFile.name}" đã được tải lên thành công!`);
        console.log(response);
      } catch (error) {
        console.error(error);
        alert("Đã xảy ra lỗi khi tải lên tài liệu!");
      }
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
              <select value={printer} onChange={(e) => setPrinter(e.target.value)}>
                {printers.map((printer) => (
                  <option key={printer.id} value={printer.id}>
                    {printer.model + " - " + printer.building + " - " + printer.location}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Khổ giấy:
              <select value={paperSize} onChange={(e) => setPaperSize(e.target.value)}>
                <option>A5</option>
                <option>A4</option>
                <option>A3</option>
              </select>
            </label>
            <label>
              Loại in:
              <select value={printType} onChange={(e) => setPrintType(e.target.value)}>
                <option>2 mặt</option>
                <option>1 mặt</option>
              </select>
            </label>
            <label>
              Màu in:
              <select value={color} onChange={(e) => setColor(e.target.value)}>
                <option>Trắng đen</option>
                <option>Màu</option>
              </select>
            </label>
            <label>
              Số lượng bản in:
              <input type="number" value={copies} min={1} onChange={(e) => setCopies(e.target.value)} />
            </label>
            <label>
              Ghi chú cho nhân viên in:
              <textarea placeholder="Nhập ghi chú..." value={notes} onChange={(e) => setNotes(e.target.value)}></textarea>
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