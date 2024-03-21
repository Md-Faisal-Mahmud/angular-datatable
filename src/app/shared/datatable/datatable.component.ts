import { Component, Input, OnInit } from '@angular/core';
import { Datatable } from './datatable.type';
import { HttpService } from '../../service/http.service';
import { SortOrder } from '../type/paging.type';
import { Observable, of } from 'rxjs';
import { PaginateResult } from '../type/resut.type';

interface Product 
{
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrl: './datatable.component.scss'
})

export class DatatableComponent implements OnInit 
{
  // products: Product[] = []; // Array to hold product data

  // @Input() endpoint!: string;
  endpoint: string = '/WeatherForecast'
  // @Input() setting: Datatable = new Datatable(10, []);
  // @Input() pageSize: number = 10;
  pageSize: number = 5;
  // @Input() mode: number = 1;
  // @Input() defaultFilters: Filter[] = [];
  // isLoading: boolean = true;
  currentPageIndex: number = 1;
  totalRows: number = 0;
  // sortColumns: SortOrder[] = [];
  // filters: Filter[] = [];
  row$: Observable<any[]> = of([]);
  // generalSearchValue: string = "";
  
  constructor (private httpService: HttpService) 
  {
  }

  ngOnInit(): void 
  {
    this.loadData();
  }

  loadData()
  {
    let requestBody = 
    {
      // pageIndex: this.currentPageIndex,
      // pageSize: this.pageSize
    }

    this.httpService.post<any>(this.endpoint, requestBody)
    .subscribe(res => 
      {
        if (res) 
        {
          this.row$ = of(res.items);
          this.totalRows = res.totalFiltered;
          console.log('items',res)
        }
      });


  }
}
