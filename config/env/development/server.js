module.exports = ({ env }) => ({
  url: env("RENDER_EXTERNAL_URL"),
  keys: env.array('APP_KEYS')
});
