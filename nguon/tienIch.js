/**
 * Mô-đun Tiện Ích
 * Cung cấp các hàm tiện ích dùng chung trong ứng dụng.
 */

'use strict';

/**
 * Định dạng điểm số thành chuỗi với 2 chữ số thập phân.
 * @param {number} diem - Điểm số
 * @returns {string} Chuỗi điểm đã định dạng
 */
function dinhDangDiem(diem) {
    return diem.toFixed(2);
}

/**
 * Chuyển đổi chuỗi sang chữ hoa.
 * @param {string} chuoi - Chuỗi đầu vào
 * @returns {string} Chuỗi chữ hoa
 */
function chuanHoaChuoi(chuoi) {
    if (typeof chuoi !== 'string') {
        throw new TypeError('Đầu vào phải là kiểu chuỗi.');
    }
    return chuoi.trim().toUpperCase();
}

/**
 * Kiểm tra xem một giá trị có phải là số hợp lệ hay không.
 * @param {*} giaTri - Giá trị cần kiểm tra
 * @returns {boolean} true nếu là số hợp lệ, false nếu không phải
 */
function laSoHopLe(giaTri) {
    return typeof giaTri === 'number' && !isNaN(giaTri) && isFinite(giaTri);
}

/**
 * Tạo chuỗi phân cách (đường kẻ ngang) để in ra console.
 * @param {number} doDai - Độ dài đường kẻ
 * @param {string} kyTu - Ký tự sử dụng (mặc định: '-')
 * @returns {string} Chuỗi đường kẻ
 */
function taoKeDuongNgang(doDai = 40, kyTu = '-') {
    return kyTu.repeat(doDai);
}

/**
 * In thông tin sinh viên ra console theo định dạng đẹp.
 * @param {Object} sinhVien - Đối tượng sinh viên
 * @param {number} diemTrungBinh - Điểm trung bình
 * @param {string} xepLoai - Xếp loại học lực
 */
function inThongTinSinhVien(sinhVien, diemTrungBinh, xepLoai) {
    const duongKe = taoKeDuongNgang(45);
    console.log(duongKe);
    console.log(`Mã sinh viên : ${sinhVien.maSinhVien}`);
    console.log(`Họ và tên    : ${sinhVien.hoTen}`);
    console.log(`Tuổi         : ${sinhVien.tuoi}`);
    console.log(`Ngành học    : ${sinhVien.nganh}`);
    console.log(`Điểm TB      : ${dinhDangDiem(diemTrungBinh)}`);
    console.log(`Xếp loại     : ${xepLoai}`);
    console.log(duongKe);
}

module.exports = {
    dinhDangDiem,
    chuanHoaChuoi,
    laSoHopLe,
    taoKeDuongNgang,
    inThongTinSinhVien,
};
