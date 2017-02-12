import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs';


export interface Race { between:string[], id:string }
export interface Races { Promise<Race>() }

@Injectable()
export class RowingApi {
    
    private base = "https://cambridge-rowers-12dbf.firebaseio.com";

    constructor(private http:Http) { }

    getCompetitions() : Promise<any> {
        console.log('getCompetitions');
        return this._get("competitions");
    }

    getRaces(competition: string) : Promise<any> {
        console.log('getRaces', competition);
        return this._get(`races/${competition}`)
    }

    _get( route : string ) : Promise<any> {
        console.log('get ', route);
        return new Promise(resolve => {
                let url = `${this.base}/${route}.json`;
                console.log(`_get ${url}`);
                this.http.get(url).subscribe(res => resolve(res.json()))
        });
    }

}