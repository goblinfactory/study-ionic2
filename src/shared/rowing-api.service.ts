import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs';


export interface Race { between:string[], id:string }
export interface Races { Promise<Race>() }

@Injectable()
export class RowingApi {
    
    private base = "https://cambridge-rowers-12dbf.firebaseio.com/";

    constructor(private http:Http) { }

    getCompetitions()  {
        let promise = this._get("competitions");
        return promise;
    }

    _get( route : string ) : Promise<any> {
        return new Promise(resolve => {
                let url = `${this.base}/${route}.json`;
                console.log(`_get ${url}`);
                this.http.get(url).subscribe(res => resolve(res.json()))
        });
    }

    getCompetitionDataRx(tournament : string ) {
        // gets the competition data { "crews" ... "races" }
        // for the given competition... 
    }

}