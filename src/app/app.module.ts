import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MomentModule } from 'ngx-moment';
import { NgxPaginationModule } from 'ngx-pagination';
import { CdkAccordionModule } from '@angular/cdk/accordion';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { FilmNewComponent } from './components/film-new/film-new.component';
import { FilmsComponent } from './components/films/films.component';
import { FilmComponent } from './components/film/film.component';
import { FilmEditComponent } from './components/film-edit/film-edit.component';
import { SearchComponent } from './components/search/search.component';
import { ErrorComponent } from './components/error/error.component';
import { SeriesComponent } from './components/series/series.component';
import { SerieNewComponent } from './components/serie-new/serie-new.component';
import { SerieComponent } from './components/serie/serie.component';
import { SerieEditComponent } from './components/serie-edit/serie-edit.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SeasonNewComponent } from './components/season-new/season-new.component';
import { SeasonEditComponent } from './components/season-edit/season-edit.component';
import { ChapterNewComponent } from './components/chapter-new/chapter-new.component';
import { ChapterEditComponent } from './components/chapter-edit/chapter-edit.component';
import { LoginComponent } from './components/login/login.component';

import { UserService } from './services/user.service';
import { AuthGuard } from './guards/auth.guard';
import { TokenInterceptor } from './interceptors/token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent,
    FilmNewComponent,
    FilmsComponent,
    FilmComponent,
    FilmEditComponent,
    SearchComponent,
    ErrorComponent,
    SeriesComponent,
    SerieNewComponent,
    SerieComponent,
    SerieEditComponent,
    SeasonNewComponent,
    SeasonEditComponent,
    ChapterNewComponent,
    ChapterEditComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MomentModule,
    NgxPaginationModule,
    NoopAnimationsModule,
    CdkAccordionModule
  ],
  providers: [
    AuthGuard,
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
    UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
