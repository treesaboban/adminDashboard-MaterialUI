import { Component, EventEmitter, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor() {}
  ngOnInit(): void 
  {
  }
 //userdefined event
  //Child -> Parent -for this use @Output decorator
  @Output() toggle=new EventEmitter(); //obj=new class-name()
  menuIconClick()
  {
   this.toggle.emit()
   setTimeout(() =>
    {
     window.dispatchEvent(new Event('resize'))
    }, 100); 
 }
}
