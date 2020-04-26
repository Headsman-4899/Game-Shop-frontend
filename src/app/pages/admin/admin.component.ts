import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  games = []
  editable: boolean = false
  constructor(private gameService: GameService) { }

  public game = {
    id: 0,
    name: '',
    category: '',
    description: '',
    image: '',
    requirements: '',
    requirements2: []
  }

  ngOnInit(): void {
    this.gameService.getGames().subscribe(data => {
      this.games = data
    })
  }

  onCreate(): void {
    this.game.requirements2.forEach(r => {
      this.game.requirements += (r + ',')
    })
    this.gameService.create(this.game).subscribe()
  }

  onEdit() {
    this.game.requirements2.forEach(r => {
      this.game.requirements += (r + ',')
    })
    this.gameService.edit(this.game).subscribe()
  }

  editing(id) {
    this.editable = true
    this.gameService.getGame(id).subscribe(game => {
      this.game.id = id
      this.game.category = game.category
      this.game.description = game.description
      this.game.image = game.image
      this.game.name = game.name
      this.game.requirements2 = game.requirements.split(',')
    })
  }

  deleting(id) {
    this.gameService.delete(id).subscribe()
  }

}
