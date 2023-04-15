import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})

export class ArticlesService {
  constructor(private http: HttpClient){}
  articles$: Observable<Article[]> = this.getAllArticles();
  getAllArticles(): Observable<Article[]>{
    return this.http.get<any>('https://portfolio.accesdenied.net/api/index.php').pipe(
      map(response => response.article),
    );
  }
};
