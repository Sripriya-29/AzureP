import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { ClaimService } from '../claimservice.component';
import { DependentModel } from '../dependents.component';
import { MemberModel } from '../members.component';
import { UpdateDependentModel } from '../updatedependent.component';
import { UpdateMemberModel } from '../updatemember.component';









@Component({
  selector: 'app-availableclaim',
  templateUrl: './availableclaim.component.html',
  styleUrls: ['./availableclaim.component.css']
})
export class AvailableclaimComponent implements OnInit {
  memid:string='';
  depid:number=0;
  countno:number=1;
  memberid:number=0;
  displayList: boolean= false;
  addMemBool:boolean = false;
  showDeepBool:boolean =  false;
  claims:any;
  dependents1:DependentModel={
    DependentId:0,
    MemberId:'',
    Name:'',
    DOB:new Date
    
  }
  memIds:string='';
  mems1: MemberModel={
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
  password:'' };
  members:MemberModel[]=[];
  dependents:any;
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









constructor(public claimServiceComponent : ClaimService,private router: Router, private http: HttpClientModule,private appcomp:AppComponent) { }









ngOnInit(): void {
  if (localStorage.getItem("Member") == null) {
    this.router.navigate(['Login']);
  }
    let values = JSON.parse(localStorage.getItem("Member") || '');
    this.memid = values.id;
    this.appcomp.name=values.name;
    this.appcomp.id=values.memberId;
    // localStorage.setItem("isAvailableClaim",'true');
    
  this.appcomp.name=values.name;
    this.claimServiceComponent.getAllClaimsId(this.memid)
    .subscribe(
      response => { this.claims = response;}
    );
    this.memberid=values.id;
   
    
    this.claimServiceComponent.getmemberInfo(this.memberid).subscribe(
      response => { this.mems1 = response});
      // this.claimServiceComponent.getDependents(this.depid).subscribe(
      //   response => { this.dependents1 = response});

      this.claimServiceComponent.getDependentsId(this.memid)
      .subscribe(
        response => { this.dependents = response;
        
        if(this.dependents?.length >0)
        {
        this.showDeepBool = true;
        }
        else
        {
        
        this.addMemBool = true;
        }
  
        }
      );


 }
  update(id:number,email:string,pan:string,state:string,address:string,contactno:number)
  {
  const upmem : UpdateMemberModel = {
      address: address,
      state: state,
      email: email,
      pan: pan,
      contactNo: contactno
    }
    this.claimServiceComponent.updatemember(id,upmem).subscribe(
      response =>{
        this.claimServiceComponent.getmemberInfo(this.memberid);
        alert('member content updated');
      }
    );
  }
  updatedep(id:number,dob:any)
  {
   
    const updeps : UpdateDependentModel = {
         dob: dob
        
        }
        console.log('date',updeps);
    this.claimServiceComponent.updatedependent(id,updeps).subscribe(
      response =>{
        this.claimServiceComponent.getDependentsId(this.memid).subscribe(res => {
        this.dependents = res;
        })
      }
    );
  }
  submit(){
    this.appcomp.isAvailableClaim=false;
    this.appcomp.isDependent=false;
    this.appcomp.isSubmitClaim=true;
    localStorage.setItem("isAvailableClaim",'false');
    localStorage.setItem("isDependent",'false');
    localStorage.setItem("isSubmitClaim",'true');
    this.router.navigate(["submit"]);
}
submitwithname(name:string,dob:Date){
 
 this.appcomp.isAvailableClaim=false;
 this.appcomp.isDependent=false;
  this.appcomp.isSubmitClaim=true;
  localStorage.setItem("isAvailableClaim",'false');
  localStorage.setItem("isDependent",'false');
  localStorage.setItem("isSubmitClaim",'true');
this.router.navigate(['submit/',name,dob]);

}
showdependent(){
  // this.claimServiceComponent.getDependentsId(this.memid)
  // .subscribe(
  //   response => { this.dependents = response;}
  // );
  if(this.dependents.length >0)
  this.displayList = true;
  else
  {
  this.displayList = false
  this.addMemBool = true;
  }
}
Add(){
  this.router.navigate(['Add/']);
  localStorage.setItem("isDependent",'true');
  this.appcomp.isDependent=true;
  localStorage.setItem("isAvailableClaim",'false');
  localStorage.setItem("isSubmitClaim",'false');
  this.appcomp.isAvailableClaim=false;
  this.appcomp.isSubmitClaim=false;
}
}