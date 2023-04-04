import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Project } from "../models/project.model";
import { ProjectsService } from "../services/projects.service";

@Component({
  selector: 'app-page-single-project',
  templateUrl: './page-single-project.component.html',
  styleUrls: ['./page-single-project.component.scss']
})
export class PageSingleProjectComponent implements OnInit {
  project!: Project;
  constructor(private projectsService: ProjectsService, private router: Router, private route: ActivatedRoute){}
  ngOnInit(){
    const projectId = +this.route.snapshot.params['id'];
    this.project = this.projectsService.getByIdProject(projectId);
    this.project.project_thumbnail_allUrl = `https://portfolio.accesdenied.net/assets/img/upload/${this.project.project_thumbnail}`;
  }
}
