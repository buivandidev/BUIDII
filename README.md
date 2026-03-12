# BUIDII – Ứng Dụng Quản Lý Sinh Viên

Dự án minh họa lập trình JavaScript với **tên tệp**, **tên hàm**, **tên biến** và **chú thích** hoàn toàn bằng **tiếng Việt**.

## Cấu trúc dự án

```
BUIDII/
├── chinh.js                      # Tệp chính – điểm khởi đầu của ứng dụng
├── kiemThu.js                    # Kiểm thử tất cả các mô-đun
└── nguon/
    ├── quanLySinhVien.js         # Mô-đun quản lý sinh viên
    └── tienIch.js                # Mô-đun tiện ích dùng chung
```

## Các tính năng

- **Tạo sinh viên** (`taoSinhVien`) – khởi tạo đối tượng sinh viên mới
- **Thêm điểm** (`themDiem`) – ghi nhận điểm theo từng môn học
- **Tính điểm trung bình** (`tinhDiemTrungBinh`) – tính điểm trung bình của sinh viên
- **Xếp loại học lực** (`xepLoaiHocLuc`) – phân loại: Xuất sắc / Giỏi / Khá / Trung bình / Yếu
- **Tìm kiếm** (`timSinhVienTheoMa`) – tra cứu sinh viên theo mã số
- **Sắp xếp** (`sapXepTheoThuHang`) – xếp hạng theo điểm trung bình
- **Lọc danh sách** (`locSinhVienTheoNganh`) – lọc sinh viên theo ngành học

## Cách chạy

```bash
# Chạy ứng dụng chính
node chinh.js

# Chạy kiểm thử
node kiemThu.js
```

## Yêu cầu

- [Node.js](https://nodejs.org/) phiên bản 14 trở lên