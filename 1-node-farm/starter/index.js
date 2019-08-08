const fs = require('fs');
const http = require('http');
const url = require('url');

/**
 * Files
 *
 */
// Blocking, synchronus way
// const fileInput = fs.readFileSync('./txt/input.txt','utf-8');
// console.log(fileInput);

// const textOut = `${fileInput} I love this avocado!\nCreated on ${Date.now().toLocaleString()}`;
// fs.writeFileSync('./txt/output.txt', textOut);

// Nonblocking, asynchronus way
// const fileInput = fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
//   const fileInput = fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
//     console.log(data2);
//     const fileInput = fs.readFile(`./txt/append.txt`, 'utf-8', (err, data3) => {
//       console.log(data3);

//       fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
//         if (err) console.log(err);
//         console.log('Your file has ben written:');
//         fs.readFile(`./txt/final.txt`, 'utf-8', (err, data4) => {
//           console.log(data4);
//         });
//       });
//     });
//   });
// });
// console.log('Will read file!');

////////////////////////////////////////////////////////////////////
// SERVER
const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === '/' || pathName === '/overview') {
    res.end('This is the overview!');
  } else if (pathName === '/product') {
    res.end('This is the product!');
  } else {
    res.writeHead(404, { 'Content-type': 'text/html' });
    res.end('<h1>Page not found 404!</h1>');
  }
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Listening to requests on port 8000!');
});

// TO-DO: Start watch video 9
