import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { SerieService } from '../serie.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-serie-detail',
  templateUrl: './serie-detail.component.html',
  styleUrls: ['./serie-detail.component.css']
})
export class SerieDetailComponent implements OnInit {



  constructor() { }

  ngOnInit() {
  }


}
