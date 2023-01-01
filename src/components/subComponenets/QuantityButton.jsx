import { useState } from "react";

const QuantityButton = () => {
  const [quantity, setQuantity] = useState(1);
  const [minus, setMinus] = useState(false);

  
  const MinusQuantityHandle = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      setMinus(true);
    }
  };
  const PlusQuantityHandle = () => {
    setMinus(false);
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  return (
    <>
      <div className="quantity-btn my-2">
        <button
          className="bg-dark text-light"
          onClick={MinusQuantityHandle}
          disabled={minus}
        >
          {"-"}
        </button>

        <input
          type="number"
          value={quantity}
          // onChange={(e) => setQuantity(e.target.value)}
        />
        <button className="bg-dark text-light" onClick={PlusQuantityHandle}>
          {"+"}
        </button>
      </div>
    </>
  );
};

export default QuantityButton;
