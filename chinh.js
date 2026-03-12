/**
 * Tệp chính – Điểm khởi đầu của ứng dụng Quản Lý Sinh Viên
 *
 * Minh họa cách sử dụng các mô-đun với tên hàm, tên biến và
 * tên tệp hoàn toàn bằng tiếng Việt.
 */

'use strict';

const {
    taoSinhVien,
    themDiem,
    tinhDiemTrungBinh,
    xepLoaiHocLuc,
    timSinhVienTheoMa,
    sapXepTheoThuHang,
    locSinhVienTheoNganh,
} = require('./nguon/quanLySinhVien');

const { inThongTinSinhVien, taoKeDuongNgang } = require('./nguon/tienIch');

// --- Khởi tạo danh sách sinh viên ---
const danhSachSinhVien = [];

// Tạo sinh viên
const sinhVien1 = taoSinhVien('SV001', 'Nguyễn Văn An', 20, 'Công nghệ thông tin');
const sinhVien2 = taoSinhVien('SV002', 'Trần Thị Bình', 21, 'Kinh tế');
const sinhVien3 = taoSinhVien('SV003', 'Lê Minh Cường', 22, 'Công nghệ thông tin');
const sinhVien4 = taoSinhVien('SV004', 'Phạm Thị Dung', 20, 'Kinh tế');

// Thêm điểm cho từng sinh viên
themDiem(sinhVien1, 'Lập trình cơ bản', 8.5);
themDiem(sinhVien1, 'Cấu trúc dữ liệu', 9.0);
themDiem(sinhVien1, 'Mạng máy tính', 7.5);

themDiem(sinhVien2, 'Kinh tế vi mô', 7.0);
themDiem(sinhVien2, 'Kinh tế vĩ mô', 8.0);
themDiem(sinhVien2, 'Thống kê kinh doanh', 6.5);

themDiem(sinhVien3, 'Lập trình cơ bản', 9.5);
themDiem(sinhVien3, 'Cấu trúc dữ liệu', 9.0);
themDiem(sinhVien3, 'Mạng máy tính', 9.5);

themDiem(sinhVien4, 'Kinh tế vi mô', 5.5);
themDiem(sinhVien4, 'Kinh tế vĩ mô', 6.0);
themDiem(sinhVien4, 'Thống kê kinh doanh', 5.0);

// Thêm vào danh sách
danhSachSinhVien.push(sinhVien1, sinhVien2, sinhVien3, sinhVien4);

// --- In thông tin tất cả sinh viên ---
console.log('\n📋 DANH SÁCH SINH VIÊN\n');
danhSachSinhVien.forEach((sv) => {
    const diemTrungBinh = tinhDiemTrungBinh(sv);
    const xepLoai = xepLoaiHocLuc(diemTrungBinh);
    inThongTinSinhVien(sv, diemTrungBinh, xepLoai);
});

// --- Bảng xếp hạng ---
console.log('\n🏆 BẢNG XẾP HẠNG THEO ĐIỂM TRUNG BÌNH\n');
const danhSachXepHang = sapXepTheoThuHang(danhSachSinhVien);
console.log(taoKeDuongNgang(45));
danhSachXepHang.forEach((sv, viTri) => {
    const diemTrungBinh = tinhDiemTrungBinh(sv);
    console.log(
        `${viTri + 1}. ${sv.hoTen.padEnd(22)} – ĐTB: ${diemTrungBinh.toFixed(2)}`
    );
});
console.log(taoKeDuongNgang(45));

// --- Tìm sinh viên theo mã ---
const maCanTim = 'SV002';
const sinhVienTimThay = timSinhVienTheoMa(danhSachSinhVien, maCanTim);
console.log(`\n🔍 Tìm kiếm sinh viên mã "${maCanTim}":`);
if (sinhVienTimThay) {
    console.log(`   → Tìm thấy: ${sinhVienTimThay.hoTen}`);
} else {
    console.log('   → Không tìm thấy sinh viên.');
}

// --- Lọc theo ngành ---
const nganhCanLoc = 'Công nghệ thông tin';
const sinhVienCNTT = locSinhVienTheoNganh(danhSachSinhVien, nganhCanLoc);
console.log(`\n🎓 Sinh viên ngành "${nganhCanLoc}":`);
sinhVienCNTT.forEach((sv) => {
    console.log(`   • ${sv.hoTen} (${sv.maSinhVien})`);
});
console.log();
