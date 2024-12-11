import "./index.scss"

export default function HomePage(){
  return (
    <main className="main">
      <header className="header">
        <img src="/icons/logo.svg" className="logo"/>
        <button>Home</button>
        <button>Cursos</button>
        <button>Tecnologias</button>
        <button>Games</button>
        <button>Vantagens</button>
        <button>Info</button>
      </header>
      <section className="sectionHome">
        <div>
          <h1>O que é Desenvolvimento de Software?</h1>
          <p>Desenvolvimento de software é o processo de criação, design, implementação e manutenção de software. Em termos mais simples,
            é a construção de programas de computador que realizam tarefas específicas. Esses programas podem ser aplicativos para smartphones,
            sistemas operacionais, softwares de edição de imagem, jogos, sites e muito mais.</p>
        </div>
        <img src="/icons/programming.jpg" alt="Notebook com VsCode aberto." />
      </section>
      <section className="sectionCursos">
        <h1>Principais Cursos</h1>
        <p>As principais áreas de formação que te preparam para o desenvolvimento de software são:</p>
        <ul className="sectionCursosLista">
          <li> sp Ciência da Computação:<p>Aborda fundamentos teóricos da computação, algoritmos, estruturas de dados e linguagens de programação.</p></li>
          <li>Engenharia de Software:<p>Foca em metodologias e ferramentas para desenvolver softwares de forma eficiente e com qualidade.</p></li>
          <li>Análise e Desenvolvimento de Sistemas:<p> Combina conhecimentos de sistemas de informação com programação.</p></li>
          <li>Sistemas de Informação:<p>Engloba gestão da informação, banco de dados e desenvolvimento de sistemas.</p></li>
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
      <section>
        <h1>Desenvolvimento de Jogos</h1>
        <p>desenvolvimento de um jogo envolve diversas etapas e profissionais especializados</p>
        <ul>
          <li>Design: Criação da ideia, da história, dos personagens e das mecânicas do jogo.</li>
          <li>Programação: Desenvolvimento do código que dá vida ao jogo.</li>
          <li>Arte: Criação dos gráficos, dos modelos 3D e das animações.</li>
          <li>Som: Produção da trilha sonora e dos efeitos sonoros.</li>
          <li>Teste: Identificação e correção de bugs e ajustes no gameplay.</li>
        </ul>
      </section>
      <section>
        <h1>Evolução dos Jogos</h1>
        <p>O futuro dos jogos eletrônicos é promissor, com tecnologias como a inteligência artificial, a 
          realidade aumentada e o cloud gaming abrindo novas possibilidades. Os jogos estão se tornando 
          cada vez mais complexos, sociais e personalizados, oferecendo experiências únicas e memoráveis 
          aos jogadores.</p>
        <div className="flashcard">
          <h2>Os Pioneiros</h2>
          <p>Os primeiros jogos eletrônicos eram extremamente simples, muitas vezes limitados a telas 
            monocromáticas e controles rudimentares. Jogos como "Pong" e "Space Invaders" marcaram o 
            início dessa era, com gráficos básicos e mecânicas simples, mas que já cativavam os jogadores.</p>
        </div>
        <div className="flashcard">
          <h2>Arcades e Consoles</h2>
          <p>Os primeiros jogos eletrônicos eram extremamente simples, muitas vezes limitados a telas 
            monocromáticas e controles rudimentares. Jogos como "Pong" e "Space Invaders" marcaram o 
            início dessa era, com gráficos básicos e mecânicas simples, mas que já cativavam os jogadores.</p>
        </div>
        <div className="flashcard">
          <h2>A Era dos 16 Bits e a Explosão da Criatividade</h2>
          <ul>
            <li><span>Gráficos Coloridos e Sons Melhores:</span> Com o advento dos consoles de 16 bits, 
            como o Mega Drive e o Super Nintendo, os jogos ganharam mais cores, sons mais elaborados e 
            personagens mais carismáticos.</li>
            <li><span>Gêneros Diversificados:</span> Essa era foi marcada pela diversificação dos gêneros, 
            com a popularização de RPGs, jogos de plataforma, jogos de luta e muitos outros.</li>
          </ul>
        </div>
        <div className="flashcard">
          <h2>A Revolução 3D e a Era dos PCs</h2>
          <ul>
            <li><span>Gráficos Realistas:</span> A chegada dos consoles de 32 bits e 64 bits, como o PlayStation 
            e o Nintendo 64, trouxe gráficos tridimensionais mais realistas e jogos com maior complexidade.</li>
            <li><span>PCs, Potência e Flexibilidade: </span> Os PCs, com sua capacidade de atualização constante, 
            se tornaram plataformas poderosas para o desenvolvimento de jogos, permitindo a criação de mundos 
            virtuais cada vez mais imersivos.</li>
          </ul>
        </div>
        <div className="flashcard">
          <h2>A Era Moderna: Realidade Virtual, Jogos Online e Mobile</h2>
          <ul>
            <li><span>Realidade Virtual:</span> A realidade virtual promete uma imersão ainda maior nos jogos, 
            transportando os jogadores para mundos virtuais de forma mais realista.</li>
            <li><span>Jogos Online:</span> Os jogos online multijogador se tornaram um fenômeno global, conectando 
            jogadores de todo o mundo em experiências compartilhadas.</li>
            <li><span>Jogos Mobile:</span> Com o avanço dos smartphones, os jogos se tornaram mais acessíveis do 
            que nunca, com uma infinidade de títulos disponíveis para dispositivos móveis.</li>
          </ul>
        </div>
      </section>
      <section>
        <h1>Vantagens da profissão</h1>
        <ul>
          <li><span>Criação e inovação:</span> Os desenvolvedores de software têm a oportunidade de criar novas 
          soluções e tecnologias.</li>
          <li><span>Alta demanda:</span> A área de tecnologia está em constante crescimento, com alta demanda 
          por profissionais qualificados.</li>
          <li><span>Remuneração:</span> A média salarial para desenvolvedores de software é geralmente alta.</li>
          <li><span>Flexibilidade:</span> Muitas empresas oferecem opções de trabalho remoto e horários flexíveis.</li>
          <li><span>Aprendizado contínuo:</span> A tecnologia evolui rapidamente, o que exige que os desenvolvedores se mantenham atualizados, proporcionando um ambiente de aprendizado constante.</li>
        </ul>
      </section>
      <section>
        <p>Obrigada por ler ate aqui. Esse site foi criado pela Bianca Liebetanz.</p>
      </section>
    </main>
  )
}