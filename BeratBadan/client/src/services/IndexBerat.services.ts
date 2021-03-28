import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient,HttpHeaders, HttpParams  } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import { Http, Response,Headers,RequestOptions } from '@angular/http';

@Injectable({providedIn: 'root'})
export class IndexBerat {
    dataIndexBerat = [];
    numberChanged = 0;
    host = 'http://127.0.0.1:3333'
    IndexBeratUpdate:any =[]
    httpOptions = {
        headers: new HttpHeaders( {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Z-Key',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
        })
       
      };
      
    
    constructor(private httpClient: HttpClient) {

    }
 
    update(id,max,min) {

        const headers = new HttpHeaders()
            .set("Content-Type", "application/json");
        
        return this.httpClient.patch(`http://127.0.0.1:3333/api/v1/beratbadan/edit/${id}`,
            {
                "min":max,
                "max":min
            },
            {headers})
    }
    fetchData() {
       return this.httpClient.get<any>('http://127.0.0.1:3333/api/v1/beratbadan/list').pipe(map(cust => {
            console.log(cust.data);
            return cust.data;
        }))
    }

    fetchAverage() {
        return this.httpClient.get<any>('http://127.0.0.1:3333/api/v1/beratbadan/list').pipe(map(el => {
             return el.average;
         }))
    }

    delete(id){
       
        return this.httpClient.delete(`http://127.0.0.1:3333/api/v1/beratbadan/destroy/${id}`,this.httpOptions)
    }

    add(name,email){ 
        const headers = new HttpHeaders()
        .set("Content-Type", "application/json");
    
        return this.httpClient.post("http://127.0.0.1:3333/api/v1/beratbadan/create",
            {
                "min":email,
                "max":name
            },
            {headers})
    }
}
