import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {


  farenheit = 0.0;
  celcius = 0.0;
  constructor() { }

  ngOnInit(): void {
  }

  convertToC(){
    
    this.celcius = (this.farenheit - 32) * 5/9;

  }

  convertToF(){
     //(40°C × 9/5) + 32 = 104°F
     this.farenheit = (this.celcius * 9/5) + 32;


  }

}
