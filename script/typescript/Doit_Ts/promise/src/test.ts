import { rejects } from "assert";
import { NONAME } from "dns";
import { readFile,readFileSync } from "fs";

// /**
//  * 동기방식 read
//  */
// console.log(`read package.json`);
// const buffer:Buffer = readFileSync('./package.json')
// console.log(buffer.toString());


// /**
//  * 비동기
//  */

// readFile('./package.json',(err,buf) =>{
//     console.log(`read`);
//     console.log(buf.toString());
// } )


// // Promise와 async/await 구문을 사용한 예
// const readFilePromise = (filename: string): Promise<string> => new Promise<string>((resolve, reject) => {
//     readFile(filename, (error: Error, buffer: Buffer) => {
//         if (error)
//             reject(error);
//         else
//             resolve(buffer.toString());
//         return
//      }
//     );
// });

// (async () => {
//     const content = await readFilePromise('./package.json');
//     console.log('read package.json using Promise and async/await...');
//     console.log(content);
// })()

// Promise.resolve(readFile('./package.json',(err,buf) =>{
//     console.log(`read`);
//     console.log(buf.toString());
// } )).then(value => console.log(value))

const readFilePromise = (filename: string): Promise<string> =>
  new Promise<string>(
    (resolve: (value: string) => void, reject: (error: any) => void) => {
      readFile(filename, (err: any, buffer: Buffer) => {
        if (err) reject(err);
        else resolve(buffer.toString());
      });
    }
  );