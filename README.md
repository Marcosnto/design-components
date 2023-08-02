# Design Components

O projeto consiste na utilização de regras de design pré definidas para a criação de variáveis de estilos que serão utilizadas na construção de componentes. 

Utilizando o <i>style guide</i> foi possível definir as propriedades em um arquivo JSON e a partir disso, utilizando o <a href="https://amzn.github.io/style-dictionary/#/">Style Dictionary</a>, foram criadas as variáveis para as diversas plataformas (neste projeto foi definido somente para Web, ou seja, as variáveis são geradas somente no formato de SCSS). 

## Processo de aprendizado e escolhas

### Style Dictionary
Utilizando a documentação do <a href="https://amzn.github.io/style-dictionary/#/">Style Dictionary</a> pude compreender como funciona o framework e quais eram os seus objetivos. Para a parte de padronização do mesmo, procurei me guiar pelos <a href="https://github.com/amzn/style-dictionary/tree/main/examples">projetos modelos</a> que estão contidos no github. Não consegui obter muitas informações de boas práticas quanto a este framework, então parti de alguns pressupostos baseando-se em boas práticas de programação no geral. 

Por <i>default</i>, o framework gera os arquivos na raiz do projeto, contudo, para uma melhor organização e manutenção do código resolvi criar um diretório <i>style-dictionary</i> que iria conter todos arquivos gerados, configurações e regras. 

Na definição da estruturação das regras, resolvi separar pela propria categorização pré definida no JSON base: <i>color</i>, <i>height</i>, <i>level</i> e <i>size</i>. Agrupei os elementos que eram iguais e que mudavam somente a variação (ex: spacing) para que assim ficasse melhor identificar/alterar alguma propriedade. 

### Demais escolhas 

No que diz respeito ao projeto como um todo, escolhi o <a href="https://vitejs.dev/">Vite</a> por ser um framework leve e prático, suficiente para o projeto. Para estruturação de pastas optei por criar um diretório <i>components</i> que contem cada componente e dentro de cada um desses suas respectivas sub-categorias (ex: <i>Button/Primary</i>). 

Para a criação dos arquivos dos componentes segui a linha de separação de contextos, no qual cada diretório possui somente os arquivos respectivos a ele mesmo e que seguem a estrutura abaixo, pois assim conseguimos isolar e dar manutenção de forma mais específica.
<ul>
<li>index.jsx</li>
<li>style.scss (quando houver)</li>
<li>**.stories.js</li>
</ul>

Utilizei o <i>Prettier</i> e as regras pré-definidas do Vite no <i>ESlint</i> para conseguir ter uma boa organização e qualidade de código. 


## Languages

<ul>
<li><a href="https://developer.mozilla.org/pt-BR/docs/Glossary/W3C">HTML5</a></li>
<li><a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS">CSS3</a></li>
<li><a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript">JavaScript<a></li>
</ul>

## Frameworks & Libs

<ul>
<li><a href="https://vitejs.dev/">React by Vite</a></li>
<li><a href="https://amzn.github.io/style-dictionary/#/">Style Dictionary</a></li>
<li><a href="https://sass-lang.com/">Sass</a></li>
<li><a href="https://storybook.js.org/">Storybook</a></li>
<li><a href="https://eslint.org/">Eslint</a></li>
<li><a href="https://prettier.io/">Prettier</a></li>
</ul>
  
## Execução

Para executar o projeto basta utilizar o comando abaixo:
```bash
yarn dev
```
Abra [http://localhost:5173/](http://localhost:5173/) com o seu navegador para visualizar o projeto.

