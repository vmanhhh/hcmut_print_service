const jwt = require("jsonwebtoken");

function authenticate(req, res, next) {
  try {
    // Kiểm tra header authorization
    const authHeader =
      req.header("Authorization") || req.header("authorization");

    if (!authHeader) {
      return res.status(401).json({
        message: "Không tìm thấy token xác thực",
        error: "Unauthorized",
      });
    }

    // Kiểm tra định dạng token
    const tokenParts = authHeader.split(" ");
    if (tokenParts.length !== 2 || tokenParts[0].toLowerCase() !== "bearer") {
      return res.status(401).json({
        message: "Định dạng token không hợp lệ",
        error: "Invalid Token Format",
      });
    }

    const token = tokenParts[1];

    // Sử dụng biến môi trường cho secret key
    const secretKey = process.env.JWT_SECRET || "the-super-strong-secret";

    // Verify token với options bổ sung
    jwt.verify(
      token,
      secretKey,
      {
        algorithms: ["HS256"], // Chỉ chấp nhận thuật toán HS256
        maxAge: "1d", // Thời gian tồn tại tối đa của token
      },
      (err, decoded) => {
        if (err) {
          // Xử lý các loại lỗi khác nhau
          let message = "Truy cập bị từ chối";

          switch (err.name) {
            case "TokenExpiredError":
              message = "Phiên đăng nhập đã hết hạn";
              break;
            case "JsonWebTokenError":
              message = "Token không hợp lệ";
              break;
            case "NotBeforeError":
              message = "Token chưa được kích hoạt";
              break;
          }

          return res.status(401).json({
            message: message,
            error: err.name,
          });
        }

        // Kiểm tra thêm thông tin người dùng nếu cần
        if (!decoded.id) {
          return res.status(401).json({
            message: "Thông tin người dùng không hợp lệ",
            error: "Invalid User",
          });
        }

        // Gán thông tin người dùng vào request
        req.userInfo = decoded;
        next();
      }
    );
  } catch (error) {
    // Bắt các lỗi không mong đợi
    console.error("Authentication Error:", error);
    res.status(500).json({
      message: "Lỗi xác thực nội bộ",
      error: "Internal Server Error",
    });
  }
}

module.exports = authenticate;
