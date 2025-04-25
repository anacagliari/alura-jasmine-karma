import { ComponentFixture, TestBed } from "@angular/core/testing";
import { LikeWidgetComponent } from "./like-widget.component";
import { LikeWidgetModule } from "./like-widget.module";
// testes são escritos em jasmine, que é o framework de testes do Angular para escrever testes unitários mais simples e legíveis.
// o karma é o runner de testes, que executa os testes e mostra os resultados no console.

/*
Este código é um conjunto de testes unitários para o componente LikeWidgetComponent usando o framework de testes do Angular (@angular/core/testing).
Ele segue boas práticas de testes, como isolamento, clareza e verificação de comportamentos esperados.

1. Estrutura do describe
- describe: Agrupa os testes relacionados ao LikeWidgetComponent.
- fixture: Representa o ambiente de teste do componente, permitindo acessar o DOM e interagir com ele.
- component: Uma instância do componente que será testada.

2. Boas práticas de testes aplicadas
- Isolamento: Cada teste é independente, graças ao uso do beforeEach para criar uma nova instância do componente antes de cada teste.
- Clareza: Os nomes dos testes (it) descrevem claramente o comportamento esperado.
- Cobertura de casos importantes: Testa a criação do componente, o comportamento do ciclo de vida (ngOnInit) e a emissão de eventos.
- Uso de spyOn: Permite verificar se métodos ou eventos foram chamados sem realmente executá-los.
- Uso de fixture.detectChanges(): Garante que o ciclo de vida do Angular seja executado antes de verificar os resultados.
*/

describe(LikeWidgetComponent.name, () => {
  /*
  Configuração inicial (beforeEach)
  beforeEach: Executa antes de cada teste, garantindo que cada teste comece com um estado limpo.
  TestBed.configureTestingModule: Configura o ambiente de teste, incluindo o módulo necessário (LikeWidgetModule).
  fixture = TestBed.createComponent: Cria uma instância do componente para teste.
  component = fixture.componentInstance: Obtém a instância do componente para interagir diretamente com ele.
  */
  let fixture: ComponentFixture<LikeWidgetComponent> = null;
  let component: LikeWidgetComponent = null;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LikeWidgetModule]
    }).compileComponents();

    fixture = TestBed.createComponent(LikeWidgetComponent);
    component = fixture.componentInstance;
  });

  /*
  Teste 1: Verifica se o componente é criado
  Objetivo: Verifica se o componente foi criado corretamente.
  expect(component).toBeTruthy(): Garante que a instância do componente não é null ou undefined.
   */
  it('Should create component', () => {
    expect(component).toBeTruthy();
  });

  /*
  Teste 2: Geração automática de ID
  Objetivo: Verifica se o componente gera automaticamente um ID quando a propriedade id não é fornecida.
  fixture.detectChanges(): Dispara o ciclo de vida do Angular (como ngOnInit).
  expect(component.id).toBeTruthy(): Garante que o ID foi gerado (não é null ou undefined).
  */
  it('Should auto-generate ID during ngOnInit when (@Input id) is not assigned', () => {
    fixture.detectChanges();
    expect(component.id).toBeTruthy();
  });

  /*
  Teste 3: Não gera ID automaticamente se já foi atribuído
  Objetivo: Verifica que o componente não sobrescreve o ID se ele já foi atribuído antes do ngOnInit.
  component.id = someId: Define manualmente um ID antes de disparar o ciclo de vida.
  expect(component.id).toBe(someId): Garante que o ID permanece o mesmo.
  */
  it('Should NOT auto-generate ID during ngOnInit when (@Input id) is assigned', () => {
    const someId = 'someId';
    component.id = someId;
    fixture.detectChanges(); // nunca colocar no beforeEach, sempre dentro do teste. pois não tem chance de passar valores diferentes.
    expect(component.id).toBe(someId);
  });

  /*
  Teste 4: Emissão do evento liked
  Objetivo: Verifica se o evento liked é emitido quando o método like() é chamado.
  spyOn(component.liked, 'emit'): Espiona o método emit do EventEmitter para verificar se ele foi chamado.
  component.like(): Chama o método like do componente.
  expect(component.liked.emit).toHaveBeenCalled(): Garante que o evento foi emitido.
  */
  it(`#${LikeWidgetComponent.prototype.like.name} should trigger (@Output liked) when called`, () => {
      spyOn(component.liked, 'emit'); // objeto liked, que é um EventEmitter, tem o método emit, que é chamado quando o evento é emitido.
      fixture.detectChanges();
      component.like();
      expect(component.liked.emit).toHaveBeenCalled();
  });

});
