import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  empForm: FormGroup;


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // this.empForm = new FormGroup({
    //   id: new FormControl(null, [Validators.required, Validators.min(1)]),
    //   name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    //   salary: new FormControl(25000, [Validators.min(25000)]),
    //   skills: new FormArray([ new FormControl('')])
    // })
    this.empForm = this.fb.group({
      id: [null, [Validators.required, Validators.min(1)]],
      name: [null, [Validators.required, Validators.minLength(3)]],
      salary: [null, Validators.min(25000)],
      skills: this.fb.array([
        this.fb.control('')
      ])
    });

    let emp = {id: 7788, name: 'Ramesh Kumar', salary: 55000.0, skills: ['Java']};
    this.empForm.setValue(emp);
  }

  save() {
    console.log(this.empForm.value);
  }

  addSkill() {
    const skills = <FormArray>this.empForm.controls['skills'];
    skills.push(new FormControl(''))
  }

}
