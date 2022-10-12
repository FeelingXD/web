import * as express from 'express'
const requestLoggerMiddleware = (req: express.Request,resp: express.Response, 
    next:express.NextFunction)=> {
        console.log(`${req.method} ${req.originalUrl}`);
        const start = new Date().getTime();
        
        resp.on(`finish`, () => {
            const elapse = new Date().getTime() - start;
            console.info(`${req.method} ${req.originalUrl} ${resp.statusCode} ${elapse}ms`)
        });
        next();
    }; 
export { requestLoggerMiddleware }