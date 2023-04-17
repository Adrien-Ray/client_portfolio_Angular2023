import { Component, OnInit } from '@angular/core';
import { Observable, filter, map } from 'rxjs';
import { Article } from '../models/article.model';
import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from '../services/articles.service';
import { environment } from "../../environments/environment";
// import Prism from 'prismjs';

@Component({
  selector: 'app-page-single-article',
  templateUrl: './page-single-article.component.html',
  styleUrls: ['./page-single-article.component.scss']
})
export class PageSingleArticleComponent implements OnInit{
  uploadFolder! : string;
  constructor(
    private articlesService : ArticlesService,
    private route: ActivatedRoute,
  ){
    this.uploadFolder = environment.uploadFolder;
  }
  theArticle$! : Observable<Article | undefined>
  theCorp$! : Observable<string | null | undefined>
  ngOnInit(): void {
    const articleId: string = this.route.snapshot.params['id'];    
    this.theArticle$ = this.articlesService.getByIdArticle(articleId);
    /* this.theCorp$ = this.theArticle$.pipe(
      map(response => response?.article_corps),
      map(response => Prism.highlight(response, Prism.languages.javascript, 'javascript'))
    ) */
  }
}
