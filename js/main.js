const exceptionCode = 417;
var token = localStorage.getItem("token");
async function loadMenu(){
  var tk =
  `<ul class="navbar-nav me-auto mb-2 mb-lg-0 listitemmenu">
    <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle menucha" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Tài khoản của bạn
    </a>
    <ul class="dropdown-menu listitemtk" aria-labelledby="navbarDropdown">
        <li><a class="dropdown-item" href="tincuatoi.html"><i class="fa fa-list"></i> Quản lý tin đăng</a></li>
        <li><a class="dropdown-item" href="taikhoan.html"><i class="fa fa-user"></i> Thay đổi thông tin cá nhân</a></li>
        <li><a class="dropdown-item" href="doimatkhau.html"><i class="fa fa-key"></i> Đổi mật khẩu</a></li>
        <li><a class="dropdown-item" href="naptien.html"><i class="fa fa-money"></i> Nạp tiền</a></li>
        <li><a class="dropdown-item" href="yeuthich.html"><i class="fa fa-heart"></i> Yêu thích</a></li>
        <div class="dropdown-divider"></div>
        <li><a class="dropdown-item" onclick="dangXuat()" href="#"><i class="fa fa-sign-out"></i> Đăng xuất</a></li>
    </ul>
    </li>
  </ul>`
  if(token == null){
    tk = `<a href="dangky.html" class="dangkydn dangkymenu">Đăng ký</a>
    <a href="dangnhap.html" class="dangkydn">Đăng nhập</a>`
  }
    var menu =
    ` <nav id="menu" class="navbar navbar-expand-lg">
        <a href="index.html"><img class="poiter imglogomenu" src="image/logo.png"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 listitemmenu" id="listitemmenu">
            <li class="nav-item"><a class="nav-link menucha" href="timkiem.html">Nhà đất bán</a></li>
            <li class="nav-item"><a class="nav-link menucha" href="timkiem.html">Nhà đất cho thuê</a></li>
            <li class="nav-item"><a class="nav-link menucha" href="timkiem.html">Dự án</a></li>
            <li class="nav-item"><a class="nav-link menucha" href="timkiem.html">Chung cư</a></li>
            <li class="nav-item"><a class="nav-link menucha" href="baiviet.html">Tin tức</a></li>
        </ul>
        <div class="d-flexs">
            ${tk}
        </div>
        <div class="d-flexs">
            <button onclick="window.location.href='dangtin.html'" class="btndangtinmoi">Đăng tin</button>
        </div>
        </div>
    </nav>`
    document.getElementById("header").innerHTML = menu
    loadDanhMucMenu();
    loadFooter();
}

function loadFooter(){
    var footer =
    `<section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    <div class="me-5 d-none d-lg-block">
      <span></span>
    </div>
    <div>
      <a href="" class="me-4 text-reset"><i class="fab fa-facebook-f"></i></a>
      <a href="" class="me-4 text-reset"><i class="fab fa-twitter"></i></a>
      <a href="" class="me-4 text-reset"><i class="fab fa-google"></i></a>
      <a href="" class="me-4 text-reset"><i class="fab fa-instagram"></i></a>
      <a href="" class="me-4 text-reset"><i class="fab fa-linkedin"></i></a>
      <a href="" class="me-4 text-reset"><i class="fab fa-github"></i></a>
    </div>
  </section>
  <section class="">
    <div class="container text-center text-md-start mt-5">
      <div class="row mt-3">
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <img src="image/logo.png" alt=""><br><br>
          <p>CÔNG TY CỔ PHẦN TÀI KIÊN SINH LONG</p>
          <p><i class="fa fa-map-marker"></i> Hà Nội</p>
          <p><i class="fa fa-phone"></i> 0999999999</p>
        </div>
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 class="text-uppercase fw-bold mb-4">Hướng dẫn</h6>
          <p><a href="#!" class="text-reset">Về chúng tôi</a></p>
          <p><a href="#!" class="text-reset">Báo giá & hỗ trợ</a></p>
          <p><a href="#!" class="text-reset">Câu hỏi thường gặp</a></p>
          <p><a href="#!" class="text-reset">Góp ý & báo lỗi</a></p>
        </div>
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 class="text-uppercase fw-bold mb-4">Quy định</h6>
          <p><a href="#!" class="text-reset">Quy định đăng tin</a></p>
          <p><a href="#!" class="text-reset">Quy chế hoạt động</a></p>
          <p><a href="#!" class="text-reset">Điều khiển thỏa thuận</a></p>
          <p><a href="#!" class="text-reset">Chính sách bảo mật</a></p>
          <p><a href="#!" class="text-reset">Giải quyết khiếu nại</a></p>
        </div>
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 class="text-uppercase fw-bold mb-4">ĐĂNG KÝ NHẬN TIN</h6>
          <div class="formlienhe">
              <input type="text" class="form-control" placeholder="Nhập email của bạn">
              <button class="sendem"><i class="fa fa-send"></i></button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
    © 2024 Copyright:
    <a class="text-reset fw-bold" href="https://mdbootstrap.com/">Kiên Sinh Tài Long</a>
  </div>`
    document.getElementById("footer").innerHTML = footer;
}

async function loadNavbar(){
  checkroleUser();
  var navbar =
    `<div class="thongtintaikhoan">
    <img src="image/user.jpg" id="avatartaikhoan" class="usertaikhoan">
    <span class="usernametaikhoan" id="usernametaikhoan">Kiên Sinh Long Tài</span>
    <div class="chitiettttaikhoan">
        <span class="sodutk">Số dư: <span class="tongsodu" id="tongsodu">500.000.000.000đ</span></span>
        <span class="sodutk">Tin đăng: <span class="tongsodu" id="sotindang">13 tin</span></span>
        <span class="sodutk">Mã TK: <span class="tongsodu" id="mataikhoan">KSTL</span></span>
        <button class="btnnaptien" onclick="window.location.href='naptien.html'">Nạp tiền</button>
    </div>
  </div>
  <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start">
    <li>
        <a href="#submenu3" data-bs-toggle="collapse" class="nav-link">
            <i class="fa fa-list"></i> Quản lý tin đăng </a>
        <ul class="collapse flex-column" id="submenu3" data-bs-parent="#menu">
            <li><a href="tincuatoi.html" class="nav-link"> Tin đăng</a></li>
            <li><a href="yeuthich.html" class="nav-link"> Tin yêu thích</a></li>
            <li><a href="dangtin.html" class="nav-link"> Đăng tin</a></li>
        </ul>
    </li>
    <li>
        <a href="#lichsugd" data-bs-toggle="collapse" class="nav-link">
            <i class="fa fa-history"></i> Lịch sử giao dịch</a>
        <ul class="collapse flex-column" id="lichsugd" data-bs-parent="#lichsugd">
            <li><a href="lichsunap.html" class="nav-link"> Lịch sử nạp</a></li>
            <li><a href="lichsutru.html" class="nav-link"> Lịch sử trừ tiền</a></li>
        </ul>
    </li>
    <li>
        <a href="#taikhoan" data-bs-toggle="collapse" class="nav-link">
            <i class="fa fa-user"></i> Tài khoản</a>
        <ul class="collapse flex-column" id="taikhoan" data-bs-parent="#taikhoan">
            <li><a href="taikhoan.html" class="nav-link"> Tài khoản</a></li>
            <li><a href="doimatkhau.html" class="nav-link"> Đổi mật khẩu</a></li>
            <li><a href="#" onclick="dangXuat()" class="nav-link"> Đăng xuất</a></li>
        </ul>
    </li>
    <li><a href="baogia.html" class="nav-link"><i class="fa fa-money"></i> Báo giá</a></li>
    <li><a href="huongdan.html" class="nav-link"><i class="fa fa-newspaper"></i> Hướng dẫn</a></li>
  </ul>`
  document.getElementById("navbartaikhoan").innerHTML = navbar
  var user = await loadThongTinTaiKhoan();
  document.getElementById("tongsodu").innerHTML = formatmoney(user.amount)
  document.getElementById("mataikhoan").innerHTML = user.id;
  document.getElementById("usernametaikhoan").innerHTML = user.fullname;
  document.getElementById("usernametaikhoan").innerHTML = user.fullname;
  if(user.avatar != null && user.avatar != ""){
    document.getElementById("avatartaikhoan").src = user.avatar;
  }
  else{
    document.getElementById("avatartaikhoan").src = 'image/user.jpg';
  }
  soLuongBaiDangByUser();
}

async function dangXuat(){
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  window.location.replace("dangnhap.html")
}

async function checkroleUser(){
  var token = localStorage.getItem("token");
  var url = 'http://localhost:8080/api/user/check-role-user';
  const response = await fetch(url, {
      method: 'GET',
      headers: new Headers({
          'Authorization': 'Bearer ' + token
      })
  });
  if(response.status > 300){
      window.location.replace('dangnhap.html')
  }
}

function formatmoney(money) {
  try {
    const VND = new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    });
    var mn = VND.format(money);
    if(isNaN(mn)){
      return mn;
    }
    else{
      return money
    }
  } catch (error) {
    return money
  }
}

async function loadThongTinTaiKhoan(){
  var urlAccount = 'http://localhost:8080/api/all/user-dang-nhap';
  const res = await fetch(urlAccount, {
      method: 'GET',
      headers: new Headers({
          'Authorization': 'Bearer '+token
      })
  });
  var user = await res.json();
  return user;
}

async function soLuongBaiDangByUser(){
  var urlAccount = 'http://localhost:8080/api/user/soluongbds';
  const res = await fetch(urlAccount, {
      method: 'GET',
      headers: new Headers({
          'Authorization': 'Bearer '+token
      })
  });
  var soBaiDang = await res.text();
  document.getElementById("sotindang").innerHTML = soBaiDang + " tin";
}

function formatPrice(price){
  if(price == 0){
    return "Giá thỏa thuận";
  }
  if(price.toString().length <= 9){
      return price / 1000000 + " triệu";
  }
  if(price.toString().length > 9){
      return price / 1000000000 + " tỉ";
  }
}


async function loadDanhMucMenu() {
  var url = 'http://localhost:8080/api/public/allcategory';
  const response = await fetch(url, {
      method: 'GET', headers: new Headers({ })
  });
  var list = await response.json();
  var main = '';
  for (i = 0; i < list.length; i++) {
      main += `<li class="nav-item"><a class="nav-link menucha" href="timkiem.html?tinh=-1&search=&mucgia=0-100000000000000&dientich=0-1000000&sophongngu=1-1000&danhmuc=${list[i].id}">${list[i].name}</a></li>`
  }
  main += `<li class="nav-item"><a class="nav-link menucha" href="baiviet.html">Tin tức</a></li>`
  document.getElementById("listitemmenu").innerHTML = main
}

function formatPriceLT(price){
  if(price == 0){
    return "Giá thỏa thuận";
  }
  if(price.length <= 9){
      var num = price / 1000000
      num = num.toFixed(1)
      return num + " triệu";
  }
  if(price. length >9){
      var num = price / 1000000000
      num = num.toFixed(1)
      return num  + " tỉ";
  }
}

function copyUrl(){
  let url = document.location.href

navigator.clipboard.writeText(url).then(function() {
    console.log('Copied!');
}, function() {
    console.log('Copy error')
});
  toastr.success("Đã copy url")
}