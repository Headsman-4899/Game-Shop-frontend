import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private gameService: GameService) { }

  public game = {
    name: '',
    category: '',
    description: '',
    image: '',
    requirements: []
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.game)
    this.gameService.create(this.game)
  }

}
