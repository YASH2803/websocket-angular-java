import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WsockdemoComponent } from './wsockdemo.component';

describe('WsockdemoComponent', () => {
  let component: WsockdemoComponent;
  let fixture: ComponentFixture<WsockdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WsockdemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WsockdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
