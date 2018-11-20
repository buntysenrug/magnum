import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';


@Component({
  selector: 'app-register-complaint',
  templateUrl: './register-complaint.component.html',
  styleUrls: ['./register-complaint.component.css']
})
export class RegisterComplaintComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  complaintForm = this.fb.group({
    clinetName : [''],
    nature_of_call:[''],
    type_of_call:[''],
    assigned_to:[''],
    status:[''],
    charges:[''],
    remarks:['']
    });
    
  


}
