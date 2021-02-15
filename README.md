# Thần số học Pythagoras

Xem dự đoán số mệnh qua Thần số học Pythagoras. Truy cập: <https://thansohoc.aicurious.io>.

## Chạy code

Mã nguồn sử dụng [Hugo](https://gohugo.io/) để tạo các trang web. Để chạy code, chúng ta cần cài đặt Hugo theo hướng dẫn tại [đây](https://gohugo.io/getting-started/installing/).

### Khởi chạy server phát triển

Gõ lệnh:

```
hugo serve
```

Bạn sẽ thấy trang web được mở ở localhost tại địa chỉ [http://localhost:1313](http://localhost:1313). Các thay đổi trong mã nguồn sẽ được cập nhật liên tục tại đây.

### Build trang web cho production

Dùng lệnh sau ta sẽ thu được trang web đã build tại thư mục `public`:

```
hugo --gc --minify --buildDrafts=false
```

## Triển khai

Mã nguồn có thể được triển khai bằng cách upload thư mục `public` lên server sau bước build ở trên, hoặc triển khai trên [Netlify](https://www.netlify.com/) với file cấu hình `netlify.toml`.
