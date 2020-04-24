# Styled-components

(https://medium.com/building-crowdriff/styled-components-to-use-or-not-to-use-a6bb4a7ffc21)

## É o resultado do brainstorm de como poderíamos melhorar o CSS pra estilizar componentes do React.

- É recomendado o uso do plugin Babel. Para usuários de TypeScript, o plugin abaixo é recomendado:
  (https://github.com/Igorbek/typescript-plugin-styled-components)

Algumas características:

- styled-components mantém registro de quais componentes estão renderizados na page e injeta seus estilos e apenas isso, totalmente automatico. Combinado com o code splitting (bundling), seu usuário acaba rodando o mínimo de código necessário.

- styled-components gera nomes de classes únicos para seus estilos. Você nunca precisará se preocupar com duplicação, sobescrita ou escrita errada das classes.

- Pode ser complicado de saber quando um nome de classe está sendo usado em mais de um lugar no seu código. Styled-components faz isso parecer óbvio, já que a estilização é anexada à um componente específico.

- Adaptar a estilização de um componente baseado em suas propriedades ou num tema global é simples e intuitivo (não é necessária a modificação manual de dezenas de classes).

- Manutenção não é dolorosa, pois você nunca precisará "caçar" entre diversos arquivos para descobrir o que está afetando seu componente. Isso independende do quão grande e complexo é sua aplicação.

## Instalando:

- npm install --save styled-components

## Comparando com e sem styled-components

## Pseudoelements, pseudoselectors e nesting

O preprocessador que usamos, stylis, suporta sintaxe do scss para estilização em cadeia.
Enquanto isso, o símbolo (&) pode ser usado para referenciar novamente o componente principal (como se fosse a palavra-chave 'this').

## Theming

Styled-components tem suporte completo para estilização por temas, exportando o <ThemeProvider>. Esse componente nos entrega um tema para todos os componentes dentro dessa mesma tag através da ContextAPI (Ler mais). Na árvore de renderização, todos os componentes tocados pelo styled-components têm acesso ao tema, mesmo estando múltiplos níveis abaixo (por hierarquia).

## Segurança

Como styled-components usa interpolações de strings e permite o uso de inputs de usuário como argumentos para interpolações, você deve ter cuidado para sanitizar o input. Permitir o input de usuário como argumento torna sua aplicação vulnerável e fazer com um usuário consiga até, por exemplo, chamar uma api sua ao digitar uma url válida, como no caso abaixo:

const userInput = '/api/withdraw-funds'

const ArbitraryComponent = styled.div`background: url(${userInput}); /* More styles here... */`

Obviamente esse caso não é tão aplicável, mas ainda assim, CSS injection é real e têm má repercussão. É interessante o uso de css.escape (early-adopt) ou polyfill (strongly-used).

## Tagged Template Literals (ES6 new feature)

- In progress

## Server-side rendering

Styled-components suporta server side rendering, com uma re-hidratação de estilização (?). Basicamente, a ideia é que toda vez que você renderizar o seu app no server, você pode criar um ServerStyleSheet e adicionar um provider pra a sua árvore de componentes do React, que aceita estilos via Context API.
Isso não interfere com os estilos globais, como keyframes, ou createGlobalStyle.
