import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbAuthModule, NbPasswordAuthStrategy } from '@nebular/auth';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbThemeModule } from '@nebular/theme';
import { environment } from 'src/environments/environment';
import { strategies } from 'src/environments/oauth2.strategies';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // NbThemeModule.forRoot({name: 'light'}, []),
    // NbEvaIconsModule,
    BrowserAnimationsModule,
    NbAuthModule.forRoot(strategies),
    // NbAuthModule.forRoot(
    //   {
    //     strategies: [
    //       NbPasswordAuthStrategy.setup({
    //         name: 'login',
    //         baseEndpoint: environment.apiUrls.good,
    //       }),
    //     ]
    //   }
    // ),
    CoreModule.forRoot(
      {
        strategyName: environment.authStrategy.name,
        apiAuth: environment.apiUrls.inti,
        moduleId: environment.module_id,
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
