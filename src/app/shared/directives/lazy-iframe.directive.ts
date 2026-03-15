import { Directive, ElementRef, OnDestroy, OnInit, inject, input } from '@angular/core';

@Directive({
  selector: 'iframe[lazySrc]',
})
export class LazyIframeDirective implements OnInit, OnDestroy {
  lazySrc = input.required<string>();

  private readonly el = inject(ElementRef<HTMLIFrameElement>);
  private observer: IntersectionObserver | null = null;

  ngOnInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.el.nativeElement.src = this.lazySrc();
            this.observer?.disconnect();
            this.observer = null;
          }
        }
      },
      { threshold: 0.1 },
    );
    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
