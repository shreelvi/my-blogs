import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngMatDialogComponent } from './ang-mat-dialog.component';

describe('AngMatDialogComponent', () => {
  let component: AngMatDialogComponent;
  let fixture: ComponentFixture<AngMatDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngMatDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngMatDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
