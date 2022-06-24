import { Component, OnInit } from '@angular/core';
import { RoxellyListServiceService } from '../roxelly-list-service.service';

@Component({
  selector: 'app-roxelly-list-component',
  templateUrl: './roxelly-list-component.component.html',
  styleUrls: ['./roxelly-list-component.component.css'],
})
export class RoxellyListComponentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  public roxellyService: RoxellyListServiceService;

  updateBitcoinRates() {
    this.roxellyService.update();
  }
}
