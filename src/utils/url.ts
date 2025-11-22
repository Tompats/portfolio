const RAW_BASE = import.meta.env.BASE_URL ?? '/';
const normalizedBase = RAW_BASE === '/' ? '' : RAW_BASE.replace(/\/$/, '');

export const basePath = normalizedBase;

export const withBase = (path = '/') => {
  const normalizedPath = path === '' ? '/' : path.startsWith('/') ? path : `/${path}`;
  if (!normalizedBase) {
    return normalizedPath === '/' ? '/' : normalizedPath;
  }
  if (normalizedPath === '/' || normalizedPath === '') {
    return normalizedBase || '/';
  }
  return `${normalizedBase}${normalizedPath}`;
};
