import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { GamesComponent } from './games/games.component';
import { GameComponent } from './game/game.component';

export const routes: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "games", component: GamesComponent },
    { path: "game/:gameId", component: GameComponent },

];
