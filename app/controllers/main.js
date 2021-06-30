var service = new NguoiDungServices();

function renderUser(list) {
  return list.reduce((contentHTML, item) => {
    return (contentHTML += `
    <div class="col-6 col-md-4 col-lg-3">
        <div class="card cardTeam">
            <div class="img-box">
                <img
                src="./../../assets/images/${item.hinhAnh}"
                class="card-img-top"
                alt="..."/>
            </div>
    
            <div class="card-body">
                <div class="d-flex flex-column align-items-center">
                    <div>
                        <h1 class="text-center">
                            ${item.ngonNgu}
                        </h1>
                        <h3 class="text-center">
                            ${item.hoTen}
                        </h3>
                        <p class="text-center">
                            ${item.moTa}
                        </p>
                    </div>                                
                </div>                            
            </div>
        </div>                   
    </div> 
    `);
  }, "");
}

function getData() {
  service
    .getListUserApi()
    .then((result) => {
      let userArr = [];

      result.data.forEach((item) => {
        if (item.loaiND === "GV") {
          userArr.push(item);
        }
      });
      document.getElementById("teamList").innerHTML = renderUser(userArr);
    })
    .catch((error) => {
      console.log(error);
    });
}

getData();
