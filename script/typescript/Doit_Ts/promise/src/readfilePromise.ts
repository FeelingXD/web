import { readFile } from "fs";
export const readFilePromise = (filename: string): Promise<string> =>
  new Promise<string>(
    (resolve: (value: string) => void, reject: (error: any) => void) => {
      readFile(filename, (err: any, buffer: Buffer) => {
        if (err) reject(err);
        else resolve(buffer.toString());
      });
    }
  );