import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
 name: string = 'Gema Rubio Sánchez';
  title: string = 'Full-Stack Developer';

  contactInfo = [
    { icon: '📧', type: 'Email', value: 'gemarubio@gmail.com' },
    { icon: '💼', type: 'LinkedIn', value: 'linkedin.com/in/gema-rubio-sanchez', link: 'https://www.linkedin.com/in/gema-rubio-sanchez/' },
    { icon: '📞', type: 'Teléfono', value: '697411247' }
  ];
}
