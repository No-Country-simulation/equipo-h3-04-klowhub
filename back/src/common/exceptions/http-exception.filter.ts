import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const response = context.getResponse();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    let message = null;

    if (typeof exception.getResponse() === 'string') {
      message = exception.getResponse();
    } else if (typeof exception.getResponse()['message'] === 'string') {
      message = exception.getResponse()['message'];
    } else if (typeof exception.getResponse()['message'] === 'object') {
      message = exception.getResponse()['message'][0];
    } else {
      message = exception.getResponse()['message'];
    }

    //GenericResponse
    let errorResponse = null;

    try {
      message = JSON.parse(message);
    } catch {}

    if (typeof message === 'object') {
      errorResponse = {
        code: status,
        error: exception.name,
        ...message,
      };
    } else {
      errorResponse = {
        code: status,
        error: exception.name,
        message:
          status === 401
            ? message !== undefined && message !== null && message !== ''
              ? message
              : 'Incorrect credentials'
            : message,
      };
    }

    response.status(status).json(errorResponse);
  }
}
