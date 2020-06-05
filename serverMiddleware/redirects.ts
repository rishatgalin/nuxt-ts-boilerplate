import { ServerMiddleware } from '@nuxt/types';

const redirectsMiddleware: ServerMiddleware = function (req, res, next) {
  let fullpath = `https://${req.headers['host']}${req.url}`;
  if (fullpath.includes('www.')) {
    const redirectTo = fullpath.replace('www.', '');
    res.writeHead(301, { Location: redirectTo });
    res.end();
  } else next();
}

export default redirectsMiddleware;