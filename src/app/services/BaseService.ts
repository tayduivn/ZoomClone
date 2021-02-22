import { HttpErrorResponse } from "@angular/common/http";
import { throwError } from "rxjs";

export class BaseService {
  public handleError(error: any) {
    let errorMessage: string = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else if (error.error instanceof HttpErrorResponse) {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    } else if (error instanceof TypeError) {
      errorMessage = `Error: ${error.name}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
  public getServerErrorMessage(error: HttpErrorResponse): string {
    switch (error.status) {
      case 401: {
        return `Not Authorized: ${error.message}`;
      }
      case 404: {
        return `Not Found: ${error.message}`;
      }
      case 403: {
        return `Access Denied: ${error.message}`;
      }
      case 500: {
        return `Internal Server Error: ${error.message}`;
      }
      default: {
        return `Unknown Server Error: ${error.message}`;
      }
    }
  }
}