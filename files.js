const fs = require('fs');


// read files
// fs.readFile('./docs/blog.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// write / create files

// fs.writeFile('./docs/blog.txt', 'Hi People, I am writing to a text file on my laptop from node', () => {
//     console.log('file was written');

// });

// fs.writeFile('./docs/random.txt', 'Hi ...just creating a random text file from node', () => {
//     console.log('file was written');

// });


// directories
// if (!fs.existsSync('./assets')){
//     fs.mkdir('./assets', (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log('folder created');
//     });
// }

// deleting a directory 

// if (fs.existsSync('./assets2')) {
//     fs.rmdir('./assets2', (err) => {
//         if (err) {
//             console.log(err);
//         }
//         else
//             console.log('folder deleted!')
//     });
// }





// delete files

if (fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('file deleted!');
    });
}