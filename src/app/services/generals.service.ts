
import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {General} from "../model/general";
import {map} from "rxjs/operators";
import {User} from "../model/user";


@Injectable()
export class GeneralsService {

    constructor(private http:HttpClient) {

    }

    getInfo(): Observable<General> {
        return this.http.get<General>('http://127.0.0.1:8000/users/info');
    }

    findUsers(pageNumber = 0, pageSize = 3):  Observable<User[]> {
        return this.http.get(`http://127.0.0.1:8000/users/${pageNumber+1}`, {
        }).pipe(
            map(res => res["payload"])
        );
    }
}
