import { Component } from '@angular/core';
import { fromEvent, map, startWith, debounceTime, delay } from 'rxjs';

@Component({
  templateUrl: './fromevent.component.html',
  standalone: true
})
export class FromeventComponent {

  currentWidth?: number;

  constructor() {
    /**
     * Schreibe die jeweils aktuelle Fensterbreite in das Property `this.currentWidth`
     *
     * Nutze fromEvent, um das resize-Event auf window zu abonnieren.
     * Initialisiere das Observable mit der aktuellen Fensterbreite (`window.innerWidth`)
     * Entprelle den Eventstrom, damit nicht zu viele Events gefeuert werden.
     */

    /******************************/

    fromEvent(window, 'resize').pipe(

      debounceTime(1000),

      // startWith({ target: window }),


      // unpure :-(
      // map(() => window.innerWidth)

      // pure 😍
      map(e => (e.target as Window).innerWidth),

      startWith(999),
      // delay(1000),
      startWith(111),

    ).subscribe(e => this.currentWidth = e);


    /******************************/
  }

}
