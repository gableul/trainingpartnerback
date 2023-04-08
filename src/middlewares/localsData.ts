import { Request, Response, NextFunction } from "Express";

export function localData(req : any, res : Response, next : NextFunction){
    console.log(req.session)
    res.locals.connected = req.session.connected;
    res.locals.user = req.session.user;
    next()
}