import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SignupPage } from '../pages/signup/signup';
import { LoginPage } from '../pages/login/login';
import { InboxPage } from '../pages/inbox/inbox';
import { FirebaseServiceProvider } from '../providers/firebase-service/firebase-service';
import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { SendmessagePage } from '../pages/sendmessage/sendmessage';
//import { FirebaseService } from './../providers/firebase-service';

var firebase_config = {
  apiKey: "AIzaSyA0KACLk7WMsq1NiHhA6VrIe6RxG8LIUgs",
  authDomain: "fir-messenger-6b189.firebaseapp.com",
  databaseURL: "https://fir-messenger-6b189.firebaseio.com",
  projectId: "fir-messenger-6b189",
  storageBucket: "fir-messenger-6b189.appspot.com",
  messagingSenderId: "843138683344"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignupPage,
    LoginPage,
    InboxPage,
    SendmessagePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule,
    AngularFireModule.initializeApp(firebase_config),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignupPage,
    LoginPage,
    InboxPage,
    SendmessagePage
  ],  
  providers: [
    StatusBar,
    SplashScreen,
    
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseServiceProvider
  ]
})
export class AppModule {}
