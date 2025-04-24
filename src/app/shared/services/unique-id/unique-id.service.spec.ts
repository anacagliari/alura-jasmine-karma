// Importa o serviço UniqueIdService que será testado.
import { UniqueIdService } from "./unique-id.service";

// Define um conjunto de testes para o serviço UniqueIdService.
describe(UniqueIdService.name, () => {

  const prefix = 'app';
  let service: UniqueIdService = null;

  beforeEach(() => {
    // Arrange: Antes de cada teste, cria uma nova instância do serviço UniqueIdService.
    service = new UniqueIdService();
  });



  // Teste 1: Verifica se o método generateUniqueIdWithPrefix gera um ID com o prefixo fornecido.
  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should generate id when called with prefix`, () => {
    // Act: Chama o método generateUniqueIdWithPrefix com o prefixo.
    const id = service.generateUniqueIdWithPrefix(prefix);

    // Assert: Verifica se o ID gerado começa com o prefixo esperado.
    expect(id.startsWith('app-')).toBeTrue();

    expect(true).toBeTrue(); // Espera sempre um tipo literal, tipo primitivo.
    expect(true).toBe(true); // Compara se o valor esperado é igual ao valor real, considerando o tipo.
    expect(true).toBeTruthy(); // Mais genérico, compara se um valor é verdadeiro sem considerar o tipo, apenas o valor.
  });



  // Teste 2: Verifica se o método generateUniqueIdWithPrefix não gera IDs duplicados.
  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should not generate duplicate IDs when called without multiple times`, () => {
    // Act: Cria um conjunto (Set) para armazenar os IDs gerados e garantir que não haja duplicados.
    const ids = new Set();
    // Define o número de IDs que serão gerados.
    const numberOfIds = 100;
    // Gera 100 IDs únicos e os adiciona ao conjunto.
    for (let i = 0; i < numberOfIds; i++) {
      const id = service.generateUniqueIdWithPrefix(prefix);
      ids.add(id);
    }

    // Assert: Verifica se o número de IDs no conjunto é igual ao número de IDs gerados. Isso garante que todos os IDs são únicos.
    expect(ids.size).toBe(numberOfIds);
  });



  // Teste 3: Verifica se o método `getNumberOfGenerateIds` retorna o número correto de IDs gerados.
  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should return the number of generateIds when called`, () => {
    // Act: Gera um ID único com o prefixo 'app'.
    service.generateUniqueIdWithPrefix(prefix);
    service.generateUniqueIdWithPrefix(prefix);
    service.generateUniqueIdWithPrefix(prefix);

    // Assert: Verifica se o número de IDs gerados é igual a 3.
    expect(service.getNumberOfGenerateIds()).toBe(3);
  });



  // Teste 4: Verifica se o método `generateUniqueIdWithPrefix` lança um erro quando chamado com valores inválidos.
  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should throw when called with empty`, () => {
    // Act: Define um array com valores inválidos para o prefixo (nulo, indefinido e string vazia).
    const emptyValues = [null, undefined, ''];

    // Assert: Para cada valor inválido, verifica se o método lança um erro.
    emptyValues.forEach((value) => {
      // O método `generateUniqueIdWithPrefix` deve lançar um erro ao ser chamado com um prefixo inválido.
      expect(() => service.generateUniqueIdWithPrefix(value))
        .withContext(`Empty value: ${value}`) // Adiciona um contexto à mensagem de erro para facilitar a depuração. Facilita a identificação do valor que causou o erro.
        .toThrow();
    });
  });

});

/* EXEMPLO DE TESTE UNITÁRIO
Este bloco de comentário fornece um exemplo de estrutura básica para testes unitários no Angular.

1. `describe`: Define um conjunto de testes para um artefato específico (classe, método, etc.).
2. `it`: Define um caso de teste individual, descrevendo o comportamento esperado.
3. `expect`: Faz uma asserção para verificar se o comportamento do código está correto.

Estrutura básica:
  describe(NomeDoArtefatoQueQueremosTestar.name, () => {

    it(`${NomeDoArtefatoQueQueremosTestar.prototype.NomeDoMetodo.name} deve passar primeira condição que queremos testar do artefato quando ocorrer tal coisa`, () => {
      expect(true).toBe(true); // Exemplo de asserção.
    });

    it(`${NomeDoArtefatoQueQueremosTestar.prototype.NomeDoMetodo.name} deve passar segunda condição que queremos testar do artefato quando ocorrer tal coisa`, () => {
      expect(false).toBe(false); // Exemplo de asserção.
    });

  });
*/
