import { Component, OnInit } from '@angular/core';
import { RestUserService } from 'src/app/services/restUser/rest-user.service';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.component.html',
  styleUrls: ['./biblioteca.component.css']
})
export class BibliotecaComponent implements OnInit {
  user;

  constructor(private restUser:RestUserService) {
    this.user = this.restUser.getUser();
  }


  ngOnInit(): void {
  }

}
