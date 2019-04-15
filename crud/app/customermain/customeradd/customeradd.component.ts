import { Component, OnInit } from '@angular/core';
import {CrudService} from '../crud.service';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-customeradd',
  templateUrl: './customeradd.component.html',
  styleUrls: ['./customeradd.component.css']
})
export class CustomeraddComponent implements OnInit {
  customerAddForm:FormGroup;
  message:string;
  phones:string='';
  isValidationFailed:boolean = true;
  constructor(private crudService:CrudService, private translateService:TranslateService) {
    this.message = '';
    this.translateService.setDefaultLang('en');
   }
   changeLang(lang):void{
    this.translateService.use(lang);
   }
  ngOnInit() {
    this.customerAddForm = new FormGroup({
      'cname':new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]{3,30}')],this.isUserExist.bind(this)),
      'address':new FormControl(null,[Validators.required]),
      'phone':new FormArray([])
    });
  }
  isUserExist(formControl):Promise<any>{
    const pr = new Promise<any>((resolve,reject)=>{
      this.crudService.callAjax().subscribe(data=>{
        console.log("All Users ::: ",data);
        const result = data['name'].find(currentName=>currentName==formControl.value);

        if(result){
          resolve({'userExist':true})
        }
        else{
          resolve(null);
        }

      },err=>{
    reject(err);
      })

    });
    return pr;
  }
  addPhone():void{
    let newPhone = new FormControl(null);
    (<FormArray>this.customerAddForm.get('phone')).push(newPhone);
  }
  add(){
    console.log('Add is Called ',this.customerAddForm);
    if(this.customerAddForm.invalid){
      this.message = 'Form is Not Valid Check the fields';
      this.isValidationFailed = true;
    }
    else{
      this.isValidationFailed = false;
     let phones =  this.customerAddForm.get('phone') as FormArray;
     for(let i = 0; i<phones.length;i++){
       let currentPhone = phones.at(i);
       console.log('Current Phone is ',currentPhone.value);
       this.phones+=currentPhone.value+" , ";
     }
      this.message = this.crudService.add(this.customerAddForm.controls.cname.value,this.customerAddForm.controls.address.value, this.phones)?'Record Added':'Not Added';
     // Get All Phones and Store in one field

    }
  }
  // add(name:string, address:string){
  //   this.message = this.crudService.add(name,address)?'Record Added':'Not Added';
  // }
  /*add(myForm){
    console.log('Form is ',myForm.controls);
    if(myForm.invalid){
      this.message = 'Form is Not Valid Check the fields';
      if(myForm.controls.cname.invalid)
      this.message +=' Name Field has Errors';
      if(myForm.controls.address.invalid){
        this.message+=' Address Fields has Errors';
         this.isValidationFailed = false;
      }
      this.isValidationFailed = true;
    }
    else{
      this.isValidationFailed = false;
      this.message = this.crudService.add(myForm.controls.cname.value,myForm.controls.address.value)?'Record Added':'Not Added';
    }
  }*/


}
