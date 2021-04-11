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

  constructor() { }

  ngOnInit() {
  }

  botaoSubir(andar: number){
    switch(andar){
      case 0 :{
        if(!this.andar0PortaAberta){
          if(this.pessoaAndar0){
            this.andar0Subir = true;
            setTimeout(() => {
              this.abrirPorta(andar)
            }, 3000);
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
            setTimeout(() => {
              this.abrirPorta(andar)
            }, 3000);
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
            setTimeout(() => {
              this.abrirPorta(andar)
            }, 3000);
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
            setTimeout(() => {
              this.abrirPorta(andar)
            }, 3000);
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

  botaoDescer(andar: number){
    switch(andar){
      case 0 :{
        if(!this.andar0PortaAberta){
          if(this.pessoaAndar0){
            this.andar0Descer = true;
            setTimeout(() => {
              this.abrirPorta(andar)
            }, 3000);
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
            setTimeout(() => {
              this.abrirPorta(andar)
            }, 3000);
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
            setTimeout(() => {
              this.abrirPorta(andar)
            }, 3000);
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
            setTimeout(() => {
              this.abrirPorta(andar)
            }, 3000);
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
            this.andar0PortaAberta = true;
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
            this.andar1PortaAberta = true;
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
            this.andar2PortaAberta = true;
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
            this.andar3PortaAberta = true;
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
      }
      case 1:{
        this.andar1PortaAberta = true;
        this.andar1Subir = false;
        this.andar1Descer = false;
      }
      case 2:{
        this.andar2PortaAberta = true;
        this.andar2Subir = false;
        this.andar2Descer = false;
      }
      case 3:{
        this.andar3PortaAberta = true;
        this.andar3Subir = false;
        this.andar3Descer = false;
      }
    }
  }
}
