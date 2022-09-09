/* eslint-disable no-param-reassign */
const axios = require('axios');

const api = axios.create({
  transformRequest: [...axios.defaults.transformRequest],
  baseURL: process.env.API_STAR,
  headers: {
    'Access-Control-Allow-Origin': '*',
    origin: 'http://localhost:3000',

  },
});

async function listAll(req, res) {
  const { data } = await api.get('/people', { params: req.query });
  return res.json(data);
}

module.exports = { listAll };
