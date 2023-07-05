export const showLoader = (element, labelCount) => {
  labelCount.style.display = 'none';
  const loader = document.createElement('div');
  loader.classList.add('loader');
  element.appendChild(loader);
};

export const hideLoader = (element, labelCount) => {
  const loader = element.querySelector('.loader');
  if (loader) {
    element.removeChild(loader);
    labelCount.style.display = 'flex';
  }
};