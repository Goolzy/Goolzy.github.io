---
layout: inventory
title: "Casos de Uso - Inventory"
lang: pt
permalink: /inventory/usecases/pt/
translations:
  - lang: ko
    url: /inventory/usecases/
  - lang: en
    url: /inventory/usecases/en/
  - lang: ja
    url: /inventory/usecases/ja/
  - lang: de
    url: /inventory/usecases/de/
  - lang: fr
    url: /inventory/usecases/fr/
  - lang: es
    url: /inventory/usecases/es/
  - lang: pt
    url: /inventory/usecases/pt/
---

<style>
.usecase-hero {
  text-align: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(20, 184, 166, 0.1) 100%);
  border-radius: 24px;
  margin-bottom: 3rem;
}

.usecase-hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--purple-bright) 0%, var(--teal-bright) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.usecase-hero p {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.7);
  max-width: 600px;
  margin: 0 auto;
}

.usecase-section {
  margin-bottom: 3rem;
}

.usecase-section h2 {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid rgba(168, 85, 247, 0.3);
}

.usecase-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.25rem;
}

.usecase-card {
  background: rgba(10, 6, 20, 0.5);
  border: 1px solid rgba(168, 85, 247, 0.2);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.usecase-card:hover {
  border-color: rgba(168, 85, 247, 0.5);
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(168, 85, 247, 0.15);
}

.usecase-card summary {
  padding: 1.25rem;
  cursor: pointer;
  list-style: none;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.usecase-card summary::-webkit-details-marker {
  display: none;
}

.usecase-card summary::before {
  content: "▸";
  color: var(--purple-bright);
  transition: transform 0.3s ease;
}

.usecase-card[open] summary::before {
  transform: rotate(90deg);
}

.usecase-card summary h3 {
  font-size: 1rem;
  margin: 0;
  color: rgba(255, 255, 255, 0.95);
  line-height: 1.4;
}

.usecase-content {
  padding: 0 1.25rem 1.25rem;
  color: rgba(255, 255, 255, 0.75);
  font-size: 0.95rem;
  line-height: 1.7;
}

.usecase-content .persona {
  background: rgba(168, 85, 247, 0.1);
  padding: 0.75rem 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  border-left: 3px solid var(--purple-bright);
}

.usecase-content .story {
  margin-bottom: 1rem;
}

.usecase-content .feature-link {
  color: var(--teal-bright);
  text-decoration: none;
  border-bottom: 1px dotted var(--teal-bright);
}

.usecase-content .feature-link:hover {
  color: var(--purple-bright);
  border-bottom-color: var(--purple-bright);
}

.share-section {
  text-align: center;
  padding: 3rem 2rem;
  background: linear-gradient(135deg, rgba(20, 184, 166, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%);
  border-radius: 24px;
  margin-top: 3rem;
}

.share-section h2 {
  font-size: 1.75rem;
  margin-bottom: 1rem;
  color: var(--teal-bright);
}

.share-section p {
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1.5rem;
}

.share-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.75rem;
  background: linear-gradient(135deg, var(--teal-bright) 0%, var(--purple-bright) 100%);
  color: white;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.share-button:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 32px rgba(20, 184, 166, 0.3);
}

@media (max-width: 768px) {
  .usecase-hero h1 {
    font-size: 1.75rem;
  }

  .usecase-grid {
    grid-template-columns: 1fr;
  }
}
</style>

<div class="usecase-hero">
  <h1>🎯 Casos de Uso</h1>
  <p>Descubra as diversas formas como as pessoas utilizam o Inventory no seu dia a dia. Talvez encontre a sua forma especial!</p>
</div>

<div class="usecase-section">
  <h2>💡 Resolução de Problemas</h2>
  <div class="usecase-grid">
    <details class="usecase-card">
      <summary><h3>"O meu chefe pede sempre dados antigos de repente"</h3></summary>
      <div class="usecase-content">
        <div class="persona">👤 Miguel, 34 anos, Gestor de Projetos em empresa de TI</div>
        <div class="story">
          <p>Nas reuniões de planeamento trimestral, o chefe pedia dados de 2-3 meses atrás. Tinha sempre de procurar urgentemente no Slack e emails.</p>
          <p>Agora uso <a href="/inventory/manual/pt/#-sistema-de-papel" class="feature-link">Papel</a> para registar decisões-chave e dados de cada reunião. Quando o chefe pede, encontro em 3 segundos.</p>
          <p>Os colegas perguntam: "Como é que tens tudo tão organizado?" Já não passo vergonha nas reuniões.</p>
        </div>
      </div>
    </details>

    <details class="usecase-card">
      <summary><h3>"Esqueci o PIN da minha conta"</h3></summary>
      <div class="usecase-content">
        <div class="persona">👤 Ana, 45 anos, Mãe de família</div>
        <div class="story">
          <p>Cada banco tem PIN diferente, e as regras de senha são diferentes. Quando ligo para o banco, esqueço qual era.</p>
          <p>Com <a href="/inventory/manual/pt/#-bloqueio-de-documento" class="feature-link">Bloqueio de Documento</a>, guardo os PINs de forma segura. Só eu posso ver desbloqueando.</p>
          <p>Agora faço operações bancárias com confiança. Acabaram-se os momentos de pensar "Qual era o PIN?"</p>
        </div>
      </div>
    </details>

    <details class="usecase-card">
      <summary><h3>"Não sei que comida dei ao bebé ontem"</h3></summary>
      <div class="usecase-content">
        <div class="persona">👤 Carla, 32 anos, Mãe de primeira viagem em licença de maternidade</div>
        <div class="story">
          <p>A iniciar a diversificação alimentar aos 6 meses. Preciso introduzir novos alimentos a cada 3 dias para detetar alergias, mas esqueço o que dei.</p>
          <p>Com <a href="/inventory/manual/pt/#-registo" class="feature-link">Registo</a> guardo fotos de cada refeição com ingredientes. Agora vejo claramente o que dei e quando.</p>
          <p>Na consulta do pediatra, mostrei o registo e o médico elogiou. "Isto é melhor que um diário alimentar."</p>
        </div>
      </div>
    </details>

    <details class="usecase-card">
      <summary><h3>"O prazo do projeto está próximo mas não sabia"</h3></summary>
      <div class="usecase-content">
        <div class="persona">👤 Daniel, 29 anos, Designer Freelancer</div>
        <div class="story">
          <p>A gerir 5-6 projetos ao mesmo tempo. Os prazos às vezes escapavam-me e perdia a confiança do cliente.</p>
          <p>Uso <a href="/inventory/manual/pt/#-alarme-de-data" class="feature-link">Alarme de Data</a> para cada projeto. Recebo alertas 7 dias, 3 dias e 1 dia antes.</p>
          <p>Desde que uso isto, entreguei sempre a tempo durante 6 meses. Os clientes ficaram tão impressionados que me recomendam a outros.</p>
        </div>
      </div>
    </details>

    <details class="usecase-card">
      <summary><h3>"As senhas de todos os sites são diferentes"</h3></summary>
      <div class="usecase-content">
        <div class="persona">👤 Roberto, 52 anos, Pequeno empresário</div>
        <div class="story">
          <p>Sites de compras, banco, governo... Antes usava a mesma senha mas fui hackeado. Tentei usar diferentes mas não me lembro.</p>
          <p>Guardo-as com <a href="/inventory/manual/pt/#-bloqueio-de-documento" class="feature-link">Bloqueio de Documento</a>. Organizadas por categoria para encontrar facilmente.</p>
          <p>Agora posso ter senhas complexas e únicas para cada site. Isso é verdadeira segurança.</p>
        </div>
      </div>
    </details>

    <details class="usecase-card">
      <summary><h3>"Quando foi a última revisão do carro?"</h3></summary>
      <div class="usecase-content">
        <div class="persona">👤 Francisco, 41 anos, Comercial</div>
        <div class="story">
          <p>A fazer 30.000 km por ano, é difícil lembrar quando mudei óleo ou pneus.</p>
          <p>Registo cada manutenção com <a href="/inventory/manual/pt/#-registo" class="feature-link">Registo</a> e configuro <a href="/inventory/manual/pt/#-alarme-de-data" class="feature-link">Alarme de Data</a> para a próxima.</p>
          <p>Posso mostrar o histórico completo ao vender. Obtive melhor preço porque tinha registos detalhados.</p>
        </div>
      </div>
    </details>

    <details class="usecase-card">
      <summary><h3>"Quando expira este medicamento?"</h3></summary>
      <div class="usecase-content">
        <div class="persona">👤 Isabel, 67 anos, Reformada a viver sozinha</div>
        <div class="story">
          <p>A tomar 5 medicamentos diferentes. Preocupada com validades e reabastecimento.</p>
          <p>Fotografo cada medicamento e uso <a href="/inventory/manual/pt/#-data-de-validade" class="feature-link">Data de Validade</a>. Avisa-me uma semana antes.</p>
          <p>Agora não tomo medicamentos fora de validade nem fico sem eles. A minha filha diz que cuido melhor da saúde agora.</p>
        </div>
      </div>
    </details>

    <details class="usecase-card">
      <summary><h3>"Onde guardei o certificado de garantia?"</h3></summary>
      <div class="usecase-content">
        <div class="persona">👤 Laura, 38 anos, Dona de casa</div>
        <div class="story">
          <p>Quando os eletrodomésticos avariam, nunca encontro a garantia. Acabo a pagar reparação mesmo estando em garantia.</p>
          <p>Fotografo cada garantia ao comprar. Uso <a href="/inventory/manual/pt/#-palavras-chave" class="feature-link">Palavras-Chave</a> como #garantia #Samsung #frigorífico.</p>
          <p>Procuro "garantia frigorífico" e aparece instantaneamente. Já pouparei muito em reparações.</p>
        </div>
      </div>
    </details>

    <details class="usecase-card">
      <summary><h3>"Não me lembro que filme vi"</h3></summary>
      <div class="usecase-content">
        <div class="persona">👤 Pedro, 25 anos, Engenheiro de Software</div>
        <div class="story">
          <p>Vejo filmes todos os fins de semana mas depois não me lembro do título. Quando me perguntam, só consigo dizer "era bom".</p>
          <p>Registo cada filme com <a href="/inventory/manual/pt/#-registo" class="feature-link">Registo</a>. Guardo cartaz, pontuação, cenas favoritas.</p>
          <p>Quando alguém pede recomendações, procuro por género. Dizem-me "és como uma base de dados de cinema".</p>
        </div>
      </div>
    </details>

    <details class="usecase-card">
      <summary><h3>"Não sei que vinho pedi da última vez"</h3></summary>
      <div class="usecase-content">
        <div class="persona">👤 Marina, 35 anos, Gestora de Marketing</div>
        <div class="story">
          <p>Quando encontro um bom vinho, quero lembrar-me mas esqueço sempre o nome. Mesmo que tire foto, depois não a encontro.</p>
          <p>Fotografo as etiquetas e uso <a href="/inventory/manual/pt/#-palavras-chave" class="feature-link">Palavras-Chave</a> com variedade, país, preço, sabor.</p>
          <p>Agora tenho a minha própria lista de vinhos. Os meus amigos pedem-me recomendações conforme o orçamento.</p>
        </div>
      </div>
    </details>

    <details class="usecase-card">
      <summary><h3>"Quando renovar o passaporte?"</h3></summary>
      <div class="usecase-content">
        <div class="persona">👤 Carlos, 44 anos, Consultor de Negócios Internacionais</div>
        <div class="story">
          <p>Viajo frequentemente. Quase perdi um voo porque o passaporte expirou sem eu dar conta.</p>
          <p>Registo passaporte e vistos com <a href="/inventory/manual/pt/#-data-de-validade" class="feature-link">Data de Validade</a>. Alertas automáticos 2 meses antes.</p>
          <p>Agora nunca me surpreende uma validade. Também registo números de passageiro frequente e cartões de companhias aéreas.</p>
        </div>
      </div>
    </details>

    <details class="usecase-card">
      <summary><h3>"Comprei a mesma coisa duas vezes"</h3></summary>
      <div class="usecase-content">
        <div class="persona">👤 Teresa, 55 anos, Organizadora de eventos familiares</div>
        <div class="story">
          <p>A comprar coisas para festas de família, às vezes compro decorações que já tinha.</p>
          <p>Registo todos os meus materiais com <a href="/inventory/manual/pt/#-sistema-de-papel" class="feature-link">Papel</a>. Verifico antes de ir às compras.</p>
          <p>Acabaram-se as compras duplicadas. E sei exatamente onde está cada coisa guardada.</p>
        </div>
      </div>
    </details>
  </div>
</div>

<div class="usecase-section">
  <h2>💝 Experiências Emocionais</h2>
  <div class="usecase-grid">
    <details class="usecase-card">
      <summary><h3>"Quero guardar o que o meu filho diz antes de esquecer"</h3></summary>
      <div class="usecase-content">
        <div class="persona">👤 Lúcia, 36 anos, Mãe trabalhadora</div>
        <div class="story">
          <p>O meu filho de 4 anos diz coisas adoráveis e únicas. Quero lembrar-me mas esqueço sempre.</p>
          <p>Uso <a href="/inventory/manual/pt/#-sistema-de-papel" class="feature-link">Papel</a> para registar as palavras dele instantaneamente. Às vezes com foto da carinha dele.</p>
          <p>Já tenho 300 "frases memoráveis". Será o melhor presente quando crescer. Choro de felicidade a lê-las.</p>
        </div>
      </div>
    </details>

    <details class="usecase-card">
      <summary><h3>"Registo as cartas da minha mãe"</h3></summary>
      <div class="usecase-content">
        <div class="persona">👤 António, 48 anos, Empresário</div>
        <div class="story">
          <p>A minha mãe mandava-me cartas quando trabalhava no estrangeiro. Receio que se deteriorem com o tempo.</p>
          <p>Digitalizei todas as cartas com <a href="/inventory/manual/pt/#-sistema-de-papel" class="feature-link">Papel</a>. Posso ver a letra dela quando tenho saudades.</p>
          <p>A minha mãe faleceu no ano passado. Estas cartas são agora o meu tesouro mais precioso.</p>
        </div>
      </div>
    </details>

    <details class="usecase-card">
      <summary><h3>"A guardar o caminho para o meu sonho"</h3></summary>
      <div class="usecase-content">
        <div class="persona">👤 Sofia, 23 anos, Aspirante a designer de moda</div>
        <div class="story">
          <p>A preparar-me para a minha própria marca. Quero guardar cada esboço, inspiração e comentário.</p>
          <p>Organizo tudo com <a href="/inventory/manual/pt/#-partição" class="feature-link">Partição</a>: inspiração, esboços, amostras, feedback.</p>
          <p>Quando me sinto desanimada, vejo o meu progresso desde o início. Lembra-me quanto avancei.</p>
        </div>
      </div>
    </details>

    <details class="usecase-card">
      <summary><h3>"Coleciono pores do sol"</h3></summary>
      <div class="usecase-content">
        <div class="persona">👤 Fernando, 62 anos, Professor reformado</div>
        <div class="story">
          <p>Comecei a fotografar pores do sol como hobby. Quero lembrar onde e quando vi cada um.</p>
          <p>Registo cada pôr do sol com <a href="/inventory/manual/pt/#-registo" class="feature-link">Registo</a>. Local, tempo, as minhas emoções do momento.</p>
          <p>A minha coleção de 500 pores do sol é a minha galeria pessoal. Cada um tem uma história especial.</p>
        </div>
      </div>
    </details>

    <details class="usecase-card">
      <summary><h3>"A nossa história de amor"</h3></summary>
      <div class="usecase-content">
        <div class="persona">👤 Paulo e Helena, Casal há 5 anos</div>
        <div class="story">
          <p>Queremos recordar cada momento especial da nossa relação. As fotos no telemóvel perdem-se entre milhares.</p>
          <p>Criámos um espaço partilhado com <a href="/inventory/manual/pt/#-registo-partilhado" class="feature-link">Registo Partilhado</a>. Cada data especial, cada pequeno momento.</p>
          <p>Revemos isto em cada aniversário. É o nosso álbum de amor digital.</p>
        </div>
      </div>
    </details>

    <details class="usecase-card">
      <summary><h3>"As minhas plantas são a minha família"</h3></summary>
      <div class="usecase-content">
        <div class="persona">👤 Raquel, 29 anos, Designer gráfica em teletrabalho</div>
        <div class="story">
          <p>Tenho 47 plantas em casa. Cada uma tem necessidades diferentes de água e luz.</p>
          <p>Cada planta tem o seu <a href="/inventory/manual/pt/#-sistema-de-papel" class="feature-link">Papel</a> com nome, data de adoção, cuidados especiais.</p>
          <p>As minhas amigas dizem que trato as plantas melhor que algumas pessoas tratam os animais. E têm razão.</p>
        </div>
      </div>
    </details>

    <details class="usecase-card">
      <summary><h3>"O progresso do meu cão"</h3></summary>
      <div class="usecase-content">
        <div class="persona">👤 Jorge, 33 anos, Engenheiro civil com Golden Retriever</div>
        <div class="story">
          <p>O Max chegou à minha vida há 2 anos. Quero recordar cada etapa do crescimento dele.</p>
          <p>Com <a href="/inventory/manual/pt/#-registo" class="feature-link">Registo</a> guardo fotos mensais, visitas ao veterinário, truques aprendidos.</p>
          <p>Ver a transformação dele de cachorro a adulto enche-me de alegria. É como um álbum da vida dele.</p>
        </div>
      </div>
    </details>

    <details class="usecase-card">
      <summary><h3>"Cada café é uma história"</h3></summary>
      <div class="usecase-content">
        <div class="persona">👤 Natália, 27 anos, Barista e entusiasta de café</div>
        <div class="story">
          <p>Visito cafetarias por todo o país. Quero recordar cada lugar especial e o que pedi.</p>
          <p>Registo cada café com <a href="/inventory/manual/pt/#-sistema-de-papel" class="feature-link">Papel</a>. Foto do lugar, do café, notas de sabor.</p>
          <p>Já tenho 200 cafetarias registadas. Os meus seguidores nas redes pedem-me o meu "mapa de cafés".</p>
        </div>
      </div>
    </details>

    <details class="usecase-card">
      <summary><h3>"A minha viagem de perda de peso"</h3></summary>
      <div class="usecase-content">
        <div class="persona">👤 Marcos, 38 anos, Contabilista que perdeu 25 kg</div>
        <div class="story">
          <p>Decidi mudar a minha vida. Queria documentar cada passo, cada pequena vitória.</p>
          <p>Registo refeições, exercício e pesagens com <a href="/inventory/manual/pt/#-registo" class="feature-link">Registo</a>. Fotos semanais ao espelho.</p>
          <p>Ver 18 meses de progresso emociona-me. Quando duvido, olho para o início. Nunca voltarei atrás.</p>
        </div>
      </div>
    </details>

    <details class="usecase-card">
      <summary><h3>"As receitas da avó"</h3></summary>
      <div class="usecase-content">
        <div class="persona">👤 Carmo, 42 anos, Professora que herdou receitas de família</div>
        <div class="story">
          <p>A avó cozinhava incrível mas nunca escreveu as receitas. Quando faleceu, temi perdê-las.</p>
          <p>Gravei a minha mãe a cozinhar os pratos da avó. Tudo em <a href="/inventory/manual/pt/#-sistema-de-papel" class="feature-link">Papel</a> com fotos e notas.</p>
          <p>Agora ensino aos meus filhos. As receitas da avó viverão por gerações.</p>
        </div>
      </div>
    </details>
  </div>
</div>

<div class="usecase-section">
  <h2>📖 Histórias</h2>
  <div class="usecase-grid">
    <details class="usecase-card">
      <summary><h3>"A gerir 3 propriedades de aluguer sem stress"</h3></summary>
      <div class="usecase-content">
        <div class="persona">👤 Alberto, 56 anos, Médico com propriedades de investimento</div>
        <div class="story">
          <p>Tenho 3 apartamentos de aluguer. Contratos, reparações, pagamentos... Tudo era um caos.</p>
          <p>Com <a href="/inventory/manual/pt/#-partição" class="feature-link">Partição</a> organizo cada propriedade: contratos, recibos, comunicações com inquilinos.</p>
          <p>Quando um inquilino pergunta algo, encontro em segundos. Antes demorava meia hora a procurar papéis.</p>
        </div>
      </div>
    </details>

    <details class="usecase-card">
      <summary><h3>"O meu avô nunca perdeu uma consulta médica"</h3></summary>
      <div class="usecase-content">
        <div class="persona">👤 Rosa, 34 anos, Neta cuidadora</div>
        <div class="story">
          <p>O avô tem 82 anos e múltiplos especialistas. Eu trato de todas as consultas e medicamentos dele.</p>
          <p>Configurei <a href="/inventory/manual/pt/#-alarme-de-data" class="feature-link">Alarme de Data</a> para cada consulta. Também registo resultados com <a href="/inventory/manual/pt/#-registo" class="feature-link">Registo</a>.</p>
          <p>Os médicos felicitam-me por ter tudo tão organizado. O avô está melhor cuidado que nunca.</p>
        </div>
      </div>
    </details>

    <details class="usecase-card">
      <summary><h3>"O meu negócio de bolos cresceu graças a isto"</h3></summary>
      <div class="usecase-content">
        <div class="persona">👤 Patrícia, 31 anos, Pasteleira empreendedora</div>
        <div class="story">
          <p>Comecei a vender bolos a partir de casa. Receitas, encomendas, custos... Tudo misturado na minha cabeça.</p>
          <p>Organizei receitas com <a href="/inventory/manual/pt/#-sistema-de-papel" class="feature-link">Papel</a>, encomendas com <a href="/inventory/manual/pt/#-alarme-de-data" class="feature-link">Alarme de Data</a>.</p>
          <p>Passei de 5 encomendas por mês para 50. Nunca esqueço uma entrega. Os clientes confiam no meu profissionalismo.</p>
        </div>
      </div>
    </details>

    <details class="usecase-card">
      <summary><h3>"Sobrevivi ao planeamento do meu casamento"</h3></summary>
      <div class="usecase-content">
        <div class="persona">👤 Alexandra, 28 anos, Noiva a organizar o casamento</div>
        <div class="story">
          <p>Planear um casamento é um trabalho a tempo inteiro. Fornecedores, orçamento, convidados...</p>
          <p>Tudo em <a href="/inventory/manual/pt/#-partição" class="feature-link">Partição</a>: local, catering, vestido, convites. Prazos com <a href="/inventory/manual/pt/#-alarme-de-data" class="feature-link">Alarme</a>.</p>
          <p>A minha wedding planner disse que nunca viu uma noiva tão organizada. O casamento foi perfeito.</p>
        </div>
      </div>
    </details>

    <details class="usecase-card">
      <summary><h3>"Administro o inventário do meu restaurante"</h3></summary>
      <div class="usecase-content">
        <div class="persona">👤 Miguel, 45 anos, Dono de restaurante familiar</div>
        <div class="story">
          <p>Um restaurante pequeno não justifica um sistema caro. Mas preciso controlar stock e fornecedores.</p>
          <p>Uso <a href="/inventory/manual/pt/#-sistema-de-papel" class="feature-link">Papel</a> para cada produto. <a href="/inventory/manual/pt/#-data-de-validade" class="feature-link">Validade</a> para perecíveis.</p>
          <p>Reduzi o desperdício em 30%. Sei exatamente o que encomendar e quando. Simples mas eficaz.</p>
        </div>
      </div>
    </details>

    <details class="usecase-card">
      <summary><h3>"Documentei toda a renovação da minha casa"</h3></summary>
      <div class="usecase-content">
        <div class="persona">👤 David, 40 anos, Proprietário a renovar a casa</div>
        <div class="story">
          <p>Renovação de 6 meses. Orçamentos, faturas, garantias, antes/depois de cada divisão.</p>
          <p>Tudo em <a href="/inventory/manual/pt/#-partição" class="feature-link">Partição</a> por divisão e tipo de documento. Fotos com <a href="/inventory/manual/pt/#-registo" class="feature-link">Registo</a>.</p>
          <p>Quando algo avaria, tenho o contacto do empreiteiro e a garantia instantaneamente. Inestimável.</p>
        </div>
      </div>
    </details>

    <details class="usecase-card">
      <summary><h3>"A minha coleção de vinis está catalogada"</h3></summary>
      <div class="usecase-content">
        <div class="persona">👤 Rodrigo, 52 anos, Colecionador de vinis</div>
        <div class="story">
          <p>2.000 vinis acumulados em 30 anos. Sabia que tinha duplicados mas não sabia quais.</p>
          <p>Fotografei cada um com <a href="/inventory/manual/pt/#-sistema-de-papel" class="feature-link">Papel</a>. Artista, ano, estado, preço pago.</p>
          <p>Descobri que tinha 50 duplicados. Vendi-os e comprei vinis que realmente queria.</p>
        </div>
      </div>
    </details>

    <details class="usecase-card">
      <summary><h3>"Nunca mais perco faturas para impostos"</h3></summary>
      <div class="usecase-content">
        <div class="persona">👤 Marta, 39 anos, Trabalhadora independente</div>
        <div class="story">
          <p>Todos os anos, procurar faturas para a declaração era um pesadelo. Algumas tinha-as perdido.</p>
          <p>Fotografo cada fatura imediatamente. Organizo com <a href="/inventory/manual/pt/#-palavras-chave" class="feature-link">Palavras-Chave</a> por tipo de despesa.</p>
          <p>O meu contabilista diz que sou a cliente mais organizada dele. E deduzo mais porque não perco nada.</p>
        </div>
      </div>
    </details>

    <details class="usecase-card">
      <summary><h3>"Coordeno uma equipa de voluntários"</h3></summary>
      <div class="usecase-content">
        <div class="persona">👤 Helena, 50 anos, Coordenadora de ONG local</div>
        <div class="story">
          <p>Coordeno 30 voluntários para um banco alimentar. Horários, contactos, certificações...</p>
          <p>Cada voluntário tem um <a href="/inventory/manual/pt/#-sistema-de-papel" class="feature-link">Papel</a>. Partilho informação com <a href="/inventory/manual/pt/#-registo-partilhado" class="feature-link">Registo Partilhado</a>.</p>
          <p>A coordenação melhorou imenso. Os voluntários sentem-se valorizados porque tenho os dados deles em dia.</p>
        </div>
      </div>
    </details>

    <details class="usecase-card">
      <summary><h3>"O meu filho estudou melhor para os exames"</h3></summary>
      <div class="usecase-content">
        <div class="persona">👤 Beatriz, 44 anos, Mãe de estudante do secundário</div>
        <div class="story">
          <p>O meu filho tinha problemas a organizar o estudo para exames. Esquecia sempre as datas.</p>
          <p>Ensinei-o a usar <a href="/inventory/manual/pt/#-alarme-de-data" class="feature-link">Alarme de Data</a> para exames e <a href="/inventory/manual/pt/#-sistema-de-papel" class="feature-link">Papel</a> para apontamentos-chave.</p>
          <p>As notas dele melhoraram notavelmente. Diz que agora sabe exatamente o que estudar e quando.</p>
        </div>
      </div>
    </details>
  </div>
</div>

<div class="usecase-section">
  <h2>🎨 Usos Criativos</h2>
  <div class="usecase-grid">
    <details class="usecase-card">
      <summary><h3>"O meu diário de sonhos"</h3></summary>
      <div class="usecase-content">
        <div class="persona">👤 Andrea, 26 anos, Estudante de psicologia</div>
        <div class="story">
          <p>Interesso-me pela análise de sonhos. Queria registá-los mas esquecia sempre os detalhes ao acordar.</p>
          <p>Tenho o Inventory na mesinha de cabeceira. Ao acordar, registo imediatamente com <a href="/inventory/manual/pt/#-sistema-de-papel" class="feature-link">Papel</a>.</p>
          <p>Depois de um ano, encontrei padrões fascinantes. A minha tese de mestrado vai ser sobre isto.</p>
        </div>
      </div>
    </details>

    <details class="usecase-card">
      <summary><h3>"Catálogo das minhas obras de arte"</h3></summary>
      <div class="usecase-content">
        <div class="persona">👤 Javier, 35 anos, Artista plástico</div>
        <div class="story">
          <p>Tenho mais de 200 obras em 10 anos. Dimensões, técnica, preço, localização... Era impossível rastrear.</p>
          <p>Cada obra tem o seu <a href="/inventory/manual/pt/#-sistema-de-papel" class="feature-link">Papel</a>. Foto de alta qualidade, todos os detalhes, histórico de vendas.</p>
          <p>Quando uma galeria pergunta pelas minhas obras, envio informação profissional instantaneamente.</p>
        </div>
      </div>
    </details>

    <details class="usecase-card">
      <summary><h3>"O meu arquivo de tipografias"</h3></summary>
      <div class="usecase-content">
        <div class="persona">👤 Daniela, 29 anos, Designer gráfica</div>
        <div class="story">
          <p>Coleciono tipografias inspiradoras. Capturas de cartazes, embalagens, sinalização...</p>
          <p>Organizo com <a href="/inventory/manual/pt/#-palavras-chave" class="feature-link">Palavras-Chave</a>: estilo, uso, época.</p>
          <p>É a minha biblioteca de referência pessoal. Quando preciso de inspiração, encontro-a em segundos.</p>
        </div>
      </div>
    </details>

    <details class="usecase-card">
      <summary><h3>"A documentar o meu jardim estação a estação"</h3></summary>
      <div class="usecase-content">
        <div class="persona">👤 Roberto, 58 anos, Jardineiro amador</div>
        <div class="story">
          <p>O meu jardim muda dramaticamente a cada estação. Quero recordar o que plantei onde e como floriu.</p>
          <p>Cada planta tem <a href="/inventory/manual/pt/#-registo" class="feature-link">Registo</a> mensal. Foto, estado, cuidados aplicados.</p>
          <p>Agora planeio melhor cada temporada. Sei exatamente o que funcionou e o que não em anos anteriores.</p>
        </div>
      </div>
    </details>

    <details class="usecase-card">
      <summary><h3>"O meu registo de meditação"</h3></summary>
      <div class="usecase-content">
        <div class="persona">👤 Carolina, 32 anos, Instrutora de yoga</div>
        <div class="story">
          <p>Medito diariamente. Queria registar duração, técnica, e como me sentia depois.</p>
          <p>Com <a href="/inventory/manual/pt/#-registo" class="feature-link">Registo</a> guardo cada sessão. Também guardo frases inspiradoras que encontro.</p>
          <p>Posso ver o meu progresso de 10 minutos para 45. Também partilho técnicas com os meus alunos.</p>
        </div>
      </div>
    </details>

    <details class="usecase-card">
      <summary><h3>"A minha lista de lugares para visitar"</h3></summary>
      <div class="usecase-content">
        <div class="persona">👤 Tomás, 27 anos, Designer industrial viajante</div>
        <div class="story">
          <p>Quando vejo um lugar interessante nas redes ou filmes, quero guardá-lo para visitar algum dia.</p>
          <p>Cada lugar com <a href="/inventory/manual/pt/#-sistema-de-papel" class="feature-link">Papel</a>. Foto, localização, porque quero ir, melhor época para visitar.</p>
          <p>A minha lista de "algum dia" já tem 150 lugares. Cada viagem que planeio, consulto o meu inventário de sonhos.</p>
        </div>
      </div>
    </details>

    <details class="usecase-card">
      <summary><h3>"Arquivo da minha banda"</h3></summary>
      <div class="usecase-content">
        <div class="persona">👤 Luís, 24 anos, Guitarrista de banda local</div>
        <div class="story">
          <p>A minha banda tem 5 anos. Letras, progressões, demos, cartazes de concertos... Tudo disperso.</p>
          <p>Centralizei tudo em <a href="/inventory/manual/pt/#-partição" class="feature-link">Partição</a>. Músicas, merchandising, contactos, histórico de shows.</p>
          <p>Quando uma editora perguntou pela nossa história, tínhamos tudo profissionalmente documentado.</p>
        </div>
      </div>
    </details>

    <details class="usecase-card">
      <summary><h3>"O meu guia de restaurantes personalizado"</h3></summary>
      <div class="usecase-content">
        <div class="persona">👤 Ana Maria, 37 anos, Crítica gastronómica amadora</div>
        <div class="story">
          <p>Como fora frequentemente. O Google Maps não me deixa anotar o que pedi ou como estava realmente.</p>
          <p>Cada restaurante com <a href="/inventory/manual/pt/#-sistema-de-papel" class="feature-link">Papel</a>. Fotos de pratos, preços, ambiente, o que pedir e o que evitar.</p>
          <p>Os meus amigos pedem-me sempre recomendações. Partilho exatamente o que pedir em cada lugar.</p>
        </div>
      </div>
    </details>
  </div>
</div>

<div class="share-section">
  <h2>📮 Conte-nos como usa o Inventory!</h2>
  <p>Tem a sua forma única de usar o Inventory? Gostaríamos muito de conhecê-la e partilhá-la com outros utilizadores!</p>
  <a href="mailto:goolzy.company@gmail.com?subject=A minha forma de usar o Inventory&body=Olá, quero partilhar como uso o Inventory:%0A%0A" class="share-button">
    ✉️ Partilhar a minha experiência
  </a>
</div>
