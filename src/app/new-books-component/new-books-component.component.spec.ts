import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBooksComponentComponent } from './new-books-component.component';

describe('NewBooksComponentComponent', () => {
  let component: NewBooksComponentComponent;
  let fixture: ComponentFixture<NewBooksComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewBooksComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewBooksComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
