import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private aboutMeIsClicked = signal(false);
  private skillsIsClicked = signal(false);
  private projectsIsClicked = signal(false);

  aboutmeIsClicked$ = this.aboutMeIsClicked.asReadonly();
  skillIsClicked$ = this.skillsIsClicked.asReadonly();
  projectIsClicked$ = this.projectsIsClicked.asReadonly();


  /**
   * This method changes the active link when a links is getting clicked 
   */
  changeActiveNavLink(booleanOne: boolean, booleanTwo: boolean, booleanThree: boolean) {
    this.aboutMeIsClicked.set(booleanOne);
    this.skillsIsClicked.set(booleanTwo);
    this.projectsIsClicked.set(booleanThree);
  }


  /**
   * This method will reset the active header links when the legal notice page get's opened
   */
  resetActiveHeaderLinks() {
    this.aboutMeIsClicked.set(false);
    this.skillsIsClicked.set(false);
    this.projectsIsClicked.set(false);
  }
}
