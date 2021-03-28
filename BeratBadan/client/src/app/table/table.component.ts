import { Component, PipeTransform ,OnInit} from '@angular/core';
import { IndexBerat} from '../../services/IndexBerat.services'
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { HttpClient, } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { Http, Response,Headers,RequestOptions } from '@angular/http';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray, NgForm } from '@angular/forms'
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  addForm: FormGroup;
  closeResult = '';

  rows: FormArray;
  itemForm: FormGroup;
  TableData:any =[]
  EditRowId:any = ''
  updateStatus:boolean =false
  average:any =[]
  average2:any =[]


 
  IndexBerat:any =[]
  IndexBerat2:any =[]
  IndexBeratUpdate:any =[]
  IndexBeratDelete:any =[]
  IndexBeratDelete2:any =[]
  IndexBeratAdd:any =[]
  IndexBeratAdd2:any =[]
  newIndexBerat: any = {};  
  max:number 
  min:number


  page = 1;
  pageSize = 4;
  collectionSize = this.IndexBeratAdd2.length;
  private fieldArray: Array<any> = [];

  private newAttribute: any = {};
  IndexBeratUpdate2: Object;


  
  constructor( private HttpClient:HttpClient, private averageTemp:IndexBerat, private IndexBeratTemp:IndexBerat, private fb: FormBuilder,private modalService: NgbModal) {
   
    this.addForm = this.fb.group({
      items: [null, Validators.required],
      items_value: ['no', Validators.required]
    });

    this.rows = this.fb.array([]);
   }
   
   Edit(val){
    this.EditRowId = val 
   }
   addItem(name,email){
    this.IndexBeratAdd = this.IndexBeratTemp.add(name,email).subscribe(data=>{
      this.IndexBeratAdd2 = data
      if(this.updateStatus == true){
        this.IndexBerat = this.IndexBeratTemp.fetchData().subscribe(data=>{
          this.IndexBerat2 = data; 
        }); 
      }
    })
   }
   async save(name,email){
   
    this.IndexBeratAdd =  await this.IndexBeratTemp.add(name,email).subscribe(data=>{
      this.IndexBeratAdd2 = data
      this.updateStatus = true
      console.log(this.updateStatus)
      if(this.updateStatus == true){
        this.IndexBerat = this.IndexBeratTemp.fetchData().subscribe(data=>{
          this.IndexBerat2 = data; 
        this.IndexBeratAdd2.push(data)

        }); 
      }
    })
   }
   open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
   deleteItem(id){
      this.IndexBeratDelete = this.IndexBeratTemp.delete(id).subscribe(data=>{
        this.IndexBeratDelete2 = data
        this.updateStatus = true
        if(this.updateStatus == true){
          this.IndexBerat = this.IndexBeratTemp.fetchData().subscribe(data=>{
            this.IndexBerat2 = data; 
          }); 
        }
      })
   }

   updateItem(id,max,min){
    this.IndexBeratUpdate= this.IndexBeratTemp.update(id,max,min).subscribe(data=>{
      console.log(data)
      this.IndexBeratUpdate2 = data
      this.updateStatus =true
      if(this.updateStatus == true){
        this.IndexBerat = this.IndexBeratTemp.fetchData().subscribe(data=>{
          this.IndexBerat2 = data; 
        }); 
      }
         
    })
   }

  ngOnInit() {
    this.IndexBerat = this.IndexBeratTemp.fetchData().subscribe(data=>{
      this.IndexBerat2 = data; 
      console.log(this.IndexBerat2)
    });

    this.average = this.averageTemp.fetchAverage().subscribe(data=>{
      this.average2 = data; 
      console.log(this.average2)
    });
  }

}
