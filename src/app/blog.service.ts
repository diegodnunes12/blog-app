import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private httpClient: HttpClient) { }

  private URL = `http://localhost:3000/`;

  getAllContents(path: String){
    return this.httpClient.get(`${this.URL}${path}`);
  }
}
