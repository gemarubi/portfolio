import { Directive, ElementRef, HostBinding, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAnimateOnScroll]',
  standalone: false
})
export class AnimateOnScrollDirective implements OnInit, OnDestroy {
  @Input() animationClass = 'fade-in-up';
   @Input() animationDelay = 0; 
  private observer!: IntersectionObserver;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

ngOnInit(): void {
  // Inicialmente invisible
  this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
  this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateY(50px)');
  this.renderer.setStyle(
    this.el.nativeElement,
    'transition',
    'opacity 1.2s ease-out, transform 1.2s ease-out'
  );

  // Observer para detectar scroll
  this.observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        // Aplica animación con delay opcional
        const delay = this.animationDelay || 0; // segundos
        setTimeout(() => {
          this.renderer.setStyle(this.el.nativeElement, 'opacity', '1');
          this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateY(0)');
          if (this.animationClass) {
            this.renderer.addClass(this.el.nativeElement, this.animationClass);
          }
        }, delay * 1000);

        this.observer.unobserve(this.el.nativeElement);
      }
    },
    { threshold: 0.1 }
  );

  this.observer.observe(this.el.nativeElement);
}

  ngOnDestroy(): void {
    if (this.observer) this.observer.disconnect();
  }
}
