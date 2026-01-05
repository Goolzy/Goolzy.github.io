---
layout: inventory
title: Nhật ký thay đổi
permalink: /inventory/changelog/vi/
lang: vi
translations:
  ko: /inventory/changelog/
  en: /inventory/changelog/en/
  ja: /inventory/changelog/ja/
  de: /inventory/changelog/de/
  fr: /inventory/changelog/fr/
  es: /inventory/changelog/es/
  pt: /inventory/changelog/pt/
  zh: /inventory/changelog/zh/
  ar: /inventory/changelog/ar/
  hi: /inventory/changelog/hi/
  id: /inventory/changelog/id/
  ru: /inventory/changelog/ru/
  it: /inventory/changelog/it/
  tr: /inventory/changelog/tr/
  vi: /inventory/changelog/vi/
  th: /inventory/changelog/th/
  pl: /inventory/changelog/pl/
---

## Nhật ký thay đổi

Hãy xem lịch sử cập nhật ứng dụng Inventory.

<details class="changelog-version" open>
<summary>
  <span class="version-title">v1.2.1 <small>2026-01-05</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Sao chép">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### Bố Cục Phản Ứng Của Bảng Phản Ứng
Bảng phản ứng hình ảnh trong lượt xem chi tiết mục được hiển thị chính xác trên tất cả các kích thước màn hình.
- **Bố Cục Phản Ứng**: Các nút phản ứng được phân bổ đều ngay cả trên màn hình hẹp
- **Sử Dụng Toàn Bộ Chiều Rộng**: Bảng sử dụng toàn bộ chiều rộng màn hình bất kể kích thước hình ảnh
- **Thiết Kế Gọn Nhẹ**: Tối ưu hóa phần đệm để che phủ ít ảnh hơn trong khi duy trì vùng chạm

#### Cuộn Vô Hạn Tìm Kiếm Mẫu Dùng Chung
Khi có hơn 20 kết quả tìm kiếm mẫu dùng chung, bạn có thể cuộn để tải thêm.
- **Cuộn Vô Hạn**: Tự động tải 20 kết quả tiếp theo khi đến cuối danh sách
- **Chỉ Báo Tải**: Hiển thị chỉ báo tiến độ ở dưới cùng trong khi tải thêm
- **Tương Thích Ngược**: Các phiên bản ứng dụng trước đó vẫn hiển thị 20 kết quả như trước

#### Cập Nhật Trang Chủ
- **Hỗ Trợ Tiếng Trung (Giản Thể)**: Thêm bản địa hóa 中文(简体) cho trang chủ (ngôn ngữ thứ 8)
- **Hiển Thị Ngôn Ngữ Được Hỗ Trợ**: 8 biểu tượng cờ ngôn ngữ hiển thị bên dưới biểu tượng tải xuống nền tảng

#### Cài Đặt Ngôn Ngữ App Store
- **Thêm Ngôn Ngữ Hỗ Trợ iOS/macOS**: Thêm tiếng Trung (zh) vào CFBundleLocalizations

#### Cải Thiện Lựa Chọn Ngày
- **Mở Rộng Phạm Vi Chọn**: Có thể chọn từ năm 1900 trong giao diện chọn ngày (trước đó là năm 2000)

#### Tính Năng Chia Sẻ Tài Liệu
Sao chép nội dung vào bộ nhớ tạm hoặc gửi qua email từ màn hình chi tiết tài liệu.
- **Sao Chép Bộ Nhớ Tạm**: Sao chép vào bộ nhớ tạm dưới dạng văn bản thuần túy với các ký hiệu văn bản phong phú bị loại bỏ
- **Gửi Email**: Gửi qua email dưới dạng HTML với định dạng được áp dụng
- **Lựa Chọn Tùy Chỉnh**: Chọn các mục cụ thể từ tiêu đề, nội dung, từ khóa, cuộc trò chuyện và nhật ký hệ thống
- **Hỗ Trợ Chế Độ Clip**: Sử dụng cùng một cách trong chi tiết clip

#### Đồng Bộ Hóa Khóa Clip
Trạng thái khóa của các mục thuộc clip được đồng bộ hóa.
- **Khóa/Mở Khóa Hàng Loạt**: Khi khóa mục đại diện của clip, tất cả các mục con cũng bị khóa cùng lúc
- **Đồng Bộ Hóa Mật Khẩu**: Tất cả các mục trong clip sử dụng cùng một mật khẩu khóa

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.2.0 <small>2026-01-03</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Sao chép">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### Cuộn Tự Động Khi Kéo
Khi kéo các mục, màn hình tự động cuộn ở các cạnh.
- **Vùng Cuộn Tự Động**: Kéo đến 10% trên/dưới màn hình để cuộn tự động
- **Dựa Trên Gia Tốc**: Tốc độ cuộn tăng khi bạn tiến gần hơn đến cạnh
- **Phản Hồi Xúc Cảm**: Thông báo rung nhẹ khi vào vùng cuộn
- **Điều Hướng Giữa Các Phân Vùng**: Duyệt nhanh chóng nhiều mục hoặc nhiều phân vùng

#### Điều Hướng Cuộn
Nhảy nhanh đến trên cùng hoặc dưới cùng trong màn hình xem chi tiết.
- **Nút Điều Hướng**: Nút cuộn xuất hiện bên cạnh thanh tìm kiếm khi có nhiều bình luận
- **Hiển Thị Dựa Trên Vị Trí**: Chỉ nút dưới hiển thị ở đầu, chỉ nút trên hiển thị ở dưới
- **Thiết Kế Neumorphic**: Kiểu nút phù hợp với thiết kế ứng dụng

#### Khôi Phục Hoạt Ảnh Chuyển Trang
Hiệu ứng lật cho thanh điều hướng dưới cùng và màn hình nhận đã được khôi phục.
- **Hiệu Ứng Lật 3D**: Chuyển trang với phép quay 180 độ trên trục Y
- **Trang Nhật Ký/Cửa Hàng**: Áp dụng hiệu ứng lật
- **Màn Hình Nhận**: Áp dụng hiệu ứng lật từ nút hộp thư và liên kết sâu thông báo

#### Thống Nhất Thiết Kế Giao Diện Người Dùng
Thiết kế Neumorphic đã được áp dụng cho các màn hình Gửi, Nhận và Cửa Hàng, thống nhất toàn bộ ứng dụng.
- **Màn Hình Gửi/Nhận**: Bóng Neumorphic được áp dụng cho thẻ và hộp thoại
- **Màn Hình Cửa Hàng**: Hiệu ứng phát sáng trên nút tab, thẻ sản phẩm kiểu Neumorphic
- **Thiết Kế Trường Nhập Liệu**: Kiểu hõm rõ ràng phân biệt các khu vực nhập liệu

#### Hoạt Ảnh Sắp Xếp Lại Nhật Ký
Khi các mục di chuyển lên đầu danh sách nhật ký do có bình luận mới, các hoạt ảnh mượt mà được áp dụng.
- **Hiệu Ứng Tỷ Lệ**: Các mục tạm thời phóng to, sau đó trở lại kích thước bình thường sau khi sắp xếp lại
- **Xử Lý Tuần Tự**: Nhiều mục hoạt ảnh theo thứ tự khi di chuyển cùng lúc
- **Nhấn Mạnh Trực Quan**: Rõ ràng chỉ ra các mục nào là gần đây nhất

#### Ổn Định Cơ Sở Dữ Liệu
Các vấn đề tương thích cơ sở dữ liệu có thể xảy ra trong quá trình cập nhật ứng dụng đã được giải quyết.
- **Khôi Phục Tự Động**: Tự động tạo lại cơ sở dữ liệu khi không khớp phiên bản
- **Bảo Tồn Dữ Liệu**: Không mất dữ liệu nhờ đồng bộ hóa máy chủ tự động
- **Tất Cả Nền Tảng**: Cùng một bản sửa được áp dụng cho iOS, Android, macOS và Windows

#### Cải Thiện Khóa Mật Khẩu
Tính bảo mật và khả năng sử dụng của các mục được bảo vệ bằng mật khẩu đã được cải thiện đáng kể.
- **Lớp Phủ Mờ**: Nội dung bị ẩn hoàn toàn khi vào các mục bị khóa để tăng cường bảo mật
- **Thiết Kế Neumorphic**: Các hộp thoại đặt/mở khóa mật khẩu hiện sử dụng kiểu Neumorphic
- **Hiển Thị 16 Chữ Số**: Các vòng tròn nhỏ (tổng cộng 16) hiển thị trạng thái nhập mật khẩu
- **Nhập Hai Dòng**: Đặt mật khẩu và xác nhận trên cùng một màn hình

#### Cải Thiện Cài Đặt Thông Báo Đẩy
Màn hình cài đặt thông báo đẩy đã được tổ chức lại theo danh mục để quản lý thuận tiện hơn.
- **7 Danh Mục**: Phân loại thành Giao Dịch, Nhật Ký, Hết Hạn, Phản Ứng, Từ Khóa, Chia Sẻ và Hệ Thống
- **Bật Tắt Nhóm**: Bật hoặc tắt toàn bộ danh mục cùng lúc
- **Thu Gọn/Mở Rộng**: Giao diện Accordion cho phép xem chỉ các danh mục cần thiết
- **Thông Báo Chi Tiết**: Thêm thông báo chấp nhận/từ chối giao dịch, phản ứng, từ khóa, hết hạn chia sẻ/báo cáo và thông báo hệ thống
- **Thiết Kế Neumorphic**: Kiểu Neumorphic được áp dụng cho các mục thông báo riêng lẻ

#### Cải Thiện Cài Đặt Âm Thanh
Nút tắt tiếng hiện có thiết kế Neumorphic để biểu diễn trực quan trạng thái được nhấn.
- **Hiệu Ứng Nhấn**: Nút xuất hiện bị nhấn vào khi bị tắt tiếng
- **Bóng Neumorphic**: Trạng thái mặc định hiển thị bóng lồi, trạng thái được nhấn hiển thị bóng lõm

#### Cải Thiện Hiệu Suất Tải Nhật Ký
Tốc độ tải nhật ký dùng chung đã được cải thiện.
- **Tải Dựa Trên Bộ Nhớ Đệm**: Các nhật ký đã xem trước đó được hiển thị ngay lập tức từ bộ nhớ đệm
- **Tiết Kiệm Dữ Liệu**: Không có yêu cầu máy chủ khi truy cập lại, sử dụng dữ liệu cục bộ
- **Bình Luận Mới Theo Thời Gian Thực**: Bình luận mới được nhận theo thời gian thực ngay cả khi sử dụng bộ nhớ đệm

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.1.3 <small>2026-01-03</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Sao chép">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### Nhật Ký Dùng Chung Giấy
Tạo tài liệu nhật ký dùng chung chỉ bằng giấy, không cần tem.
- **Chọn 2 hoặc Nhiều Giấy** → Menu "Tạo Mục Mới (Nhật Ký Dùng Chung)" xuất hiện
- **Chọn 1 Giấy** → Menu "Tạo Mục Mới (Nhật Ký Cá Nhân)" xuất hiện
- Các tài liệu được tạo chia sẻ cùng một phòng bình luận
- Gửi tài liệu cho các người khác nhau và trò chuyện với nhau

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.1.2 <small>2025-12-31</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Sao chép">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### Tính Năng Chỉnh Sửa Huy Hiệu
Chỉnh sửa hình ảnh và từ khóa của các huy hiệu được khắc.
- **Menu Chỉnh Sửa**: Menu "Chỉnh Sửa Huy Hiệu" xuất hiện khi chọn một huy hiệu được khắc
- **Thay Đổi Hình Ảnh**: Thay thế hình ảnh huy hiệu bằng hình ảnh mới
- **Quản Lý Từ Khóa**: Thêm, xóa hoặc sửa đổi 5 loại từ khóa

#### Tối Ưu Hóa Hiệu Suất Hình Ảnh
Tốc độ tải hình ảnh mạng đã được cải thiện đáng kể.
- **Bộ Nhớ Đệm Cục Bộ**: Một khi được tải, hình ảnh được lưu cục bộ để hiển thị ngay lập tức
- **Đồng Bộ Hóa Hình Ảnh Huy Hiệu**: Thay đổi hình ảnh huy hiệu được phản ánh ngay lập tức trên tất cả các nhật ký

#### Tự Động Hoàn Thành Người Nhận Gần Đây
Nhanh chóng chọn những người nhận gần đây trên màn hình gửi.
- **Danh Sách Tự Động Hoàn Thành**: Thả xuống hiển thị tối đa 30 người nhận gần đây khi trường nhập liệu được tập trung
- **Chọn Nhanh**: Tự động tìm kiếm khi chọn người nhận từ danh sách
- **Tìm Kiếm Lại**: Xóa lựa chọn bằng nút X để tìm kiếm người nhận khác
- **Bộ Nhớ Cục Bộ**: Thông tin người nhận tự động được lưu khi gửi thành công

#### Cải Thiện Hạn Chế Gửi
Các huy hiệu được trang bị và tem dùng chung hiện bị hạn chế gửi.
- **Huy Hiệu Được Trang Bị**: Tháo huy hiệu để gửi nó
- **Tem Dùng Chung**: Thu hồi chia sẻ để gửi tem
- **Hướng Dẫn Chi Tiết**: Hiển thị các tin nhắn cụ thể giải thích lý do hạn chế

#### Hệ Thống Phản Ứng
Phản ứng với các mục bằng các biểu cảm tình cảm.
- **12 Phản Ứng**: Các biểu cảm tình cảm khác nhau bao gồm Thích, Yêu, Tốt Nhất, Chúc Mừng và hơn thế nữa
- **Bật Tắt Phản Ứng**: Hủy bằng cách nhấp vào phản ứng đã chọn lại
- **Ghi Nhật Ký Nhật Ký**: Hệ thống ghi lại khi phản ứng được chọn hoặc hủy
- **Hỗ Trợ Đa Ngôn Ngữ**: Tên phản ứng được hiển thị bằng ngôn ngữ của người dùng

#### Cải Thiện Tính Năng Tìm Kiếm
Tìm kiếm theo thời gian thực đã được mở rộng để bao gồm tên mục và từ khóa.
- **Tìm Kiếm Tên Mục**: Tìm kiếm theo tiêu đề tài liệu, mô tả tem hoặc tên miền huy hiệu
- **Tìm Kiếm Từ Khóa**: Tìm kiếm theo từ khóa được lưu trong tem và huy hiệu
- **Tìm Kiếm Thẻ**: Tìm kiếm theo thẻ mẫu tem

#### Cải Thiện Thông Báo Trong Ứng Dụng
Thông báo toast theo thời gian thực đã được cải thiện.
- **Hiển Thị Huy Hiệu Người Gửi**: Hình ảnh huy hiệu của người gửi được hiển thị nội tuyến trong thông báo
- **Kiểu Đảo Động**: Hoạt ảnh toast mượt mà được lấy cảm hứng từ kiểu Đảo Động iOS
- **Phát Hiện Theo Thời Gian Thực**: Chính xác phát hiện thông báo mới và cập nhật dựa trên ID+timestamp

#### Sửa Lỗi
- **Ổn Định Giao Diện Chi Tiết Tài Liệu**: Sửa vấn đề mà thanh tìm kiếm và bộ lọc sẽ rung khi nhật ký dùng chung/solo ở ranh giới màn hình
- **Sửa Rung Cuộn**: Giải quyết nhflickering màn hình khi cuộn lên trong tài liệu/tem có ít nhật ký
- **Sửa Cuộn Trên Cùng**: Giải quyết vấn đề mà thông tin tác giả không thể được tiếp cận bằng cuộn trong các mục có nhật ký
- **Cải Thiện Định Dạng Nhật Ký Phản Ứng**: Emoticon và tên hiện được hiển thị cùng nhau
- **Sửa Hiển Thị Tên Người Dùng**: Tên miền hiện được hiển thị chính xác khi mặc huy hiệu
- **Sửa Thông Báo Lần Đầu Nhật Ký Dùng Chung**: Giải quyết vấn đề mà thông báo toast lần đầu cho nhật ký dùng chung không được hiển thị
- **Sửa Hình Ảnh Thông Báo Đẩy**: Hình ảnh tài liệu hiện được ưu tiên hơn hình ảnh huy hiệu trong thông báo đẩy

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.1.0 <small>2025-12-29</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Sao chép">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### Tự Động Dịch Đa Ngôn Ngữ
Tài liệu, tem và nội dung nhật ký được tự động dịch sang ngôn ngữ của bạn.
- **Dịch Tự Động**: Dịch tự động sang ngôn ngữ của người dùng khi xem tài liệu, tem và nhật ký
- **Ngôn Ngữ Được Hỗ Trợ**: Tiếng Hàn, Tiếng Anh, Tiếng Nhật, Tiếng Tây Ban Nha, Tiếng Pháp, Tiếng Đức, Tiếng Bồ Đào Nha
- **Bật Tắt Bản Gốc**: Chuyển đổi giữa bản gốc và bản dịch bằng nút [Hiển Thị Bản Gốc]
- **Bộ Nhớ Đệm Dịch**: Bộ nhớ đệm máy chủ và cục bộ ngăn chặn các yêu cầu dịch lại
- **Bộ Nhớ Đệm Riêng Biệt Theo Ngôn Ngữ**: Sử dụng ngay bản dịch được bộ nhớ đệm khi chuyển ngôn ngữ

#### Hệ Thống Hướng Dẫn
Hướng dẫn từng bước đã được thêm để hướng dẫn bạn cách sử dụng ứng dụng.
- **Màn Hình Kho**: Chọn mục, di chuyển phân vùng, sử dụng menu dưới cùng (8 bước)
- **Màn Hình Gửi/Nhận**: Nhập người nhận, quét mã QR, phương pháp chuyển/nhận
- **Màn Hình Cửa Hàng**: Duyệt danh mục sản phẩm và phương pháp mua hàng
- **Màn Hình Hồ Sơ**: Thông tin tài khoản và cài đặt
- **Màn Hình Cài Đặt**: Cài đặt ứng dụng và thay đổi chủ đề
- **Mẫu Tem**: Quá trình tạo mẫu hoàn chỉnh (9 bước)
- **Tính Năng Tìm Kiếm**: Sử dụng bộ lọc và lưu thuật ngữ tìm kiếm
- Chỉ hiển thị lần đầu sử dụng; có thể xem lại trong Cài Đặt

#### Tối Ưu Hóa Hiệu Suất Nhật Ký
Tốc độ tải và sử dụng dữ liệu cho nhật ký dùng chung/độc lập đã được cải thiện đáng kể.
- **Tải Nhanh**: Tải chỉ 100 bình luận mới nhất trước tiên
- **Cuộn Vô Hạn**: Cuộn để tải 50 bình luận cũ hơn tại một lần
- **Bộ Nhớ Đệm Cục Bộ**: Hiển thị ngay lập tức bằng bộ nhớ đệm khi truy cập lại
- **Đồng Bộ Hóa Theo Thời Gian Thực**: Hiệu quả nhận chỉ bình luận mới
- **Tiết Kiệm Dữ Liệu**: Ngăn chặn tải xuống lại không cần thiết

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.0.4 <small>2025-12-25</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Sao chép">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### Thẻ Liên Kết Phương Tiện
Các URL được nhập trong nhật ký được hiển thị tự động dưới dạng **thẻ phong phú**.
- **YouTube**: Hình Thumbnail + Tiêu Đề + Tên Kênh
- **Spotify**: Tác Phẩm Ảo + Tiêu Đề + Nghệ Sĩ
- **Google Drive**: Thumbnail Tệp + Tên Tệp
- **Dropbox**: Biểu Tượng + Tên Tệp
- **OneDrive**: Biểu Tượng + Tên Dịch Vụ
- **Các Trang Web**: Hình Xem Trước + Tiêu Đề Trang
- Nhấn để mở trong ứng dụng bên ngoài/trình duyệt
- Nhấn và giữ để sao chép URL vào bộ nhớ tạm

#### Cải Thiện Tìm Kiếm Mẫu Dùng Chung
- **Kiểm Tra Giấy**: Nút Sao Chép hiển thị số lượng giấy còn lại (Giấy:10)
- **Yêu Cầu Giấy**: Sao Chép bị vô hiệu hóa khi không có giấy
- **Thiết Kế Neumorphic**: Màn hình tìm kiếm hiện sử dụng kiểu giao diện Neumorphic

#### Cải Thiện Hệ Thống Hiệu Ứng Trình Chỉnh Sửa Hình Ảnh
Giao diện chọn hiệu ứng đặc biệt đã được đơn giản hóa.
- **Chọn Lựa Duy Nhất**: Chọn một trong 5 hiệu ứng tại một lần
- **Danh Sách Hiệu Ứng**: Không Có / Xóa Nền / Bokeh / Bloom / Đơn Sắc
- **Chuyển Đổi Mượt Mà**: Chỉ báo tiến độ được hiển thị trong quá trình xử lý hiệu ứng
- **Tăng Cường Hiệu Suất**: Bộ Lọc Bloom/Đơn Sắc được xử lý ở nền

#### Hiệu Suất & Ổn Định
Cấu trúc nội bộ ứng dụng đã được tối ưu hóa.
- **Tối Ưu Hóa Truy Vấn**: Xử Lý Song Song để tải Clip/Bộ Lọc Nhanh Hơn
- **Dọn Dẹp Mã**: Xóa 12 Mô-đun Mã Không Sử Dụng
- **Dọn Dẹp Phụ Thuộc**: Xóa 7 Thư Viện Không Sử Dụng
- **Dọn Dẹp Tài Sản**: Xóa Phông Chữ/Hình Ảnh Không Sử Dụng (Giảm Khoảng 16MB)

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.0.3 <small>2025-12-23</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Sao chép">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### Tính Năng Clip
Gộp nhiều tài liệu cùng nhau để quản lý dễ dàng hơn.
- **Tạo Clip**: Chọn 2+ tài liệu và nhấn "Gộp Lại Cùng Nhau"
- **Biểu Tượng Clip**: Các Tài Liệu Được Gộp hiển thị biểu tượng clip ở góc trên cùng bên phải
- **Chi Tiết Clip**: Xem các mục bên trong qua nút "Thông Tin Clip" trong màn hình chi tiết mục
- **Sắp Xếp Lại**: Kéo để sắp xếp lại các mục trong clip (ngoại trừ bìa)
- **Loại Trừ Mục**: Xóa các mục cụ thể khỏi clip (ngoại trừ bìa)
- **Bỏ Clip**: Hoàn toàn giải tán clip thành các tài liệu riêng lẻ
- **Tự Động Giải Tán**: Clip tự động giải tán khi giảm xuống 1 mục
- **Chuyển**: Các Clip được gửi/nhận dưới dạng một gói

#### Cải Thiện Tìm Kiếm Mẫu Dùng Chung
Tăng cường tính khả dụng cho màn hình tìm kiếm mẫu dùng chung.
- **Thẻ Nội Tuyến**: Kết Quả Tìm Kiếm được hiển thị trong định dạng danh sách nhỏ gọn
- **Hiển Thị Hình Ảnh Đầy Đủ**: Hình Nhỏ được hiển thị theo tỷ lệ khung hình gốc mà không cắt
- **Chi Tiết Mở Rộng**: Xem nội dung, từ khóa và ngày hết hạn trong bảng chi tiết mẫu
- **Xem Trước Từ Khóa**: Xem các từ khóa mặc định được đặt cho mẫu
- **Ngày Hết Hạn**: Kiểm Tra Khi Mẫu Dùng Chung Hết Hạn

#### Cải Thiện Mở Khóa Mật Khẩu
- Nhập mật khẩu chính xác hiện **vĩnh viễn mở khóa** tài liệu
- Trước: Chỉ xem, khóa vẫn → Bây Giờ: Mở Khóa Hoàn Toàn

#### Sửa Lỗi
- Sửa các mục clip được tính riêng lẻ trong màn hình nhận
- Sửa huy hiệu thanh điều hướng nhận bao gồm các mục bên trong clip
- Sửa huy hiệu (Thẻ Tên) không bị tháo khi hoàn lại/xóa
- Sửa miền vẫn bị chiếm dụng sau khi xóa huy hiệu

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.0.2 <small>2025-12-22</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Sao chép">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### Chỉ Báo Chưa Đọc Nhật Ký Dùng Chung
Khi bình luận mới được thêm vào nhật ký dùng chung, viền mục **nhịp**.
- Dễ dàng nhận ra các nhật ký dùng chung chưa đọc trong kho của bạn
- Nhịp dừng khi bạn mở tài liệu
- Trạng thái đọc được đồng bộ hóa trên tất cả các thiết bị

#### Hướng Dẫn Sử Dụng Tem
Khi bạn chọn một tem được khắc, các giấy có sẵn **nhịp** để hướng dẫn bạn.
- Cải thiện UX để sao chép mẫu
- Hướng dẫn bước tiếp theo trực quan

#### Cải Thiện Phân Vùng
- **Thu Gọn/Mở Rộng**: Bật tắt phân vùng bằng nút mũi tên (▼/▲)
- **Chọn Tất Cả**: Nhấn tiêu đề phân vùng để chọn/bỏ chọn tất cả các mục
- Chỉ báo trạng thái chọn (○/◐/●)
- Kéo và thả để phân vùng thu gọn

#### Thuận Tiện Cửa Hàng
Thanh toán hợp lý cho các lần mua liên tiếp cùng một mục.
- Bỏ qua hộp thoại xác nhận trong vòng 10 phút kể từ lần mua cuối cùng
- Mua hàng hàng loạt nhanh hơn

#### Cải Thiện Giao Diện Người Dùng
- Cải thiện tính dễ đọc bằng phông chữ tiêu đề mới
- Thẻ Tem hiển thị xem trước mẫu nền (Độ Mờ 33%)
- Thẻ Huy Hiệu hiển thị xem trước hình ảnh được khắc
- Menu Dưới Cùng hiển thị huy hiệu số lượng hành động có sẵn
- Điều Chỉnh Màu Chủ Đề Mực Đen (Cải Thiện Khả Năng Đọc Văn Bản)
- Tối Ưu Hóa Hình Ảnh Sản Phẩm (Giảm Kích Thước, Tải Nhanh Hơn)

#### Sửa Lỗi
- Sửa hiệu ứng nhịp trên bình luận của riêng bạn
- Sửa cắt trường nhập liệu bằng điều hướng cử chỉ
- Sửa màn hình xám khi thu gọn phân vùng
- Cải thiện xử lý quyền thông báo đẩy

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.0.1 <small>2025-12-16</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Sao chép">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### Tính Năng Khóa Tài Liệu
- Đặt mật khẩu số trên tài liệu (tối đa 16 chữ số)
- Tài Liệu Khóa hiển thị thang độ xám + biểu tượng khóa
- Mở khóa bằng mật khẩu chính xác (một lần)
- Trạng thái khóa kéo dài sau khi chuyển mục
- Tài Liệu Khóa bị loại trừ khỏi kết quả tìm kiếm

#### Hệ Thống Nhập Nhanh
Dễ dàng nhập thông tin đặc biệt qua nút `+` khi viết nhật ký:
- **Từ Khóa:Giá Trị** - Thẻ Từ Khóa Chung
- **Báo Thức Ngày** - Thẻ Ngày (Tính Toán D-Day Tự Động, Cài Đặt Báo Thức)
- **Số Điện Thoại** - Định Dạng Tự Động Theo Từng Quốc Gia
- **Vị Trí/Địa Chỉ** - Tích Hợp Ứng Dụng Bản Đồ
- **Số Tiền** - Hiển Thị Ký Hiệu Tiền Tệ Tự Động

#### Hành Động Thẻ Đặc Biệt
**Nhấn Và Giữ** thông tin đặc biệt trong nhật ký để kích hoạt các tính năng bổ sung:
- **Thẻ Ngày**: Đặt/Hủy báo thức
- **Thẻ Điện Thoại**: Gọi Trực Tiếp / Sao Chép Vào Bộ Nhớ Tạm
- **Thẻ Vị Trí**: Mở Trong Ứng Dụng Bản Đồ / Sao Chép Vào Bộ Nhớ Tạm
- **Thẻ Số Tiền**: Sao Chép Vào Bộ Nhớ Tạm

#### Cải Thiện Giao Diện Người Dùng
- Thiết Kế Neumorphic Chip Bộ Lọc
- Cải Thiện Cuộn Thanh Tìm Kiếm
- Thanh AppBar Màn Hình Chi Tiết Mục Hiển Thị Tên Mục

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.0.0 <small>2025-12-13</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Sao chép">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

**Phiên Bản Chính Thức Đầu Tiên**

#### Hệ Thống Giấy
- Giới Thiệu Hệ Thống Tiền Tệ Yêu Cầu Để Tạo Mục
- 10 Tờ Giấy Được Cấp Cho Người Dùng Đăng Ký Mới
- 10 Tờ Bổ Sung Cho Mỗi Liên Kết Tài Khoản Google/Apple
- Giấy Có Sẵn Để Mua Trong Cửa Hàng

#### Tạo Tài Liệu
- Tạo Tài Liệu Bằng Giấy
- Thêm Tiêu Đề, Nội Dung và Hình Ảnh
- Đặt Tùy Chọn Ngày Bắt Đầu/Ngày Hết Hạn

#### Hệ Thống Huy Hiệu
- Tính Năng Khắc Tên Miền Duy Nhất
- Tên Miền Được Khắc Được Sử Dụng Làm Danh Tính Người Dùng
- Quản Lý Kích Hoạt Thông Qua Trang Bị/Tháo Trang Bị
- Tùy Chọn Đính Kèm Hình Ảnh 128x128

#### Hệ Thống Tem
- Tính Năng Tạo Mẫu
- Lựa Chọn Chế Độ Nhật Ký Solo/Nhật Ký Dùng Chung
- Tính Năng Sao Chép Mẫu
- Cài Đặt Ngày Bắt Đầu/Ngày Hết Hạn

#### Tính Năng Nhật Ký
- Ghi Nhật Ký Trên Tài Liệu/Tem
- Nhật Ký Solo: Chỉ Các Hồ Sơ Cá Nhân
- Nhật Ký Dùng Chung: Chia Sẻ Với Những Người Sở Hữu Bản Sao
- Hỗ Trợ Thẻ Thông Tin Định Dạng Key:value

#### Hệ Thống Mực
- Tính Năng Thay Đổi Màu Chủ Đề Ứng Dụng
- Mực Đen, Mực Vàng

#### Chuyển Mục
- Gửi Mục Qua Địa Chỉ Email
- Tự Động Điền Email Qua Quét Mã QR
- Chấp Nhận Hoặc Trả Lại Các Mục Nhận Được
- Gửi Nhiều Mục Cùng Lúc

#### Phân Vùng
- Tính Năng Nhóm Mục
- Lưu Trữ Cục Bộ Dành Riêng Cho Thiết Bị

#### Tính Năng Tìm Kiếm
- Lọc Tìm Kiếm Theo Thời Gian Thực
- Lưu Thuật Ngữ Tìm Kiếm Làm Bộ Lọc
- Tự Động Lưu Tìm Kiếm Gần Đây (Tối Đa 5)

#### Cửa Hàng
- Mua Giấy, Tem, Huy Hiệu, Mực
- Có Sẵn Trên Tất Cả Các Nền Tảng

#### Tài Khoản
- Đăng Nhập Google, Apple, Email
- Kiếm Giấy Bổ Sung Bằng Cách Liên Kết Tài Khoản Xã Hội

#### Hỗ Trợ Đa Ngôn Ngữ
- 한국어, English, 日本語
- Deutsch, Français, Español, Português

</div>
</details>

<div class="changelog-footer">
<strong>Gợi Ý Các Tính Năng Mới!</strong> Chia Sẻ Ý Tưởng Của Bạn Tại <a href="/inventory/suggest/vi/">Gợi Ý</a> Và Chúng Tôi Sẽ Xem Xét Chúng Một Cách Tích Cực.
</div>

<style>
/* Version Container */
details.changelog-version {
  background: rgba(21, 10, 40, 0.4);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(168, 85, 247, 0.25);
  border-radius: 12px;
  margin-bottom: 1.5rem;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
}

details.changelog-version:hover {
  border-color: rgba(168, 85, 247, 0.5);
  transform: translateY(-2px);
}

details.changelog-version[open] {
  border-color: rgba(168, 85, 247, 0.6);
  box-shadow: 0 8px 32px rgba(168, 85, 247, 0.3);
}

/* Summary Header */
details.changelog-version summary {
  display: flex;
  align-items: center;
  padding: 1rem 1.25rem;
  cursor: pointer;
  user-select: none;
  list-style: none;
}

details.changelog-version summary::-webkit-details-marker { display: none; }

/* Arrow Icon */
details.changelog-version summary::before {
  content: '▶';
  margin-right: 0.75rem;
  color: #a855f7;
  transition: transform 0.25s ease;
  font-size: 0.85rem;
}

details.changelog-version[open] summary::before {
  transform: rotate(90deg);
}

details.changelog-version[open] summary {
  border-bottom: 1px solid rgba(168, 85, 247, 0.2);
}

/* Version Title */
.version-title {
  flex: 1;
  color: rgba(255, 255, 255, 0.95);
  font-size: 1.15rem;
  font-weight: 600;
}

.version-title small {
  color: #9ca3af;
  font-size: 0.85rem;
  font-weight: 400;
  margin-left: 0.5rem;
}

/* Copy Button */
.copy-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background: rgba(168, 85, 247, 0.15);
  border: 1px solid rgba(168, 85, 247, 0.3);
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.copy-btn:hover {
  background: rgba(168, 85, 247, 0.25);
  transform: scale(1.1);
}

.copy-btn svg { fill: #a855f7; }
.copy-btn:hover svg { fill: #14b8a6; }
.copy-btn.copied { background: rgba(20, 184, 166, 0.2); }
.copy-btn.copied svg { fill: #14b8a6; }

/* Version Content */
.version-content {
  padding: 1.25rem 1.5rem;
  background: rgba(10, 6, 20, 0.4);
  color: rgba(255, 255, 255, 0.9);
}

.version-content h4 {
  color: #14b8a6;
  font-size: 1.05rem;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
}

.version-content h4:first-child { margin-top: 0; }
.version-content ul { line-height: 1.8; }
.version-content li { margin-bottom: 0.5rem; }
.version-content strong { color: #14b8a6; }

/* Footer */
.changelog-footer {
  background: rgba(20, 184, 166, 0.15);
  border-left: 4px solid #14b8a6;
  padding: 1rem 1.25rem;
  margin-top: 2rem;
  border-radius: 0 8px 8px 0;
  color: rgba(255, 255, 255, 0.9);
}

.changelog-footer a { color: #a855f7; }
.changelog-footer a:hover { color: #14b8a6; }

h2 {
  color: rgba(255, 255, 255, 0.95);
  border-bottom: 2px solid rgba(168, 85, 247, 0.3);
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
}
</style>

<script>
function copyVersionContent(button, event) {
  event.stopPropagation();
  event.preventDefault();

  const details = button.closest('details.changelog-version');
  const versionContent = details.querySelector('.version-content');
  const versionTitle = details.querySelector('.version-title');

  const titleText = versionTitle ? versionTitle.textContent.trim() : '';
  const contentClone = versionContent.cloneNode(true);

  contentClone.querySelectorAll('h4').forEach(h4 => {
    h4.textContent = '\n## ' + h4.textContent.trim() + '\n';
  });
  contentClone.querySelectorAll('li').forEach(li => {
    li.textContent = '- ' + li.textContent.trim();
  });

  const text = '# ' + titleText + '\n' + contentClone.textContent
    .replace(/\n{3,}/g, '\n\n').trim();

  navigator.clipboard.writeText(text).then(() => {
    const copyIcon = button.querySelector('.copy-icon');
    const checkIcon = button.querySelector('.check-icon');
    copyIcon.style.display = 'none';
    checkIcon.style.display = 'block';
    button.classList.add('copied');
    setTimeout(() => {
      copyIcon.style.display = 'block';
      checkIcon.style.display = 'none';
      button.classList.remove('copied');
    }, 2000);
  });
}
</script>
