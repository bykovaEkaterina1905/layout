const mainData = () => {
  fetch('./db.json')
    // fetch("https://projectdbjson-default-rtdb.firebaseio.com/db.json")
    .then((respone) => {
      return respone.json();
    })
    .then((data) => {
      console.log(data.anime);
    });
};
mainData();
