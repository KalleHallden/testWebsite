import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascripspracComponent } from './javascripsprac.component';

describe('JavascripspracComponent', () => {
  let component: JavascripspracComponent;
  let fixture: ComponentFixture<JavascripspracComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavascripspracComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavascripspracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
