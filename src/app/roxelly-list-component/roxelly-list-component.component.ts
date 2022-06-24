import { Component, VERSION } from '@angular/core';
import { RoxellyListServiceService } from '../roxelly-list-service.service';

@Component({
  selector: 'app-roxelly-list-component',
  templateUrl: './roxelly-list-component.component.html',
  styleUrls: ['./roxelly-list-component.component.css'],
})
export class RoxellyListComponentComponent {
  name = 'Angular ' + VERSION.major;

  constructor(public roxellyService: RoxellyListServiceService) {}

  updateBitcoinRate() {
    this.roxellyService.update();
  }

  ngOnInit() {}
}
