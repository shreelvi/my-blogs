import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperWifiArticleComponent } from './super-wifi-article.component';

describe('SuperWifiArticleComponent', () => {
  let component: SuperWifiArticleComponent;
  let fixture: ComponentFixture<SuperWifiArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperWifiArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperWifiArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
