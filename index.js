const http = require('http');
const path = require('path');
const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

// create server
const server = http.createServer(async (req, res) => {
  // build file path dynamic
  let filePath = path.join(
    __dirname,
    'public',
    req.url === '/' ? 'index.html' : req.url
  );

  // extention of file
  const extname = path.extname(filePath);

  // content-type
  let contentType = 'text/html';

  // dynamic content-type
  // eslint-disable-next-line default-case
  switch (extname) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.jpg':
      contentType = 'image/jpg';
      break;
  }

  // Check if contentType is text/html but no .html file extension
  if (contentType === 'text/html' && extname === '') filePath += '.html';

  try {
    const content = await readFile(filePath);
    // success respond
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(content, 'utf8');
  } catch (err) {
    if (err.code === 'ENOENT') {
      // Page not found
      fs.readFile(
        path.join(__dirname, 'public', '404.html'),
        // eslint-disable-next-line no-shadow
        (err, content) => {
          res.writeHead(404, { 'Content-Type': 'text/html' });
          res.end(content, 'utf8');
        }
      );
    } else {
      // server error
      res.writeHead(500);
      res.end('<h2> server error </h2>');
    }
  }

  // Read file
  // fs.readFile(filePath, (err, content) => {
  //   if (err) {
  //     if (err.code === 'ENOENT') {
  //       // Page not found
  //       fs.readFile(
  //         path.join(__dirname, 'public', '404.html'),
  //         // eslint-disable-next-line no-shadow
  //         (err, content) => {
  //           res.writeHead(404, { 'Content-Type': 'text/html' });
  //           res.end(content, 'utf8');
  //         }
  //       );
  //     } else {
  //       // server error
  //       res.writeHead(500);
  //       res.end('<h2> server error </h2>');
  //     }
  //   } else {
  //     // success respond
  //     res.writeHead(200, { 'Content-Type': contentType });
  //     res.end(content, 'utf8');
  //   }
  // });
});

const PORT = process.env.PORT || 5000;


(async () => {
  await new Promise((res, rej) => {
    server.listen(PORT, (e) => {
      if (e) {
        rej(e);
      } else {
        res();
        console.log(`Server running on port: ${PORT}`);
      }
    });
  });
})();

