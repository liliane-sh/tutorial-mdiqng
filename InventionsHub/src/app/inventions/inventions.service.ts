import { Injectable } from '@angular/core';
import { Invention } from './inventions.class';

@Injectable()
export class InventionsService {
  rawInventions : Invention[] = [
    {
      id: 1,
      name: 'Java',
      year: '1995'
    },
    {
      id: 2,
      name: 'Python',
      year: '1991'
    }
  ]

  constructor(){

  }

  getInventions() : Invention[] {
    return this.rawInventions;
  }

  inventionDetails ( id ) : Invention {
    for( var i = 0; i< this.rawInventions.length; i++){
      if( this.rawInventions[i].id == id ){
        return this.rawInventions[i];
      }
    }
    return null;
  }
}