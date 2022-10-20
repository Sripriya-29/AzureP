import { Component, OnInit } from '@angular/core';
import { ClaimService } from '../claimservice.component';
import { MemberModel } from '../members.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  members:MemberModel[]=[];
  
  member1:MemberModel={
    id:0,
    memberId:'',
    name:'',
    address:'',
    state:'',
    country:'',
    email:'',
    pan:'',
    contactNo:0,
    dob:new Date ,
  password:''}
 

  constructor(public claimServiceComponent : ClaimService) { }

  ngOnInit(): void {
    
  }
  onSubmit()
    {
     
      console.log(this.member1);
      this.searchMembers(this.member1);
    }
    searchMembers(member: MemberModel)
  {
    this.claimServiceComponent.searchMembers(member.name).subscribe(
      response => { this.members = response});
  }
  
        

}
