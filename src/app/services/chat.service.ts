import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Configuration, OpenAIApi } from 'openai';
import { from} from 'rxjs';

const APIKEY = environment.apiKey;
@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor() {}
  readonly configuration = new Configuration({
    apiKey: APIKEY,
  });

  readonly openai = new OpenAIApi(this.configuration);

  getDataFromOpenAI(text: string) {
    return from(
      this.openai.createCompletion({
        model: 'text-davinci-003',
        prompt: text,
        max_tokens: 256,
        temperature: 0.7,
      })
    );
  }
}