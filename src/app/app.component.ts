import { Component,OnDestroy,OnInit } from '@angular/core';
import { Router } from '@angular/router';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name='';
  title = 'AngularUiMemberClaim';
  Islogoutshow=false;
  id='';
  Ismemberregister= false;
  isAvailableClaim=false;
  isSubmitClaim=false;
  isDependent=false;
  constructor(private router:Router){}
  signOutClick() {
    // remove user from local storage to log user out
  localStorage.removeItem("Member");
  localStorage.removeItem("Token");
  localStorage.setItem("isAvailableClaim",'false');
    localStorage.setItem("isSubmitClaim",'false');
    localStorage.setItem("isDependent",'false');
    localStorage.setItem("Islogoutshow",'false');
  this.name='';
  this.id='';
  this.Islogoutshow=false;
  this.Ismemberregister=false;
  this.isAvailableClaim=false;
  this.isSubmitClaim=false;
  this.isDependent=false;

    this.router.navigate(['/Login']).then(() => {
      window.location.reload();
    });          
  }



 ngOnInit(){
  let values = JSON.parse(localStorage.getItem("Member") || '');
  this.name=values.name;
  this.id=values.memberId;
  console.log(this.id);
  console.log(this.name);
  console.log(values);
    let registers=JSON.parse(localStorage.getItem("Ismemberregister")|| '');
    let availableclaim=JSON.parse(localStorage.getItem("isAvailableClaim")|| '');
    let submitclaim=JSON.parse(localStorage.getItem("isSubmitClaim")|| '');
    let dependentm=JSON.parse(localStorage.getItem("isDependent")|| '');
    let logoutshow=JSON.parse(localStorage.getItem("Islogoutshow")|| '');
    console.log(registers);
    this.Ismemberregister = registers;
    this.isAvailableClaim = availableclaim;
    this.isSubmitClaim=submitclaim;
    this.isDependent=dependentm;
    this.Islogoutshow=logoutshow;
    

  }
}