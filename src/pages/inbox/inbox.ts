import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { NgModel } from '@angular/forms'
import { login_email } from '../../app/login_email';
import { SendmessagePage } from '../sendmessage/sendmessage';
import { HomePage } from '../home/home';


/**
 * Generated class for the InboxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inbox',
  templateUrl: 'inbox.html',
})
export class InboxPage {
  user_data = [];  
  temp  = [];
  messsagesobj = [];
  messages = [];
  
  public display_name :string;
  constructor(public navCtrl: NavController, public navParams: NavParams,private fdata:AngularFireDatabase) {
    this.fdata.list("https://fir-messenger-6b189.firebaseio.com/registered_users/"+login_email.email).subscribe(_data => {
    this.user_data = _data;
    console.log("ye real hai");
    this.display_name = this.user_data[0].user_name;
    
    });
    //this.send_message("");
    this.fdata.list("https://fir-messenger-6b189.firebaseio.com/registered_users/"+login_email.email+"/messages").subscribe(_messages => {
    //console.log(_messages);  
     this.messsagesobj = _messages;
    
      });
    //console.log("Messages aengy ab :");
    //console.log(this.messages);
    //this.fdata.list("https://fir-messenger-6b189.firebaseio.com/registered_users/"+login_email.email+"/messages").push("second");
    //this.fdata.list("https://fir-messenger-6b189.firebaseio.com/registered_users/"+login_email.email+"/messages").push("third");
    this.show();
  }

  show()
  {
    for(var i=0;i<this.messsagesobj.length;i++)
    {

    this.messages[i] = this.messsagesobj[i].$value;
      console.log("message : "+this.messages[i]);
      
    }
  }
  sendpage()
  {
    this.navCtrl.push(SendmessagePage);

  }

  logout()
  {
    this.navCtrl.push(HomePage);
  }

  expand(m_num)
  {
    alert(this.messages[m_num]);
    console.log(m_num);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InboxPage');
  }

}
