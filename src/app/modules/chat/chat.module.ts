import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

// Import components
import { ChatComponent } from './components/chat/chat.component';
import { ChatMessageComponent } from './components/chat-message/chat-message.component';

@NgModule({
  declarations: [ ChatComponent, ChatMessageComponent ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      { path: '', component: ChatComponent },
    ])
  ],

})
export class ChatModule { }
