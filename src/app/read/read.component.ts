import { Component, OnInit } from '@angular/core';

// ngRx dependencies
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Tutorial } from '../model/tutorial.model';
import { AppState } from '../app.state';
import * as TutorialActions from '../actions/tutorial.actions';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {
  tutorials: Observable<Tutorial[]>;

  constructor(private store: Store<AppState>) {
    this.tutorials = store.select('tutorial');
  }

  delTutorial(index: number) {
    console.log(index);
    this.store.dispatch(new TutorialActions.RemoveTutorial(index));
  }

  ngOnInit(): void {}
}
