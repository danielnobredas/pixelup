import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcastActiveComponent } from './podcast-active.component';

describe('PodcastActiveComponent', () => {
  let component: PodcastActiveComponent;
  let fixture: ComponentFixture<PodcastActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodcastActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodcastActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
