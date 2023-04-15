import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../models/article.model';
import { ArticlesService } from '../services/articles.service';

@Component({
  selector: 'app-page-articles',
  templateUrl: './page-articles.component.html',
  styleUrls: ['./page-articles.component.scss']
})
export class PageArticlesComponent implements OnInit {
  articles$!: Observable<Article[]>;
  constructor(private articlesService: ArticlesService){}
  ngOnInit(): void {
      this.articles$ = this.articlesService.getAllArticles();
  }
}
