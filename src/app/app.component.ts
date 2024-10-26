import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private http: HttpClient )  {}
  request:string=''
  add=false;
  update=false;
  delete=false;

  owner:string=' ';
  department:string=' ';
  domain:string=' ';
  url:string=' ';
  business:string=' ';
  email:string=' ';
  zone:string=' ';
  ip:string=' ';
  new_url:string=' ';
  new_ip:string=' ';

  setRequestType(request:any){
    this.request=request.target.value;
  console.log(this.request)
  if (this.request=='add'){
    this.add=true;
    this.delete=false;
    this.update=false;
  }

  else if  (this.request=='delete'){
    this.add=false;
    this.delete=true;
    this.update=false;
  }
  else if (this.request=='update'){
    this.add=false;
    this.delete=false;
    this.update=true;
  }
}

addRecord(){
  let data={
    "owner":this.owner,
    "department":this.department,
    "domain":this.domain,
    "url":this.url,
    "business":this.business,
    "email":this.email,
    "zone":this.zone,
    "ip":this.ip
  };
  this.http.post("http://localhost:8085/api/dns/addNewRecord",data).subscribe((resultData: any)=>
  {
      console.log(data)
      console.log(resultData);
      alert("Record Added Successfully")
}
  );
}
 
deleteRecord(){
  let data={
    "owner":this.owner,
    "department":this.department,
    "domain":this.domain,
    "url":this.url,
    "business":this.business,
    "email":this.email,
    "zone":this.zone,
    "ip":this.ip
  };
  this.http.post("http://localhost:8085/api/dns/delete",data).subscribe((resultData: any)=>
  {
      console.log(data)
      console.log(resultData);
      alert("Record deleted Successfully")
}
  );

}

updateRecord(){
  let data={
    "owner":this.owner,
    "department":this.department,
    "domain":this.domain,
    "old_url":this.url,
    "new_url":this.new_url,
    "business":this.business,
    "email":this.email,
    "zone":this.zone,
    "old_ip":this.ip,
    "new_ip":this.new_ip
  };
  this.http.post("http://localhost:8085/api/dns/update",data).subscribe((resultData: any)=>
  {
      console.log(data)
      console.log(resultData);
      alert("Record Updated Successfully")
}
  );

}
}
