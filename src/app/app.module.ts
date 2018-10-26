import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon';
import {GeneralComponent} from "./general/general.component";
import {
    MatInputModule, MatListModule, MatPaginatorModule, MatProgressSpinnerModule,
    MatTableModule
} from "@angular/material";
import {GeneralsService} from "./services/generals.service";
import {HttpClientModule} from "@angular/common/http";
import {GeneralResolver} from "./services/general.resolver";

@NgModule({
    declarations: [
        AppComponent,
        GeneralComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatMenuModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        AppRoutingModule
    ],
    providers: [
        GeneralsService,
        GeneralResolver
    ],
    bootstrap: [AppComponent],
    entryComponents: []
})
export class AppModule {
}
