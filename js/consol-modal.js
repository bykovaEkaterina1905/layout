const consolModal = () => {
  const modal2 = document.getElementById('search-input');
  //const modal2 = document.querySelector("#search-input");
  modal2.addEventListener('input', () => {
    console.log(modal2.value);
  });
};

consolModal();
