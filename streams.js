const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt');
const writeStream = fs.createWriteStream('./docs/blog5.txt');

// readStream.on('data', (chunk) => {
//     console.log('😀😀😀😀😀😀😀😀😀😀😀😀😀😀  NEW CHUNK 😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀');
//     console.log(chunk.toString());
//     writeStream.write('\n 😀😀😀😀😀😀😀😀😀😀😀😀😀😀NEW CHUNK 😀😀😀😀😀😀😀😀😀😀😀😀😀😀\n');
//     writeStream.write(chunk.toString());

// });

// piping a readstream into a write stream...
readStream.pipe(writeStream);
