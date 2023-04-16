import { Component, OnInit } from '@angular/core';
import { Observable, filter, map } from 'rxjs';
import { Article } from '../models/article.model';
import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from '../services/articles.service';

@Component({
  selector: 'app-page-single-article',
  templateUrl: './page-single-article.component.html',
  styleUrls: ['./page-single-article.component.scss']
})
export class PageSingleArticleComponent implements OnInit{
  constructor(
    private articlesService : ArticlesService,
    private route: ActivatedRoute,
  ){}
  theArticle$! : Observable<Article | undefined>
  ngOnInit(): void {
    const articleId: string = this.route.snapshot.params['id'];
    console.log(articleId);
    
    this.theArticle$ = this.articlesService.getByIdArticle(articleId);
  }
}
