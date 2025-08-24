import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

   projects = [
    {
      name: 'Portfolio Personal',

      description: 'Mi portfolio web desarrollado con Angular y Bootstrap.',
      image: 'mi-portfolio-img.png',
      link: 'https://tu-portfolio.com',
      github: 'https://github.com/tuusuario/portfolio',
       tech: [
        { name: 'Angular', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
           { name: 'Bootstrap', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
      { name: 'Angular Material', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg' },

    ]
    },
    {
      name: 'Ecoexperience Tours',
      description: 'Córdoba EcoExperience es una plataforma web para gestionar reservas de rutas turísticas a pie y en tuk-tuk en Córdoba. Dispone de un panel de administración, gestión de usuarios, guías y vehículos, sistema de reservas adaptable con disponibilidad en tiempo real, filtros de búsqueda y conexión con Google Places.',
      image: 'ecoexperience-img.png',//['ecoexperience-img.png','ecoexperience-img2.png','ecoeecoexperience-img3.png'],
      link: 'https://proyecto-ecoexperience-tfg.netlify.app/',
      github: 'https://github.com/gemarubi/ecoexperienceTFG',
      tech: [
        { name: 'Angular', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
           { name: 'Bootstrap', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
      { name: 'Angular Material', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg' },
        { name: 'NestJs', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg' },
          { name: 'MySQL', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    ]
    },
    {
      name: 'Calidad CIFP Virgen de gracia',
      description: 'Calidad es una plataforma web para la gestión documental del departamento de calidad. Automatiza el rellenado de formularios PDF con datos de usuario, incorpora un sistema de eventos en el dashboard personal y permite a los responsables monitorizar en tiempo real el cumplimiento de las tareas y procesos de calidad.',
      image: 'calidad-virgendegracia-img.png',
      link: 'https://proyecto-ecoexperience-tfg.netlify.app/',
      github: 'https://github.com/gemarubi/ecoexperienceTFG',
      tech: [
        { name: 'Angular', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
           { name: 'Bootstrap', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
      { name: 'Angular Material', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg' },
        {  name: 'NodeJs', img:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'  },
          { name: 'MySQL', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    ]
    },
    {
      name: 'Hogwarts',
      description: 'Hogwarts es una plataforma web inspirada en el universo de Harry Potter que permite gestionar usuarios con roles y permisos, asignaturas y hechizos. Además, incluye un sistema de duelos interactivos donde los usuarios pueden enfrentarse con sus propios hechizos en un pequeño juego de magia.',
      image: 'hogwarts-img.png',
      link: 'https://proyecto-ecoexperience-tfg.netlify.app/',
      github: 'https://github.com/gemarubi/ecoexperienceTFG',
      tech: [
         { name: 'JavaScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
           { name: 'Bootstrap', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
    { name: 'Laravel', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
          { name: 'MySQL', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    ]
    }
  ];

   constructor(private router: Router, private projectService: ProjectService) {}



  verDetalle(project: any) {
  this.router.navigate(['project-details'], { state: { project } });
}
}
