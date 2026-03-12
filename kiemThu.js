/**
 * Kiểm thử – Mô-đun Quản Lý Sinh Viên và Tiện Ích
 *
 * Chạy: node kiemThu.js
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

const { dinhDangDiem, chuanHoaChuoi, laSoHopLe } = require('./nguon/tienIch');

let soKiemThuDat = 0;
let soKiemThuThat = 0;

/**
 * Hàm kiểm thử đơn giản.
 * @param {string} tenKiemThu - Tên bài kiểm thử
 * @param {boolean} ketQua - Kết quả (true = đạt, false = thất bại)
 */
function kiemThu(tenKiemThu, ketQua) {
    if (ketQua) {
        console.log(`  ✅ ĐẠT  – ${tenKiemThu}`);
        soKiemThuDat++;
    } else {
        console.log(`  ❌ THẤT – ${tenKiemThu}`);
        soKiemThuThat++;
    }
}

// ─── Kiểm thử taoSinhVien ─────────────────────────────────────
console.log('\n📌 Kiểm thử hàm taoSinhVien()');
const sv = taoSinhVien('SV001', 'Nguyễn Văn An', 20, 'Công nghệ thông tin');
kiemThu('Tạo sinh viên với mã đúng', sv.maSinhVien === 'SV001');
kiemThu('Tạo sinh viên với họ tên đúng', sv.hoTen === 'Nguyễn Văn An');
kiemThu('Tạo sinh viên với tuổi đúng', sv.tuoi === 20);
kiemThu('Mảng điểm ban đầu rỗng', Array.isArray(sv.diem) && sv.diem.length === 0);

// ─── Kiểm thử themDiem ────────────────────────────────────────
console.log('\n📌 Kiểm thử hàm themDiem()');
themDiem(sv, 'Lập trình cơ bản', 8.5);
kiemThu('Thêm điểm thành công', sv.diem.length === 1);
kiemThu('Tên môn học đúng', sv.diem[0].monHoc === 'Lập trình cơ bản');
kiemThu('Điểm số đúng', sv.diem[0].diem === 8.5);

let loiDiemKhongHopLe = false;
try {
    themDiem(sv, 'Môn lỗi', 11);
} catch (_) {
    loiDiemKhongHopLe = true;
}
kiemThu('Ném lỗi khi điểm > 10', loiDiemKhongHopLe);

// ─── Kiểm thử tinhDiemTrungBinh ──────────────────────────────
console.log('\n📌 Kiểm thử hàm tinhDiemTrungBinh()');
themDiem(sv, 'Cấu trúc dữ liệu', 9.0);
const diemTB = tinhDiemTrungBinh(sv);
kiemThu('Điểm trung bình tính đúng', Math.abs(diemTB - 8.75) < 0.001);

const svRong = taoSinhVien('SV000', 'Kiểm thử', 18, 'Chưa có');
kiemThu('Điểm TB bằng 0 khi chưa có điểm', tinhDiemTrungBinh(svRong) === 0);

// ─── Kiểm thử xepLoaiHocLuc ──────────────────────────────────
console.log('\n📌 Kiểm thử hàm xepLoaiHocLuc()');
kiemThu('Xuất sắc khi ĐTB >= 9.0', xepLoaiHocLuc(9.5) === 'Xuất sắc');
kiemThu('Giỏi khi ĐTB >= 8.0', xepLoaiHocLuc(8.5) === 'Giỏi');
kiemThu('Khá khi ĐTB >= 6.5', xepLoaiHocLuc(7.0) === 'Khá');
kiemThu('Trung bình khi ĐTB >= 5.0', xepLoaiHocLuc(5.5) === 'Trung bình');
kiemThu('Yếu khi ĐTB < 5.0', xepLoaiHocLuc(4.9) === 'Yếu');

// ─── Kiểm thử timSinhVienTheoMa ──────────────────────────────
console.log('\n📌 Kiểm thử hàm timSinhVienTheoMa()');
const danh = [taoSinhVien('A1', 'Anh', 20, 'CNTT'), taoSinhVien('B2', 'Bình', 21, 'KT')];
kiemThu('Tìm thấy sinh viên đúng', timSinhVienTheoMa(danh, 'B2')?.hoTen === 'Bình');
kiemThu('Trả về null khi không tìm thấy', timSinhVienTheoMa(danh, 'ZZZ') === null);

// ─── Kiểm thử sapXepTheoThuHang ──────────────────────────────
console.log('\n📌 Kiểm thử hàm sapXepTheoThuHang()');
const sv1 = taoSinhVien('X1', 'X Một', 20, 'CNTT');
const sv2 = taoSinhVien('X2', 'X Hai', 20, 'CNTT');
themDiem(sv1, 'Môn A', 6);
themDiem(sv2, 'Môn A', 9);
const danhSapXep = sapXepTheoThuHang([sv1, sv2]);
kiemThu('Sinh viên điểm cao đứng đầu', danhSapXep[0].maSinhVien === 'X2');

// ─── Kiểm thử locSinhVienTheoNganh ───────────────────────────
console.log('\n📌 Kiểm thử hàm locSinhVienTheoNganh()');
const ketQuaLoc = locSinhVienTheoNganh(danh, 'CNTT');
kiemThu('Lọc đúng số lượng', ketQuaLoc.length === 1);
kiemThu('Lọc đúng sinh viên', ketQuaLoc[0].maSinhVien === 'A1');

// ─── Kiểm thử tienIch ────────────────────────────────────────
console.log('\n📌 Kiểm thử mô-đun tienIch');
kiemThu('dinhDangDiem: làm tròn 2 chữ số', dinhDangDiem(8.756) === '8.76');
kiemThu('chuanHoaChuoi: chuyển sang chữ hoa', chuanHoaChuoi('  hello  ') === 'HELLO');
kiemThu('laSoHopLe: số bình thường', laSoHopLe(5.5) === true);
kiemThu('laSoHopLe: NaN không hợp lệ', laSoHopLe(NaN) === false);
kiemThu('laSoHopLe: Infinity không hợp lệ', laSoHopLe(Infinity) === false);

// ─── Tổng kết ────────────────────────────────────────────────
const tongSoKiemThu = soKiemThuDat + soKiemThuThat;
console.log(`\n${'─'.repeat(45)}`);
console.log(`Kết quả: ${soKiemThuDat}/${tongSoKiemThu} bài kiểm thử đạt`);
if (soKiemThuThat === 0) {
    console.log('🎉 Tất cả bài kiểm thử đều đạt!\n');
} else {
    console.log(`⚠️  ${soKiemThuThat} bài kiểm thử thất bại.\n`);
    process.exit(1);
}
