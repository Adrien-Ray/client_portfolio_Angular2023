import { Injectable } from '@angular/core';
import { Project } from "../models/project.model";

@Injectable({
  providedIn: 'root',
})

export class ProjectsService {
    projects: Project[] = [
        {
            id: 0,
            title: 'this is a title',
            description: 'ceci est une super description',
            createDate: new Date(),
            snaps: 23,
            img: 'https://lemag.nikonclub.fr/wp-content/uploads/2017/07/08.jpg',
            location: 'la montagne'
        },
        {
            id: 1,
            title: 'this is a title 2',
            description: 'ceci est une super description2',
            createDate: new Date(),
            snaps: 4,
            img: 'https://i.pinimg.com/474x/ea/00/c2/ea00c2c4ddf37e8af11b3faf53c57fad--alps-k.jpg',
            location: 'paris'
        },
        {
            id: 2,
            title: 'this is a title 3',
            description: 'ceci est une super description3',
            createDate: new Date(),
            snaps: 427,
            img: 'https://3.bp.blogspot.com/-YUppdufa6OY/Vr-KzimoNlI/AAAAAAAAGxA/6B-XkWmryTU/s1600/alps+1.jpg'
        },
        {
            id: 3,
            title: 'this is a title 4',
            description: 'ceci est une super description',
            createDate: new Date(),
            snaps: 23,
            img: 'https://i.pinimg.com/736x/6c/fa/42/6cfa42533548c1b47bd1d3e02454f68d.jpg',
            location: 'la montagne'
        },
        {
            id: 4,
            title: 'this is a title 5',
            description: 'ceci est une super description2',
            createDate: new Date(),
            snaps: 4,
            img: 'https://cache.desktopnexus.com/thumbseg/2149/2149803-bigthumbnail.jpg',
            location: 'paris'
        },
        {
            id: 5,
            title: 'this is a title 6',
            description: 'ceci est une super description3',
            createDate: new Date(),
            snaps: 427,
            img: 'https://p4.wallpaperbetter.com/wallpaper/946/527/614/switzerland-mountains-snow-winter-town-matterhorn-zermatt-photography-landscape-city-lights-architecture-swiss-alps-wallpaper-thumb.jpg'
        },
    ];
    getAllProjects(): Project[]{
        return this.projects;
    }
    getByIdProject(projectId: number): Project{
        const result = this.projects.find(project => project.id === projectId);
        if (!result) {
            throw new Error('id not found ...');
        } else {
            return result;
        }
    }
    /* getFaceSnapById(faceSnapId: number): FaceSnap {
        const faceSnap = this.facesnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (!faceSnap) {
            throw new Error('facesnap not found 201547gf');
        } else {
            return faceSnap;
        }
    }
    snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
        const faceSnap = this.getFaceSnapById(faceSnapId);
        snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
    } */
}