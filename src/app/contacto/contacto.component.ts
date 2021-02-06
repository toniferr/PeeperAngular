import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { ContactoUsuario } from '../models/contacto.usuario';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  public contacto_usuario: ContactoUsuario;

  constructor(
  ) { 
    this.contacto_usuario = new ContactoUsuario('','','','');
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    console.log(this.contacto_usuario);
    //form.reset();
  }

}
