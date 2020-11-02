# Module Auth Web Demo use Vue

## Table of Contents

- [Installation](#installation)
- [CheckCode](#Check code)
- [FormatCode](#Format code)
- [Testing](#testing)
### I.Thông tin bất động sản
| code | description |
| THDC1 | Địa chỉ |
| THTT2 | Tỉnh/Thành |
| THQ3 | Quận |
| THP4 | Phường |
| THD5 | Đường |
| THDD41 | Đoạn đường |
| THMTVT42 | Mô tả vị trí |
| THNVT43 | Nhóm vị trí |
| THGDGD6 | Giá đã giao dịch |
| THTDGD7 | Thời điểm giao dịch |
| THNT8 | Nguồn tin |
| THDGDDGD9 | Đơn giá đất đã giao dịch |
| THHATL38 | Hình ảnh - Tài liệu |

### II. Quyền sử dụng đất
THT10 | Thửa
THTBD11 | Tờ bản đồ
THLD12 | Loại dất
THTHSD13 | Thời hạn sử dụng
THHTSD14 | Hình thức sử dụng
THNTM15 | Ngang trước (m)
THNSM16 | Ngang sau (m)
THCD1M17 | Chiều dài 1 (m)
THCD2M18 | Chiều dài 2 (m)
THDTCNM19 | Diện tích công nhận (m)
THDTKCN20 | Diện tích không công nhận (m)
THTLDTKCNDTKV20 | Tỉ lệ DTKCN/DTKV
THHSDGDKCN | Hệ số đơn giá đất không công nhận
THDTCNBQHM221 | Diện tích công nhận bị quy hoạch (m2)
THTLDTCNBQHDTCN | Tỉ lệ DTCNBQH/DTCN
THHSDGDCNBQH | Hệ số đơn giá đất công nhận bị quy hoạch
THDTCNKQHM222 | Diện tích công nhận không quy hoạch (m2)
THDTKVM223 | Diện tích khuôn viên (m2)
THDTVT1M2 | Diện tích vị trí 1 (m2)
THHSVT1 | Hệ số vị trí 1
THDTVT2M2 | Diện tích vị trí 2 (m2)
THHSVT2 | Hệ số vị trí 2
THDTVT3M2 | Diện tích vị trí 3 (m2)
THHSVT3 | Hệ số vị trí 3

### III. Công trình xây dựng thực tế
THTNT24 | Tầng nguyên (tầng)
THHT25 | Hầm (tầng)
THLT26 | Lửng (tầng)
THSTT27 | Sân thượng (tầng)
THKT28 | Kết cấu
THCLCL29 | Chất lượng còn lại
THDTXDM230 | Diện tích xây dựng (m2)
THDTSCNM231 | Diện tích sàn công nhận (m2)
THDTSKCNM232 | Diện tích sàn không công nhận (m2)
THTDTSTGCNM233 | Tổng diện tích sàn theo GCN (m2)
THDTSDPSM234 | Diện tích sử dụng phát sinh (m2)
THDTSDTTM235 | Diện tích sử dụng thực tế (m2)
THDGXMM236 | Đơn giá xây mới (đồng/m2)
THGTCTXD37 | Giá trị công trình xây dựng (đồng)

### Ưu và nhược điểm
THTMDC | Tổng mức điều chỉnh
THDGDTT | Đơn giá đất thị trường

THTMDUD | Tổng mức độ ưu điểm
THCTXDKCDT1 | Công trình xây dựng - Kết cấu đặc thù
THYT2L212 | Yếu tố 2 - Loại 2.1
THYT2L253 | Yếu tố 2 - Loại 2.5
THYT2L284 | Yếu tố 2 - Loại 2.8
THYT3L385 | Yếu tố 3 - Loại 3.8
THYT4L456 | Yếu tố 4 - Loại 4.5
THYTNL45 | Yếu tố n - Loại 4.5

THTMDND | Tổng mức độ nhược điểm
TDHYT1L111 | Yếu tố 1 - Loại 1.1
THYT2L212 | Yếu tố 2 - Loại 2.1
THYT2L253 | Yếu tố 2 - Loại 2.5
THYT2L284 | Yếu tố 2 - Loại 2.8
THYT3L385 | Yếu tố 3 - Loại 3.8
THYT4L456 | Yếu tố 4 - Loại 4.5
THYTNL45 | Yếu tố n - Loại 4.5

### Điều chỉnh phương pháp so sánh
THDGDTT1 | Đơn giá đất thị trường
THHSDCMTH2 | Hệ số điều chỉnh mặt tiền/hẻm
THDCYTGT3 | Điều chỉnh yếu tố giao thông
THDCYTMDSU4 | Điều chỉnh yếu tố mức độ sầm uất
THDCYTQC5 | Điều chỉnh yếu tố quang cảnh
THDCYTKV6 | Điều chỉnh yếu tố khu vực
THDCYTTT7 | Điều chỉnh yếu tố thị trường
THDCYTK8 | Điều chỉnh yếu tố khác
THTMDC | Tổng mức điều chỉnh
THDGDTTSDC | Đơn giá đất thị trường sau điều chỉnh

### Phương pháp so sanh PPSS
### Kết quả thẩm định (resultAuditPPSS)
THDGDBQPPSS | Đơn giá đất bình quân (PPSS)
THHSDCTSTD | Hệ số điều chỉnh tài sản thẩm định
THDGDTDPPSS | Đơn giá đất thẩm định (PPSS)
THGTDPPSS | Giá trị đất (PPSS)
THGTCTXD | Giá trị công trình xây dựng
THTLDCCTDV | Tỉ lệ điều chỉnh của thẩm định viên
THGTTSTDPPSS | Giá trị tài sản thẩm định (PPSS)


### Phương pháp điểm PPDG (infoPPDG)
THDGDDG | Đơn giá đất điểm giá
THND | Ngày duyệt
THDTC | Độ tin cậy

### Bảng điều khiển (adjustPPDG)
THHSDCMTH1 | Hệ số điều chỉnh mặt tiền/hẻm
THDCYTGT2 | Điều chỉnh yếu tố giao thông
THDCYTMDSU3 | Điều chỉnh yếu tố mức độ sầm uất
THDCYTQC4 | Điều chỉnh yếu tố quang cảnh
THDCYTKV5 | Điều chỉnh yếu tố khu vực
THDCYTTT6 | Điều chỉnh yếu tố thị trường
THDCYTK7 | Điều chỉnh yếu tố khác
THTMDC | Tổng mức điều chỉnh

### Kết quả thẩm định (resultAuditPPDG)
THDGDPPDG | Đơn giá đất (PPDG)
THHSDCTSTD | Hệ số điều chỉnh tài sản thẩm định
THDGDTDPPDG | Đơn giá đất thẩm định (PPDG)
THGTDPPDG | Giá trị đất (PPDG)
THGTCTXD | Giá trị công trình xây dựng
THTLDCCTDV | Tỉ lệ điều chỉnh của thẩm định viên
THGTTSTDPPDG | Giá trị tài sản thẩm định (PPDG)

### Tóm tắt nội dung
landPricePPSS |  Đơn giá đất thẩm định (PPSS)
valuedPropertyPPSS |  Giá trị tài sản thẩm định (PPSS)
landPricePPDG | Đơn giá đất thẩm định (PPĐG)
valuedPropertyPPDG | Giá trị tài sản thẩm định (PPĐG)

### Phương pháp so sánh PPSS 
resultAuditPPSS | Kết quả thẩm định

### Phương pháp điểm giá PPDG 
infoPPDG | Phương pháp điểm PPDG
adjustPPDG | Bảng điều khiển PPDG
resultAuditPPDG | Kết quả thẩm định PPDG

### Installation

1. Enter folder
```
$ cd auth-web-demo
```

2. Install dependencies
```
~/auth-web-demo$ npm install
```

3. Serve with hot reload at localhost:8000 
```
~/auth-web-demo$ npm run dev
```

4. Build for production with minification.
```
~/auth-web-demo$ npm run build
```

### CheckCode

```
~/auth-web-demo$ npm run linting
```

### FormatCode

```
~/auth-web-demo$ npm run format
```

### Testing

1. Unit Testing
```
~/auth-web-demo$ npm run test
```

## About
