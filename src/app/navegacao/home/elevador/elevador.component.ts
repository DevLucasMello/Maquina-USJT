import { ModalComponent } from './../../modal/modal/modal.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

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

  public andarSairElevador: number;

  public botao: number[] = [];

  public andarElevador: number;

  constructor(private dialog: MatDialog) { }

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
            this.dialog.open(ModalComponent, {
              panelClass: 'custom-modal', backdropClass: 'blur',
              data:{
                title: 'Erro!',
                text: 'Não tem pessoas nesse andar',
                button: 'Fechar'
              }
            })
          }
        }
        else{
          this.dialog.open(ModalComponent, {
            panelClass: 'custom-modal', backdropClass: 'blur',
            data:{
              title: 'Erro!',
              text: 'O Elevador já está no local',
              button: 'Fechar'
            }
          })
        }
        break;
      }
      case 1 :{
        if(!this.andar1PortaAberta){
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
            this.dialog.open(ModalComponent, {
              panelClass: 'custom-modal', backdropClass: 'blur',
              data:{
                title: 'Erro!',
                text: 'Não tem pessoas nesse andar',
                button: 'Fechar'
              }
            })
          }
        }
        else{
          this.dialog.open(ModalComponent, {
            panelClass: 'custom-modal', backdropClass: 'blur',
            data:{
              title: 'Erro!',
              text: 'O Elevador já está no local',
              button: 'Fechar'
            }
          })
        }
        break;
      }
      case 2 :{
        if(!this.andar2PortaAberta){
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
            this.dialog.open(ModalComponent, {
              panelClass: 'custom-modal', backdropClass: 'blur',
              data:{
                title: 'Erro!',
                text: 'Não tem pessoas nesse andar',
                button: 'Fechar'
              }
            })
          }
        }
        else{
          this.dialog.open(ModalComponent, {
            panelClass: 'custom-modal', backdropClass: 'blur',
            data:{
              title: 'Erro!',
              text: 'O Elevador já está no local',
              button: 'Fechar'
            }
          })
        }
        break;
      }
      case 3 :{
        if(!this.andar3PortaAberta){
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
            this.dialog.open(ModalComponent, {
              panelClass: 'custom-modal', backdropClass: 'blur',
              data:{
                title: 'Erro!',
                text: 'Não tem pessoas nesse andar',
                button: 'Fechar'
              }
            })
          }
        }
        else{
          this.dialog.open(ModalComponent, {
            panelClass: 'custom-modal', backdropClass: 'blur',
            data:{
              title: 'Erro!',
              text: 'O Elevador já está no local',
              button: 'Fechar'
            }
          })
        }
        break;
      }
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
            this.dialog.open(ModalComponent, {
              panelClass: 'custom-modal', backdropClass: 'blur',
              data:{
                title: 'Erro!',
                text: 'Não tem pessoas nesse andar',
                button: 'Fechar'
              }
            })
          }
        }
        else{
          this.dialog.open(ModalComponent, {
            panelClass: 'custom-modal', backdropClass: 'blur',
            data:{
              title: 'Erro!',
              text: 'O Elevador já está no local',
              button: 'Fechar'
            }
          })
        }
        break;
      }
      case 1 :{
        if(!this.andar1PortaAberta){
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
            this.dialog.open(ModalComponent, {
              panelClass: 'custom-modal', backdropClass: 'blur',
              data:{
                title: 'Erro!',
                text: 'Não tem pessoas nesse andar',
                button: 'Fechar'
              }
            })
          }
        }
        else{
          this.dialog.open(ModalComponent, {
            panelClass: 'custom-modal', backdropClass: 'blur',
            data:{
              title: 'Erro!',
              text: 'O Elevador já está no local',
              button: 'Fechar'
            }
          })
        }
        break;
      }
      case 2 :{
        if(!this.andar2PortaAberta){
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
            this.dialog.open(ModalComponent, {
              panelClass: 'custom-modal', backdropClass: 'blur',
              data:{
                title: 'Erro!',
                text: 'Não tem pessoas nesse andar',
                button: 'Fechar'
              }
            })
          }
        }
        else{
          this.dialog.open(ModalComponent, {
            panelClass: 'custom-modal', backdropClass: 'blur',
            data:{
              title: 'Erro!',
              text: 'O Elevador já está no local',
              button: 'Fechar'
            }
          })
        }
        break;
      }
      case 3 :{
        if(!this.andar3PortaAberta){
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
            this.dialog.open(ModalComponent, {
              panelClass: 'custom-modal', backdropClass: 'blur',
              data:{
                title: 'Erro!',
                text: 'Não tem pessoas nesse andar',
                button: 'Fechar'
              }
            })
          }
        }
        else{
          this.dialog.open(ModalComponent, {
            panelClass: 'custom-modal', backdropClass: 'blur',
            data:{
              title: 'Erro!',
              text: 'O Elevador já está no local',
              button: 'Fechar'
            }
          })
        }
        break;
      }
    }
  }

  pessoaAndar(andar: number){
    switch(andar){
      case 0 :{
        if(this.pessoaAndar0){
          if(!this.pessoaElevador){
            if(this.andar0PortaAberta){
              this.pessoaAndar0 = false;
              this.pessoaElevador = true;
              this.andarElevador = 0;
            }
            else{
              this.dialog.open(ModalComponent, {
                panelClass: 'custom-modal', backdropClass: 'blur',
                data:{
                  title: 'Erro!',
                  text: 'O elevador não está neste andar',
                  button: 'Fechar'
                }
              })
            }
          }
          else{
            this.dialog.open(ModalComponent, {
              panelClass: 'custom-modal', backdropClass: 'blur',
              data:{
                title: 'Erro!',
                text: 'Deixe as pessoas saírem para poder entrar',
                button: 'Fechar'
              }
            })
          }
        }
        else{
          this.dialog.open(ModalComponent, {
            panelClass: 'custom-modal', backdropClass: 'blur',
            data:{
              title: 'Erro!',
              text: 'Não tem pessoas nesse andar',
              button: 'Fechar'
            }
          })
        }
        break;
      }
      case 1 :{
        if(this.pessoaAndar1){
          if(!this.pessoaElevador){
            if(this.andar1PortaAberta){
              this.pessoaAndar1 = false;
              this.pessoaElevador = true;
              this.andarElevador = 1;
            }
            else{
              this.dialog.open(ModalComponent, {
                panelClass: 'custom-modal', backdropClass: 'blur',
                data:{
                  title: 'Erro!',
                  text: 'O elevador não está neste andar',
                  button: 'Fechar'
                }
              });
            }
          }else{
            this.dialog.open(ModalComponent, {
              panelClass: 'custom-modal', backdropClass: 'blur',
              data:{
                title: 'Erro!',
                text: 'Deixe as pessoas saírem para poder entrar',
                button: 'Fechar'
              }
            });
          }
        }
        else{
          this.dialog.open(ModalComponent, {
            panelClass: 'custom-modal', backdropClass: 'blur',
            data:{
              title: 'Erro!',
              text: 'Não tem pessoas nesse andar',
              button: 'Fechar'
            }
          })
        }
        break;
      }
      case 2 :{
        if(this.pessoaAndar2){
          if(!this.pessoaElevador){
            if(this.andar2PortaAberta){
              this.pessoaAndar2 = false;
              this.pessoaElevador = true;
              this.andarElevador = 2;
            }
            else{
              this.dialog.open(ModalComponent, {
                panelClass: 'custom-modal', backdropClass: 'blur',
                data:{
                  title: 'Erro!',
                  text: 'O elevador não está neste andar',
                  button: 'Fechar'
                }
              });
            }
          }else{
            this.dialog.open(ModalComponent, {
              panelClass: 'custom-modal', backdropClass: 'blur',
              data:{
                title: 'Erro!',
                text: 'Deixe as pessoas saírem para poder entrar',
                button: 'Fechar'
              }
            })
          }
        }
        else{
          this.dialog.open(ModalComponent, {
            panelClass: 'custom-modal', backdropClass: 'blur',
            data:{
              title: 'Erro!',
              text: 'Não tem pessoas nesse andar',
              button: 'Fechar'
            }
          });
        }
        break;
      }
      case 3 :{
        if(this.pessoaAndar3){
          if(!this.pessoaElevador){
            if(this.andar3PortaAberta){
              this.pessoaAndar3 = false;
              this.pessoaElevador = true;
              this.andarElevador = 3;
            }
            else{
              this.dialog.open(ModalComponent, {
                panelClass: 'custom-modal', backdropClass: 'blur',
                data:{
                  title: 'Erro!',
                  text: 'O elevador não está neste andar',
                  button: 'Fechar'
                }
              });
            }
          }else{
            this.dialog.open(ModalComponent, {
              panelClass: 'custom-modal', backdropClass: 'blur',
              data:{
                title: 'Erro!',
                text: 'Deixe as pessoas saírem para poder entrar',
                button: 'Fechar'
              }
            })
          }
        }
        else{
          this.dialog.open(ModalComponent, {
            panelClass: 'custom-modal', backdropClass: 'blur',
            data:{
              title: 'Erro!',
              text: 'Não tem pessoas nesse andar',
              button: 'Fechar'
            }
          });
        }
        break;
      }
    }
  }

  abrirPorta(andar: number){
    switch(andar){
      case 0:{
        this.andar0PortaAberta = true;
        break;
      }
      case 1:{
        this.andar1PortaAberta = true;
        break;
      }
      case 2:{
        this.andar2PortaAberta = true;
        break;
      }
      case 3:{
        this.andar3PortaAberta = true;
        break;
      }
    }
  }

  destino(andar: number){
    setTimeout(() => {
      this.abrirPorta(andar);
    }, 2000);
    switch(andar){
      case 0: {
        this.pessoaSair0 = true;
        this.andarSairElevador = 0;
        break;
      }
      case 1: {
        this.pessoaSair1 = true;
        this.andarSairElevador = 1;
        break;
      }
      case 2: {
        this.pessoaSair2 = true;
        this.andarSairElevador = 2;
        break;
      }
      case 3: {
        this.pessoaSair3 = true;
        this.andarSairElevador = 3;
        break;
      }
    }
  }

  pessoaSai(){
    this.pessoaElevador = false;
    switch(this.andarSairElevador){
      case 0: {
        this.pessoaSair0 = false;
        if(!this.andar0Subir && !this.andar0Descer){
          setTimeout(() => {
            this.andar0PortaAberta = false;
          }, 2000);
          setTimeout(() => {
            this.subir(this.botao[0]);
            this.descer(this.botao[0]);
          }, 1000);
        }
        break;
      }
      case 1: {
        this.pessoaSair1 = false;
        if(!this.andar1Subir && !this.andar1Descer){
          setTimeout(() => {
            this.andar1PortaAberta = false;
          }, 2000);
          setTimeout(() => {
            this.subir(this.botao[0]);
            this.descer(this.botao[0]);
          }, 1000);
        }
        break;
      }
      case 2: {
        this.pessoaSair2 = false;
        if(!this.andar2Subir && !this.andar2Descer){
          setTimeout(() => {
            this.andar2PortaAberta = false;
          }, 2000);
          setTimeout(() => {
            this.subir(this.botao[0]);
            this.descer(this.botao[0]);
          }, 1000);
        }
        break;
      }
      case 3: {
        setTimeout(() => {
          this.pessoaSair3 = false;
        }, 1500);

        if(!this.andar3Subir && !this.andar3Descer){
          setTimeout(() => {
            this.andar3PortaAberta = false;
          }, 2000);
          setTimeout(() => {
            this.subir(this.botao[0]);
            this.descer(this.botao[0]);
          }, 1000);
        }
        break;
      }
    }
  }

  botaoAndar(andar: number){
    if(this.pessoaElevador){
      setTimeout(() => {
        switch(this.andarElevador){
          case 0: {
            this.andar0PortaAberta = false;
            this.pessoaElevador = true;
            this.botao.splice(this.botao.indexOf(0), 1);
            this.andar0Subir = false;
            this.andar0Descer = false;
            this.destino(andar);
            break;
          }
          case 1: {
            this.andar1PortaAberta = false;
            this.pessoaElevador = true;
            this.botao.splice(this.botao.indexOf(1), 1);
            this.andar1Subir = false;
            this.andar1Descer = false;
            this.destino(andar);
            break;
          }
          case 2: {
            this.andar2PortaAberta = false;
            this.pessoaElevador = true;
            this.botao.splice(this.botao.indexOf(2), 1);
            this.andar2Subir = false;
            this.andar2Descer = false;
            this.destino(andar);
            break;
          }
          case 3: {
            this.andar3PortaAberta = false;
            this.pessoaElevador = true;
            this.botao.splice(this.botao.indexOf(3), 1);
            this.andar3Subir = false;
            this.andar3Descer = false;
            this.destino(andar);
            break;
          }
        }
      }, 2000);
    }
    else{
      this.dialog.open(ModalComponent, {
        panelClass: 'custom-modal', backdropClass: 'blur',
        data:{
          title: 'Erro!',
          text: 'Não tem pessoa no elevador',
          button: 'Fechar'
        }
      })
    }
  }
}
