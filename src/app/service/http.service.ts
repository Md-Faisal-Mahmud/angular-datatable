import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService 
{
  private readonly _hostUrl: string;
  private getURL = (endpoint: string) => this._hostUrl + endpoint;

  constructor(private readonly _http: HttpClient) 
  { 
    this._hostUrl = 'https://localhost:7177'
  }

  public get<T>(endpoint: string): Observable<T>
  {
    return this._http.get<T>(this.getURL(endpoint));
  }

  public post<T>(endpoint: string, requestBody: any = null): Observable<T> 
  {
    let fullURL = this.getURL(endpoint);
    console.log(fullURL);
    return this._http.post<T>(fullURL, requestBody);
  }
}
