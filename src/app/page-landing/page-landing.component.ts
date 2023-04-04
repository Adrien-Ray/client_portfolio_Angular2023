import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';
import { ProjectsService } from "../services/projects.service";

@Component({
  selector: 'app-page-landing',
  templateUrl: './page-landing.component.html',
  styleUrls: ['./page-landing.component.scss']
})
export class PageLandingComponent implements OnInit{
  projects!: Project[];
  projectTest: any = [];
  constructor(private projectService: ProjectsService){}
  ngOnInit(): void {
    this.projects = this.projectService.getAllProjects();
    this.projectTest = this.fetchUsers();
    /* this.projectsTest = this.projectService.getUsers(); */
    console.log(this.projectTest);
    
  }

  fetchUsers() {
    return this.projectService.getUsers();
  }
}
