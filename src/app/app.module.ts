import {NgModule, Provider} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainLayoutComponent} from './main/components/main-layout/main-layout.component';
import {PostComponent} from './main/components/post/post.component';
import {HomePageComponent} from './main/components/home-page/home-page.component';
import {PostPageComponent} from './main/components/post-page/post-page.component';
import {SharedModule} from "./main/shared/shared.module";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthInterceptor} from "./main/shared/auth.interceptor";
import {registerLocaleData} from "@angular/common";
import ruLocale from "@angular/common/locales/en";
import {environment} from "../environments/environment";
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AuthorSearchPipe} from './main/pipes/author-search.pipe';

registerLocaleData(ruLocale, 'en')

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: AuthInterceptor
}

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomePageComponent,
    PostComponent,
    PostPageComponent,
    AuthorSearchPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireStorageModule,
  ],
  providers: [INTERCEPTOR_PROVIDER],
  bootstrap: [AppComponent]
})
export class AppModule {
}
