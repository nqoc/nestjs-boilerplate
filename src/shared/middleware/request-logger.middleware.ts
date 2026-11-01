import { ProjectLogger } from '@core/loggers'; // dung de log cac request den server, bao gom method, url va body cua request
import { Request, Response } from 'express'; // import cac thu vien can thiet de tao middleware trong NestJS
import { NextFunction } from 'express';

export const requestLoggerMiddleware = (
  req: Request, // bao gom method, url va body cua request den server, dung de log cac request den server de phan tich va giai quyet su co
  res: Response, // bao gom cac thong tin ve response tu server
  next: NextFunction,
) => {
  const logger = new ProjectLogger('RequestLoggerMiddleware'); // logger la mot class dung de log cac request den server, bao gom method, url va body cua request
  const { method, url, body } = req;
  logger.info(`Request: ${method} ${url} ${JSON.stringify(body)}`);
  next();
};

// requestLoggerMiddleware la mot middleware trong NestJS, dung de log cac request den server.

// cai nay la trung gian de log cac request den server, bao gom method, url va body cua request
// giua http va application. Dung de check xem bearer token co hop le hay khong, va log cac request den server de phan tich va giai quyet su co.
// xong r moi tiep tuc
