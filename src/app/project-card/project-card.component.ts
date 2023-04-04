import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../models/project.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {
  @Input() project!: Project;
  project_thumbnail_allUrl!: string;
  constructor(private router: Router) {}
  ngOnInit() {
    this.project_thumbnail_allUrl = `https://portfolio.accesdenied.net/assets/img/upload/${this.project.project_thumbnail}`;
  }
  onViewProject() {
    this.router.navigateByUrl(`singleproject/${this.project.project_id}`);
  }
}
