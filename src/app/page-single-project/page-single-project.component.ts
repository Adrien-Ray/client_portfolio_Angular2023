import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Project } from "../models/project.model";
import { ProjectsService } from "../services/projects.service";
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment";

@Component({
  selector: 'app-page-single-project',
  templateUrl: './page-single-project.component.html',
  styleUrls: ['./page-single-project.component.scss']
})

export class PageSingleProjectComponent implements OnInit {
  uploadFolder! : string;
  constructor(private projectsService: ProjectsService, private router: Router, private route: ActivatedRoute){
    this.uploadFolder = environment.uploadFolder;
  }
  theProject$!: Observable<Project | undefined>;
  ngOnInit(){
    const projectId: string = this.route.snapshot.params['id'];
    this.theProject$ = this.projectsService.getByIdProject(projectId);
  }
}
