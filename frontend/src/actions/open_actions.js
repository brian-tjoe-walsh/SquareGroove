export const OPEN_PAGE = 'OPEN_PAGE';
export const CLOSE_PAGE = 'CLOSE_PAGE';
export const OPEN_INFORMATION = 'OPEN_INFORMATION';
export const CLOSE_INFORMATION = 'CLOSE_INFORMATION';

export const openPage = () => {
  return {
    type: OPEN_PAGE,
  };
};

export const closePage = () => {
  return {
    type: CLOSE_PAGE
  };
};