import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import Bug from './entity/Bug';
const BASE_URL = "http://localhost:3000/bugs";
@Injectable()//Bean
export  class BugService { //public = export
    constructor(private http: HttpClient) { }
    getBugs() {
        return this.http.get(BASE_URL);
    }

    getByStatus(status:string) {
        return this.http.get(BASE_URL + '?status=' +  status);
    }

    save(bug: Bug) {
        console.log(bug);
        return this.http.post(BASE_URL, bug, {
            headers: {
                "content-type": "application/json"
            }
        });
    }

}
