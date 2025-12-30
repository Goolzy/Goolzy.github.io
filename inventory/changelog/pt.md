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
---

## Registro de alterações

Confira o histórico de atualizações do aplicativo Inventory.

---

### v1.1.2 <small style="color:#6b7280;">2025-12-31</small>

#### Correções de bugs
- **Correção de tremor de rolagem**: Resolvido o tremor da tela ao rolar para cima em documentos/carimbos com poucos registros
- **Correção de rolagem para o topo**: Resolvido o problema onde as informações do autor não podiam ser alcançadas pela rolagem em itens com registros

---

### v1.1.0 <small style="color:#6b7280;">2025-12-29</small>

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

---

### v1.0.4 <small style="color:#6b7280;">2025-12-25</small>

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

---

### v1.0.3 <small style="color:#6b7280;">2025-12-23</small>

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

---

### v1.0.2 <small style="color:#6b7280;">2025-12-22</small>

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

---

### v1.0.1 <small style="color:#6b7280;">2025-12-16</small>

#### Função de Bloqueio de Documento
- Definir senha numérica em documentos (até 16 dígitos)
- Documentos bloqueados exibem escala de cinza + ícone de cadeado
- Desbloquear com senha correta (uso único)
- O estado de bloqueio persiste após transferência de item
- Documentos bloqueados são excluídos dos resultados de busca

---

### v1.0.0 <small style="color:#6b7280;">2025-12-13</small>

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


---

> **Sugira novas funcionalidades!** Compartilhe suas ideias em [Sugestões](/inventory/suggest/pt/) e iremos analisá-las ativamente.

<style>
h2 { color: #1f2937; border-bottom: 2px solid #e5e7eb; padding-bottom: .5rem; margin-bottom: 1.5rem; }
h3 { color: #374151; margin-top: 2rem; margin-bottom: 1rem; }
h4 { color: #4b5563; font-size: 1.1rem; margin-top: 1.5rem; margin-bottom: .75rem; }
ul { line-height: 1.8; }
li { margin-bottom: .5rem; }
hr { border: none; border-top: 1px solid #e5e7eb; margin: 2rem 0; }
blockquote { background: #f9fafb; border-left: 4px solid #3b82f6; padding: 1rem 1.5rem; margin: 1.5rem 0; border-radius: 4px; }
small { font-size: .85rem; }
</style>
