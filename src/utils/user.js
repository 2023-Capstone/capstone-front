const infoProvider = {
  get: () => {
    return JSON.parse(localStorage.getItem('info'));
  },
  set: info => {
    localStorage.setItem('info', JSON.stringify(info));
  },
  remove: () => {
    localStorage.removeItem('info');
  },
};

export { infoProvider };
