import { Injectable } from '@angular/core';
import { Project } from "../models/project.model";
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root',
})

export class ProjectsService {
  apiEndPoint! : string;
  uploadFolder! : string;
  constructor(private http: HttpClient){
    this.apiEndPoint = environment.apiEndPoint;
    this.uploadFolder = environment.uploadFolder;
  }
  projects$: Observable<Project[]> = this.getAllProjects();


    
    /* projects: Project[] = [
        {
            project_id: "10",
            project_title: "fcremilly.org",
            project_thumbnail: "2021-07-07_06-47-10_thumbnail-fcr.jpg",
            project_thumbnail_fit: "0",
            project_context: "un club de football local cherche a acquérir un site pour géré une micro-boutique de pré-commande et centraliser ses informations dispersé sur divers plates-formes (notamment Facebook et Instagram). ",
            project_begin: "2020-01-01",
            project_end: null,
            project_colabs: null,
            project_github: "",
            project_link: "https://fcremilly.org/",
            project_design_file_link: "",
            project_visibility: "1",
            project_specification_tech: "",
            project_specification_function: "A l'origine, la demande était de créer une page de commande pour des articles vendu par l'association. Il a ensuite été question de créer une page de présentation de l'association, et enfin un système de publication d'articles. Le tout géré par le club depuis un backoffice complèt. A cela, il a fallut ajouter un bandeau défilant sous la bannière du site, ainsi qu'un système de pop-up pour récapituler les horaires actuels et les évènements du club."
          },
    ]; */
    /* getAllProjects(): Project[]{
        return this.projects;
        // return this.getUsers();
    } */
    getAllProjects(): Observable<Project[]>{
      return this.http.get<any>(`${this.apiEndPoint}index.php`).pipe(
        map(response => response.project),
        map(arr => arr.sort(( a:Project, b:Project ) => a.project_begin < b.project_begin ))
      );
    }
    getByIdProject(projectId: string): Observable<Project | undefined>{
      return this.getAllProjects().pipe(
        map(obj => obj.find(obj => obj.project_id === projectId)),
      );
    }
}