import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWorkflowComponent } from './create-workflow.component';

describe('CreateWorkflowComponent', () => {
  let component: CreateWorkflowComponent;
  let fixture: ComponentFixture<CreateWorkflowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateWorkflowComponent]
    });
    fixture = TestBed.createComponent(CreateWorkflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
