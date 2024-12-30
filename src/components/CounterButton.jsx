import { useState } from 'react';
import Button from '@mui/material/Button';

const CounterButton = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <Button onClick={incrementCount} variant="contained" color="primary">
        Contador: {count}
      </Button>
    </div>
  );
};

export default CounterButton;
