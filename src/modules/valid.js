const valid = () => {
    const yourName = document.querySelectorAll('[name="fio"]');
    const yourPhone = document.querySelectorAll('[name="phone"]');
    const calcBlock = document.getElementById("calc");
    const calcSquareInput = document.getElementById("calc-input");

      
      yourName.forEach(yourName => {
        yourName.addEventListener("input", (e) => {
            e.preventDefault();
            e.target.value = e.target.value.replace(/[^A-Z-a-z-А-Я-а-я\s]+$/i, "");
          });
      });
      
      yourPhone.forEach(yourPhone => {
            yourPhone.addEventListener("input", (e) => {
                e.preventDefault();
                e.target.value = e.target.value.replace(/([^0-9\+])/, "");
            });
        });

        console.log(calcBlock)
    if (calcBlock !== null) {
        calcBlock.addEventListener("input", (e) => {
          e.preventDefault();
          calcSquareInput.value = calcSquareInput.value.replace(/\D+/, "");
        });
    }
  };
  
  export default valid;
