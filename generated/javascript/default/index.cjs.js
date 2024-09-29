const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'E-commerce-Website',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

