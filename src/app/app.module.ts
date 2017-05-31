import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AppPreferences } from '@ionic-native/app-preferences';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';

import { MarkdownModule } from 'angular2-markdown';
import { DndModule } from 'ng2-dnd';

import { MyApp } from './app.component';

import { RecipesProvider } from '../providers/recipes/recipes';
import { LocalStorageProvider } from '../providers/local-storage/local-storage';

import { Environment } from '../environment';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': Environment.appId
  }
}

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MarkdownModule.forRoot(),
    DndModule.forRoot(),
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AppPreferences,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RecipesProvider,
    LocalStorageProvider
  ]
})
export class AppModule {}
