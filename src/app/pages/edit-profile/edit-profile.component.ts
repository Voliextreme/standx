import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

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
