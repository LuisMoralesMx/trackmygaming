import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesUpdateDetailComponent } from './games-update-detail.component';

describe('GamesUpdateDetailComponent', () => {
  let component: GamesUpdateDetailComponent;
  let fixture: ComponentFixture<GamesUpdateDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamesUpdateDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesUpdateDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
