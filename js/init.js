var listGia = 
[
    {
        price:"0-100000000000000",
        name:"Tất cả khoảng giá"
    },
    {
        price:"0-499999999",
        name:"Dưới 500 triệu"
    },
    {
        price:"500000000-800000000",
        name:"500 đến 800 triệu"
    },
    {
        price:"800000000-1000000000",
        name:"800 triệu đến 1 tỷ"
    },
    {
        price:"1000000000-2000000000",
        name:"1 tỷ đến 2 tỷ"
    },
    {
        price:"2000000000-3000000000",
        name:"2 tỷ đến 3 tỷ"
    },
    {
        price:"3000000000-5000000000",
        name:"3 tỷ đến 5 tỷ"
    },
    {
        price:"5000000000-7000000000",
        name:"5 tỷ đến 7 tỷ"
    },
    {
        price:"7000000000-10000000000",
        name:"7 tỷ đến 10 tỷ"
    },
    {
        price:"10000000000-20000000000",
        name:"10 tỷ đến 20 tỷ"
    },
    {
        price:"20000000000-30000000000",
        name:"20 tỷ đến 30 tỷ"
    },
    {
        price:"30000000000-60000000000",
        name:"30 tỷ đến 60 tỷ"
    },
    {
        price:"60000000000-1000000000000",
        name:"Trên 60 tỷ"
    },
]


var listDienTich = 
[
    {
        dientich:"0-1000000",
        name:"Tất cả diện tích"
    },
    {
        dientich:"0-29",
        name:"Dưới 30 m2"
    },
    {
        dientich:"30-50",
        name:"30 - 50 m2"
    },
    {
        dientich:"50-80",
        name:"50 - 80 m2"
    },
    {
        dientich:"80-100",
        name:"80 - 100 m2"
    },
    {
        dientich:"100-150",
        name:"100 - 150 m2"
    },
    {
        dientich:"150-200",
        name:"150 - 200 m2"
    },
    {
        dientich:"200-250",
        name:"200 - 250 m2"
    },
    {
        dientich:"250-300",
        name:"250 - 300 m2"
    },
    {
        dientich:"300-500",
        name:"300 - 500 m2"
    },
    {
        dientich:"500-500000",
        name:"Trên 500 m2"
    },
]

var listSoPhongNgu = 
[
    {
        sophong:"0-1000",
        name:"Số phòng ngủ"
    },
    {
        sophong:"1-2",
        name:"1 - 2 Phòng"
    },
    {
        sophong:"2-3",
        name:"2 - 3 Phòng"
    },
    {
        sophong:"3-4",
        name:"3 - 4 Phòng"
    },
    {
        sophong:"4-6",
        name:"4 - 6 Phòng"
    },
    {
        sophong:"6-8",
        name:"6 - 8 Phòng"
    },
    {
        sophong:"8-10",
        name:"8 - 10 Phòng"
    },
    {
        sophong:"10-1000",
        name:"Trên 10 Phòng"
    },
    
]

function loadGiaTien(){
    var main = ``;
    for(i=0; i<listGia.length; i++){
        main += `<option value="${listGia[i].price}">${listGia[i].name}</option>`
    }
    document.getElementById("mucgiasearch").innerHTML = main

    var mainDt = ``;
    for(i=0; i<listDienTich.length; i++){
        mainDt += `<option value="${listDienTich[i].dientich}">${listDienTich[i].name}</option>`
    }
    document.getElementById("dientichsearch").innerHTML = mainDt

    var mainSp = ``;
    for(i=0; i<listSoPhongNgu.length; i++){
        mainSp += `<option value="${listSoPhongNgu[i].sophong}">${listSoPhongNgu[i].name}</option>`
    }
    document.getElementById("sophongngusearch").innerHTML = mainSp
}

function loadGiaTienBenPhai(){
    var main = ``;
    for(i=0; i<listGia.length; i++){
        main += `<a href="timkiem.html?tinh=-1&search=&mucgia=${listGia[i].price}&dientich=0-1000000&sophongngu=0-1000">${listGia[i].name}</a>`
    }
    document.getElementById("listgiafilter").innerHTML = main

    var mainDt = ``;
    for(i=0; i<listDienTich.length; i++){
        mainDt += `<a href="timkiem.html?tinh=-1&search=&mucgia=0-100000000000000&dientich=${listDienTich[i].dientich}&sophongngu=0-1000">${listDienTich[i].name}</a>`
    }
    document.getElementById("listdtbenphai").innerHTML = mainDt
}