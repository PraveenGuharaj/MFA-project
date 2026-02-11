import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  private branchLocatorUrl = 'http://34.1.33.119:8443/backoffice-service/branch-locator';
  private otpUrl = 'http://34.18.92.50:8443/backoffice-service/api/otpControlConfig';
  private otpDeleteUrl = 'http://34.18.92.50:8443/backoffice-service/api/otpControlConfig';
  private licenseDeleteUrl = 'http://34.1.33.119:8443/bko-license/post';
  private mfaCreateUrl = 'http://34.18.92.50:8443/backoffice-service/mfa';
  private mfaDeleteUrl = 'http://34.1.33.119:8443/backoffice-service/mfa/delete';
  private noficationCreateUrl = 'http://34.18.92.50:8443/bko-template';
  private templateDeleteUrl = 'http://34.18.92.50:8443/bko-template/post';
  private productDeleteUrl = 'http://34.18.92.50:8443/backoffice-service/cproduct/action';
  private readyToSynceDeleteUrl = 'http://34.1.33.119:8443/backoffice-service/migration/saveOrUpdate'
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

  authServerLogin(data: any) {
    console.log('data', data);

    const encryptedPs = RsaEncryptionUtil.encrypt(String(data.password));

    const body = {
      ps: encryptedPs,
      un: data.userName
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJJU1NVRVJfVEVTVCIsInN1YiI6IjVkNjE2NGJmLTBiMjAtNDI1MC1hMjAyLTZhYzExZGE5ZmJmYiIsImF1ZCI6IkFVRF9URVNUIiwiZXhwIjoxNzY4OTkxMjkxLCJpYXQiOjE3Njg5ODc2MzEsInNjb3BlIjoicmVhZCIsImFsbG93ZWRQcm9kdWN0IjoiV29ya2Zsb3cgQ29uZmlndXJhdGlvbiIsImFsbG93ZWRTdWJQcm9kdWN0cyI6WyJwcm9kdWN0NCIsIkNISUxEX1BST0RVQ1RfTUFOQUdFTUVOVCIsImJhbmsiLCJwcm9kdWN0IiwiTUFOQUdFX1VTRVJfQ09ORklHIiwiUFJPRFVDVF9NQU5BR0VNRU5UX0NPTkZJRyIsIlNVQl9QUk9EVUNUX01BTkFHRU1FTlRfQ09ORklHIiwiQUNDRVNTX1BFUk1JU1NJT05fTUFOQUdFTUVOVF9DT05GSUciLCJST0xFX01BTkFHRU1FTlRfQ09ORklHIiwiVVNFUl9HUk9VUF9NQU5BR0VNRU5UX0NPTkZJRyIsInByb2R1Y3QyIiwiUlVMRV9NQU5BR0VNRU5UX0NPTkZJRyIsInByb2R1Y3QzIiwic3ViIHByb2R1Y3QgY29kZSJdLCJhbGxvd2VkRmVhdHVyZXMiOlsiQWRkIiwiQWRkIiwiQWRkIiwiQWRkIiwiQWRkIiwiQWRkIiwiQWRkIl19.EsyWIM-ktTY1z7SsugsWg9AY_KcShc_w-v3igTjx9SD-UWoob3cxuDm0RSl0y6XC_Zr1KNa5DEoAuvs7Xc9lijyI4cTBs1bK88iTEJ4xccUC7_Tliv0dGvOO2LZKUoYJFcqAec8rdcw_y3ora8rXkJuz2VwlzHrmg8FWhoPhbypXxrHAGAGjBnCu4Ono0fuM1ieMvZ3cYx-EkoMeDW7V97XvPIK-2aLl_GOWouWVloNPUYThYzqe_yvfTHw9kUDZJ1FJBUB9FeHiUXamSeTd9tR2cbwV3ohgAoFFWj8hSJW3kW8D3a0MsUwCJryAiHInr4feXZN7TufEn-Gki89MLQ',
      'app-id': 'BO',
      'channel': 'BO'
    });


    return this.http.post(
      "http://34.1.33.119:8443/backoffice-service/auth-server/login",
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

  getBranchLocator() {
    return this.http.post(
      'http://34.1.33.119:8443/backoffice-service/branch-locator/getall',
      {}
    );
  }

  getChannelList() {
    return this.http.post(
      'http://34.1.33.119:8443/backoffice-service/features/list?channelId=ALL',
      {}
    );
  }

  getUserCount() {
    return this.http.get(
      '    http://34.1.33.119:8443/backoffice-service/login/user-count',
      {}
    );

  }

  getTransferViewCount() {
    return this.http.get(
      'http://34.1.33.119:8443/backoffice-service/transfer/viewCount',
      {}
    );
  }

  getUniqueLogins() {
    return this.http.get(
      'http://34.1.33.119:8443/backoffice-service/login/unique-logins',
      {}
    );
  }

  createTopFiveTxn(payload: any) {
    return this.http.post(
      'http://34.1.33.119:8443/backoffice-service/transfer/topFiveTransactions?channelId=ALL',
      payload
    );
  }

  getTopFailureTransaction(payload: any) {
    return this.http.post('http://34.18.92.50:8443/backoffice-service/transfer/topFailureTransactions?channelId=ALL',
      payload
    );
  }

  getOnboardingCounts() {
    return this.http.get(
      'http://34.1.33.119:8443/backoffice-service/onboarding/onboarding-counts',
      {}
    );
  }

  createBranchLocator(payload: any) {
    return this.http.post('http://34.1.33.119:8443/backoffice-service/branch-locator/add',
      payload
    );
  }

  deleteBranchLocator(productId: number): Observable<any> {
    const body = {
      branchId: productId
    };

    return this.http.post(`${this.branchLocatorUrl}/delete`, body);
  }

  updateBranchLocator(payload: any) {
    return this.http.post(
      'http://34.1.33.119:8443/backoffice-service/branch-locator/update',
      payload
    );
  }

  getMfa() {
    return this.http.post(
      ' http://34.1.33.119:8443/backoffice-service/mfa/getall ',
      {}
    );
  }

  getOtp() {
    return this.http.post(
      'http://34.18.92.50:8443/backoffice-service/api/otpControlConfig/getall',
      {}
    );
  }

  getBoDropdown() {
    return this.http.post(
      'http://34.18.92.50:8443/bko-domain/fetchAll-DD',
      {}
    );
  }

  getCategory() {
    return this.http.post(
      'http://34.18.92.50:8443/backoffice-service/api/rcategory/getall',
      {}
    );
  }

  getTemplate() {
    return this.http.post(
      'http://34.18.92.50:8443/bko-template/dropdown',
      {}
    );
  }


  createOtp(payload: any): Observable<any> {
    const headers = new HttpHeaders({
      userid: 'ram123',
      serviceid: ''
    });

    return this.http.post(
      `${this.otpUrl}/create`,
      payload,
      { headers }
    );
  }



  getChannel() {
    return this.http.post(
      'http://34.18.92.50:8443/backoffice-service/api/rchannel/getall',
      {}
    );
  }

  deleteOtp(configId: number): Observable<any> {
    const body = {
      configId: configId
    };

    const headers = new HttpHeaders({
      userid: 'fdf',
      serviceid: 'dfd'
    });

    return this.http.post(
      `${this.otpDeleteUrl}/delete`,
      body,
      { headers }
    );
  }

  getAtmLocator() {
    return this.http.post(
      'http://34.18.92.50:8443/backoffice-service/atm/getAll',
      {}
    );
  }

  updateOtp(payload: any) {
    const headers = new HttpHeaders({
      userid: 'fdf',
      serviceid: 'dfd'
    });

    return this.http.post(
      'http://34.18.92.50:8443/backoffice-service/api/otpControlConfig/update',
      payload,
      { headers }
    );
  }

  getLicense() {
    return this.http.post(
      'http://34.1.33.119:8443/bko-license/fetchAll',
      {}
    );
  }

  getLicenseDomain() {
    return this.http.post(
      'http://34.18.92.50:8443/bko-domain/fetchAll-DD',
      {}
    );
  }

  createLicense(payload: any) {
    return this.http.post('http://34.1.33.119:8443/bko-license/post ',
      payload
    );
  }

  updateLicense(payload: any) {
    return this.http.post(
      'http://34.1.33.119:8443/bko-license/post',
      payload
    );
  }


  deleteLicense(productId: any): Observable<any> {

    return this.http.post(`${this.licenseDeleteUrl}`, productId);
  }

  createMfaProduct(payload: any): Observable<any> {
    return this.http.post(`${this.mfaCreateUrl}/save`, payload);
  }

  updateMfaProduct(payload: any) {
    return this.http.post(
      'http://34.1.33.119:8443/backoffice-service/mfa/update',
      payload
    );
  }

  deleteMfa(productId: any): Observable<any> {
    return this.http.post(`${this.mfaDeleteUrl}`, productId);
  }

  getTemplateCreation() {
    return this.http.post(
      'http://34.18.92.50:8443/bko-template/fetchAll',
      {}
    );
  }

  getUnits() {
    return this.http.get(
      'http://34.18.92.50:8443/backoffice-service/units/all',
      {}
    );
  }

  getTemplateChannel() {
    return this.http.get(
      'http://34.18.92.50:8443/backoffice-service/channel/list',
      {}
    );
  }

  getLanguage() {
    return this.http.get(
      'http://34.18.92.50:8443/backoffice-service/language/summary',
      {}
    );
  }

  createNotification(payload: any) {
    return this.http.post(`${this.noficationCreateUrl}/post`, payload);
  }

  deleteTemplate(productId: any): Observable<any> {

    return this.http.post(`${this.templateDeleteUrl}`, productId);
  }

  getProduct() {
    return this.http.post(
      ' http://34.18.92.50:8443/backoffice-service/cproduct/getAll',
      {}
    );
  }

  createAdminProduct(payload: any) {
    return this.http.post('http://34.18.92.50:8443/backoffice-service/cproduct/action ',
      payload
    );
  }


  updateProduct(payload: any) {
    return this.http.post(
      'http://34.18.92.50:8443/backoffice-service/cproduct/action',
      payload
    );
  }

  deleteProduct(productId: any): Observable<any> {

    return this.http.post(`${this.productDeleteUrl}`, productId);
  }

  // getDatabaseConfig() {
  //   const headers = new HttpHeaders({
  //     token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJJU1NVRVJfVEVTVCIsInN1YiI6IjVkNjE2NGJmLTBiMjAtNDI1MC1hMjAyLTZhYzExZGE5ZmJmYiIsImF1ZCI6IkFVRF9URVNUIiwiZXhwIjoxNzY4OTkxMjkxLCJpYXQiOjE3Njg5ODc2MzEsInNjb3BlIjoicmVhZCIsImFsbG93ZWRQcm9kdWN0IjoiV29ya2Zsb3cgQ29uZmlndXJhdGlvbiIsImFsbG93ZWRTdWJQcm9kdWN0cyI6WyJwcm9kdWN0NCIsIkNISUxEX1BST0RVQ1RfTUFOQUdFTUVOVCIsImJhbmsiLCJwcm9kdWN0IiwiTUFOQUdFX1VTRVJfQ09ORklHIiwiUFJPRFVDVF9NQU5BR0VNRU5UX0NPTkZJRyIsIlNVQl9QUk9EVUNUX01BTkFHRU1FTlRfQ09ORklHIiwiQUNDRVNTX1BFUk1JU1NJT05fTUFOQUdFTUVOVF9DT05GSUciLCJST0xFX01BTkFHRU1FTlRfQ09ORklHIiwiVVNFUl9HUk9VUF9NQU5BR0VNRU5UX0NPTkZJRyIsInByb2R1Y3QyIiwiUlVMRV9NQU5BR0VNRU5UX0NPTkZJRyIsInByb2R1Y3QzIiwic3ViIHByb2R1Y3QgY29kZSJdLCJhbGxvd2VkRmVhdHVyZXMiOlsiQWRkIiwiQWRkIiwiQWRkIiwiQWRkIiwiQWRkIiwiQWRkIiwiQWRkIl19.EsyWIM-ktTY1z7SsugsWg9AY_KcShc_w-v3igTjx9SD-UWoob3cxuDm0RSl0y6XC_Zr1KNa5DEoAuvs7Xc9lijyI4cTBs1bK88iTEJ4xccUC7_Tliv0dGvOO2LZKUoYJFcqAec8rdcw_y3ora8rXkJuz2VwlzHrmg8FWhoPhbypXxrHAGAGjBnCu4Ono0fuM1ieMvZ3cYx-EkoMeDW7V97XvPIK-2aLl_GOWouWVloNPUYThYzqe_yvfTHw9kUDZJ1FJBUB9FeHiUXamSeTd9tR2cbwV3ohgAoFFWj8hSJW3kW8D3a0MsUwCJryAiHInr4feXZN7TufEn-Gki89MLQ',
  //   });

  //   return this.http.post(
  //     'http://34.1.33.119:8443/backoffice-service/dbconfig/getDbConfig ',
  //     {},               // request body (empty if you don’t have one)
  //     { headers }       // options
  //   );

  // }

  getDatabaseConfig() {
    return this.http.post(
      ' http://34.18.92.50:8443/backoffice-service/dbconfig/getDbConfig',
      {}
    );
  }

  getReadyToSync() {
    return this.http.post(
      ' http://34.1.33.119:8443/backoffice-service/migration/table-list',
      {}
    );
  }

  createReadyToSync(payload: any) {
    return this.http.post('http://34.1.33.119:8443/backoffice-service/migration/saveOrUpdate ',
      payload
    );
  }

  updateReadyToSync(payload: any) {
    return this.http.post(
      'http://34.1.33.119:8443/backoffice-service/migration/saveOrUpdate',
      payload
    );
  }

  deleteReadyToSync(productId: any): Observable<any> {

    return this.http.post(`${this.readyToSynceDeleteUrl}`, productId);
  }

  createDataBase(payload: any) {
    return this.http.post('http://34.1.33.119:8443/backoffice-service/dbconfig/createDbConfig',
      payload
    );
  }

  getSubProduct() {
    return this.http.post(
      ' http://34.18.92.50:8443/backoffice-service/csubproduct/getAll ',
      {}
    );
  }

  getProductApi() {
    return this.http.post(
      ' http://34.18.92.50:8443/backoffice-service/cproduct/fetchAll ',
      {}
    );
  }

  createAdminSubProduct(payload: any) {
    return this.http.post('http://34.18.92.50:8443/backoffice-service/csubproduct/create ',
      payload
    );
  }
}