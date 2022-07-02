type envType = {
  GRAPHCMS_URL: string;
  GRAPHCMS_TOKEN: string;
};

const env: envType = {
  GRAPHCMS_URL: import.meta.env.VITE_GRAPHCMS_URL,
  GRAPHCMS_TOKEN: import.meta.env.VITE_GRAPHCMS_TOKEN,
};

export { env };
