// 동기와 비동기 API

import { readFileSync, readFile } from "fs";

// 동기 방식으로 읽기
console.log('read package.json using synchronous api...')
const buffer: Buffer = readFileSync('./package.json')
console.log(buffer.toString())

// 비동기방식으로 읽기
readFile('./package.json', (error, buffer) => {
    console.log('read package.json using asynchronous api...')
    console.log(buffer.toString())
})

// promise 와 async/await 구문으로 읽기
const readFilePromise = (filename: string): Promise<string> =>
    new Promise<string>((resolve, reject) => {
        readFile(filename, (error, buffer) => {
            if (error) {
                reject(error)
            } else {
                resolve(buffer.toString())
            }
        })
    });

(async () => {
    const content: string = await readFilePromise('./package.json')
    console.log('read package.json using Promise and async/await...')
    console.log(content)
})()