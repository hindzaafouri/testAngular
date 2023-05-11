import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterVideoComponent } from './ajouter-video.component';

describe('AjouterVideoComponent', () => {
  let component: AjouterVideoComponent;
  let fixture: ComponentFixture<AjouterVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
