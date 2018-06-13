import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesViewDetailComponent } from './games-view-detail.component';

describe('GamesViewDetailComponent', () => {
  let component: GamesViewDetailComponent;
  let fixture: ComponentFixture<GamesViewDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamesViewDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesViewDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
