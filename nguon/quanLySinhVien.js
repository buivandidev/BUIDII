/**
 * Mô-đun Quản Lý Sinh Viên
 * Cung cấp các chức năng quản lý danh sách sinh viên.
 */

'use strict';

/**
 * Tạo một đối tượng sinh viên mới.
 * @param {string} maSinhVien - Mã sinh viên
 * @param {string} hoTen - Họ và tên sinh viên
 * @param {number} tuoi - Tuổi sinh viên
 * @param {string} nganh - Ngành học
 * @returns {Object} Đối tượng sinh viên
 */
function taoSinhVien(maSinhVien, hoTen, tuoi, nganh) {
    return {
        maSinhVien,
        hoTen,
        tuoi,
        nganh,
        diem: [],
    };
}

/**
 * Thêm điểm cho sinh viên.
 * @param {Object} sinhVien - Đối tượng sinh viên
 * @param {string} tenMonHoc - Tên môn học
 * @param {number} diem - Điểm số (0–10)
 */
function themDiem(sinhVien, tenMonHoc, diem) {
    if (diem < 0 || diem > 10) {
        throw new Error(`Điểm không hợp lệ: ${diem}. Điểm phải nằm trong khoảng 0 đến 10.`);
    }
    sinhVien.diem.push({ monHoc: tenMonHoc, diem });
}

/**
 * Tính điểm trung bình của sinh viên.
 * @param {Object} sinhVien - Đối tượng sinh viên
 * @returns {number} Điểm trung bình
 */
function tinhDiemTrungBinh(sinhVien) {
    if (sinhVien.diem.length === 0) {
        return 0;
    }
    const tongDiem = sinhVien.diem.reduce((tong, ketQua) => tong + ketQua.diem, 0);
    return tongDiem / sinhVien.diem.length;
}

/**
 * Xếp loại học lực của sinh viên dựa trên điểm trung bình.
 * @param {number} diemTrungBinh - Điểm trung bình
 * @returns {string} Xếp loại học lực
 */
function xepLoaiHocLuc(diemTrungBinh) {
    if (diemTrungBinh >= 9.0) return 'Xuất sắc';
    if (diemTrungBinh >= 8.0) return 'Giỏi';
    if (diemTrungBinh >= 6.5) return 'Khá';
    if (diemTrungBinh >= 5.0) return 'Trung bình';
    return 'Yếu';
}

/**
 * Tìm sinh viên theo mã số trong danh sách.
 * @param {Array} danhSachSinhVien - Danh sách sinh viên
 * @param {string} maSinhVien - Mã sinh viên cần tìm
 * @returns {Object|null} Sinh viên tìm thấy hoặc null nếu không có
 */
function timSinhVienTheoMa(danhSachSinhVien, maSinhVien) {
    return danhSachSinhVien.find((sv) => sv.maSinhVien === maSinhVien) || null;
}

/**
 * Sắp xếp danh sách sinh viên theo điểm trung bình (giảm dần).
 * @param {Array} danhSachSinhVien - Danh sách sinh viên
 * @returns {Array} Danh sách đã sắp xếp
 */
function sapXepTheoThuHang(danhSachSinhVien) {
    return [...danhSachSinhVien].sort(
        (a, b) => tinhDiemTrungBinh(b) - tinhDiemTrungBinh(a)
    );
}

/**
 * Lọc sinh viên theo ngành học.
 * @param {Array} danhSachSinhVien - Danh sách sinh viên
 * @param {string} nganh - Ngành học cần lọc
 * @returns {Array} Danh sách sinh viên thuộc ngành học đó
 */
function locSinhVienTheoNganh(danhSachSinhVien, nganh) {
    return danhSachSinhVien.filter((sv) => sv.nganh === nganh);
}

module.exports = {
    taoSinhVien,
    themDiem,
    tinhDiemTrungBinh,
    xepLoaiHocLuc,
    timSinhVienTheoMa,
    sapXepTheoThuHang,
    locSinhVienTheoNganh,
};
