import { Component } from '@angular/core';
import { Car } from '../../Car'

@Component({
  selector: 'app-cars',
  standalone: false,
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {


  car: Car = {} as Car;
  carCounter: number = 3;

  cars: Car[] = [
    { id: 1, 
      Name: 'Model S', 
      Brand: 'Tesla', 
      Price: 79999, 
      Year: '2023' 
    },
    { id: 2, 
      Name: 'Mustang', 
      Brand: 'Ford', 
      Price: 55999, 
      Year: '2022' 
    },
    { id: 3, 
      Name: 'Civic', 
      Brand: 'Honda', 
      Price: 24999, 
      Year: '2021' 
    },
  ];

  saveCar() {
    this.car.id = this.carCounter + 1;
    this.cars.push(this.car);
    this.carCounter++;
    this.car = {} as Car;
  }
  editCar(car: Car) {
    console.log(car.Name)
    }
    deleteCar(car: Car) {
      console.log(car.Name)
    }

}
