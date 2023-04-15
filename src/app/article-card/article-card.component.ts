import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../models/article.model';
import { ArticlesService } from '../services/articles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss']
})
export class ArticleCardComponent implements OnInit {
  @Input() article!: Article;
  constructor(private projectsService: ArticlesService,private router: Router) {}
  ngOnInit(): void {
    
  }
  onViewArticle() {
    this.router.navigateByUrl(`singlearticle/${this.article.article_id}`);
  }
}
