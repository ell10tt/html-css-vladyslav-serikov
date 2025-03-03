document.addEventListener('DOMContentLoaded', () => {
    const quantityInputs = {
      quantityInput1: document.querySelector('.quantity__input1'),
      quantityInput2: document.querySelector('.quantity__input2'),
      quantityInput3: document.querySelector('.quantity__input3')
    };
  
    const priceBlocks = {
      priceBlock1: { element: document.querySelector('.price__block1'), price: 49.99 },
      priceBlock2: { element: document.querySelector('.price__block2'), price: 49.99 },
      priceBlock3: { element: document.querySelector('.price__block3'), price: 60.99 }
    };
  
    Object.keys(quantityInputs).forEach((key, index) => {
      quantityInputs[key].addEventListener('input', () => {
        const quantity = parseInt(quantityInputs[key].value);
        const priceKey = `priceBlock${index + 1}`;
        const totalPrice = (quantity * priceBlocks[priceKey].price).toFixed(2);
        priceBlocks[priceKey].element.textContent = `${totalPrice}$`;
      });
    });
  });
  