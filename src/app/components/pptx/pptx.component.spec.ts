import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PptxComponent } from './pptx.component';

describe('PptxComponent', () => {
  let component: PptxComponent;
  let fixture: ComponentFixture<PptxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PptxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PptxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
