import { Injectable, signal } from '@angular/core';

import { type dialogData } from './dialog.model';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  dialogOpened = signal(false);
  index = signal(0);
  private dialogData = signal<dialogData[]>([
    {
      id: 1,
      title: 'Join',
      information: $localize`Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.`,
      usedTech: ['CSS', 'HTML', 'Firebase', 'JavaScript'],
      snapshot: 'assets/img/dialog/join.png',
      github: 'https://github.com/LukeDreadnoughtus/Join',
      route: 'http://join.dreadnoughtus.de'
    },
    {
      id: 2,
      title: 'Sharki',
      information: $localize`Jump, swim and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.`,
      usedTech: ['JavaScript', 'HTML', 'CSS'],
      snapshot: 'assets/img/dialog/sharki.png',
      github: 'https://github.com/LukeDreadnoughtus/Sharky_slap-and-swim',
      route: 'http://sharki.dreadnoughtus.de'
    }
  ]);
  dialogData$ = this.dialogData.asReadonly();


  /**
   * It changes the index to show an other project
   * 
   * @param i - The index
   */
  onChangeIndex(i: number) {
    this.index.set(i);
  }


  /**
   * This method increments the index
   */
  onIncrementIndex() {
    this.index.update((num) => (num + 1) % this.dialogData().length);
  }
}
