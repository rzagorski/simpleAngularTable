
import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {General} from "../model/general";
import {Observable} from "rxjs/Observable";
import {GeneralsService} from "./generals.service";

@Injectable()
export class GeneralResolver implements Resolve<General> {

    constructor(private generalsService:GeneralsService) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<General> {
        return this.generalsService.getInfo();
    }
}
