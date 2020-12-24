// fetch 최대 대기 시간을 정해준다. default 8초.
export const fetchWithTimeout = async (resource, options) => {
  const { timeout = 8000 } = options;

  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  const response = await fetch(resource, {
    ...options,
    signal: controller.signal,
  });
  clearTimeout(id);

  return response;
};
