import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FroalaPageBuilderComponent } from './froala-page-builder.component';

describe('FroalaPageBuilderComponent', () => {
  let component: FroalaPageBuilderComponent;
  let fixture: ComponentFixture<FroalaPageBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FroalaPageBuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FroalaPageBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
