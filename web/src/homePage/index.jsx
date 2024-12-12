import "./index.scss"

export default function HomePage(){
  return (
    <main className="main">
      <header className="header flexbox">
        <img src="/icons/logo.svg" className="logo"/>
        <button>Home</button>
        <button>Cursos</button>
        <button>Tecnologias</button>
        <button>Games</button>
        <button>Vantagens</button>
        <button>Info</button>
      </header>
      <section className="sectionHome flexbox">
        <div>
          <h1>O que é Desenvolvimento de Software?</h1>
          <p>Desenvolvimento de software é o processo de criação, design, implementação e manutenção de software. Em termos mais simples,
            é a construção de programas de computador que realizam tarefas específicas. Esses programas podem ser aplicativos para smartphones,
            sistemas operacionais, softwares de edição de imagem, jogos, sites e muito mais.</p>
        </div>
        <img src="/icons/condicionals.jpg" alt="Notebook com VsCode aberto." />
      </section>
      <section className="sectionCursos flexbox">
        <h1>Principais Cursos</h1>
        <div className="sectionCursosContainer flexbox">
          <div>
            <h2>Ciência da Computação</h2>
            <p>Aborda fundamentos teóricos da computação, algoritmos, estruturas de dados e linguagens de programação.</p></div>
          <div>
            <h2>Engenharia de Software</h2>
            <p>Foca em metodologias e ferramentas para desenvolver softwares de forma eficiente e com qualidade.</p></div>
          <div>
            <h2>ADS</h2>
          <p>(Análise e Desenvolvimento de Sistemas) Combina conhecimentos de sistemas de informação com programação.</p></div>
          <div>
            <h2>Sistemas de Informação</h2>
            <p>Engloba gestão da informação, banco de dados e desenvolvimento de sistemas.</p></div>
        </div>
      </section>
      <section className="sectionTecnologias flexbox">
          <h1>Principais Tecnologias do Desenvolvimento Web</h1>
          <p>O desenvolvimento web se concentra na criação de sites e aplicações web. Algumas das principais tecnologias utilizadas são:</p>
          <div className="carousel flexbox">
            <div className="card">
              <h2>HTML</h2>
              <img src="/icons/html.svg" alt="" />
              <p> Estrutura básica das páginas web.</p>
            </div>
            <div className="card flexbox">
              <h2>CSS</h2>
              <img src="/icons/css.svg" alt="" />
              <p>Define a aparência visual das páginas.</p></div> 
            <div className="card">
              <h2>JavaScript</h2>
              <img src="/icons/javascript.svg" alt="" />
              <p>Linguagem de programação para criar interatividade e dinamismo.</p>
            </div>
            <div className="card flexbox">
              <h2>Frameworks</h2>
              <img src="/icons/next.svg" alt="" />
              <p>Conjuntos de ferramentas e bibliotecas que agilizam o desenvolvimento.</p>
              </div>
            <div className="card flexbox">
              <h2>Banco de dados</h2>
              <img src="/icons/database.svg" alt="" />
              <p>Para armazenar e gerenciar dados essenciais de um software.</p>
            </div>
          </div>
      </section>
      <section className="sectionGames flexbox">
        <div>
            <h1>Desenvolvimento de Jogos</h1>
            <p>Desenvolvimento de um jogos envolve diversas etapas e profissionais especializados</p>
            <ul>
              <li>Design: Criação da ideia, da história, dos personagens e das mecânicas do jogo.</li>
              <li>Programação: Desenvolvimento do código que dá vida ao jogo.</li>
              <li>Arte: Criação dos gráficos, dos modelos 3D e das animações.</li>
              <li>Som: Produção da trilha sonora e dos efeitos sonoros.</li>
              <li>Teste: Identificação e correção de bugs e ajustes no gameplay.</li>
          </ul>
        </div>
        <img src="/icons/mariobros.jpg" alt="" />
      </section>
      <section className="sectionEvolucao flexbox">
        <div> 
          <h1>Evolução dos Jogos</h1>
          <p>O futuro dos jogos eletrônicos é promissor, com tecnologias como a inteligência artificial, a 
        realidade aumentada e o cloud gaming abrindo novas possibilidades. Os jogos estão se tornando 
        cada vez mais complexos, sociais e personalizados, oferecendo experiências únicas e memoráveis 
        aos jogadores.</p>
        </div>
        <div className="flashcard">
          <h2>Os Pioneiros</h2>
          <img src="/icons/pong.svg" alt="" />
          <p>Os primeiros jogos eletrônicos eram extremamente simples, muitas vezes limitados a telas 
            monocromáticas e controles rudimentares. Jogos como "Pong" e "Space Invaders" marcaram o 
            início dessa era, com gráficos básicos e mecânicas simples, mas que já cativavam os jogadores.</p>
        </div>
        <div className="flashcard">
          <h2>Arcades e Consoles</h2>
          <img src="/icons/arcade.svg" alt="" />
          <p>Os primeiros jogos eletrônicos eram extremamente simples, muitas vezes limitados a telas 
            monocromáticas e controles rudimentares. Jogos como "Pong" e "Space Invaders" marcaram o 
            início dessa era, com gráficos básicos e mecânicas simples, mas que já cativavam os jogadores.</p>
        </div>
        <div className="flashcard">
          <h2>A Era dos 16 Bits e a Explosão da Criatividade</h2>
          <img src="/icons/16bits.svg" alt="" />
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
          <img src="/icons/pc.svg" alt="" />
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
          <img src="/icons/virtualreality.svg" alt="" />
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
      <section className="sectionVantagens flexbox">  
        <div>
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
        </div>
        <img src="/icons/image.jpg" alt="" />
      </section>
      <section className="sectionInfo flexbox">
        <img src="/icons/webdesign.svg" alt="" />
        <p>Obrigada por ler isso tudo! Esse site foi criado pela Bianca Liebetanz. Feira das Profissoes do Salotti, 2024.</p>
      </section>
    </main>
  )
}