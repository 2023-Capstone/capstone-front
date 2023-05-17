import { useState } from 'react';

const useInput = initValue => {
  const [value, setValue] = useState(initValue);

  const onChangeValue = e => {
    setValue(e.target.value);
  };

  const resetValue = () => {
    setValue(initValue);
  };

<<<<<<< HEAD
  return [value, onChangeValue, resetValue];
=======
  return { value, onChangeValue, resetValue, dangerouslySetValue: setValue };
>>>>>>> 412195e5a32154739595e528896021f7b2e6b5d2
};

export default useInput;
