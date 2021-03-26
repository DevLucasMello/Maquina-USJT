import { ModalComponent } from './../../modal/modal/modal.component';
import { Produto } from './../../../models/Produto';
import { ValidationMessages, GenericValidator, DisplayMessage } from './../../../validacao/generic-form-validator';
import { User } from './../../../models/User';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormControlName } from '@angular/forms';
import { MASKS } from 'ng-brazil';
import { fromEvent, merge, Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChildren(FormControlName, {read: ElementRef}) forInputElements: ElementRef[];

  cadastroForm: FormGroup;
  public user: User;
  public checkButton: boolean = false;
  public valor: number = 0;
  public checkProduto: boolean = false;
  public compra: number = 0;
  public selecaoProduto: string = '';
  public botao: boolean = false;
  public compraRealizada: boolean = false;
  public poderComprar: boolean = true;
  public qtd: number;

  public mEms: boolean = false;
  public pe: boolean = false;
  public doritos: boolean = false;
  public panco: boolean = false;
  public fandangos: boolean = false;
  public ruffles: boolean = false;

  public removermEms: boolean = false;
  public removerpe: boolean = false;
  public removerdoritos: boolean = false;
  public removerpanco: boolean = false;
  public removerfandangos: boolean = false;
  public removerruffles: boolean = false;


  public produto: Array<Produto> = [({"id": 1, "valor": 7}),({"id": 2, "valor": 7}),({"id": 3, "valor": 6}),({"id": 4, "valor": 4}),({"id": 5, "valor": 8}),({"id": 6, "valor": 8})];

  public MASKS = MASKS;

  validationMessages: ValidationMessages;
  genericValidator: GenericValidator;
  displayMessage: DisplayMessage = {};

  constructor(private fb: FormBuilder, private dialog: MatDialog) {
    this.validationMessages = {
      nome: {
        required: 'O nome é requerido',
        minlength: 'O nome precisa ter no mínimo 2 caracteres',
        maxlength: 'O nome precisa ter no máximo 150 caracteres'
      },
      moeda: {
        required: 'Informe um valor',
        moeda: 'Valor inválido',
        min: 'O valor deve ser no mínimo R$ 10,00',
        max: 'O valor deve ser no máximo R$ 200,00'
      }
    };
    this.genericValidator = new GenericValidator(this.validationMessages);
    this.qtd = this.produto.length;
  }

  ngOnInit() {
    this.cadastroForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(150)]],
      moeda: ['', [Validators.required, Validators.min(10), Validators.max(200)]]
    });
  }

  ngAfterViewInit(): void {
    let controlBlurs: Observable<any>[] = this.forInputElements
    .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));

    merge(...controlBlurs).subscribe(() => {
      this.displayMessage = this.genericValidator.processarMensagens(this.cadastroForm);
    });
  }

  adicionarUsuario(){

    if(this.cadastroForm.dirty && this.cadastroForm.valid){
      this.user = Object.assign({}, this.user, this.cadastroForm.value);
      this.checkButton = true;
    }
  }

  adicionarNota2(){
    if(this.poderComprar){
      if(!this.compraRealizada){
        if(this.checkProduto){
          if(this.compra > this.valor){
            if(this.user.moeda >= 2){
              this.valor += 2;
              this.user.moeda -= 2;
              if(this.valor >= this.compra){
                this.botao = true;
              }
            }
            else{
              console.log("Você não tem saldo suficiente");
            }
          }
          else{
            console.log("valor suficiente para realizar a compra");
          }

        }else{
          this.dialog.open(ModalComponent, {
            panelClass: 'custom-modal', backdropClass: 'blur',
            data:{
                title: 'Erro!',
                text: 'Selecione primeiro um produto',
                button: 'Fechar'
            }
          })
        }
      }
      else{
        console.log("Clique no produto comprado");
      }
    }
    if(this.compraRealizada){
      console.log("Clique no produto comprado");
    }
  }

  adicionarNota5(){
    if(this.poderComprar){
      if(!this.compraRealizada){
        if(this.checkProduto){
          if(this.compra > this.valor){if(this.user.moeda >= 5){
            this.valor += 5;
            this.user.moeda -= 5;
            if(this.valor >= this.compra){
              this.botao = true;
            }
          }
          else{
            console.log("Você não tem saldo suficiente");
          }
        }
        else{
          console.log("valor suficiente para realizar a compra");
        }
      }else{
        console.log("Selecione primeiro um produto");
      }
    }
    else{
      console.log("Clique no produto comprado");
    }
  }
  if(this.compraRealizada){
    console.log("Clique no produto comprado");
  }
}

adicionarNota10(){
  if(this.poderComprar){
    if(!this.compraRealizada){
      if(this.checkProduto){
        if(this.compra > this.valor){
          if(this.user.moeda >= 10){
            this.valor += 10;
            this.user.moeda -= 10;
            if(this.valor >= this.compra){
              this.botao = true;
            }
          }
          else{
            console.log("Você não tem saldo suficiente");
          }
        }
        else{
          console.log("valor suficiente para realizar a compra");
        }
      }else{
        console.log("Selecione primeiro um produto");
      }
    }
    else{
      console.log("Clique no produto comprado");
    }
  }
  if(this.compraRealizada){
    console.log("Clique no produto comprado");
  }
}

adicionarNota20(){
  if(this.poderComprar){
    if(!this.compraRealizada){
      if(this.checkProduto){
        if(this.compra > this.valor){
          if(this.user.moeda >= 20){
            this.valor += 20;
            this.user.moeda -= 20;
            if(this.valor >= this.compra){
              this.botao = true;
            }
          }
          else{
            console.log("Você não tem saldo suficiente");
          }
        }
        else{
          console.log("valor suficiente para realizar a compra");
        }
      }else{
        console.log("Selecione primeiro um produto");
      }
    }
    else{
      console.log("Clique no produto comprado");
    }
  }
  if(this.compraRealizada){
    console.log("Clique no produto comprado");
  }
}

adicionarNota50(){
  if(this.poderComprar){
    if(!this.compraRealizada){
      if(this.checkProduto){
        if(this.compra > this.valor){
          if(this.user.moeda >= 50){
            this.valor += 50;
            this.user.moeda -= 50;
            if(this.valor >= this.compra){
              this.botao = true;
            }
          }
          else{
            console.log("Você não tem saldo suficiente");
          }
        }
        else{
          console.log("valor suficiente para realizar a compra");
        }
      }else{
        console.log("Selecione primeiro um produto");
      }
    }
    else{
      console.log("Clique no produto comprado");
    }
  }
  if(this.compraRealizada){
    console.log("Clique no produto comprado");
  }
}

adicionarmEms(item: Produto){
  if(this.poderComprar){
    if(!this.compraRealizada){
      if(!this.checkProduto){
        this.checkProduto = true;
        this.compra = item.valor;
        this.selecaoProduto = 'mEms';
      }else{
        console.log("Produto já selecionado");
      }
    }
    else{
      console.log("Clique no produto comprado");
    }
  }
  if(this.compraRealizada){
    console.log("Clique no produto comprado");
  }
}

adicionarpe(item: Produto){
  if(this.poderComprar){
    if(!this.compraRealizada){
      if(!this.checkProduto){
        this.checkProduto = true;
        this.compra = item.valor;
        this.selecaoProduto = 'pe';
      }else{
        console.log("Produto já selecionado");
      }
    }
    else{
      console.log("Clique no produto comprado");
    }
  }
  if(this.compraRealizada){
    console.log("Clique no produto comprado");
  }
}

adicionardoritos(item: Produto){
  if(this.poderComprar){
    if(!this.compraRealizada){
      if(!this.checkProduto){
        this.checkProduto = true;
        this.compra = item.valor;
        this.selecaoProduto = 'doritos';
      }else{
        console.log("Produto já selecionado");
      }
    }
    else{
      console.log("Clique no produto comprado");
    }
  }
  if(this.compraRealizada){
    console.log("Clique no produto comprado");
  }
}

adicionarpanco(item: Produto){
  if(this.poderComprar){
    if(!this.compraRealizada){
      if(!this.checkProduto){
        this.checkProduto = true;
        this.compra = item.valor;
        this.selecaoProduto = 'panco';
      }else{
        console.log("Produto já selecionado");
      }
    }
    else{
      console.log("Clique no produto comprado");
    }
  }
  if(this.compraRealizada){
    console.log("Clique no produto comprado");
  }
}

adicionarfandangos(item: Produto){
  if(this.poderComprar){
    if(!this.compraRealizada){
      if(!this.checkProduto){
        this.checkProduto = true;
        this.compra = item.valor;
        this.selecaoProduto = 'fandangos';
      }else{
        console.log("Produto já selecionado");
      }
    }
    else{
      console.log("Clique no produto comprado");
    }
  }
  if(this.compraRealizada){
    console.log("Clique no produto comprado");
  }
}

adicionarruffles(item: Produto){
  if(this.poderComprar){
    if(!this.compraRealizada){
      if(!this.checkProduto){
        this.checkProduto = true;
        this.compra = item.valor;
        this.selecaoProduto = 'ruffles';
      }else{
        console.log("Produto já selecionado");
      }
    }
    else{
      console.log("Clique no produto comprado");
    }
  }
  if(this.compraRealizada){
    console.log("Clique no produto comprado");
  }
}

comprar(){
  this.user.moeda += this.valor - this.compra;
  this.valor = 0;
  this.compra = 0;
  console.log("O produto " + this.selecaoProduto + "foi comprado com sucesso!");
  this.compraRealizada = true;
  this.botao = false;

  switch(this.compraRealizada){

    case(this.selecaoProduto === 'mEms'):
    this.mEms = true;
    break;

    case(this.selecaoProduto === 'pe'):
    this.pe = true;
    break;

    case(this.selecaoProduto === 'doritos'):
    this.doritos = true;
    break;

    case(this.selecaoProduto === 'panco'):
    this.panco = true;
    break;

    case(this.selecaoProduto === 'fandangos'):
    this.fandangos = true;
    break;

    case(this.selecaoProduto === 'ruffles'):
    this.ruffles = true;
    break;
  }
}

ocultar(){
  if(this.qtd > 0){
    if(this.mEms){
      if(!this.removermEms){
        this.qtd -= 1;
        this.removermEms = true;
      }
    }
    if(this.pe){
      if(!this.removerpe){
        this.qtd -= 1;
        this.removerpe = true;
      }
    }
    if(this.doritos){
      if(!this.removerdoritos){
        this.qtd -= 1;
        this.removerdoritos = true;
      }
    }
    if(this.panco){
      if(!this.removerpanco){
        this.qtd -= 1;
        this.removerpanco = true;
      }
    }
    if(this.fandangos){
      if(!this.removerfandangos){
        this.qtd -= 1;
        this.removerfandangos = true;
      }
    }
    if(this.ruffles){
      if(!this.removerruffles){
        this.qtd -= 1;
        this.removerruffles = true;
      }
    }
    this.compraRealizada = false;
    this.checkProduto = false;
    this.selecaoProduto= '';
  }
  if(this.qtd === 0){
    console.log("Os produtos acabaram");
    this.poderComprar = false;
  }
  if(this.user.moeda < 4){
    console.log("Você não possui saldo para comprar mais produtos");
    this.poderComprar = false;
  }
}

}
