import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MItoolComponent } from './mitool.component';

describe('MItoolComponent', () => {
  let component: MItoolComponent;
  let fixture: ComponentFixture<MItoolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MItoolComponent]
    });
    fixture = TestBed.createComponent(MItoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
