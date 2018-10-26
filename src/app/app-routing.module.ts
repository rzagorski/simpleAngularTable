import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GeneralComponent} from "./general/general.component";
import {GeneralResolver} from "./services/general.resolver";

const routes: Routes = [
    {
        path: "",
        component: GeneralComponent,
        resolve: {
            general: GeneralResolver
        }
    },
    {
        path: "**",
        redirectTo: '/'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
