import Api, {
  logMessagesApi,
  navigationApi,
  organizationsApi,
  permissionsApi,
  providersApi,
  ProxyApi,
  regionsApi,
  spacesApi,
  userApi,
  userPermissionsApi,
} from '../';

describe('AvAPi', () => {
  test('should be defined', () => {
    const api = new Api({});
    expect(api).toBeDefined();
    const proxy = new ProxyApi({ tenant: 'healthplan' });
    expect(proxy).toBeDefined();
  });
});

describe('API Definitions', () => {
  test('should be defined', () => {
    expect(logMessagesApi).toBeDefined();
    expect(navigationApi).toBeDefined();
    expect(organizationsApi).toBeDefined();
    expect(permissionsApi).toBeDefined();
    expect(providersApi).toBeDefined();
    expect(regionsApi).toBeDefined();
    expect(spacesApi).toBeDefined();
    expect(userApi).toBeDefined();
    expect(userPermissionsApi).toBeDefined();
  });
});
