export const getBasePath = () => {
  if (process.env.NODE_ENV === 'production') {
    return '/uad-client';
  }
  return '';
};