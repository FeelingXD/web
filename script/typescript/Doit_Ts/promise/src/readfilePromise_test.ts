// Promise

import {readFilePromise} from "./readFilePromise";

readFilePromise('./package.json')
    .then((content: string) => {
        console.log(content);   // package.json 내용
        return readFilePromise('./tsconfig.json');
    })
    .then((content: string) => {
        console.log(content);    // tsconfig.json 내용
        return readFilePromise('.'); // catch 에  EISDIR: illegal operation on a directory, read 전달
    })
    .catch((err: Error) => {
        console.log('error:', err.message);
    })
    .finally(() => {
        console.log('종료');
    });