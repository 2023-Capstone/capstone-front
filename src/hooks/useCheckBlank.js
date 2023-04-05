const useCheckBlack = () => {
  const isBlank = text => {
    const result = text.split(' ').join('');
    return isNull(result);
  };
  const isNull = text => {
    return text.length === 0;
  };

  return { isBlank, isNull };
};

export default useCheckBlack;
