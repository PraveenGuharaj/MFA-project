import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, switchMap } from 'rxjs';
import { RsaEncryptionUtil } from '../../shared/utils/encryption.util';

@Injectable({
  providedIn: 'root',
})
export class AdminCenterService {
  private refreshSource = new Subject<void>();
  refresh$ = this.refreshSource.asObservable();

  private baseUrl = 'http://34.1.33.119:8443/backoffice-service/rproducts';
  privateSubProduct = 'http://34.18.92.50:8443/backoffice-service/rsubproduct';
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
      // 'http://34.1.33.119:8443/backoffice-service/api/rchannel/getall',
      'http://34.18.92.50:8443/backoffice-service/rsubproduct/getall',

      {}
    );
  }

  deleteRetailProduct(productId: number): Observable<any> {
    const body = {
      productId: productId
    };

    return this.http.post(`${this.baseUrl}/delete`, body);
  }

  deleteSubProduct(productId: number): Observable<any> {
    const body = {
      modifiedBy: "admin",
      subProductId: productId
    };

    return this.http.post(`${this.privateSubProduct}/delete`, body);
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


  authServerLogin(data: any) {
    console.log('data', data);

    const encryptedPs = RsaEncryptionUtil.encrypt(data.password);

    const body = {
      ps: encryptedPs,
      un: data.userName
    };

    const headers = {
      'Content-Type': 'application/json'
    };

    return this.http.post(
      // 'http://34.1.33.119:8443/backoffice-service/auth-server/login',
      "http://34.18.92.50:8443/backoffice-service/auth-server/login",

      // http://34.1.33.119:8443/backoffice-service/auth-server/login
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

  createSubProduct(payload: any) {
    return this.http.post(
      ' http://34.1.33.119:8443/backoffice-service/rsubproduct/save',
      payload
    );
  }

  updateSubProduct(payload: any) {
    return this.http.post(
      'http://34.18.92.50:8443/backoffice-service/rsubproduct/update',
      payload
    );
  }

  trigger() {
    this.refreshSource.next();
  }
}