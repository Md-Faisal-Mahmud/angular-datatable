import { Component, Input, OnInit } from '@angular/core';
import { Datatable } from './datatable.type';

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
  products: Product[] = []; // Array to hold product data

  @Input() url!: string;
  // @Input() setting: Datatable = new Datatable(10, []);
  // @Input() pageSize: number = 10;
  // @Input() mode: number = 1;
  // @Input() defaultFilters: Filter[] = [];
  // isLoading: boolean = true;
  // currentPageIndex: number = 1;
  // totalRows: number = 0;
  // sortColumns: SortOrder[] = [];
  // filters: Filter[] = [];
  // row$: Observable<any[]> = of([]);
  // generalSearchValue: string = "";
  
  constructor () {}

  ngOnInit(): void 
  {
    
  }

  loadData()
  {
    
  }
}
