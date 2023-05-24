import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReuabletableComponent } from './reuabletable.component';

describe('ReuabletableComponent', () => {
  let component: ReuabletableComponent;
  let fixture: ComponentFixture<ReuabletableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReuabletableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReuabletableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
