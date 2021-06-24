import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'weather-details',
  templateUrl: './weatherDetails.component.html',
  styleUrls: ['./weatherDetails.component.scss']
})

export class WeatherDetails implements OnInit {
  @Input() weatherData: data[];

  myData: data;
  city: String = "";
  isCityAvailable: boolean = false;

  ngOnInit() {

  }


  findCity() {
    this.isCityAvailable = false;
    this.myData = this.weatherData.find((city) => {
      if(city.name.toUpperCase() == this.city.toUpperCase()){

      this.isCityAvailable = true;
      return true;
      }
      
    });
  }
}

interface data {
  name: string;
  temperature: string;
  wind: string;
  humidity: string;
}