import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { ClaimService } from '../claimservice.component';
import { DependentModel } from '../dependents.component';

@Component({
  selector: 'app-adddependent',
  templateUrl: './adddependent.component.html',
  styleUrls: ['./adddependent.component.css']
})
export class AdddependentComponent implements OnInit {
  dependents:DependentModel[]=[];
  dependent:DependentModel={
    DependentId:0,
    MemberId:'',
    Name:'',
    DOB:new Date
     }
dateofbirth:any=new Date;
    id:number=0;
    
  



    constructor(public claimServiceComponent : ClaimService,private router: Router,private appComponent: AppComponent,private route:ActivatedRoute) { }

  ngOnInit(): void {
    if (localStorage.getItem("Member") == null) {
      this.router.navigate(['Login']);
    }
    let values = JSON.parse(localStorage.getItem("Member") || '');
 
 
  this.id=values.id;
  }
  OnSubmit(){
    console.log('hey',this.dependent);
    let values = JSON.parse(localStorage.getItem("Member") || '');

    this.dependent.MemberId = values.id;
    



   this.AddClaim(this.dependent);
  }
  AddClaim(dependent: DependentModel)
    {
      // this.member.Id=0;
      this.claimServiceComponent.adddependent(dependent)
      .subscribe(
        response => { this.dependents }
    );
    alert("Dependent added successfully");
    this.router.navigate(["Available"]);
    localStorage.setItem("isAvailableClaim",'true');
    localStorage.setItem("isDependent",'false');
    localStorage.setItem("isSubmitClaim",'false');
    this.appComponent.isAvailableClaim=true;
    this.appComponent.isSubmitClaim=false;
    this.appComponent.isDependent=false;
    }
    enrollclick(){
      this.router.navigate(["Available"]);
      localStorage.setItem("isAvailableClaim",'true');
      localStorage.setItem("isSubmitClaim",'false');
      localStorage.setItem("isDependent",'false');
      this.appComponent.isAvailableClaim=true;
      this.appComponent.isSubmitClaim=false;
      this.appComponent.isDependent=false;
    
    }
}
