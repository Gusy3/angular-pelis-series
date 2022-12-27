import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// Componentes
import { HomeComponent } from './components/home/home.component';
import { FilmNewComponent } from './components/film-new/film-new.component';
import { FilmsComponent } from './components/films/films.component';
import { FilmComponent } from './components/film/film.component';
import { FilmEditComponent } from './components/film-edit/film-edit.component';
import { SearchComponent } from './components/search/search.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'crear-pelicula', component: FilmNewComponent },
  { path: 'peliculas', component: FilmsComponent },
  { path: 'pelicula/:id', component: FilmComponent },
  { path: 'pelicula/editar/:id', component: FilmEditComponent },
  { path: 'buscar/:title', component: SearchComponent },
  { path: '**', component: ErrorComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
