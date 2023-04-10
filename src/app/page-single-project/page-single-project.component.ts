import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Project } from "../models/project.model";
import { ProjectsService } from "../services/projects.service";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page-single-project',
  templateUrl: './page-single-project.component.html',
  styleUrls: ['./page-single-project.component.scss']
})
export class PageSingleProjectComponent implements OnInit {
  project!: Project;
  project_thumbnail_allUrl$!: Observable<string>;
  constructor(private projectsService: ProjectsService, private router: Router, private route: ActivatedRoute){}
  ngOnInit(){
    const projectId = +this.route.snapshot.params['id'];
    this.project = this.projectsService.getByIdProject(projectId);
    this.project_thumbnail_allUrl$ = this.projectsService.getByIdProjectThumbUrl(this.project.project_id);
  }
}
