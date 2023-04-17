import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../models/article.model';
import { ArticlesService } from '../services/articles.service';
import { Router } from '@angular/router';
import { environment } from "../../environments/environment";

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss']
})
export class ArticleCardComponent implements OnInit {
  uploadFolder! : string;
  @Input() article!: Article;
  constructor(private projectsService: ArticlesService,private router: Router) {
    this.uploadFolder = environment.uploadFolder;
  }
  ngOnInit(): void {
    
  }
  onViewArticle() {
    this.router.navigateByUrl(`singlearticle/${this.article.article_id}`);
  }
}
