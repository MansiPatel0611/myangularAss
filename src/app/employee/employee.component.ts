import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Employee } from '../models/employee.model';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

public qualification:Array<any>;
  public experience:Array<any>;
  public languages:Array<any>;

  public model=new Employee();

 
    toggleEditable(event) {
     if ( event.target.checked ) {
         this.model.langKnown.push(event.target.id);
     }
     else
     {
      var index=this.model.langKnown.indexOf(event.target.id);
      this.model.langKnown.splice(index,1);
     }
    }  
  
  onSubmit()
  { 
    
     console.log(this.model);
    }

  constructor() { }

  ngOnInit() {
    this.qualification=['Developer','Web Designer','Consultant','Manager','Other'];
  this.experience=['0-1','1-3','3-5','5-7','7-9'];
  this.languages=['C/C++','Java','C#','Python','PHP'];
  
  }

}
