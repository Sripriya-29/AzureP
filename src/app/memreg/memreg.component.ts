import { Component, OnInit } from '@angular/core';
import { MemberModel } from '../members.component';






import { ClaimService } from '../claimservice.component';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-memreg',
  templateUrl: './memreg.component.html',
  styleUrls: ['./memreg.component.css']
})
export class MemregComponent implements OnInit {
  memId:number=0;
  members:MemberModel[]=[];
  date1: Date = new Date();
  date2: Date = new Date();
  date3: Date = new Date("2000-10-05");
  
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
  constructor(public claimServiceComponent : ClaimService,private route:ActivatedRoute,private router: Router) { }





ngOnInit(): void {
  this.isDateEqual(this.date3);
  console.log(this.isDateEqual(this.date3));
 
  }
  onSubmit(){
    console.log('hey',this.member);
    this.AddMember(this.member);
    
  }





AddMember(member: MemberModel)
    {
      // this.member.Id=0;
      this.claimServiceComponent.addMember(member)
      .subscribe(
        response => { this.members; console.log(this.member.dob) }
    );
    alert("Member added successfully ");
    this.router.navigate(['Login']);
    }



   isDateEqual(date:Date) {
      var flag = false;
      var timestamp1 = new Date(date).getFullYear();
      var timestamp2 = new Date(this.date2).getFullYear();
      
      var diff =  timestamp2 - timestamp1;



     if(diff < 18)
      {
        flag = true;
        return flag;
        
      }
      return flag;
      
      
      
      
      console.log(diff);
    }



}