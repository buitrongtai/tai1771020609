var token = localStorage.getItem("token");


async function loadAllBds() {
    $('#example').DataTable().destroy();
    var trangthai = document.getElementById("trangthailist").value
    var from = document.getElementById("from").value
    var to = document.getElementById("to").value
    var url = 'http://localhost:8080/api/admin/find-real-estate-by-admin?tt=1';
    if(trangthai != ""){
        url += '&trangthai='+trangthai;
    }
    if(from != "" && to != ""){
        url += '&from='+from+'&to='+to;
    }
    const response = await fetch(url, {
        method: 'GET',
        headers: new Headers({
            'Authorization': 'Bearer ' + token
        })
    });
    var list = await response.json();
    console.log(list);
    var main = '';
    for (i = 0; i < list.length; i++) {
        main += `<tr>
                    <td>${list[i].id}</td>
                    <td>${list[i].user.username}</td>
                    <td><img src="${list[i].image}" class="anhphongqltin"></td>
                    <td>${list[i].title}</td>
                    <td>${formatmoney(list[i].price)}</td>
                    <td>${list[i].createdTime}<br>${list[i].createdDate}</td>
                    <td>
                        <select onchange="capNhatTrangThai(this, ${list[i].id})" class="form-control">
                            <option value="DANG_HIEN_THI" ${list[i].status == "DANG_HIEN_THI" ? "selected" : ""}>Đang hiển thị</option>
                            <option value="DANG_CHO_DUYET" ${list[i].status == "DANG_CHO_DUYET" ? "selected" : ""}>Đang chờ duyệt</option>
                            <option value="VI_PHAM" ${list[i].status == "VI_PHAM" ? "selected" : ""}>Vi phạm</option>
                        </select>
                    </td>
                    <td>
                        <p onclick="loadChiTiet(${list[i].id})" data-bs-toggle="modal" data-bs-target="#chitiet" class="poiter">Xem chi tiết</p>
                        <p onclick="loadReport(${list[i].id})" data-bs-toggle="modal" data-bs-target="#phanhoi" class="poiter">Xem phản hồi</p>
                    </td>
                    <td>
                        <label class="checkbox-custom">
                        <input onclick="xacThucPhong(this, ${list[i].id})" ${list[i].accuracy == false?"":"checked"} type="checkbox">
                            <span class="checkmark-checkbox"></span>
                        </label>
                    </td>
                </tr>`
    }
    document.getElementById("listbds").innerHTML = main
    $('#example').DataTable();
}


async function loadChiTiet(id) {
    var urladd = 'http://localhost:8080/api/admin/chi-tiet-bds?id='+id;
    const response = await fetch(urladd, {
      method: 'GET',
      headers: new Headers({
        'Authorization': 'Bearer ' + token
      })
    });
    var obs = await response.json();
    document.getElementById("diachi").innerHTML = obs.wards.name+", "+obs.wards.districts.name+", "+ obs.wards.districts.province.name
    document.getElementById("loaitintd").innerHTML = obs.category.name
    document.getElementById("dtich").innerHTML = obs.acreage + ` m<sup>2</sup>`
    document.getElementById("tennguoidang").innerHTML = obs.user.fullname
    document.getElementById("ngaydang").innerHTML = obs.createdTime +`<br>`+obs.createdDate
    document.getElementById("giatien").innerHTML = formatmoney(obs.price)
    document.getElementById("motabds").innerHTML = obs.description
    document.getElementById("phaply").innerHTML = obs.juridical
    document.getElementById("sophong").innerHTML = obs.roomNumber
    document.getElementById("sotoilet").innerHTML = obs.toiletNumber
    var listimg = obs.realEstateImages
    var main ='';
    for(i=0; i<listimg.length; i++){
        var act = '';
        if(i==0){
            act = 'active'
        }
        main += `<div class="carousel-item ${act}">
        <img src="${listimg[i].image}" class="anhchitiets">
      </div>`
    }
    document.getElementById("listanh").innerHTML = main
}

async function capNhatTrangThai(e,id) {
    var trangthai = e.value
    var url = 'http://localhost:8080/api/admin/cap-nhat-trang-thai-realestate?id=' + id+'&trangthai='+trangthai;
    const response = await fetch(url, {
        method: 'POST',
        headers: new Headers({
            'Authorization': 'Bearer ' + token
        })
    });
    if (response.status < 300) {
        toastr.success("Cập nhật thành công");
    }
    else{
        toastr.error("Cập nhật thất bại");
    }
}

async function xacThucPhong(e,id) {
    var url = 'http://localhost:8080/api/admin/xacthuc-bds?id=' + id
    const response = await fetch(url, {
        method: 'POST',
        headers: new Headers({
            'Authorization': 'Bearer ' + token
        })
    });
    if (response.status < 300) {
        if(e.checked == true){
            toastr.success("Xác thực thành công");
        }
        else{
            toastr.success("Hủy xác thực thành công");
        }
    }
    else{
        toastr.error("Thất bại");
    }
}