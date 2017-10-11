import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { AcNotification } from 'angular-cesium';
import { BuildingsService } from '../../services/buildings.service';
import { GameConfig } from '../../services/game-config';

@Component({
  selector: 'buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.scss']
})
export class BuildingsComponent implements OnInit {

  buildings$: Subject<AcNotification>;
  wallMaterial = GameConfig.innerBuildingColor;
  Cesium = Cesium;

  constructor(buildingsService: BuildingsService) {
    this.buildings$ = buildingsService.getBuildings();
  }

  ngOnInit() {
  }

}