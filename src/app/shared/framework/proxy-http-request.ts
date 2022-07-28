export class ProxyHttpRequest {
  public uri = '';
  public parameter: any = null;
  public notifyToMainApp = true;
  public header?: Array<{ name: string, value: string }> = [];

  constructor(uri: string = '') {
    this.uri = uri;
  }
}
