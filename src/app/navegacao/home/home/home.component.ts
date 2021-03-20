import { ValidationMessages, GenericValidator, DisplayMessage } from './../../../validacao/generic-form-validator';
import { User } from './../../../models/User';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormControlName } from '@angular/forms';
import { MASKS } from 'ng-brazil';
import { fromEvent, merge, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChildren(FormControlName, {read: ElementRef}) forInputElements: ElementRef[];

  cadastroForm: FormGroup;
  user: User;
  formResult: string = '';
  public MASKS = MASKS;

  validationMessages: ValidationMessages;
  genericValidator: GenericValidator;
  displayMessage: DisplayMessage = {};

  constructor(private fb: FormBuilder) {
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
    this.formResult = JSON.stringify(this.cadastroForm.value);
    }
    else{
      this.formResult = "Não submeteu!!!";
    }
  }

}
