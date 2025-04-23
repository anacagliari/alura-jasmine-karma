import { UniqueIdService } from "./unique-id.service";

describe(UniqueIdService.name, () => {

  it(`${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should generate id when called with prefix`, () => {
    // Arrange
    const service = new UniqueIdService();

    // Act
    const id = service.generateUniqueIdWithPrefix('app');

    // Assert
    expect(id).toContain('app-');
  });

});

/*  EXEMPLO DE TESTE UNITÁRIO
Importa o TestBed do Angular para configurar o ambiente de teste.
Importa o serviço UniqueIdService que será testado.
Importa o módulo de teste do Angular.

Exemplo de teste unitário, estrutura básica:
    describe('blablabla should blablabla when blablabla'
    describe('blablabla deve blablabla quando blablabla'

      describe(NomeDoArtefatoQueQueremosTestar.name, () => {

        it(`${NomeDoArtefatoQueQueremosTestar.prototype.NomeDoMetodo.name} deve passar primeira condição que queremos testar do artefato quando ocorrer tal coisa`, () => {
          expect(true).toBe(true);
        });

        it(`${NomeDoArtefatoQueQueremosTestar.prototype.NomeDoMetodo.name} deve passar segunda condição que queremos testar do artefato quando ocorrer tal coisa`, () => {
          expect(false).toBe(false);
        });

      });
*/
