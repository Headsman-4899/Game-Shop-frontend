import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {

  constructor(private gameService: GameService, private route: ActivatedRoute) { }

  public game
  public reqs = []

  public titles = ["OS", "Processor", "Video Card", "Memory Storage"]

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'))
    
    this.gameService.getGames().subscribe(data => {
      this.game = data.find(game => game.id == id)
      this.reqs = this.game.requirements
    })
  }

}
