import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from './../../../environments/environment';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-stocks-data',
  templateUrl: './stocks-data.component.html',
  styleUrls: ['./stocks-data.component.scss']
})
export class StocksDataComponent implements OnInit {
  public formT: FormGroup;
  public dataStocks: Data[]  = [];
  public msg = '';

  constructor(private http: HttpClient, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.initForm();
  }

  private validators(): boolean {
    Object.values(this.formT.controls).forEach(item => {
      if (item instanceof FormControl) { item.markAsTouched(); }
    });
    return this.formT.invalid || !this.validaDate(this.formT.get('appInput').value) ? false : true;
  }

  public isValid(param: string): boolean {
    return (this.formT.get(param).invalid || !this.validaDate(this.formT.get('appInput').value)) && this.formT.get(param).touched;
  }

  public initForm(): void {
    this.formT = this.fb.group({
      appInput: ['', [Validators.required]],
    });
  }

  async searchData(){
    this.msg = '';
    console.log(this.validators());
    if (this.validators()){
      console.log(this.formT.get('appInput').value);
      this.dataStocks = await this.getData(this.formT.get('appInput').value);
      if (this.dataStocks.length === 0){
        this.msg = 'No Results Found';
      }
      console.log(this.dataStocks);
    }
  }

  async getData(date: string) : Promise<Data[]>{
    return await this.http.get(environment.api + date).pipe(
      map( (x: ApiResponse) => {
        return x.data;
      }
    )).toPromise();
  }

  private validaDate(date) : boolean{
    const validate = ((date.match(/\d{1,2}-(January|February|March|April|May|June|July|August|September|October|November|December)-\d{4}/gi)) != null);
    if(validate){
      const datePraser = new Date(date);
      const valid = !isNaN(datePraser.valueOf());
      console.log(valid);
      return valid;
    }
    return false;
  }
}

interface Data {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
}

interface ApiResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Data[];
}
