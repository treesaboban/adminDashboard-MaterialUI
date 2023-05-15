import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  ngOnInit(): void
   {

   }
 @Input() bg:string='';
 @Input() icon:string='';
 @Input() content:string='';
 @Input() total:string='';
}
