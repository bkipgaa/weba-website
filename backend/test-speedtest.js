const speedTest = require('speedtest-net');

const runSpeedTest = () => {
  const test = speedTest({ acceptLicense: true });

  test.on('data', data => {
    console.log('Download speed:', data.download.bandwidth / 125000, 'Mbps');
    console.log('Upload speed:', data.upload.bandwidth / 125000, 'Mbps');
    console.log('Latency:', data.ping.latency, 'ms');
  });

  test.on('error', err => {
    console.error('Speed test failed: ', err);
  });
};

runSpeedTest();
