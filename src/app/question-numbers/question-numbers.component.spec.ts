import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionNumbersComponent } from './question-numbers.component';

describe('QuestionNumbersComponent', () => {
  let component: QuestionNumbersComponent;
  let fixture: ComponentFixture<QuestionNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionNumbersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuestionNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
