import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-changepw',
  templateUrl: './changepw.component.html',
  styleUrls: ['./changepw.component.css']
})
export class ChangepwComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggleType : boolean = true;

  num : number = 0;
  changeSource(img : HTMLImageElement){
    this.num++;
    if (this.num % 2 == 0) {
      img.src = "../../../assets/icons/eye-open.svg"
    }
    if (this.num % 2 != 0) {
      img.src = "../../../assets/icons/eye-closed.svg"
    }
  }
}
