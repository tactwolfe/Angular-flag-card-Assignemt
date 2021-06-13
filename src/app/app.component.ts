import { Component, OnInit } from "@angular/core";
import { DataService } from "./data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'flagCard-assignment';

  public countries: any;

  constructor(
    private data: DataService) {
  }

  ngOnInit(): void {
    this.data.getCountries().subscribe((res) => {
      this.countries = res;
    });
  }
  

}
