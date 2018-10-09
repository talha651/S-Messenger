import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { HomePage } from '../home/home';
import { InboxPage } from '../inbox/inbox';
import { Form } from '@angular/forms'
import { login_email } from '../../app/login_email';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  account_chck : boolean;
  password_chck : boolean;
  password;
  emails = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,private fdata:AngularFireDatabase) {
    this.fdata.list("https://fir-messenger-6b189.firebaseio.com/registered_users/emails").subscribe(_data => {
      this.emails = _data;
    });
    
  }

back()
{
  this.navCtrl.pop();
}

login(useremail:string,userpassword:string)
{
  if(useremail==""||useremail==null)
  {
    alert("Please Fillin Appropriate Information");
  }
  else
  {
  this.fdata.list("https://fir-messenger-6b189.firebaseio.com/registered_users/emails").subscribe(_data => {
      login_email.email = _data[0].useremail;
    });   
  console.log(this.emails);  
  for(var i=0;i<this.emails.length;i++)
  {
    console.log("ye wala b chal rha hai");
    if(useremail == this.emails[i].$value)
    {
      this.account_chck = true;
      this.password_chck = false;
      login_email.email = useremail;
      break;
    }

    else
    {
      this.account_chck=false;
      this.password_chck = false;
    }
  }
  if(this.account_chck)
  {
  this.fdata.list("https://fir-messenger-6b189.firebaseio.com/registered_users/"+login_email.email).subscribe(_pass => {
      this.password = _pass[0].user_password;
      
    });
  }
    setTimeout(() => {
      
      
      
      
    if(!this.account_chck)
    {
      alert("Account Not Found");
    
    }
    
    else if(this.password == userpassword)
    {
      console.log(this.password+" = "+userpassword);
    this.password_chck=true;
    }
    if(this.account_chck && !this.password_chck)
      {
        alert("Wrorng Password");
     }
     else if(this.account_chck&&this.password_chck)
      {
      this.navCtrl.push(InboxPage);
      console.log(" achck : "+this.account_chck+" passchk : "+this.password_chck+""+" dpass : " + this.password+ " upass : "+userpassword);
       
      }
    console.log(this.password_chck+" "+this.account_chck+" ");
      console.log("timeout : "+this.password);  
    }, 1000);
    
    
  
    console.log("wooo "+login_email.email);
    console.log("paa "+this.password);
  }
}


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }



}
