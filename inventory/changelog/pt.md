---
layout: inventory
title: Registro de alterações
permalink: /inventory/changelog/pt/
lang: pt
translations:
  ko: /inventory/changelog/
  en: /inventory/changelog/en/
  ja: /inventory/changelog/ja/
  de: /inventory/changelog/de/
  fr: /inventory/changelog/fr/
  es: /inventory/changelog/es/
  pt: /inventory/changelog/pt/
  zh: /inventory/changelog/zh/
  ar: /inventory/changelog/ar/
  hi: /inventory/changelog/hi/
  id: /inventory/changelog/id/
  ru: /inventory/changelog/ru/
  it: /inventory/changelog/it/
  tr: /inventory/changelog/tr/
  vi: /inventory/changelog/vi/
  th: /inventory/changelog/th/
  pl: /inventory/changelog/pl/
---

## Registro de alterações

Confira o histórico de atualizações do aplicativo Inventory.

<details class="changelog-version" open>
<summary>
  <span class="version-title">v1.2.1 <small>2026-01-05</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Copiar">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### Layout Responsivo do Painel de Reação
Na tela de detalhes do item, o painel de reação de imagem é exibido corretamente em todos os tamanhos de tela.
- **Layout responsivo**: Os botões de reação são distribuídos uniformemente mesmo em telas estreitas
- **Utiliza a largura total da tela**: O painel utiliza a largura total da tela independentemente do tamanho da imagem
- **Design compacto**: Otimização de espaçamento que mantém a área de toque enquanto oculta menos a fotografia

#### Rolagem Infinita na Busca de Modelos Compartilhados
Quando os resultados da busca de modelos compartilhados excedem 20, você pode rolar para carregar mais resultados.
- **Rolagem infinita**: Carrega automaticamente os próximos 20 itens ao chegar ao final dos resultados
- **Indicador de carregamento**: Exibe indicador de progresso na parte inferior durante o carregamento adicional
- **Compatibilidade retroativa**: Versões anteriores do app continuam exibindo 20 resultados como antes

#### Atualizações do site
- **Suporte ao chinês (simplificado)**: Localização 中文(简体) adicionada ao site (8º idioma)
- **Exibição de idiomas suportados**: Ícones de bandeiras de 8 idiomas exibidos abaixo dos ícones de download das plataformas

#### Configurações de idioma da App Store
- **Idiomas suportados no iOS/macOS**: Chinês (zh) adicionado ao CFBundleLocalizations

#### Melhoria na Seleção de Datas
- **Intervalo de seleção expandido**: Seleção de datas agora disponível a partir de 1900 (anteriormente 2000)

#### Função de Compartilhamento de Documento
Compartilhe conteúdo do documento na tela de detalhes copiando para a área de transferência ou enviando por email.
- **Copiar para clipboard**: Copia para clipboard como texto puro com marcadores de rich text removidos
- **Enviar por email**: Envia por email em formato HTML com formatação aplicada
- **Seleção opcional**: Escolha quais itens incluir entre título, conteúdo, palavras-chave, conversas e log do sistema
- **Suporte para modo Clip**: Mesma funcionalidade disponível na tela de detalhes do clip

#### Sincronização de Bloqueio de Clip
Os estados de bloqueio dos itens em um clip são sincronizados automaticamente.
- **Bloqueio/Desbloqueio em lote**: Quando o item representativo do clip é bloqueado, todos os itens filhos são bloqueados também
- **Sincronização de senha**: Todos os itens no clip usam a mesma senha de bloqueio

#### Melhoria do Editor de Texto Enriquecido
Ao criar modelos de carimbo, a aplicação de estilos de texto tornou-se mais intuitiva.
- **6 estilos básicos**: Negrito, sublinhado, tachado, cor primária, cor secundária, caixa
- **Estilos aninhados**: Aplique vários estilos sequencialmente (por exemplo: negrito + sublinhado)
- **Edição limpa**: Apenas o estilo é exibido, sem marcadores visíveis
- **Barra de ferramentas dinâmica**: A barra de ferramentas se posiciona automaticamente abaixo da área selecionada

#### Corrigir Margem Inferior do Android 15
Corrigido o problema em dispositivos Android 15 ou superior onde a barra de navegação do sistema na parte inferior obscurecia o conteúdo.
- **Telas sem barra de navegação inferior**: Detalhes do item, criação de documento, criação de carimbo e outras 6 telas
- **Processamento automático de insets**: Preenchimento inferior adicionado automaticamente correspondente à área da barra de navegação do sistema
- **Compatibilidade com versões anteriores**: Funciona da mesma forma em Android 14 ou inferior

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.2.0 <small>2026-01-03</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Copiar">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### Rolagem Automática ao Arrastar
A tela rola automaticamente quando você arrasta itens para as bordas.
- **Zona de rolagem automática**: Arraste para a área de 10% superior/inferior da tela para rolar automaticamente
- **Baseado em aceleração**: Quanto mais perto da borda, mais rápida a velocidade de rolagem
- **Feedback háptico**: Vibração leve ao entrar na zona de rolagem
- **Conveniência entre partições**: Navegue rapidamente por muitos itens ou várias partições

#### Navegação por Rolagem
Navegue rapidamente para o topo ou fundo na tela de detalhes.
- **Botões de navegação**: Botões de navegação aparecem ao lado da barra de pesquisa quando há muitos comentários
- **Exibição por posição**: Na parte superior, apenas o botão para baixo é exibido; na parte inferior, apenas o botão para cima
- **Design neumórfico**: Estilo de botão consistente com o design do aplicativo

#### Restauracao da Animacao de Transicao de Pagina
As animacoes de flip da barra de navegacao inferior e da tela de recebimento foram restauradas.
- **Efeito de flip 3D**: Transicao de pagina com rotacao de 180 graus no eixo Y
- **Paginas de Log/Loja**: Animacao de flip aplicada
- **Tela de recebimento**: Animacao de flip aplicada no botao da caixa de correio e no deep link de notificacao

#### Unificação do Design de UI
O design neumórfico foi aplicado às telas de Enviar, Receber e Loja, unificando todo o aplicativo.
- **Telas de Enviar/Receber**: Sombras neumórficas aplicadas a cartões e diálogos
- **Tela da Loja**: Efeitos de brilho em botões de abas, cartões de produtos estilo neumórfico
- **Design do Campo de Entrada**: Estilo rebaixado distingue claramente as áreas de entrada

#### Animação de Reordenação de Logs
Animações suaves são aplicadas quando itens sobem na lista de logs devido a novos comentários.
- **Efeito de escala**: O item aumenta ligeiramente e retorna ao tamanho original após mover
- **Processamento sequencial**: Quando vários itens se movem ao mesmo tempo, animam em ordem
- **Destaque visual**: Identifique claramente qual item é o mais recente

#### Estabilização do Banco de Dados
Problemas de compatibilidade do banco de dados que poderiam ocorrer durante atualizações do app foram resolvidos.
- **Recuperação Automática**: O banco de dados é recriado automaticamente quando há incompatibilidade de versão
- **Preservação de Dados**: Sem perda de dados graças à sincronização automática com o servidor
- **Todas as Plataformas**: Mesma solução aplicada no iOS, Android, macOS e Windows

#### Melhoria do bloqueio por senha
A segurança e usabilidade de itens protegidos por senha foram significativamente melhoradas.
- **Sobreposição de desfoque**: O conteúdo é completamente oculto ao acessar itens bloqueados
- **Design neumórfico**: Diálogos de configuração/desbloqueio de senha usam estilo neumórfico
- **Indicador de 16 dígitos**: 16 pequenos círculos mostram o estado de entrada da senha
- **Entrada em duas linhas**: Digite e confirme a senha na mesma tela

#### Melhoria das Configurações de Notificação Push
A tela de configurações de notificação push foi reorganizada por categorias para gerenciamento mais conveniente.
- **7 categorias**: Classificadas em Transação, Log, Expiração, Reação, Palavra-chave, Compartilhamento e Sistema
- **Alternância de grupo**: Ativar ou desativar uma categoria inteira de uma vez
- **Recolher/Expandir**: Interface de sanfona para visualizar apenas as categorias necessárias
- **Notificações detalhadas adicionadas**: Aceitação/rejeição de transação, reação, palavra-chave, expiração/denúncia de compartilhamento, notificações do sistema adicionadas
- **Design neumórfico**: Estilo neumórfico aplicado a itens de notificação individuais

#### Melhoria das Configurações de Som
Botão de silencioso com design neumórfico que expressa intuitivamente o estado pressionado.
- **Efeito de pressão**: O botão parece ser pressionado para dentro quando silenciado
- **Sombra neumórfica**: Estado padrão é convexo, estado pressionado é côncavo

#### Melhoria no desempenho de carregamento de logs
A velocidade de carregamento dos logs compartilhados foi melhorada.
- **Carregamento com prioridade de cache**: Logs vistos anteriormente são exibidos instantaneamente do cache
- **Economia de dados**: Sem solicitações ao servidor ao revisitar, usa dados locais
- **Novos comentários em tempo real**: Novos comentários são recebidos em tempo real mesmo usando cache

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.1.3 <small>2026-01-03</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Copiar">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### Logs Compartilhados de Papel
Crie documentos de log compartilhado usando apenas papel, sem carimbos.
- **Selecionar 2 ou mais papéis** → Menu "Criar Novo Item (Log Compartilhado)" aparece
- **Selecionar 1 papel** → Menu "Criar Novo Item (Log Privado)" aparece
- Documentos criados compartilham a mesma sala de comentários
- Envie documentos para diferentes pessoas e converse entre si

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.1.2 <small>2025-12-31</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Copiar">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### Função de Edição de Emblema
Edite a imagem e as palavras-chave dos emblemas gravados.
- **Menu de edição**: O menu "Editar emblema" aparece ao selecionar um emblema gravado
- **Alteração de imagem**: Substitua a imagem do emblema por uma nova
- **Gerenciamento de palavras-chave**: Adicione, exclua ou modifique 5 tipos de palavras-chave

#### Otimização de Desempenho de Imagem
A velocidade de carregamento de imagens de rede foi significativamente melhorada.
- **Cache local**: Imagens carregadas uma vez são salvas localmente para exibição instantânea
- **Sincronização de imagem de emblema**: Alterações na imagem do emblema são refletidas imediatamente em todos os registros

#### Autocompletar Destinatários Recentes
Selecione rapidamente destinatários recentes na tela de envio.
- **Lista de autocompletar**: Menu suspenso mostrando até 30 destinatários recentes quando o campo de entrada está em foco
- **Seleção rápida**: Pesquisa automática ao selecionar um destinatário da lista
- **Pesquisa novamente**: Limpe a seleção com o botão X para pesquisar outro destinatário
- **Armazenamento local**: Informações do destinatário salvas automaticamente ao enviar com sucesso

#### Restrições de Envio Melhoradas
Emblemas equipados e carimbos compartilhados agora têm restrições de envio.
- **Emblemas equipados**: Desequipe o emblema para enviá-lo
- **Carimbos compartilhados**: Revogue o compartilhamento para enviar o carimbo
- **Orientação detalhada**: Exibe mensagens específicas explicando o motivo da restrição

#### Sistema de Reações Emocionais
Reaja aos itens com expressões emocionais.
- **12 reações**: Curtir, Adorar, Excelente, Parabéns e muito mais para diversas expressões emocionais
- **Alternar reação**: Cancele clicando novamente na reação selecionada
- **Registro em log**: As reações selecionadas/canceladas são registradas no log do sistema
- **Suporte multilíngue**: Os nomes das reações são exibidos no idioma do usuário

#### Melhoria da Função de Pesquisa
A pesquisa em tempo real foi expandida para incluir nomes de itens e palavras-chave.
- **Pesquisa por nome de item**: Pesquise por título do documento, descrição do carimbo ou nome de domínio do emblema
- **Pesquisa por palavra-chave**: Pesquise por palavras-chave salvas em carimbos e emblemas
- **Pesquisa por tag**: Pesquise também por tags de modelo de carimbo

#### Melhoria das Notificações no App
As notificações toast em tempo real foram aprimoradas.
- **Exibição do emblema do remetente**: A imagem do emblema do remetente é exibida inline na notificação
- **Estilo Dynamic Island**: Animação toast elegante no estilo Dynamic Island do iOS
- **Detecção em tempo real**: Detecção precisa de novas notificações e atualizações com base em ID+timestamp
- **Limpeza automática**: As notificações relacionadas ao item são removidas automaticamente ao entrar na tela de detalhes do item

#### Correções de Bugs
- **Estabilização da UI de detalhes do documento**: Corrigido problema onde a barra de pesquisa e os filtros tremiam quando os logs compartilhados/individuais estavam no limite da tela
- **Correção de tremor de rolagem**: Resolvido o tremor da tela ao rolar para cima em documentos/carimbos com poucos registros
- **Correção de rolagem para o topo**: Resolvido o problema onde as informações do autor não podiam ser alcançadas pela rolagem em itens com registros
- **Formato de log de reação melhorado**: Emojis e nomes agora são exibidos juntos
- **Exibição do nome de usuário corrigida**: O nome de domínio agora é exibido corretamente ao usar um emblema
- **Correção da primeira notificação do log compartilhado**: Resolvido o problema onde o primeiro toast do log compartilhado não era exibido
- **Correção de imagem de notificação push**: A imagem do documento é priorizada (em vez da imagem do emblema)

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.1.0 <small>2025-12-29</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Copiar">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### Tradução Automática Multilíngue
Documentos, carimbos e registros são automaticamente traduzidos para seu idioma.
- **Tradução automática**: Tradução automática para o idioma do usuário ao visualizar documentos, carimbos e registros
- **Idiomas suportados**: Coreano, inglês, japonês, espanhol, francês, alemão, português
- **Alternar original**: Alterne entre original e tradução com o botão [Ver original]
- **Cache de tradução**: Cache no servidor e local previne solicitações de re-tradução
- **Cache por idioma**: Usa instantaneamente o cache salvo ao trocar de idioma

#### Sistema de tutoriais
Tutoriais passo a passo foram adicionados para guiá-lo no uso do aplicativo.
- **Tela de inventário**: Seleção de itens, movimento de partição, uso do menu inferior (8 etapas)
- **Tela Enviar/Receber**: Entrada do destinatário, escaneamento QR, métodos de transferência/recebimento
- **Tela da loja**: Navegação de categorias de produtos e métodos de compra
- **Tela de perfil**: Informações da conta e configurações
- **Tela de configurações**: Configurações do aplicativo e mudança de tema
- **Modelo de carimbo**: Processo completo de criação de modelo (9 etapas)
- **Função de busca**: Uso de filtros e salvamento de termos de busca
- Exibido apenas no primeiro uso; pode ser visto novamente em Configurações

#### Otimização de desempenho do registro
A velocidade de carregamento e o uso de dados dos registros compartilhados/independentes foram significativamente melhorados.
- **Carregamento rápido**: Carregar primeiro apenas os últimos 100 comentários
- **Rolagem infinita**: Carregar mais 50 comentários antigos ao rolar
- **Cache local**: Exibição instantânea usando cache em revisitas
- **Sync em tempo real**: Receber eficientemente apenas novos comentários
- **Economia de dados**: Previne re-downloads desnecessários

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.0.4 <small>2025-12-25</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Copiar">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### Cartões de Links de Mídia
URLs inseridas nos registros são automaticamente exibidas como **cartões enriquecidos**.
- **YouTube**: Miniatura + título + nome do canal
- **Spotify**: Capa do álbum + título + artista
- **Google Drive**: Miniatura do arquivo + nome (arquivos públicos)
- **Dropbox**: Ícone + nome do arquivo
- **OneDrive**: Ícone + nome do serviço
- **Páginas web**: Imagem de visualização + título da página
- Toque para abrir em app/navegador externo
- Pressione longamente para copiar a URL para a área de transferência

#### Melhorias na busca de modelos compartilhados
- **Verificação de papel**: O botão de clonar mostra a quantidade de papel restante (Papel:10)
- **Papel necessário**: A clonagem é desativada quando não há papel disponível
- **Design neumórfico**: A tela de busca agora usa estilo UI neumórfico

#### Melhorias no sistema de efeitos do editor de imagens
A interface de seleção de efeitos especiais foi simplificada.
- **Seleção única**: Escolha um dos 5 efeitos por vez
- **Lista de efeitos**: Original / Remover fundo / Bokeh / Bloom / Monocromático
- **Transições suaves**: Indicador de progresso durante o processamento
- **Melhoria de desempenho**: Filtros Bloom/Monocromático processados em segundo plano

#### Desempenho e Estabilidade
A estrutura interna do aplicativo foi otimizada.
- **Otimização de consultas**: Processamento paralelo para carregamento mais rápido de clips/filtros
- **Limpeza de código**: 12 módulos de código não utilizados removidos
- **Limpeza de dependências**: 7 bibliotecas não utilizadas removidas
- **Limpeza de recursos**: Fontes/imagens não utilizadas removidas (redução de aprox. 16MB)

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.0.3 <small>2025-12-23</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Copiar">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### Função Clip
Agrupe múltiplos documentos juntos para facilitar o gerenciamento.
- **Criar clip**: Selecione 2+ documentos e toque em "Clipar juntos"
- **Ícone de clip**: Documentos clipados exibem um ícone de clip no canto superior direito
- **Detalhes do clip**: Veja itens internos através do botão "Info do clip" na tela de detalhes
- **Reordenar**: Arraste para reordenar itens dentro de um clip (exceto capa)
- **Excluir itens**: Remover itens específicos de um clip (exceto capa)
- **Desfazer clip**: Dissolver completamente um clip em documentos individuais
- **Dissolução automática**: O clip se dissolve automaticamente quando resta apenas 1 item
- **Transferência**: Clips são enviados/recebidos como um grupo

#### Melhorias na Busca de Modelos Compartilhados
Usabilidade aprimorada para a tela de busca de modelos compartilhados.
- **Cartões em linha**: Resultados de busca exibidos em formato de lista compacta
- **Imagem completa**: Miniaturas exibidas na proporção original sem cortes
- **Detalhes expandidos**: Ver conteúdo, palavras-chave e data de expiração na folha de detalhes
- **Prévia de palavras-chave**: Ver as palavras-chave padrão definidas para o modelo
- **Data de expiração**: Verificar quando o modelo compartilhado expira

#### Melhoria no Desbloqueio por Senha
- Inserir a senha correta agora **desbloqueia permanentemente** o documento
- Antes: Apenas visualização, bloqueio mantido → Agora: Totalmente desbloqueado

#### Correções de Bugs
- Itens clip eram contados individualmente na tela de recebimento - corrigido
- O emblema de recebimento da barra de navegação incluía itens internos do clip - corrigido
- O emblema (Nametag) não era desequipado ao reembolsar/excluir - corrigido
- O domínio permanecia ocupado após a exclusão do emblema - corrigido

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.0.2 <small>2025-12-22</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Copiar">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### Indicador de Registro Compartilhado Não Lido
Quando novos comentários são adicionados aos registros compartilhados, a borda do item **pulsa**.
- Identifique facilmente registros compartilhados não lidos no seu inventário
- A pulsação para quando você abre o documento
- O status de leitura sincroniza em todos os dispositivos

#### Guia de Uso do Carimbo
Quando você seleciona um carimbo gravado, os papéis disponíveis **pulsam** para guiá-lo.
- UX melhorada para duplicação de modelo
- Orientação intuitiva para o próximo passo

#### Melhorias de Partição
- **Recolher/Expandir**: Alternar partições com botões de seta (▼/▲)
- **Selecionar tudo**: Toque no cabeçalho da partição para selecionar/desmarcar todos os itens
- Indicadores de status de seleção (○/◐/●)
- Arrastar e soltar para partições recolhidas

#### Conveniência da Loja
Processo de checkout simplificado para compras consecutivas do mesmo item.
- Diálogos de confirmação ignorados dentro de 10 minutos da última compra
- Compra em massa mais rápida

#### Melhorias de Interface
- Legibilidade melhorada com nova fonte de título
- Cartões de carimbo mostram pré-visualização do modelo no fundo (33% de opacidade)
- Cartões de distintivo mostram pré-visualização da imagem gravada
- Menu inferior exibe distintivo de número de ações disponíveis
- Ajuste de cor do tema tinta preta (melhor legibilidade do texto)
- Imagens de produtos otimizadas (tamanho reduzido, carregamento mais rápido)

#### Correção de bugs
- Corrigido efeito de pulsação em comentários próprios
- Corrigido corte do campo de entrada na navegação por gestos
- Corrigida tela cinza ao recolher partições
- Melhorado tratamento de permissão de notificação push

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.0.1 <small>2025-12-16</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Copiar">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### Função de Bloqueio de Documento
- Definir senha numérica em documentos (até 16 dígitos)
- Documentos bloqueados exibem escala de cinza + ícone de cadeado
- Desbloquear com senha correta (uso único)
- O estado de bloqueio persiste após transferência de item
- Documentos bloqueados são excluídos dos resultados de busca

#### Sistema de Entrada Rápida
Insira facilmente informações especiais via botão `+` ao escrever registros:
- **Palavra-chave:Valor** - Cartão de palavra-chave geral
- **Alarme de data** - Cartão de data (cálculo D-Day automático, configurações de alarme)
- **Número de telefone** - Formatação automática por país
- **Localização/Endereço** - Integração com app de mapas
- **Valor** - Exibição automática do símbolo de moeda

#### Ações de Cartões Especiais
**Pressione longamente** informações especiais nos registros para ativar recursos adicionais:
- **Cartão de data**: Definir/cancelar alarme
- **Cartão de telefone**: Ligar diretamente / Copiar para área de transferência
- **Cartão de localização**: Abrir no app de mapas / Copiar para área de transferência
- **Cartão de valor**: Copiar para área de transferência

#### Melhorias de Interface
- Design neumórfico de chips de filtro
- Melhoria na rolagem da barra de pesquisa
- AppBar da tela de detalhes do item mostra o nome do item

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.0.0 <small>2025-12-13</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Copiar">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

**Primeira versão oficial**

#### Sistema de Papel
- Introdução do sistema de moeda para criação de documentos
- 10 folhas de Papel ao se registrar
- 10 folhas adicionais para cada vinculação Google/Apple
- Papel disponível para compra na loja

#### Criação de documentos
- Criar documentos usando Papel
- Adicionar título, conteúdo e imagens
- Opções de data de início/expiração

#### Sistema de Emblema
- Função de gravação de nome de domínio único
- Nome de domínio gravado usado como identidade do usuário
- Gerenciamento de ativação por equipar/desequipar
- Opção de anexar imagem 128x128

#### Sistema de Carimbo
- Função de criação de modelo
- Seleção de modo Registro solo/Registro compartilhado
- Função de duplicação de modelo
- Configurações de data de início/expiração

#### Função de Registro
- Gravar registros em documentos/carimbos
- Registro solo: Apenas registros pessoais
- Registro compartilhado: Compartilhar com proprietários de duplicatas
- Suporte a cartão info formato chave:valor

#### Sistema de Tinta
- Função de mudança de cor do tema
- Tinta Preta, Tinta Dourada

#### Transferência de itens
- Enviar itens via endereço de email
- Preencher email automaticamente por scan QR
- Aceitar ou devolver itens recebidos
- Enviar múltiplos itens de uma vez

#### Partição
- Função de agrupamento de itens
- Armazenamento local específico do dispositivo

#### Função de busca
- Filtragem de busca em tempo real
- Salvar termos de busca como filtros
- Salvamento automático de buscas recentes (até 5)

#### Loja
- Comprar Papel, Carimbos, Emblemas, Tinta
- Disponível em todas as plataformas

#### Conta
- Login com Google, Apple, Email
- Ganhar Papel adicional vinculando contas sociais

#### Suporte multilíngue
- 한국어, English, 日本語
- Deutsch, Français, Español, Português

</div>
</details>

<div class="changelog-footer">
<strong>Sugira novas funcionalidades!</strong> Compartilhe suas ideias em <a href="/inventory/suggest/pt/">Sugestões</a> e iremos analisá-las ativamente.
</div>

<style>
/* Contêiner de versão */
details.changelog-version {
  background: rgba(21, 10, 40, 0.4);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(168, 85, 247, 0.25);
  border-radius: 12px;
  margin-bottom: 1.5rem;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
}

details.changelog-version:hover {
  border-color: rgba(168, 85, 247, 0.5);
  transform: translateY(-2px);
}

details.changelog-version[open] {
  border-color: rgba(168, 85, 247, 0.6);
  box-shadow: 0 8px 32px rgba(168, 85, 247, 0.3);
}

/* Cabeçalho Summary */
details.changelog-version summary {
  display: flex;
  align-items: center;
  padding: 1rem 1.25rem;
  cursor: pointer;
  user-select: none;
  list-style: none;
}

details.changelog-version summary::-webkit-details-marker { display: none; }

/* Ícone de seta */
details.changelog-version summary::before {
  content: '▶';
  margin-right: 0.75rem;
  color: #a855f7;
  transition: transform 0.25s ease;
  font-size: 0.85rem;
}

details.changelog-version[open] summary::before {
  transform: rotate(90deg);
}

details.changelog-version[open] summary {
  border-bottom: 1px solid rgba(168, 85, 247, 0.2);
}

/* Título da versão */
.version-title {
  flex: 1;
  color: rgba(255, 255, 255, 0.95);
  font-size: 1.15rem;
  font-weight: 600;
}

.version-title small {
  color: #9ca3af;
  font-size: 0.85rem;
  font-weight: 400;
  margin-left: 0.5rem;
}

/* Botão de copiar */
.copy-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background: rgba(168, 85, 247, 0.15);
  border: 1px solid rgba(168, 85, 247, 0.3);
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.copy-btn:hover {
  background: rgba(168, 85, 247, 0.25);
  transform: scale(1.1);
}

.copy-btn svg { fill: #a855f7; }
.copy-btn:hover svg { fill: #14b8a6; }
.copy-btn.copied { background: rgba(20, 184, 166, 0.2); }
.copy-btn.copied svg { fill: #14b8a6; }

/* Conteúdo da versão */
.version-content {
  padding: 1.25rem 1.5rem;
  background: rgba(10, 6, 20, 0.4);
  color: rgba(255, 255, 255, 0.9);
}

.version-content h4 {
  color: #14b8a6;
  font-size: 1.05rem;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
}

.version-content h4:first-child { margin-top: 0; }
.version-content ul { line-height: 1.8; }
.version-content li { margin-bottom: 0.5rem; }
.version-content strong { color: #14b8a6; }

/* Rodapé */
.changelog-footer {
  background: rgba(20, 184, 166, 0.15);
  border-left: 4px solid #14b8a6;
  padding: 1rem 1.25rem;
  margin-top: 2rem;
  border-radius: 0 8px 8px 0;
  color: rgba(255, 255, 255, 0.9);
}

.changelog-footer a { color: #a855f7; }
.changelog-footer a:hover { color: #14b8a6; }

h2 {
  color: rgba(255, 255, 255, 0.95);
  border-bottom: 2px solid rgba(168, 85, 247, 0.3);
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
}
</style>

<script>
function copyVersionContent(button, event) {
  event.stopPropagation();
  event.preventDefault();

  const details = button.closest('details.changelog-version');
  const versionContent = details.querySelector('.version-content');
  const versionTitle = details.querySelector('.version-title');

  const titleText = versionTitle ? versionTitle.textContent.trim() : '';
  const contentClone = versionContent.cloneNode(true);

  contentClone.querySelectorAll('h4').forEach(h4 => {
    h4.textContent = '\n## ' + h4.textContent.trim() + '\n';
  });
  contentClone.querySelectorAll('li').forEach(li => {
    li.textContent = '- ' + li.textContent.trim();
  });

  const text = '# ' + titleText + '\n' + contentClone.textContent
    .replace(/\n{3,}/g, '\n\n').trim();

  navigator.clipboard.writeText(text).then(() => {
    const copyIcon = button.querySelector('.copy-icon');
    const checkIcon = button.querySelector('.check-icon');
    copyIcon.style.display = 'none';
    checkIcon.style.display = 'block';
    button.classList.add('copied');
    setTimeout(() => {
      copyIcon.style.display = 'block';
      checkIcon.style.display = 'none';
      button.classList.remove('copied');
    }, 2000);
  });
}
</script>
