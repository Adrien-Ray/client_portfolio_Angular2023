import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../models/project.model';
import { Router } from '@angular/router';
import { environment } from "../../environments/environment";

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent implements OnInit {
  uploadFolder! : string;
  @Input() project!: Project;
  project_thumbnail_allUrl$!: string;
  constructor(private router: Router) {
    this.uploadFolder = environment.uploadFolder;
  }
  ngOnInit() {
    this.project_thumbnail_allUrl$ = this.uploadFolder + this.project.project_id;
  }
  onViewProject() {
    this.router.navigateByUrl(`singleproject/${this.project.project_id}`);
  }
}
