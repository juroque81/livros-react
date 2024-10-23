import React, { useState, useEffect } from "react";
import { ControleLivros } from "./controle/ControleLivros";
import { ControleEditora } from "./controle/ControleEditora";
import './LivroLista.css';

const controleLivros = new ControleLivros();
const controleEditora = new ControleEditora();

const LinhaLivro = (props) => {
    const { livro, excluir } = props;
    const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

    return (
        <tr>
            <td>
                {livro.titulo}
                <button className="btn-excluir" onClick={() => excluir(livro.codigo)}>
                    Excluir
                </button>
            </td>
            <td>{livro.resumo}</td>
            <td>{nomeEditora}</td>
            <td>
                <ul>
                    {livro.autores.map((autor, index) => (
                        <li key={index}>{autor}</li>
                    ))}
                </ul>
            </td>
        </tr>
    );
};

const LivroLista = () => {
    const [livros, setLivros] = useState([]);
    const [carregado, setCarregado] = useState(false);

    useEffect(() => {
        if (!carregado) {
            setLivros(controleLivros.obterLivros());
            setCarregado(true);
        }
    }, [carregado]);

    const excluir = (codigo) => {
        controleLivros.excluir(codigo);
        setCarregado(false);
    };

    return (
        <main>
            <h1 className="titulo">Catálogo de Livros</h1>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Resumo</th>
                        <th>Editora</th>
                        <th>Autores</th>
                    </tr>
                </thead>
                <tbody>
                    {livros.map((livro) => (
                        <LinhaLivro
                            key={livro.codigo}
                            livro={livro}
                            excluir={excluir}
                        />
                    ))}
                </tbody>
            </table>
        </main>
    );
};

export default LivroLista;