(Ctrl+Shift+V để xem preview md)

# Cấu trúc thư mục Front-end

    ├── public/               # Thư mục chứa các tệp tĩnh sẽ được phục vụ trực tiếp bởi server.
    ├── src/                  # Thư mục chứa toàn bộ mã nguồn chính của dự án
    │   ├── components/       # Các React components dùng chung
    │   ├── hooks/            # Các custom hooks
    │   ├── layouts/          # Các layout dùng chung cho các trang (nếu có nhiều trang)
    │   ├── lib/              # Các thư viện hoặc utilities dùng chung
    │   ├── services/         # Các service functions để kết nối với backend 
    │   ├── store/            # Quản lý trạng thái (Redux, Zustand, hoặc Context API)
    │   ├── types/            # Định nghĩa TypeScript types hoặc interfaces
    │   ├── utils/            # Các hàm tiện ích khác, không thuộc thư viện chính
    │   └── views/            # Các thành phần giao diện lớn, kết hợp các components nhỏ
    ├── .env                  # Các biến môi trường
    ├── package.json          # Các dependency của dự án
    └── README.md             # Tài liệu dự án


# Cách Chạy Dự Án
## 1. Cài đặt các dependency:  
   ```bash
   npm install
   ```

## 2. Chạy ứng dụng:  
   ```bash
   npm run dev
   ```


# Lưu ý khi push branch lên:

## 1. Kiểm tra lỗi eslint:  
   ```bash
   npm run lint
   ```

## 2. Kiểm tra lỗi khi build:  
   ```bash
   npm run build
   ```

Nếu có lỗi, sửa lỗi trước khi đẩy lên branch và request merge
