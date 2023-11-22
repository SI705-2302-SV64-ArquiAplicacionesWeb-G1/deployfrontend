import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent {
  constructor(public route:ActivatedRoute){}
}
