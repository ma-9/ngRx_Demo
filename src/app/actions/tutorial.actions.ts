import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Tutorial } from '../model/tutorial.model';

// Creating Type of the Action
export const ADD_TUTORIAL = '[TUTORIAL] ADD';
export const REMOVE_TUTORIAL = '[TUTORIAL] REMOVE';

// Creating Actions for adding tutorial
export class AddTutorial implements Action {
  readonly type = ADD_TUTORIAL;

  constructor(public payload: Tutorial) {}
}

// Creating Actions for removing tutorial
export class RemoveTutorial implements Action {
  readonly type = REMOVE_TUTORIAL;

  constructor(public payload: number) {}
}

// Exporting Actions
export type Actions = AddTutorial | RemoveTutorial;
