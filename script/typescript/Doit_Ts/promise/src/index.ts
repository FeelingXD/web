import { readFilePromise } from "./readfilePromise";


const readFilesAll = async (filenames: string[]) => {
    // 2. Promise.all 메서드를 사용하여 Promise[] 타입 객체를 단일 Promise 객체로 만듬
    // 3. 단일 Promise 객체에 await 구문을 적용하여 resolve 된 결과값 반환
    return await Promise.all(
        // 1. filenames 에 담긴 string[] 타입 배열에 map 메서드를 적용하여 Promise[] 타입 객체로 전환
        filenames.map(filename => readFilePromise(filename))
    )
};

readFilesAll(['./package.json', './tsconfig.json'])
    .then(([packageJson, tsconfigJson]: string[]) => {
        console.log('package.json', packageJson)
        console.log('tsconfig.json', tsconfigJson)
    })
    .catch(err => console.log('error:', err.message));