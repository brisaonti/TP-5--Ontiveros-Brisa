import { Component, OnInit } from '@angular/core';
import { Transaccion } from 'src/app/models/transaccion';
import { DivisaService } from 'src/app/services/divisa.service';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})


export class BuscarComponent  implements OnInit {
  
  transacciones: Array<Transaccion>;
  monedaOrigen!:string;
  monedaDestino!:string;
  operaciones!:any[];


  public buscar(){
    this.serviceTransaccion.getTransacciones(this.monedaOrigen, this.monedaDestino).subscribe((result:any)=>{
      this.operaciones = result;
      console.log(this.operaciones)
    })
  }

  ngOnInit(): void {
  }
  

  transaccion: Transaccion

  modena!:any;
  cant!:string;
  fromType!:string;
  toType!:string;
  finalResult!:string;

  constructor(private serviceTransaccion: DivisaService) {
    this.transaccion = new Transaccion();
    this.transacciones = new Array<Transaccion>();
    this.obtenerTransacciones();
    // this.obtenerTransacciones();
    console.log(this.monedaDestino)
  }

  convertirMoneda(){
    this.serviceTransaccion.convertMoney(this.cant,this.fromType,this.toType).subscribe((resultado:any)=>{
      this.modena = resultado;
      this.finalResult = resultado.result;
      console.log(resultado);
      // Inicializo cada atributo de transaccion con los valores de la api de rapidapi y del formulario
      this.transaccion.monedaOrigen = this.fromType;
      this.transaccion.cantidadOrigen = Number(this.cant);
      this.transaccion.monedaDestino = this.toType;
      this.transaccion.cantidadDestino = Number(this.finalResult);
      this.transaccion.tasaConversion = Number(this.finalResult) / Number(this.cant);

      // guardamos los datos en nuestra api
      this.serviceTransaccion.createTransaccion(this.transaccion).subscribe(result=>{console.log(result)});
      console.log(this.finalResult);
    })
  }

  public realizarTransaccion(){
    this.serviceTransaccion.createTransaccion(this.transaccion).subscribe(result=>{
      console.log(result)
    })
  }

  public obtenerTransacciones(){
    this.serviceTransaccion.getTransacciones(this.fromType, this.toType).subscribe((result:any)=>{
      console.log(result);
      let unaTransaccion : Transaccion = new Transaccion();
      result.forEach((element:any) =>{
        Object.assign(unaTransaccion,element);
        this.transacciones.push(unaTransaccion);
        unaTransaccion = new Transaccion();
      })
    })
  }

}

