import { Component, ElementRef, ViewChild } from '@angular/core';
import { DemoComponent } from './demo/demo.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ViewChild';

  @ViewChild("dobInput")
  dateOfBirth? : ElementRef;
  @ViewChild("ageInput")
  age! : ElementRef;
  // Class name of the component
  @ViewChild(DemoComponent,{static :true})
  democomponent! : DemoComponent;
  calculateAge(){
    let birthYear = new Date(this.dateOfBirth?.nativeElement.value).getFullYear();
    let currentYear = new Date().getFullYear();
    let age;
    let currentMonth = new Date().getMonth();
    let currentDay = new Date().getDate();
    let BirthMonth = new Date(this.dateOfBirth?.nativeElement.value).getMonth();
    let birthDay = new Date(this.dateOfBirth?.nativeElement.value).getDate();
    if(currentMonth > BirthMonth){
       age = currentYear - birthYear;
    }else if (currentMonth < BirthMonth){
      age = (currentYear - birthYear)-1;
    }else{
      if(currentDay>birthDay ||currentDay==birthDay ){
        age = currentYear - birthYear;

      }else{
        age = (currentYear - birthYear)-1;
      }
    }
    this.age.nativeElement.value=age;
  }
}
