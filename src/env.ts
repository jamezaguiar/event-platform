type envType = {
  GRAPHCMS_URL: string;
};

const env: envType = {
  GRAPHCMS_URL: import.meta.env.VITE_GRAPHCMS_URL,
};

export { env };
