import { useState } from 'react';

const useInput = initValue => {
  const [value, setValue] = useState(initValue);

  const onChangeValue = e => {
    setValue(e.target.value);
  };

  const resetValue = () => {
    setValue(initValue);
  };

  const replaceValue = value => {
    setValue(value);
  };

  return [value, onChangeValue, resetValue, replaceValue];
};

export default useInput;
