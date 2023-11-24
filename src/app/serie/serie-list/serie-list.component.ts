import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css']
})


export class SerieListComponent implements OnInit {
  series: Array<Serie> = [];
  promedio: number = 0;
  respuesta: string = '';

  constructor(private serieService: SerieService) { }

  getSeries(): void {
    this.serieService.getSeries().subscribe((series) => {
      this.series = series;
      this.promedio = 0;
      this.respuesta = '';
      this.series.forEach((serie) => {
        if (serie.rating > this.promedio){
          this.respuesta = serie.name;
          this.promedio = serie.rating;
        }
      });
    });
  }

  ngOnInit() {
    this.getSeries();
  }
}