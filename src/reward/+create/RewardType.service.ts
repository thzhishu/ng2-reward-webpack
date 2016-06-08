import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Jsonp, URLSearchParams } from '@angular/http';
import 'rxjs/Rx';

export class RewardType {
    constructor(public type: number, public name: string,
     public ico: string, public status: number, public isChecked: boolean) {

    }
}

@Injectable()
export class RewardTypeService {

    constructor(private http: Http) { }

    updateChecked(type: number | string, list: RewardType[]) {
        list.map(res => res.isChecked = res.type === type);
    }

}
