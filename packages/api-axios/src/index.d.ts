/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable max-classes-per-file */
import { AxiosRequestConfig, AxiosResponse } from 'axios';

export interface ApiConfig extends AxiosRequestConfig {
  api?: boolean;
  cache?: boolean;
  cacheBust?: string | number | boolean;
  name?: string;
  pageBust?: string | number | boolean;
  path?: string;
  polling?: boolean;
  pollingIntervals?: number[];
  pollingMethod?: string;
  sessionBust?: boolean;
  version?: string;
}

type Request = any;

declare class AvApi<ConfigProps = ApiConfig> {
  constructor(options: ConfigProps);

  config(config?: ConfigProps): ConfigProps;

  addParams(params: object, config?: ConfigProps, newObj?: boolean): ConfigProps;

  cacheParams(config: ConfigProps): ConfigProps;

  getSessionBust(): any;

  getCacheustVal(cacheBust: any, defaultFn: () => any): any;

  getPageBust(): any;

  setPageBust(value: any): void;

  getUrl(config: ConfigProps, id?: string): string;

  getRequestUrl(): string;

  getLocation(response: any): string;

  shouldPoll(response: any): boolean;

  getQueryResultKey(data: any): any;

  getResult(data: any): any;

  request<TData = any>(config: ConfigProps, afterResponse?: (resp: any) => any): Promise<AxiosResponse<TData>>;

  onResponse(response: any, afterResponse?: (resp: any) => any): Promise<any>;

  sendBeacon(data: any, config?: ConfigProps): Promise<any>;

  // Create
  create<TData = any>(data: Request, config?: ConfigProps): Promise<AxiosResponse<TData>>;

  post<TData = any>(data: Request, config?: ConfigProps): Promise<AxiosResponse<TData>>;

  postGet<TData = any>(data: Request, config?: ConfigProps): Promise<AxiosResponse<TData>>;

  // Read
  get<TData = any>(id: string, config?: ConfigProps): Promise<AxiosResponse<TData>>;

  query<TData = any>(config?: ConfigProps): Promise<AxiosResponse<TData>>;

  getPage<TData = any>(page: number, config?: ConfigProps, limit?: number): Promise<AxiosResponse<TData>>;

  all<TData = any>(config?: ConfigProps): Promise<AxiosResponse<TData>>;

  // Update
  update<TData = any>(id: string, data: Request, config?: ConfigProps): Promise<AxiosResponse<TData>>;

  put<TData = any>(id: string, data: Request, config?: ConfigProps): Promise<AxiosResponse<TData>>;

  patch<TData = any>(id: string, data: Request, config?: ConfigProps): Promise<AxiosResponse<TData>>;

  // Delete
  remove<TData = any>(id: string, config?: ConfigProps): Promise<AxiosResponse<TData>>;

  delete<TData = any>(id: string, config?: ConfigProps): Promise<AxiosResponse<TData>>;
}

declare class AvMicroserviceApi extends AvApi {}

export interface ProxyApiConfig extends ApiConfig {
  tenant: string;
}
declare class AvProxyApi extends AvApi<ProxyApiConfig> {}

declare class AvCodesApi extends AvApi {}
declare const avCodesApi: AvCodesApi;

interface AvDisclaimersApi extends AvApi {
  getDisclaimers(id: string, config?: ApiConfig): Promise<AxiosResponse>;
}

declare const avDisclaimersApi: AvDisclaimersApi;

interface AvFilesApi extends AvApi {
  uploadFile(data: any, config?: ApiConfig): Promise<AxiosResponse>;
}

declare const avFilesApi: AvFilesApi;

interface AvFilesDeliveryApi extends AvApi {
  uploadFilesDelivery(data: any, config?: ApiConfig): Promise<AxiosResponse>;
  getLocation(response: any): string;
}

declare const avFilesDeliveryApi: AvFilesDeliveryApi;

interface AvLogMessagesApi extends AvApi {
  send(level: 'info' | 'debug' | 'warn' | 'error', entries: Record<string, any>): Promise<AxiosResponse>;
  debug(entries: Record<string, any>): Promise<AxiosResponse>;
  info(entries: Record<string, any>): Promise<AxiosResponse>;
  warn(entries: Record<string, any>): Promise<AxiosResponse>;
  error(entries: Record<string, any>): Promise<AxiosResponse>;
}

interface AvLogMessagesApiV2 extends AvLogMessagesApi {}

declare const avLogMessagesApi: AvLogMessagesApi;
declare const avLogMessagesApiV2: AvLogMessagesApi;

interface AvNavigationApi extends AvApi {}

declare const avNavigationApi: AvNavigationApi;

interface AvNotificationsApi extends AvApi {
  deleteByTopic(topic: string, config?: ApiConfig): Promise<AxiosResponse>;
}

declare const avNotificationsApi: AvNotificationsApi;

interface AvOrganizationsApi extends AvApi {
  queryOrganizations(user: { id: string }, config?: ApiConfig): Promise<AxiosResponse>;
  getOrganizations(config?: ApiConfig): Promise<AxiosResponse>;
  postGet(data: any, config?: ApiConfig, additionalPostGetArgs?: Record<string, any>): Promise<AxiosResponse>;
  getFilteredOrganizations(additionalPostGetArgs: Record<string, any>, data: any): Promise<AxiosResponse>;
  arePermissionsEqual(permissionId: string | number | string[] | number[]): boolean;
  sanitizeIds<T = string | number | string[] | number[]>(unsanitized: T): string | string[];
}

declare const avOrganizationsApi: AvOrganizationsApi;

interface AvPdfApi extends AvApi {
  onPdf(response: any): void;
  getPdf(data: any, config?: ApiConfig): Promise<AxiosResponse>;
}

declare const avPdfApi: AvPdfApi;

interface AvPermissionsApi extends AvApi {
  getPermissions(id: string, region: string): Promise<AxiosResponse>;
}

declare const avPermissionsApi: AvPermissionsApi;

type Provider = {
  name: string;
  businessName: string;
  lastName: string;
  firstName: string;
};
interface AvProvidersApi extends AvApi {
  getProviders(customerId: string, config?: ApiConfig): Promise<AxiosResponse>;
  normalize(providers: Provider[]): Provider[];
}

declare const avProvidersApi: AvProvidersApi;

interface AvRegionsApi extends AvApi {
  afterUpdate(response: any): any;
  getRegions(config?: ApiConfig): Promise<AxiosResponse>;
  getCurrentRegion(): Promise<AxiosResponse>;
}

declare const avRegionsApi: AvRegionsApi;

interface AvSettingsApi extends AvApi {
  getApplication(applicationId: string, config?: ApiConfig): Promise<AxiosResponse>;
  setApplication(applicationId: string, data: any, config?: ApiConfig): Promise<AxiosResponse>;
}

declare const avSettingsApi: AvSettingsApi;

interface AvSlotMachineApi extends Omit<AvApi, 'query'> {
  query<TData = any>(data: any, variables: any): Promise<AxiosResponse<TData>>;
}

declare const avSlotMachineApi: AvSlotMachineApi;

interface AvSpacesApi extends AvApi {
  parseSpaceId(query: string): string;
  getSpaceName(spaceId: string): Promise<string>;
}

declare const avSpacesApi: AvSpacesApi;

interface AvUserApi extends AvApi {
  me(config?: ApiConfig): Promise<any>;
}

declare const avUserApi: AvUserApi;

type Resource = {
  id: string;
  payerId: string;
  payerName: string;
};

type Organization = {
  id: string;
  customerId: string;
  name: string;
  resources: Resource[];
};

type AxiUserPermission = {
  id: string;
  description: string;
  organizations: Organization[];
};

interface AvUserPermissionsApi extends AvApi {
  afterQuery(response: AxiosResponse<{ axiUserPermissions: AxiUserPermission[] }>): AxiUserPermission[];
  getPermissions(permissionId: string | string[], region?: string): Promise<AxiUserPermission[]>;
}

declare const avUserPermissionsApi: AvUserPermissionsApi;

interface AvWebQLApi extends AvApi {}
declare const avWebQLApi: AvWebQLApi;

export default AvApi;

export {
  AvMicroserviceApi,
  AvProxyApi,
  avCodesApi,
  AvCodesApi,
  avDisclaimersApi,
  AvDisclaimersApi,
  avFilesApi,
  AvFilesApi,
  avFilesDeliveryApi,
  AvFilesDeliveryApi,
  avLogMessagesApi,
  AvLogMessagesApi,
  avLogMessagesApiV2,
  AvLogMessagesApiV2,
  avNavigationApi,
  AvNavigationApi,
  avNotificationsApi,
  AvNotificationsApi,
  avOrganizationsApi,
  AvOrganizationsApi,
  avPdfApi,
  AvPdfApi,
  avPermissionsApi,
  AvPermissionsApi,
  avProvidersApi,
  AvProvidersApi,
  avRegionsApi,
  AvRegionsApi,
  avSettingsApi,
  AvSettingsApi,
  avSlotMachineApi,
  AvSlotMachineApi,
  avSpacesApi,
  AvSpacesApi,
  avUserApi,
  AvUserApi,
  avUserPermissionsApi,
  AvUserPermissionsApi,
  avWebQLApi,
  AvWebQLApi,
};
