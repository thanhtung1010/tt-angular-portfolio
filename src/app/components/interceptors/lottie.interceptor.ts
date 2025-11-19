import { HttpInterceptorFn } from '@angular/common/http';

// Tên Interceptor của bạn
export const customInterceptor: HttpInterceptorFn = (req, next) => {
    console.log(req);
    // 1. Định nghĩa Host hoặc chuỗi URL cần bỏ qua
    // const LOTTIE_HOST = 'lottie.host';

    // // 2. CRITICAL CHECK: Kiểm tra xem URL có chứa Lottie host không
    // if (req.url.includes(LOTTIE_HOST)) {
    //     // Nếu đúng, TRẢ VỀ ngay lập tức request ban đầu
    //     // mà KHÔNG ÁP DỤNG bất kỳ logic Interceptor nào khác (headers, responseType, v.v.)
        return next(req);
    // }

    // // --- LOGIC INTERCEPTOR BÌNH THƯỜNG CỦA BẠN ---

    // // Ví dụ: Logic thêm Header Token/CORS cho API chính của bạn
    // const modifiedReq = req.clone();

    // // Trả về request đã được chỉnh sửa
    // return next(modifiedReq);
};
