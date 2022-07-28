import { Injectable } from '@angular/core';
import { BaseHttpService } from 'src/app/shared/framework/base-http.service';
import { Speaker } from 'src/app/shared/models/speaker';

@Injectable({
  providedIn: 'root'
})
export class SpeakersService {

  constructor(private baseHttp: BaseHttpService) { }

  getSpeakers() {
    const request = this.baseHttp.createHttpRequest('/speakers');

    return this.baseHttp.httpGet<Speaker[]>(request);
  }

  createSpeaker(parameter: Speaker) {
    const request = this.baseHttp.createHttpRequest('/speakers', parameter);

    return this.baseHttp.httpPost<number>(request);
  }
}
