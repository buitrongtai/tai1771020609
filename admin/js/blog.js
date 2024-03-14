var token = localStorage.getItem("token");

async function loadAllBlog() {
    $('#example').DataTable().destroy();
    var url = 'http://localhost:8080/api/public/allBlog';
    const response = await fetch(url, {
        method: 'GET',
        headers: new Headers({
        })
    });
    var listBlog = await response.json();
    var main = '';
    for (i = 0; i < listBlog.length; i++) {
        main += '<tr>'+
                    '<td>'+listBlog[i].id+'</td>'+
                    '<td><img src="'+listBlog[i].image+'" style="width: 100px;"></td>'+
                    '<td>'+listBlog[i].user.username+'</td>'+
                    '<td>'+listBlog[i].createdDate+'<br>'+listBlog[i].createdTime+'</td>'+
                    '<td>'+listBlog[i].numView+'</td>'+
                    '<td>'+listBlog[i].title+'</td>'+
                    '<td><p class="motatd">'+listBlog[i].description+'</p></td>'+
                    '<td><button onclick="deleteBlog('+listBlog[i].id+')" class="btn btn-danger"><i class="fa fa-trash"></i> Xóa</button></td>'+
                    '<td><a href="addblog.html?id='+listBlog[i].id+'" class="btn btn-success"><i class="fa fa-edit"></i> Sửa</a></td>'+
                '</tr>'
    }
    document.getElementById("listblog").innerHTML = main
    $('#example').DataTable();
}


async function saveBlog() {
    document.getElementById("loading").style.display = 'block'
    var id = window.location.search.split('=')[1];
    var url = 'http://localhost:8080/api/admin/addBlog';


    var tieude = document.getElementById("tieude").value
    var mota = document.getElementById("mota").value
    var content = tinyMCE.get('editor').getContent()

    const filePath = document.getElementById('imagebanner')
    const formData = new FormData()
    formData.append("file", filePath.files[0])
    var urlUpload = 'http://localhost:8080/api/public/upload';
    const res = await fetch(urlUpload, { 
             method: 'POST', 
              headers: new Headers({
             }),
             body: formData
           });
    if(res.status < 300){
        linkimage = await res.text();
    }

    if(tieude == "" || mota == ""){
        alert("dữ liệu không được để trống");return;
    }

    var blog = {
        "id": id,
        "title": tieude,
        "description":mota,
        "image":linkimage,
        "content":content
    }

    const response = await fetch(url, {
        method: 'POST',
        headers: new Headers({
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(blog)
    });
    if(response.status < 300){
        swal({
            title: "Thông báo", 
            text: "thêm/sửa blog thành công!", 
            type: "success"
          },
        function(){ 
            window.location.replace('blog.html')
        });
    }
    else{
        swal({
            title: "Thông báo", 
            text: "thêm/sửa blog thất bại!", 
            type: "error"
          },
        function(){ 
            document.getElementById("loading").style.display = 'none'
        });
    }
    document.getElementById("loading").style.display = 'none'
}

var linkimage = ''
async function loadABlog() {
    var id = window.location.search.split('=')[1];
    if(id != null){
        var url = 'http://localhost:8080/api/public/blogById?id='+id;
        const response = await fetch(url, {
            method: 'GET',
            headers: new Headers({
            })
        });
        var blog = await response.json();
        document.getElementById("tieude").value = blog.title
        document.getElementById("mota").value = blog.description
        document.getElementById("imgblog").src = blog.imageBanner
        linkimage = blog.imageBanner
        await new Promise(r => setTimeout(r, 500));
        tinyMCE.get('editor').setContent(blog.content)

    }
}


async function deleteBlog(id) {
    var con = confirm("Xác nhận xóa bài viết này?");
    if(con == false){
        return;
    }
    var url = 'http://localhost:8080/api/admin/deleteBlog?id=' + id;
    const response = await fetch(url, {
        method: 'DELETE',
        headers: new Headers({
            'Authorization': 'Bearer ' + token
        })
    });
    if (response.status < 300) {
        swal({
            title: "Thông báo", 
            text: "xóa bài viết thành công!", 
            type: "success"
          },
        function(){ 
            window.location.reload();
        });
    }
    else {
        swal({
            title: "Thông báo", 
            text: "không thể xóa bài viết", 
            type: "error"
          },
        function(){ 
            window.location.reload();
        });
    }
}