import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, FabList } from 'ionic-angular';
import { AngularFireDatabase,FirebaseListObservable } from 'angularfire2/database';
import { HomePage } from '../home/home';
import { Form } from '@angular/forms'
import { LoginPage } from '../login/login';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  total : number;
  temp : string;
  wrong_email:boolean;
  exsisting_email:boolean;
  emails = [];
  messages = "Hi there...! ThankYou For Registering Yourself";
  constructor(public navCtrl: NavController, public navParams: NavParams,private fdata : AngularFireDatabase) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  
  back()
  {
    this.navCtrl.pop();
  }


  signup(user_name:string,usre_age:number,user_email:string,user_password:string,messages=[])
  {
    //this.fdata.list("https://fir-messenger-6b189.firebaseio.com/registered_users/Hamza Ahmed").subscribe(_data => {
      
    //console.log(_data[0].$key);
    //});
    if(user_email == "" || user_email == null || user_password == "" || user_password == null || usre_age == 0 || usre_age == null || user_name == "" || user_name == null)
    {
      alert("Feilds Could Not be Left Empty");
    }
    else if(user_email.length<5 || user_password.length<5 ||user_name.length<5)
    {
      
      alert("please Fill the appropriate Information\nName,User Name & Passwrd Should be of Atleast 5 Letters");
    }
    else
    {
    for(var i=0;i<user_email.length;i++)
    {
      if(user_email[i]=='$'||user_email[i]=='.')
      {
        this.wrong_email =true
      }
    }
    
      
      if(!this.wrong_email)
      {
      this.fdata.list("https://fir-messenger-6b189.firebaseio.com/registered_users/emails").push(user_email);
      this.fdata.list("https://fir-messenger-6b189.firebaseio.com/registered_users/"+user_email).push({user_name,usre_age,user_email,user_password});
      this.fdata.list("https://fir-messenger-6b189.firebaseio.com/registered_users/"+user_email+"/messages").push("Hi threre...! Thank You For Registering Yourself");
      //this.fdata.list("https://fir-messenger-6b189.firebaseio.com/registered_users/"+user_name+"/name").push(user_name);
      //this.fdata.list("https://fir-messenger-6b189.firebaseio.com/registered_users/"+user_name+"/age").push(usre_age);
      //this.fdata.list("https://fir-messenger-6b189.firebaseio.com/registered_users/"+user_name+"/emails").push(user_email);
      //this.fdata.list("https://fir-messenger-6b189.firebaseio.com/registered_users/"+user_name+"/passwords").push(user_password);
      this.navCtrl.push(LoginPage);
      alert("Account Created");
    }
    else
    {
      alert("Make Sure that User Id don't have $ or . characters");
      this.wrong_email = false;
    }
  }
  }
}
