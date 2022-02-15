const calculator = (price = 100) => {
    const calcBlock = document.querySelector("#calc");
    const calcTypeMat = document.querySelector("#calc-type-material");
    const calcType = document.querySelector("#calc-type");
    const calcSquare = document.querySelector("#calc-input");
    const total = document.querySelector("#calc-total");
  
    const countCalculator = () => {
      const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
      const calcTypeMatValue = +calcTypeMat.options[calcTypeMat.selectedIndex].value;
      const calcSquareValue = calcSquare.value;
  
      let totalValue = 0;
  
      if (calcType.value && calcTypeMatValue && calcSquare.value) {
        totalValue = price * calcTypeValue * calcTypeMatValue * calcSquareValue;
      } else {
        totalValue = 0;
      }
      
      total.value = totalValue;
    };
  
    calcBlock.addEventListener("input", (e) => {
      if (
        e.target === calcType ||
        e.target === calcTypeMat ||
        e.target === calcSquare
      ) {
        countCalculator();
      }
    });
  };
  
  export default calculator;