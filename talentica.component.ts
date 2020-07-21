import { Component, OnInit,HostListener } from '@angular/core';

@Component({
  selector: 'app-talentica',
  templateUrl: './talentica.component.html',
  styleUrls: ['./talentica.component.scss']
})
export class TalenticaComponent implements OnInit {

  constructor() { }
  screenWidth:number;
  show:boolean=true;
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.screenWidth = window.innerWidth;
    if(this.screenWidth>767)
    {
      this.show=true;
    }
  }
  showShowMobNav()
  {
    this.show=!this.show;
  }
  ngOnInit(): void {
  }

}
