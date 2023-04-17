import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Article } from '../models/article.model';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class ArticlesService {
  apiEndPoint! : string;
  uploadFolder! : string;
  constructor(private http: HttpClient){
    this.apiEndPoint = environment.apiEndPoint;
    this.uploadFolder = environment.uploadFolder;
  }
  articles$: Observable<Article[]> = this.getAllArticles();
  getAllArticles(): Observable<Article[]>{
    return this.http.get<any>(`${this.apiEndPoint}index.php`).pipe(
      map(response => response.article),
    );
  }
  getByIdArticle(articleId: string): Observable<Article | undefined>{
    return this.getAllArticles().pipe(
      map(obj => obj.find(obj => obj.article_id === articleId)),
    );
  }
};
