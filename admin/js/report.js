
async function loadReport(id) {
    $('#examplephanhoi').DataTable().destroy();
    var url = 'http://localhost:8080/api/admin/report-by-bdsId?id='+id;
    const response = await fetch(url, {
        method: 'GET',
        headers: new Headers({
            'Authorization': 'Bearer ' + token
        })
    });
    var list = await response.json();
    var main = '';
    for (i = 0; i < list.length; i++) {
        main += `<tr>
                    <td>${list[i].id}</td>
                    <td>${list[i].createdDate}</td>
                    <td>${list[i].fullName}</td>
                    <td>${list[i].email}</td>
                    <td>${list[i].phone}</td>
                    <td>${list[i].content}</td>
                    <td>${list[i].reason}</td>
                </tr>`
    }
    document.getElementById("listreport").innerHTML = main
    $('#examplephanhoi').DataTable();
}