import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';
import { ProjectsService } from "../services/projects.service";
import { Observable } from 'rxjs';
@Component({
  selector: 'app-page-projects',
  templateUrl: './page-projects.component.html',
  styleUrls: ['./page-projects.component.scss'],
})
export class PageProjectsComponent implements OnInit{
  projects$!: Observable<Project[]>;
  //project!: Project;
  constructor(private projectService: ProjectsService){}
  ngOnInit(): void {
      this.projects$ = this.projectService.getAllProjects();
      //this.project = new Project;
  }
}