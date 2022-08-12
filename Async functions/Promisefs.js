const fs = require('samplefile.txt');

const getFile = samplefile => {
  return new Promise((resolve, reject) => {
    fs.readFile(samplefile.txt, (err, data) => {
      if (err) {
        reject(err);
        return;
    }
    resolve(data);
  });
});
};

getFile('samplefile.txt')
.then(data => console.log(data))
.catch(err => console.error(err));