import { Editora } from "../modelo/Editora";

const editoras: Array<Editora> = [
    { "codEditora": 1, "nome": "Alta Books" },
    { "codEditora": 2, "nome": "Pearson" },
    { "codEditora": 3, "nome": "Addison Wesley" }
];

export class ControleEditora {
    getEditoras(): Array<Editora> {  
        return editoras;
    }

    getNomeEditora(codEditora: number): string | undefined {  
        const resultado = editoras.filter(e => e.codEditora === codEditora);
        return resultado.length > 0 ? resultado[0].nome : undefined;
    }
}