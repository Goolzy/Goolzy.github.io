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

## 📋 Registro de alterações

Confira o histórico de atualizações do aplicativo Inventory.

---

### 📎 v1.0.3 <small style="color:#6b7280;">2025-12-23</small>

#### 📎 Função Clip
Agrupe múltiplos documentos juntos para facilitar o gerenciamento.
- **Criar clip**: Selecione 2+ documentos e toque em "Clipar juntos"
- **Ícone de clip**: Documentos clipados exibem um ícone de clip no canto superior direito
- **Detalhes do clip**: Veja itens internos através do botão "Info do clip" na tela de detalhes
- **Reordenar**: Arraste para reordenar itens dentro de um clip (exceto capa)
- **Excluir itens**: Remover itens específicos de um clip (exceto capa)
- **Desfazer clip**: Dissolver completamente um clip em documentos individuais
- **Dissolução automática**: O clip se dissolve automaticamente quando resta apenas 1 item
- **Transferência**: Clips são enviados/recebidos como um grupo

#### 🔓 Melhoria no Desbloqueio por Senha
- Inserir a senha correta agora **desbloqueia permanentemente** o documento
- Antes: Apenas visualização, bloqueio mantido → Agora: Totalmente desbloqueado

#### 🐛 Correções de Bugs
- Itens clip eram contados individualmente na tela de recebimento - corrigido
- O emblema de recebimento da barra de navegação incluía itens internos do clip - corrigido
- O emblema (Nametag) não era desequipado ao reembolsar/excluir - corrigido
- O domínio permanecia ocupado após a exclusão do emblema - corrigido

---

### ✨ v1.0.2 <small style="color:#6b7280;">2025-12-22</small>

#### 🔔 Indicador de Registro Compartilhado Não Lido
Quando novos comentários são adicionados aos registros compartilhados, a borda do item **pulsa**.
- Identifique facilmente registros compartilhados não lidos no seu inventário
- A pulsação para quando você abre o documento
- O status de leitura sincroniza em todos os dispositivos

#### 🔖 Guia de Uso do Carimbo
Quando você seleciona um carimbo gravado, os papéis disponíveis **pulsam** para guiá-lo.
- UX melhorada para duplicação de modelo
- Orientação intuitiva para o próximo passo

#### 📂 Melhorias de Partição
- **Recolher/Expandir**: Alternar partições com botões de seta (▼/▲)
- **Selecionar tudo**: Toque no cabeçalho da partição para selecionar/desmarcar todos os itens
- Indicadores de status de seleção (○/◐/●)
- Arrastar e soltar para partições recolhidas

#### 🛒 Conveniência da Loja
Processo de checkout simplificado para compras consecutivas do mesmo item.
- Diálogos de confirmação ignorados dentro de 10 minutos da última compra
- Compra em massa mais rápida

#### 🎨 Melhorias de Interface
- Legibilidade melhorada com nova fonte de título
- Cartões de carimbo mostram pré-visualização do modelo no fundo (33% de opacidade)
- Cartões de distintivo mostram pré-visualização da imagem gravada
- Menu inferior exibe distintivo de número de ações disponíveis
- Ajuste de cor do tema tinta preta (melhor legibilidade do texto)
- Imagens de produtos otimizadas (tamanho reduzido, carregamento mais rápido)

#### 🐛 Correção de bugs
- Corrigido efeito de pulsação em comentários próprios
- Corrigido corte do campo de entrada na navegação por gestos do Android
- Corrigida tela cinza ao recolher partições
- Melhorado tratamento de permissão de notificação push no Android 13+

---

### 🔒 v1.0.1 <small style="color:#6b7280;">2025-12-16</small>

#### 🔒 Função de Bloqueio de Documento
- Definir senha numérica em documentos (até 16 dígitos)
- Documentos bloqueados exibem escala de cinza + ícone de cadeado
- Desbloquear com senha correta (uso único)
- O estado de bloqueio persiste após transferência de item
- Documentos bloqueados são excluídos dos resultados de busca

---

### 🎉 v1.0.0 <small style="color:#6b7280;">2025-12-13</small>

**Primeira versão oficial**

#### 📦 Sistema de Papel
- Introdução do sistema de moeda para criação de documentos
- 10 folhas de Papel ao se registrar
- 10 folhas adicionais para cada vinculação Google/Apple
- Papel disponível para compra na loja

#### 📄 Criação de documentos
- Criar documentos usando Papel
- Adicionar título, conteúdo e imagens
- Opções de data de início/expiração

#### 🏷️ Sistema de Emblema
- Função de gravação de nome de domínio único
- Nome de domínio gravado usado como identidade do usuário
- Gerenciamento de ativação por equipar/desequipar
- Opção de anexar imagem 128x128

#### 🔖 Sistema de Carimbo
- Função de criação de modelo
- Seleção de modo Registro solo/Registro compartilhado
- Função de duplicação de modelo
- Configurações de data de início/expiração

#### 📝 Função de Registro
- Gravar registros em documentos/carimbos
- Registro solo: Apenas registros pessoais
- Registro compartilhado: Compartilhar com proprietários de duplicatas
- Suporte a cartão info formato chave:valor

#### 🎨 Sistema de Tinta
- Função de mudança de cor do tema
- Tinta Preta, Tinta Dourada

#### 🤝 Transferência de itens
- Enviar itens via endereço de email
- Preencher email automaticamente por scan QR
- Aceitar ou devolver itens recebidos
- Enviar múltiplos itens de uma vez

#### 📂 Partição
- Função de agrupamento de itens
- Armazenamento local específico do dispositivo

#### 🔍 Função de busca
- Filtragem de busca em tempo real
- Salvar termos de busca como filtros
- Salvamento automático de buscas recentes (até 5)

#### 🛒 Loja
- Comprar Papel, Carimbos, Emblemas, Tinta
- Disponível em todas as plataformas

#### 🔐 Conta
- Login com Google, Apple, Email
- Ganhar Papel adicional vinculando contas sociais

#### 🌍 Suporte multilíngue
- 한국어, English, 日本語
- Deutsch, Français, Español, Português

#### 📱 Plataformas suportadas
- iOS (iPhone, iPad)
- Android (smartphones, tablets)
- macOS, Windows

---

> 💡 **Sugira novas funcionalidades!** Compartilhe suas ideias em [Sugestões](/inventory/suggest/pt/) e iremos analisá-las ativamente.

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
