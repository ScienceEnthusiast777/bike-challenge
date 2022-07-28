import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TopThreeComponent } from './top-three.component';
import { CoreModule } from '../../core/core.module';
import { Component, Input } from '@angular/core';

const dataTestOne = [
  {
    id: '1',
    make: 'bike',
    model: 'test1',
    price: '100',
    userID: '123',
    date: '2022-07-27',
  },
  {
    id: '2',
    make: 'bike',
    model: 'test1',
    price: '100',
    userID: '123',
    date: '2022-07-27',
  },
  {
    id: '3',
    make: 'bike',
    model: 'test1',
    price: '100',
    userID: '123',
    date: '2022-07-27',
  },
  {
    id: '4',
    make: 'bike',
    model: 'test2',
    price: '100',
    userID: '123',
    date: '2022-07-27',
  },
  {
    id: '5',
    make: 'bike',
    model: 'test2',
    price: '100',
    userID: '123',
    date: '2022-07-27',
  },
  {
    id: '6',
    make: 'bike',
    model: 'test3',
    price: '100',
    userID: '123',
    date: '2022-07-27',
  },
  {
    id: '7',
    make: 'bike',
    model: 'test4',
    price: '100',
    userID: '123',
    date: '2022-07-27',
  },
  {
    id: '8',
    make: 'bike',
    model: 'test5',
    price: '100',
    userID: '123',
    date: '2022-07-27',
  },
];

describe('TopThreeComponent', () => {
  let component: TopThreeComponent;
  let fixture: ComponentFixture<TopThreeComponent>;

  @Component({ selector: 'app-browse', template: '' })
  class MockBrowse {
    @Input()
    public bikes!: any[];
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreModule],
      declarations: [TopThreeComponent, MockBrowse],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should find top three models', () => {
    expect(component.getTopThree(dataTestOne)).toEqual([
      [
        {
          id: '1',
          make: 'bike',
          model: 'test1',
          price: '100',
          userID: '123',
          date: '2022-07-27',
        },
        {
          id: '2',
          make: 'bike',
          model: 'test1',
          price: '100',
          userID: '123',
          date: '2022-07-27',
        },
        {
          id: '3',
          make: 'bike',
          model: 'test1',
          price: '100',
          userID: '123',
          date: '2022-07-27',
        },
      ],
      [
        {
          id: '4',
          make: 'bike',
          model: 'test2',
          price: '100',
          userID: '123',
          date: '2022-07-27',
        },
        {
          id: '5',
          make: 'bike',
          model: 'test2',
          price: '100',
          userID: '123',
          date: '2022-07-27',
        },
      ],
      [
        {
          id: '6',
          make: 'bike',
          model: 'test3',
          price: '100',
          userID: '123',
          date: '2022-07-27',
        },
      ],
    ]);
  });
});
