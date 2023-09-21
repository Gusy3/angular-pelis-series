import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

// Componentes
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FilmNewComponent } from './components/film-new/film-new.component';
import { FilmsComponent } from './components/films/films.component';
import { FilmComponent } from './components/film/film.component';
import { FilmEditComponent } from './components/film-edit/film-edit.component';
import { SerieNewComponent } from './components/serie-new/serie-new.component';
import { SeriesComponent } from './components/series/series.component';
import { SerieComponent } from './components/serie/serie.component';
import { SerieEditComponent } from './components/serie-edit/serie-edit.component';
import { SeasonNewComponent } from './components/season-new/season-new.component';
import { SeasonEditComponent } from './components/season-edit/season-edit.component';
import { ChapterNewComponent } from './components/chapter-new/chapter-new.component';
import { ChapterEditComponent } from './components/chapter-edit/chapter-edit.component';
import { SearchComponent } from './components/search/search.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent},
  { path: 'crear-pelicula', component: FilmNewComponent, canActivate: [AuthGuard] },
  { path: 'peliculas', component: FilmsComponent, canActivate: [AuthGuard] },
  { path: 'pelicula/:id', component: FilmComponent, canActivate: [AuthGuard] },
  { path: 'pelicula/editar/:id', component: FilmEditComponent, canActivate: [AuthGuard] },
  { path: 'crear-serie', component: SerieNewComponent, canActivate: [AuthGuard] },
  { path: 'series', component: SeriesComponent, canActivate: [AuthGuard] },
  { path: 'serie/:id', component: SerieComponent },
  { path: 'serie/editar/:id', component: SerieEditComponent, canActivate: [AuthGuard] },
  { path: 'serie/:id/crear-temporada', component: SeasonNewComponent, canActivate: [AuthGuard] },
  { path: 'serie/:idSerie/editar-temporada/:idSeason', component: SeasonEditComponent, canActivate: [AuthGuard] },
  { path: 'serie/:idSerie/temporada/:idSeason/crear-capitulo', component: ChapterNewComponent, canActivate: [AuthGuard] },
  { path: 'serie/:idSerie/editar-capitulo/:idChapter', component: ChapterEditComponent, canActivate: [AuthGuard] },
  { path: 'buscar', component: SearchComponent, canActivate: [AuthGuard] },
  { path: '**', component: ErrorComponent, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
