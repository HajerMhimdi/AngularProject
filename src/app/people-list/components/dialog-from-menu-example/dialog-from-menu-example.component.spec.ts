import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFromMenuExampleComponent } from './dialog-from-menu-example.component';

describe('DialogFromMenuExampleComponent', () => {
  let component: DialogFromMenuExampleComponent;
  let fixture: ComponentFixture<DialogFromMenuExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogFromMenuExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogFromMenuExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
