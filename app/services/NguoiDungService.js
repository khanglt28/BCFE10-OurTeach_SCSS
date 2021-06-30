function NguoiDungServices() {
  this.listUser = [];

  // Lấy data từ server kéo về client
  this.getListUserApi = function () {
    return axios({
      url: "https://60bc9ad2b8ab37001759f4d8.mockapi.io/api/users",
      method: "GET",
    });
  };
}
