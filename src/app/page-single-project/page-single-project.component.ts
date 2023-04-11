import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Project } from "../models/project.model";
import { ProjectsService } from "../services/projects.service";
import { EMPTY, Observable } from 'rxjs';

@Component({
  selector: 'app-page-single-project',
  templateUrl: './page-single-project.component.html',
  styleUrls: ['./page-single-project.component.scss']
})
export class PageSingleProjectComponent implements OnInit {
  project$: Observable<Project> = EMPTY;
  constructor(private projectsService: ProjectsService, private router: Router, private route: ActivatedRoute){}
  ngOnInit(): void{
    const projectId = this.route.snapshot.params['id'];
    this.project$ = this.projectsService.getByIdProject(projectId);
  }
}
