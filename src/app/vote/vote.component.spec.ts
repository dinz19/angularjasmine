import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteComponent } from './vote.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('VoteComponent', () => {
  let component: VoteComponent;
  let fixture: ComponentFixture<VoteComponent>;
  let debugElement : DebugElement
  let htmlElement : HTMLElement

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    //hold a ref to p element
    debugElement = fixture.debugElement.query(By.css('p'));
    htmlElement = debugElement.nativeElement;
  });

  it('component should be created', () => {
    expect(component).toBeTruthy();
  });

  
  it('Total Votes should be increased by 1 (in view) when clicked on + Button', () => {
    component.upVote()
    fixture.detectChanges(); //if this line is not here. Votes : 0 will be there instead it wont get Vote:1 the changes will not be detected
    //asert that value in increased by 1(it was 0). It should be 1 now.
    expect(htmlElement.textContent).toBe(" Votes: 1 ");
  });

  
  it('Total Votes should be decreased by 1 (in view) when clicked on - Button', () => {
    component.downVote()
    fixture.detectChanges(); //if this line is not here. Votes : 0 will be there instead it wont get Vote:1 the changes will not be detected
    //asert that value in increased by 1(it was 0). It should be 1 now.
    expect(htmlElement.textContent).toBe(" Votes: -1 ");
  });

  
  it('Total Votes should be decreased by 1 (in view) when clicked on - Button', () => {
    component.totalVotes = 9
    component.downVote()
    fixture.detectChanges(); //if this line is not here. Votes : 9 will be there instead it wont get Vote:8 the changes will not be detected
    //asert that value in increased by 1(it was 0). It should be 1 now.
    expect(htmlElement.textContent).toBe(" Votes: 8 ");
  });

});
