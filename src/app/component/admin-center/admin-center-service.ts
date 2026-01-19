import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { RsaEncryptionUtil } from '../../shared/utils/encryption.util';

@Injectable({
  providedIn: 'root',
})
export class AdminCenterService {
  private baseUrl = 'http://34.1.33.119:8443/backoffice-service/rproducts';

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.post(
      'http://34.1.33.119:8443/backoffice-service/rproducts/getall',
      {}
    );
  }


  createProduct(payload: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/create`, payload);
  }

  getAllSubProducts() {
    return this.http.post(
      'http://34.1.33.119:8443/backoffice-service/api/rchannel/getall',
      {}
    );
  }

  deleteRetailProduct(productId: number): Observable<any> {
    const body = {
      productId: productId
    };

    return this.http.post(`${this.baseUrl}/delete`, body);
  }

  getAllCountry() {
    return this.http.post(
      'http://34.1.33.119:8443/bko-country/fetchAll',
      {}
    );
  }

  authlogin() {
    return this.http.post('http://34.18.92.50:8443/backoffice-service/auth-server/public/rp',
      {}
    )

  }

  // authServerLogin() {
  //       const encryptedPs = RsaEncryptionUtil.encrypt('sysadmin123');


  //    const body = {
  //     ps: encryptedPs,
  //     un: 'ram123'
  //   };

  //   return this.http.post('http://34.1.33.119:8443/backoffice-service/auth-server/login', body);
  // }


  authServerLogin() {
    const encryptedPs = RsaEncryptionUtil.encrypt('sysadmin123');

    const body = {
      ps: encryptedPs,
      un: 'ram123'
    };

    const headers = {
      'Content-Type': 'application/json'
    };

    return this.http.post(
      'http://34.1.33.119:8443/backoffice-service/auth-server/login',
      body,
      { headers }
    );
  }

  encryptPassword(rawPassword: any) {
    throw new Error('Method not implemented.');
  }

  updateRetailProduct(payload: any) {
    return this.http.post(
      'http://34.1.33.119:8443/backoffice-service/rproducts/update',
      payload
    );
  }

}