import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../models/project.model';
import { Router } from '@angular/router';
import { ProjectsService } from "../services/projects.service";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {
  @Input() project!: Project;
  project_thumbnail_allUrl$!: Observable<string>;
  constructor(private projectsService: ProjectsService,private router: Router) {}
  ngOnInit() {
    this.project_thumbnail_allUrl$ = this.projectsService.getByIdProjectThumbUrl(this.project.project_id);
    console.log(this.project_thumbnail_allUrl$);
    
  }
  onViewProject() {
    this.router.navigateByUrl(`singleproject/${this.project.project_id}`);
  }
}
