import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';


@Injectable()
export class RowingApi {
    
    private base = "https://cambridge-rowers-12dbf.firebaseio.com/";

    constructor(private http:Http) { }

    getCompetitions(){
        var url = `${this.base}/competitions.json`;
        var observable = this.http.get(url);
        return new Promise(r => {
            observable.subscribe(r=> )
        })
    }
}