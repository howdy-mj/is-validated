const isNumber = (target: string | number) => {
  const regExp = /^\d+$/;

  if (typeof target === 'number') {
    return regExp.test(target.toString());
  }
  return regExp.test(target);
};

export default isNumber;
