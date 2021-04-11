import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elevador',
  templateUrl: './elevador.component.html',
  styleUrls: ['./elevador.component.css']
})
export class ElevadorComponent implements OnInit {

  public pessoaAndar3: boolean = true;
  public pessoaAndar2: boolean = true;
  public pessoaAndar1: boolean = true;
  public pessoaAndar0: boolean = true;

  public andar3Subir: boolean = false;
  public andar2Subir: boolean = false;
  public andar1Subir: boolean = false;
  public andar0Subir: boolean = false;

  public andar3Descer: boolean = false;
  public andar2Descer: boolean = false;
  public andar1Descer: boolean = false;
  public andar0Descer: boolean = false;

  public andar3PortaAberta: boolean = false;
  public andar2PortaAberta: boolean = false;
  public andar1PortaAberta: boolean = false;
  public andar0PortaAberta: boolean = false;

  public pessoaElevador: boolean = false;

  public pessoaElevador0: boolean = false;
  public pessoaElevador1: boolean = false;
  public pessoaElevador2: boolean = false;
  public pessoaElevador3: boolean = false;

  public pessoaSair0: boolean = false;
  public pessoaSair1: boolean = false;
  public pessoaSair2: boolean = false;
  public pessoaSair3: boolean = false;

  public botao: number[] = [];

  public andarElevador: number;

  constructor() { }

  ngOnInit() {
  }

  botaoSubir(andar: number){
    switch(andar){
      case 0 :{
        if(!this.andar0PortaAberta){
          if(this.pessoaAndar0){
            this.andar0Subir = true;
            this.botao.push(andar);
            if(this.botao[0] === andar){
              setTimeout(() => {
                this.abrirPorta(andar)
              }, 3000);
            }
          }
          else{
            console.log('Não tem pessoas nesse andar');
          }
        }
        else{
          console.log('O Elevador já está no local');
        }
        break;
      }
      case 1 :{
        if(!this.andar0PortaAberta){
          if(this.pessoaAndar1){
            this.andar1Subir = true;
            this.botao.push(andar);
            if(this.botao[0] === andar){
              setTimeout(() => {
                this.abrirPorta(andar)
              }, 3000);
            }
          }
          else{
            console.log('Não tem pessoas nesse andar');
          }
        }
        else{
          console.log('O Elevador já está no local');
        }
        break;
      }
      case 2 :{
        if(!this.andar0PortaAberta){
          if(this.pessoaAndar2){
            this.andar2Subir = true;
            this.botao.push(andar);
            if(this.botao[0] === andar){
              setTimeout(() => {
                this.abrirPorta(andar)
              }, 3000);
            }
          }
          else{
            console.log('Não tem pessoas nesse andar');
          }
        }
        else{
          console.log('O Elevador já está no local');
        }
        break;
      }
      case 3 :{
        if(!this.andar0PortaAberta){
          if(this.pessoaAndar3){
            this.andar3Subir = true;
            this.botao.push(andar);
            if(this.botao[0] === andar){
              setTimeout(() => {
                this.abrirPorta(andar)
              }, 3000);
            }
          }
          else{
            console.log('Não tem pessoas nesse andar');
          }
        }
        else{
          console.log('O Elevador já está no local');
        }
        break;
      }
      default: 'andar inexistente'
    }
  }

  subir(andar: number){
    if(this.botao[0] === andar){
      setTimeout(() => {
        this.abrirPorta(andar)
      }, 3000);
    }
  }

  descer(andar: number){
    if(this.botao[0] === andar){
      setTimeout(() => {
        this.abrirPorta(andar)
      }, 3000);
    }
  }

  botaoDescer(andar: number){
    switch(andar){
      case 0 :{
        if(!this.andar0PortaAberta){
          if(this.pessoaAndar0){
            this.andar0Descer = true;
            this.botao.push(andar);
            if(this.botao[0] === andar){
              setTimeout(() => {
                this.abrirPorta(andar)
              }, 3000);
            }
          }
          else{
            console.log('Não tem pessoas nesse andar');
          }
        }
        else{
          console.log('O Elevador já está no local');
        }
        break;
      }
      case 1 :{
        if(!this.andar0PortaAberta){
          if(this.pessoaAndar1){
            this.andar1Descer = true;
            this.botao.push(andar);
            if(this.botao[0] === andar){
              setTimeout(() => {
                this.abrirPorta(andar)
              }, 3000);
            }
          }
          else{
            console.log('Não tem pessoas nesse andar');
          }
        }
        else{
          console.log('O Elevador já está no local');
        }
        break;
      }
      case 2 :{
        if(!this.andar0PortaAberta){
          if(this.pessoaAndar2){
            this.andar2Descer = true;
            this.botao.push(andar);
            if(this.botao[0] === andar){
              setTimeout(() => {
                this.abrirPorta(andar)
              }, 3000);
            }
          }
          else{
            console.log('Não tem pessoas nesse andar');
          }
        }
        else{
          console.log('O Elevador já está no local');
        }
        break;
      }
      case 3 :{
        if(!this.andar0PortaAberta){
          if(this.pessoaAndar3){
            this.andar3Descer = true;
            this.botao.push(andar);
            if(this.botao[0] === andar){
              setTimeout(() => {
                this.abrirPorta(andar)
              }, 3000);
            }
          }
          else{
            console.log('Não tem pessoas nesse andar');
          }
        }
        else{
          console.log('O Elevador já está no local');
        }
        break;
      }
      default: 'andar inexistente'
    }
  }

  pessoaAndar(andar: number){
    switch(andar){
      case 0 :{
        if(this.pessoaAndar0){
          if(this.andar0PortaAberta){
            this.pessoaAndar0 = false;
            this.pessoaElevador = true;
            this.andarElevador = 0;
          }
          else{
            console.log('O elevador não está neste andar');
          }
        }
        else{
          console.log('Não tem pessoas nesse andar');
        }
        break;
      }
      case 1 :{
        if(this.pessoaAndar1){
          if(this.andar1PortaAberta){
            this.pessoaAndar1 = false;
            this.pessoaElevador = true;
            this.andarElevador = 1;
          }
          else{
            console.log('O elevador não está neste andar');
          }
        }
        else{
          console.log('Não tem pessoas nesse andar');
        }
        break;
      }
      case 2 :{
        if(this.pessoaAndar2){
          if(this.andar2PortaAberta){
            this.pessoaAndar2 = false;
            this.pessoaElevador = true;
            this.andarElevador = 2;
          }
          else{
            console.log('O elevador não está neste andar');
          }
        }
        else{
          console.log('Não tem pessoas nesse andar');
        }
        break;
      }
      case 3 :{
        if(this.pessoaAndar3){
          if(this.andar3PortaAberta){
            this.pessoaAndar3 = false;
            this.pessoaElevador = true;
            this.andarElevador = 3;
          }
          else{
            console.log('O elevador não está neste andar');
          }
        }
        else{
          console.log('Não tem pessoas nesse andar');
        }
        break;
      }
      default: 'andar inexistente'
    }
  }

  abrirPorta(andar: number){
    switch(andar){
      case 0:{
        this.andar0PortaAberta = true;
        this.andar0Subir = false;
        this.andar0Descer = false;
        break;
      }
      case 1:{
        this.andar1PortaAberta = true;
        this.andar1Subir = false;
        this.andar1Descer = false;
        break;
      }
      case 2:{
        this.andar2PortaAberta = true;
        this.andar2Subir = false;
        this.andar2Descer = false;
        break;
      }
      case 3:{
        this.andar3PortaAberta = true;
        this.andar3Subir = false;
        this.andar3Descer = false;
        break;
      }
      default: 'Porta inexistente'
    }
  }

  destino(){
    setTimeout(() => {
      this.abrirPorta(this.andarElevador);
    }, 2000);
    this.pessoaSair0 = true;
  }

  pessoaSai(){
    this.pessoaSair0 = true;
    this.andar0PortaAberta = false;
    setTimeout(() => {
      this.subir(this.botao[0]);
      this.descer(this.botao[0]);
    }, 1000);
  }

  botaoAndar(andar: number){

    if(this.pessoaElevador){

      switch(this.andarElevador){
        case 0: {
          console.log(this.botao);
          this.andar0PortaAberta = false;
          this.botao.splice(0, 1);
          console.log(this.botao);
          this.destino();
          break;
        }
        case 1: {
          console.log(this.botao);
          this.andar1PortaAberta = false;
          this.botao.splice(0, 1);
          console.log(this.botao);
          this.destino();
          setTimeout(() => {
            this.subir(this.botao[0]);
            this.descer(this.botao[0]);
          }, 1000);
          break;
        }
        case 2: {
          console.log(this.botao);
          this.andar2PortaAberta = false;
          this.botao.splice(0, 1);
          console.log(this.botao);
          this.destino();
          setTimeout(() => {
            this.subir(this.botao[0]);
            this.descer(this.botao[0]);
          }, 1000);
          break;
        }
        case 3: {
          console.log(this.botao);
          this.andar3PortaAberta = false;
          this.botao.splice(0, 1);
          console.log(this.botao);
          this.destino();
          setTimeout(() => {
            this.subir(this.botao[0]);
            this.descer(this.botao[0]);
          }, 1000);
          break;
        }
      }
    }
    else{
      console.log('Não tem pessoa no elevador');
    }
    this.pessoaElevador = false;
  }
}
