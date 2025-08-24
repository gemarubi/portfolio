import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

   private selectedProject: any;

  setProject(project: any) {
    this.selectedProject = project;
  }

  getProject() {
    return this.selectedProject;
  }
}
