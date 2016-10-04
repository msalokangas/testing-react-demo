import superagent from 'superagent';
import config from '../config';
import Promise from 'bluebird';

export function formatUrl(path) {
  const adjustedPath = path[0] !== '/' ? `/${path}` : path;
  return config.baseUrl + adjustedPath;
}

export default function apiCall(options) {
  return new Promise((resolve, reject, onCancel) => {
    const { method, path, params, data, fields, attachment, responseType } = options;
    const request = superagent[method](formatUrl(path));

    if (params) {
      request.query(params);
    }

    // request.set('Authorization', '');

    if (data) {
      request.send(data);
    }

    if (fields) {
      fields.forEach(f => request.field(f[0], f[1]));
    }

    if (attachment) {
      request.attach(attachment.key, attachment.file, attachment.file.name);
    }

    if (responseType) {
      request.responseType(responseType);
    }

    request.end((err, response) => {
      return err ? reject(response.body || err) : resolve(response.body);
    });

    onCancel(() => {
      request.abort();
    });
  });
}
