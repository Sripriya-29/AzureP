import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClaimModel } from './claim.component';
import { DependentModel } from './dependents.component';
import { Login } from './login';
import { MemberModel } from './members.component';
import { UpdateDependentModel } from './updatedependent.component';
import { UpdateMemberModel } from './updatemember.component';
@Injectable({
  providedIn: 'root'
})
export class ClaimService {
  
baseUrl = 'https://localhost:7270/api/Members';
claimUrl='https://localhost:7270/api/Claims';
validateUrl='https://localhost:7092/validate';
dependentUrl='https://localhost:7270/api/Dependents';
// baseUrl = 'https://claimservices20221014110544.azurewebsites.net/api/Members';
// claimUrl='https://claimservices20221014110544.azurewebsites.net/api/Claims';
// validateUrl='https://memberclaim20221014171753.azurewebsites.net/validate';
// dependentUrl='https://claimservices20221014110544.azurewebsites.net/api/Dependents';
claimmemberBookurl ='https://7270/api/Claims';
constructor(private http: HttpClient) { }
addMember(member: MemberModel):Observable<MemberModel> {
    return this.http.post<MemberModel>(this.baseUrl, member);
  }
  getmember(member:MemberModel):Observable<MemberModel>{
    return this.http.get<MemberModel>(this.baseUrl +'/'+member.id);

  }
  getmemberInfo(Id:number):Observable<MemberModel>{
    return this.http.get<MemberModel>(this.baseUrl +'/'+Id);
  }
  searchMembers(Mname:string):Observable<MemberModel[]>{
    return this.http.get<MemberModel[]>(this.baseUrl +'/SearchMember?MName='+Mname);
  
  }
 

  addClaim(claim: ClaimModel):Observable<ClaimModel> {
    return this.http.post<ClaimModel>(this.claimUrl, claim);
  }
  adddependent(dependent: DependentModel):Observable<DependentModel> {
    return this.http.post<DependentModel>(this.dependentUrl, dependent);
  }
  ValidateUsers(userValidation:Login):Observable<Login>
{
  return this.http.post<Login>(this.validateUrl,userValidation);
}
updatemember(id:number,umember:UpdateMemberModel):Observable<UpdateMemberModel> {
   

  return this.http.put<UpdateMemberModel>(this.baseUrl+'/'+id,umember);
}
updatedependent(id:number,udependent:UpdateDependentModel):Observable<UpdateDependentModel> {
   

  return this.http.put<UpdateDependentModel>(this.dependentUrl+'/'+id,udependent);
}
loginuser(member: MemberModel):Observable<any>{
  var request={
    name:member.name,
    password:member.password
  }
  return this.http.post<any>(this.validateUrl,request);
}
getAllClaimsId(memid:String):Observable<ClaimModel[]>{
  return this.http.get<ClaimModel[]>(this.claimUrl+'/GetMmeber?mid='+memid);
}
getDependentsId(memid:String):Observable<DependentModel[]>{
  return this.http.get<DependentModel[]>(this.dependentUrl+'/GetDependent?mid='+memid);
}
getDependents(id:number):Observable<DependentModel>{
  return this.http.get<DependentModel>(this.dependentUrl+'/'+id);
}
updatebook(id:number,dob:Date):Observable<DependentModel> {
   
  return this.http.put<DependentModel>(this.dependentUrl+'/ubook?id='+id+'&dob='+dob,id);
}


}