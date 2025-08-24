import { Component } from '@angular/core';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-project-details',
  standalone: false,
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss'
})
export class ProjectDetailsComponent {
 project: any;

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.project = history.state.project;
  }
}
