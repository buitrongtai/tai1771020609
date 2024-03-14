var token = localStorage.getItem("token");
async function loadAllUser() {
    $('#example').DataTable().destroy();
    var role = document.getElementById("allrole").value
    var url = 'http://localhost:8080/api/admin/getUserByRole';
    if(role != ""){
        url = 'http://localhost:8080/api/admin/getUserByRole?role='+role;
    }
    const response = await fetch(url, {
        method: 'GET',
        headers: new Headers({
            'Authorization': 'Bearer ' + token
        })
    });
    var list = await response.json();
    console.log(list)
    var main = '';
    var activebtn = 'btn btn-primary'
    var activename = 'khóa'
    var activeicon = 'fa fa-lock'
    var type = 1;
    for (i = 0; i < list.length; i++) {
        var locks = ``;
        if(list[i].actived == 0){
            locks = `<a onclick="lockOrUnlock(${list[i].id},0)" class="btn btn-danger"><i class="fa fa-unlock"></i> mở khóa</a>`
        }
        else{
            locks = `<a onclick="lockOrUnlock(${list[i].id},1)" class="btn btn-primary"><i class="fa fa-lock"></i> khóa</a>`
        }
        if(list[i].authorities.name == 'ROLE_ADMIN'){
            locks = ''
        }
        var phone = list[i].phone == null ? "" : list[i].phone
        var fullname = list[i].fullname == null ? "" : list[i].fullname
        main += `<tr>
                    <td>${list[i].id}</td>
                    <td>${list[i].username}</td>
                    <td>${fullname}</td>
                    <td>${phone}</td>
                    <td>${list[i].createdDate}</td>
                    <td>${list[i].authorities.name}</td>
                    <td>${locks}</td>
                </tr>`
    }
    document.getElementById("listuser").innerHTML = main
    $('#example').DataTable();
    offComplete();
}


async function lockOrUnlock(id, type) {
    var url = 'http://localhost:8080/api/admin/activeUser?id=' + id;
    const response = await fetch(url, {
        method: 'POST',
        headers: new Headers({
            'Authorization': 'Bearer ' + token
        })
    });
    if (response.status < 300) {
        var mess = '';
        if(type == 1){
            mess = 'Khóa thành công'
        }
        else{
            mess = 'Mở khóa thành công'
        }
        swal({
            title: "Thông báo", 
            text: mess, 
            type: "success"
          },
        function(){ 
            window.location.reload();
        });
    }
    else {
        swal({
            title: "Thông báo", 
            text: "hành động thất bại", 
            type: "error"
          },
        function(){ 
            window.location.reload();
        });
    }
}

async function addtk() {
    var url = 'http://localhost:8080/api/admin/addaccount'
    var email = document.getElementById("email").value
    var password = document.getElementById("pass").value
    var fullname = document.getElementById("fullname").value
    var phone = document.getElementById("phone").value
    var repassword = document.getElementById("repass").value
    var user = {
        "username": email,
        "fullname": fullname,
        "phone": phone,
        "password": password,
        "authorities": {
            "name":"ROLE_ADMIN"
        }
    }
    if(password != repassword){
        alert("Mật khẩu không trùng khớp")
        return;
    }
    if(password === "" || repassword === ""){
        alert("mật khẩu không được để trống!")
        return;
    }
    const res = await fetch(url, {
        method: 'POST',
        headers: new Headers({
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(user)
    });
    if (res.status < 300) {
        swal({
                title: "Thông báo",
                text: "Tạo tài khoản thành công!",
                type: "success"
            },
            function() {
                window.location.reload();
            });
    }
    if (res.status == exceptionCode) {
        var result = await res.json();
        toastr.warning(result.defaultMessage);
    }
}