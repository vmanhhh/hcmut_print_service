import React, { useState } from "react";
import "./buypaper.css";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import PaymentModal from "../payment"; // Adjust the import path as necessary

const BuyPaper = () => {
  const [quantity, setQuantity] = useState(0);
  const [paperType, setPaperType] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [amount, setAmount] = useState(0);

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handlePayment = () => {
    if (!paperType) {
      alert("Vui lòng chọn loại giấy.");
      return;
    }

    let pricePerUnit = 0;
    if (paperType === "A4") {
      pricePerUnit = 1000;
    } else if (paperType === "A5") {
      pricePerUnit = 500;
    }

    setAmount(quantity * pricePerUnit);
    setIsModalOpen(true);
  };

  return (
    <section className="buy-paper" id="buy-paper">
      <div className="container">
        <div className="paper-options">
          {/* A4 */}
          <div className="paper-item">
            <input
              type="radio"
              id="paper-a4"
              name="paper-type"
              onChange={() => setPaperType("A4")}
            />
            <label htmlFor="paper-a4" className="paper-label">
              <p>A4 (1000đ/tờ)</p>
              <DescriptionOutlinedIcon
                className="paper-icon"
                style={{
                  width: "150px",
                  height: "auto",
                  transform: "scale(1.1)",
                  transition: "transform 0.3s ease",
                }}
              />
            </label>
          </div>

          {/* A5 */}
          <div className="paper-item">
            <input
              type="radio"
              id="paper-a5"
              name="paper-type"
              onChange={() => setPaperType("A5")}
            />
            <label htmlFor="paper-a5" className="paper-label">
              <p>A5 (500đ/tờ)</p>
              <DescriptionOutlinedIcon
                className="paper-icon"
                style={{
                  width: "150px",
                  height: "auto",
                  transform: "scale(1.1)",
                  transition: "transform 0.3s ease",
                }}
              />
            </label>
          </div>
        </div>
        <div className="group-btn">
          <div className="capacity">
            <span className="sl">Số lượng</span>
            <div className="btn">
              <i className="fa fa-minus-circle" onClick={decreaseQuantity}></i>
              <p>{quantity}</p>
              <i className="fa fa-plus-circle" onClick={increaseQuantity}></i>
            </div>
          </div>

          <button
            className="rest-option btn btn-primary"
            onClick={handlePayment}
          >
            <span className="text">Thanh toán</span>{" "}
            <i className="fa fa-angle-right"></i>
          </button>
          <button className="rest-option btn btn-danger">
            <span className="text">Hủy giao dịch</span>{" "}
            <i className="fa fa-times-circle"></i>
          </button>
        </div>
      </div>
      {isModalOpen && <PaymentModal amount={amount} />}
    </section>
  );
};

export default BuyPaper;