import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {General} from "../model/general";
import {GeneralsService} from "../services/generals.service";
import {debounceTime, distinctUntilChanged, startWith, tap, delay} from 'rxjs/operators';
import {merge} from "rxjs/observable/merge";
import {fromEvent} from 'rxjs/observable/fromEvent';
import {UsersDataSource} from "../services/users.datasource";


@Component({
    selector: 'general',
    templateUrl: './general.component.html',
    styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit, AfterViewInit {

    general:General;

    dataSource: UsersDataSource;

    displayedColumns= ["id", "fname", "lname", "img"];

    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(private route: ActivatedRoute,
                private generalsService: GeneralsService) {

    }

    ngOnInit() {

        this.general = this.route.snapshot.data["general"];

        this.dataSource = new UsersDataSource(this.generalsService);

        this.dataSource.loadUsers(0, 3);
    }

    ngAfterViewInit() {
        this.paginator.page
        .pipe(
            tap(() => this.loadUsersPage())
        )
        .subscribe();
    }

    loadUsersPage() {
        this.dataSource.loadUsers(
            this.paginator.pageIndex,
            this.paginator.pageSize);
    }
}
