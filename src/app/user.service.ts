import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';

const API_URL = `${environment.api}/api/`;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {
  }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'public/all', {responseType: 'json'});
  }

  getDistributors(): Observable<any> {
    return this.http.get(API_URL + 'public/distributors', {responseType: 'json'});
  }

  getProduce(): Observable<any> {
    return this.http.get(API_URL + 'public/produce', {responseType: 'json'});
  }

  postConsumerRequest(distributorId: number, produce: Array<{ produceId: number; quantity: number; }>): Observable<any> {
    return this.http.post(API_URL + 'public/consumer/request', {
      distributorId,
      produce
    }, {responseType: 'json'});
  }

  getConsumer(): Observable<any> {
    return this.http.get(API_URL + 'consumer', {responseType: 'json'});
  }

  getProducer(): Observable<any> {
    return this.http.get(API_URL + 'producer', {responseType: 'json'});
  }

  getDistributor(): Observable<any> {
    return this.http.get(API_URL + 'distributor', {responseType: 'json'});
  }

  getRequests(): Observable<any> {
    return this.http.get(API_URL + 'distributor/requests', {responseType: 'json'});
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', {responseType: 'json'});
  }
}
