import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent 
{
  title = 'angular-datatable';
  isDisabled = true

  myFunction(num1: number, num2: number)
  {
    console.log('Allahu akbar');
    console.log(num1 + num2);
  }

  name = 'Allah'
}
