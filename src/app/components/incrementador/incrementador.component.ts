import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgreso') txtProg: ElementRef;

  @Input('nombre')leyenda: string = 'Leyenda';
  @Input() progreso: number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit() {
    console.log(' leyenda', this.leyenda);
  }

  onChanges(nuevoValor) {

    //let elemHTML: any = document.getElementsByName('progreso')[0];
   // console.log(elemHTML.value);

    if(nuevoValor >= 100) {
      this.progreso = 100;
    } else if(nuevoValor <= 0) {
      this.progreso = 0
    } else {
      this.progreso = nuevoValor;
    }

 // elemHTML.value = Number(this.progreso);
    this.txtProg.nativeElement.value = this.progreso;

    this.cambioValor.emit(this.progreso);
  }

  cambiarValor(valor: number) {

    if(this.progreso <= 0 && valor < 0) {

      this.progreso = 0;

    } else if (this.progreso >= 100 && valor > 0) {

      this.progreso = 100;

    } else {

      this.progreso += valor;
      this.cambioValor.emit(this.progreso);
      this.txtProg.nativeElement.focus();
    }

  }

}
