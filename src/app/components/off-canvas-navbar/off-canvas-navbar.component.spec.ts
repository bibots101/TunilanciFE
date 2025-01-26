import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffCanvasNavbarComponent } from './off-canvas-navbar.component';

describe('OffCanvasNavbarComponent', () => {
  let component: OffCanvasNavbarComponent;
  let fixture: ComponentFixture<OffCanvasNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OffCanvasNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffCanvasNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
