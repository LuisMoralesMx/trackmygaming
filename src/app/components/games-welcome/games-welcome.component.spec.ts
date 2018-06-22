import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesWelcomeComponent } from './games-welcome.component';

describe('GamesWelcomeComponent', () => {
  let component: GamesWelcomeComponent;
  let fixture: ComponentFixture<GamesWelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamesWelcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
