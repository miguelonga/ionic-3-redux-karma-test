import { async, TestBed } from '@angular/core/testing';
import { IonicModule, Platform } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ListPage } from './list';
import {
  PlatformMock,
  StatusBarMock,
  SplashScreenMock
} from '../../../test-config/mocks-ionic';

describe('List Page', () => {
  let fixture;
  let component;

  let simulateConnection = function(connection){
    component.connection = connection
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListPage],
      imports: [
        IonicModule.forRoot(ListPage)
      ],
      providers: [
        { provide: StatusBar, useClass: StatusBarMock },
        { provide: SplashScreen, useClass: SplashScreenMock },
        { provide: Platform, useClass: PlatformMock }
      ]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPage);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(component instanceof ListPage).toBe(true);
  });

  it('should know if it has internet connection', () => {
    simulateConnection(true);
    expect(component.connection).toBe(true);
    simulateConnection(false);
    expect(component.connection).toBe(false);
  });
});