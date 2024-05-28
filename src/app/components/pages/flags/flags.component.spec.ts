import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FlagsComponent } from './flags.component';
import { DataService } from '../../../services/data.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('FlagsComponent', () => {
  let component: FlagsComponent;
  let fixture: ComponentFixture<FlagsComponent>;
  let dataServiceSpy: jasmine.SpyObj<DataService>;

  beforeEach(async () => {
    dataServiceSpy = jasmine.createSpyObj('DataService', ['searchCountry']);
    await TestBed.configureTestingModule({
      declarations: [FlagsComponent],
      providers: [{ provide: DataService, useValue: dataServiceSpy }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an empty array of flags', () => {
    expect(component.flags).toEqual([]);
  });

  it('should call searchCountry when searchByCapital is called', () => {
    const term = 'Madrid';
    component.searchByCapital(term);
    expect(dataServiceSpy.searchCountry).toHaveBeenCalledTimes(1);
    expect(dataServiceSpy.searchCountry).toHaveBeenCalledWith(term);
  });
});

