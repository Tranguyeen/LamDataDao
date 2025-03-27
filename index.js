let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const title = document.querySelector(".subject");
const summary = document.querySelector(".summary p");

// Mảng dữ liệu tiêu đề và mô tả tương ứng với từng hình ảnh
const slideData = [
  {
    title: "Tường lửa & Bảo mật",
    text: "Giải pháp bảo mật giúp bảo vệ hệ thống khỏi các mối đe dọa mạng.",
  },
  {
    title: "Lưu trữ dữ liệu an toàn",
    text: "Công nghệ lưu trữ hiện đại giúp bảo vệ dữ liệu quan trọng của bạn.",
  },
  {
    title: "Thiết kế trải nghiệm số",
    text: "Xây dựng giao diệns trải nghiệm người dùng mượt mà, chuyên nghiệp.",
  },
  {
    title: "Dịch vụ Email Server",
    text: "Hệ thống email doanh nghiệp đáng tin cậy với độ bảo mật cao.",
  },
  {
    title: "Điện toán đám mây",
    text: "Hạ tầng công nghệ giúp doanh nghiệp mở rộng khả năng trữ dữ liệu.",
  },
  {
    title: "Cơ sở hạ tầng ảo hóa",
    text: "Giúp tối ưu tài nguyên phần cứng bằng công nghệ ảo hóa tiên tiến.",
  },
  {
    title: "Trải nghiệm khách hàng số",
    text: "Phân tích dữ liệu giúp nâng cao trải nghiệm người dùng.",
  },
  {
    title: "Trí tuệ nhân tạo AI",
    text: "Ứng dụng AI giúp quản lý và phân tích dữ liệu thông minh.",
  },
  {
    title: "SQL & Quản lý dữ liệu",
    text: "Tối ưu hóa truy vấn SQL giúp cải thiện hiệu suất hệ thống dữ liệu.",
  },
];

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });

  // Cập nhật nội dung tiêu đề và mô tả
  title.textContent = slideData[index].title;
  summary.textContent = slideData[index].text;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

// Chạy slider tự động mỗi 3 giây
setInterval(nextSlide, 3000);

// Hiển thị slide đầu tiên
showSlide(currentIndex);

document.addEventListener("DOMContentLoaded", function () {
  const returnHome = document.getElementById("return-home");

  // Hiển thị nút khi cuộn xuống 200px
  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      returnHome.style.display = "block";
    } else {
      returnHome.style.display = "none";
    }
  });

  // Cuộn mượt lên đầu trang khi click
  returnHome.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
