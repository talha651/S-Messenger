import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgModel } from '@angular/forms'
import { AngularFireDatabase,FirebaseListObservable } from 'angularfire2/database';
import { login_email } from '../../app/login_email';

/**
 * Generated class for the SendmessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sendmessage',
  templateUrl: 'sendmessage.html',
})
export class SendmessagePage {
  
  constructor(public navCtrl: NavController, public navParams: NavParams,private fdata : AngularFireDatabase) {
  }
  send(message:string,send_to:string)
  {
    if(send_to==""||send_to==null)
    {
      alert("Please Provide UserID");
    }
    else
  {    
    setTimeout(() => {
      console.log("To : "+send_to);
      console.log("message : "+message)
      this.fdata.list("https://fir-messenger-6b189.firebaseio.com/registered_users/"+send_to+"/messages").push(message);
      alert("Your Message has been Sent");  
      this.navCtrl.pop();
    }, 1000); 
  }
  }
  back()
  {
    this.navCtrl.pop();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SendmessagePage');
  }

}
