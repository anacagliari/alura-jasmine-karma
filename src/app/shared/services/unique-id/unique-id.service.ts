// Importa o decorador Injectable do Angular, que permite que a classe seja usada como um serviço injetável.
import { Injectable } from "@angular/core";

// Importa a função v4 da biblioteca "uuid", que é usada para gerar identificadores únicos universais (UUIDs).
import { v4 as uuidv4 } from "uuid";

// Declara a classe como um serviço injetável no Angular.
@Injectable()
export class UniqueIdService {
  // Propriedade privada que armazena o número total de IDs gerados.
  private numberOfGenerateIds = 0;

  // Método público que gera um ID único com um prefixo fornecido.
  public generateUniqueIdWithPrefix(prefix: string): string {
    // Verifica se o prefixo é válido (não vazio). Caso contrário, lança um erro.
    if (!prefix) {
      throw new Error("Prefix can not be empty.");
    }

    // Gera um ID único chamando o método privado generateUniqueId.
    const uniqueId = this.generateUniqueId();
    // Incrementa o contador de IDs gerados.
    this.numberOfGenerateIds++;

    // Retorna o ID único concatenado com o prefixo fornecido.
    return `${prefix}-${uniqueId}`;
  }

  // Método público que retorna o número total de IDs gerados até o momento.
  public getNumberOfGenerateIds(): number {
    return this.numberOfGenerateIds;
  }

  // Método privado que utiliza a função uuidv4 para gerar um identificador único.
  private generateUniqueId(): string {
    return uuidv4();
  }
}
