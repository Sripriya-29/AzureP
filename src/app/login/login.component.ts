import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { ClaimModel } from '../claim.component';
import { ClaimService } from '../claimservice.component';
import { MemberModel } from '../members.component';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  members:MemberModel[]=[];
  memid:any;
  claims:ClaimModel[]=[];
  
  claim:ClaimModel={
    ClaimId:0,
    MemberId:'',
    MemberName:'',
    Dob:new Date,
    DateOfAdmission:new Date,
    DateOfDischarge:new Date,
    ProviderName:'',
    BillAmount:0
     }
  member:MemberModel={
    id:0,
    memberId:'',
    name:'',
    address:'',
    state:'',
    country:'',
    email:'',
    pan:'',
    contactNo:0,
    dob:new Date,
  password:'' }
  token: string = '';
  isAuthenticated: boolean = false;
  response: any;
  constructor(private service: ClaimService, private router: Router, private http: HttpClientModule,private appComponent:AppComponent) { }





ngOnInit(): void {
   console.log('login submit'+this.appComponent.isSubmitClaim);
  }
  onSubmit() {
    this.service.loginuser(this.member).subscribe(
       response => {
         console.log('hello',response);
         this.response = response;
        if (response.isAuthenticated == true) {
           localStorage.setItem("Token", response.token);
           localStorage.setItem('Member', JSON.stringify(this.response.member));
           localStorage.setItem("Ismemberregister",'false');
           localStorage.setItem("isAvailableClaim",'true');
           localStorage.setItem("isSubmitClaim",'false');
           
           localStorage.setItem("isDependent",'false');
           localStorage.setItem("Islogoutshow",'true');
          this.appComponent.Islogoutshow=true;
          this.appComponent.Ismemberregister=false;
          this.appComponent.isAvailableClaim=true;
          this.appComponent.isSubmitClaim=false;
          this.appComponent.isDependent=false;
          this.router.navigate(["Available"]);
         }
         else {
           alert('User not registered, please register to login');
           this.router.navigate(["home"]);
           this.appComponent.Islogoutshow=false;
           this.appComponent.Ismemberregister=true;
           localStorage.setItem("Ismemberregister",'true');
           localStorage.setItem("isAvailableClaim",'false');
           localStorage.setItem("isSubmitClaim",'false');
           localStorage.setItem("isDependent",'false');
           localStorage.setItem("Islogoutshow",'false');
           this.appComponent.isAvailableClaim=false;
           this.appComponent.isSubmitClaim=false;
           this.appComponent.isDependent=false;;
         }
        }
      );
      }

      regclick(){
        this.router.navigate(["home"]);
        this.appComponent.Islogoutshow=false;
        this.appComponent.Ismemberregister=true;
        localStorage.setItem("Ismemberregister",'true');
        localStorage.setItem("isAvailableClaim",'false');
        localStorage.setItem("isSubmitClaim",'false');
        localStorage.setItem("isDependent",'false');
        localStorage.setItem("Islogoutshow",'false');
        this.appComponent.isAvailableClaim=false;
        this.appComponent.isSubmitClaim=false;
        this.appComponent.isDependent=false;;
      }
     
       }