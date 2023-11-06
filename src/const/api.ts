const baseApiUrl = `http://${import.meta.env.VITE_API_HOST}:${import.meta.env.VITE_API_PORT}`;

const requestMode = 'cors'

export {
  baseApiUrl,
  requestMode
}