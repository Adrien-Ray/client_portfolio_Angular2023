import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Project } from "../models/project.model";
import { ProjectsService } from "../services/projects.service";
import { Observable, filter, find, map, tap } from 'rxjs';

@Component({
  selector: 'app-page-single-project',
  templateUrl: './page-single-project.component.html',
  styleUrls: ['./page-single-project.component.scss']
})

export class PageSingleProjectComponent implements OnInit {
  constructor(private projectsService: ProjectsService, private router: Router, private route: ActivatedRoute){}
  theProject$!: Observable<Project | undefined>;
  ngOnInit(){
    const projectId: string = this.route.snapshot.params['id'];
    this.theProject$ = this.projectsService.projects$.pipe(
      map(obj => obj.find(obj => obj.project_id === projectId))
    );
  }
}
