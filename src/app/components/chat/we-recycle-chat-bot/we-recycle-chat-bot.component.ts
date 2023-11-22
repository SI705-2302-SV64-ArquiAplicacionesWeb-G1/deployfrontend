import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-we-recycle-chat-bot',
  templateUrl: './we-recycle-chat-bot.component.html',
  styleUrls: ['./we-recycle-chat-bot.component.css']
})
export class WeRecycleChatBotComponent  implements OnInit{
  message!: string;
  texto: string = '';
  constructor(private chatbot: ChatService){}
  ngOnInit(): void {
         
  }
  sendMessage() {
    this.chatbot.getDataFromOpenAI(this.message).subscribe((x: any) => {
      console.log(x);
      this.texto = x.data.choices[0].text;
    });
    this.message = '';
  }

  limpiar() {
    location.reload();
  }
}
