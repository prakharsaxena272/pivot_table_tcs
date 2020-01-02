import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Browser market shares at a specific website, 2014';
   type1 = 'PieChart';
   data = [
      ['Firefox', 45.0],
      ['IE', 26.8],
      ['Chrome', 12.8],
      ['Safari', 8.5],
      ['Opera', 6.2],
      ['Others', 0.7] 
   ];
   columnNames = ['Browser', 'Percentage'];
   options = { colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'], is3D: true   
   };
   width = 550;
   height = 900;
}
/*
export class AppComponent {
  title = 'Population (in millions)';
  type = 'BarChart';
  data = [
     ["2012", 900],
     ["2013", 1000],
     ["2014", 1170],
     ["2015", 1250],
     ["2016", 1530]
  ];
  columnNames = ['Year', 'Asia'];
  options = { };
  width = 550;
  height = 400;
}
*/
