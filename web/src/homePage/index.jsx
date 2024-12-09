import "./index.scss"
import dragon from "../icons/dragon.svg"

export default function HomePage(){
  return (
    <main className="main">
      <header className="header">
        <img src={dragon} className="dragon"/>
        <button>Home</button>
        <button>Cursos</button>
        <button>Tecnologias</button>
        <button>Games</button>
        <button>Vantagens</button>
        <button>Info</button>
      </header>
      <section>
        <h1>O que é Desenvolvimento de Software?</h1>
        <p>Desenvolvimento de software é o processo de criação, design, implementação e manutenção de software. Em termos mais simples,
          é a construção de programas de computador que realizam tarefas específicas. Esses programas podem ser aplicativos para smartphones,
          sistemas operacionais, softwares de edição de imagem, jogos, sites e muito mais.</p>
      </section>
      <section>
        <h1>Principais Cursos</h1>
        <p>As principais áreas de formação que te preparam para o desenvolvimento de software são:</p>
        <ul>
          <li>Ciência da Computação: Aborda fundamentos teóricos da computação, algoritmos, estruturas de dados e linguagens de programação.</li>
          <li>Engenharia de Software: Foca em metodologias e ferramentas para desenvolver softwares de forma eficiente e com qualidade.</li>
          <li>Análise e Desenvolvimento de Sistemas: Combina conhecimentos de sistemas de informação com programação.</li>
          <li>Sistemas de Informação: Engloba gestão da informação, banco de dados e desenvolvimento de sistemas.</li>
        </ul>
      </section>
      <section>
        <h1>Principais Tecnologias do Desenvolvimento Web</h1>
        <p>O desenvolvimento web se concentra na criação de sites e aplicações web. Algumas das principais tecnologias utilizadas são:</p>
        <ul>
          <li>HTML: Estrutura básica das páginas web.</li>
          <li>CSS: Define a aparência visual das páginas.</li>
          <li>JavaScript: Linguagem de programação para criar interatividade e dinamismo.</li>
          <li>Frameworks: Conjuntos de ferramentas e bibliotecas que agilizam o desenvolvimento, como Angular, Vue.js e Node.js.</li>
          <li>Banco de dados: Para armazenar e gerenciar dados, como MySQL, PostgreSQL e MongoDB.</li>
        </ul>
      </section>
    </main>
  )
}