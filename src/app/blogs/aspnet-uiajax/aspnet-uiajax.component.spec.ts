import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AspNetUIAjaxComponent } from './aspnet-uiajax.component';

describe('AspNetUIAjaxComponent', () => {
  let component: AspNetUIAjaxComponent;
  let fixture: ComponentFixture<AspNetUIAjaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AspNetUIAjaxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AspNetUIAjaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
