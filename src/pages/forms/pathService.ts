import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

export class PathService {
    static get parameters() {
        return [[Http]];
    }

    constructor(private http:Http) {

    }

    submitFormPath(tripInfo) {
        var url = 'http://localhost:8080/restapi/sbarquero/cars' //+ encodeURI(movieName) + '&api_key=5fbddf6b517048e25bc3ac1bbeafb919';
        var response = this.http.get(url).map(res => res.json());
        return response;
    }
}
