import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  subscription: any;

  constructor(
    public service: HomeService
  ) { }

  ngOnInit(): void {
    this.subscription = this.service.getPokemonsData()
  }

  handleMore () {
    this.service.getPokemonsDataMore()
  }

  ngOnDestroy(): void {
    !!this.subscription && this.subscription.unsubscribe()
  }

}
