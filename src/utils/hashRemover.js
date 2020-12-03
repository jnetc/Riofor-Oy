export const hashRemoveHandler = () => {
  const { hash, pathname } = window.location;
  if (!hash) {
    return;
  }
  window.location.assign(pathname);
};
