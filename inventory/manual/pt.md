---
layout: inventory
title: Manual do Usuário
permalink: /inventory/manual/pt/
lang: pt
translations:
  ko: /inventory/manual/
  en: /inventory/manual/en/
  ja: /inventory/manual/ja/
  de: /inventory/manual/de/
  fr: /inventory/manual/fr/
  es: /inventory/manual/es/
  pt: /inventory/manual/pt/
  zh: /inventory/manual/zh/
  ar: /inventory/manual/ar/
  hi: /inventory/manual/hi/
  id: /inventory/manual/id/
  ru: /inventory/manual/ru/
  it: /inventory/manual/it/
  tr: /inventory/manual/tr/
  vi: /inventory/manual/vi/
  th: /inventory/manual/th/
  pl: /inventory/manual/pl/
---

## 📖 Manual do Usuário

Explore todas as funcionalidades do aplicativo Inventory em detalhes.

---

<details open>
<summary><h3 id="paper">📦 Sistema de Papel</h3></summary>
<div class="manual-content" markdown="1">

No Inventory, o **Papel** é a moeda principal usada para criar itens.

#### O que é Papel?
- **1 Papel** é consumido ao criar um item
- Você não pode criar novos itens sem Papel

#### Como obter Papel

| Método | Quantidade | Nota |
|--------|------------|------|
| Novo cadastro | 10 Papel + 3 Selos | Apenas primeira vez |
| Vincular Google | +10 folhas | Para usuários existentes |
| Vincular Apple | +10 folhas | Para usuários existentes |
| Compra na loja | 10 folhas | Compra in-app |

> 💡 **Dica**: Usuários existentes podem ganhar Papel extra vinculando novas contas sociais!

</div>
</details>

---

<details>
<summary><h3 id="create-item">📄 Criar Itens</h3></summary>
<div class="manual-content" markdown="1">

Selecione papel para criar documentos de log. Dependendo do número de papéis selecionados, você pode criar logs privados ou compartilhados.

| Tipo de Log | Papéis | Finalidade |
|-------------|--------|------------|
| **Log Privado** | 1 | Notas pessoais, diário, mensagens unidirecionais |
| **Log Compartilhado** | 2 ou mais | Conversa bidirecional, comunicação |

<h4 id="private-log">Criar Item de Log Privado</h4>

1. Selecione **1 Papel** na tela inicial
2. Selecione **"Criar Novo Item (Log Privado)"** no menu inferior
3. Insira as informações do item:
   - Título (obrigatório)
   - Conteúdo
   - Imagem (opcional)
   - Data de Início (opcional)
   - Data de Expiração (opcional)
4. Pressione **Salvar** e 1 Papel será consumido para criar o documento

> 💡 **Log Privado**: Apenas você pode ver os logs que escreve. Após enviar, apenas o destinatário pode adicionar logs.

<h4 id="shared-log">Criar Item de Log Compartilhado</h4>

1. Selecione **2 ou mais Papéis** na tela inicial
2. Selecione **"Criar Novo Item (Log Compartilhado)"** no menu inferior
3. Insira as informações do item:
   - Título (obrigatório)
   - Conteúdo
   - Imagem (opcional)
   - Data de Início (opcional)
   - Data de Expiração (opcional)
4. Pressione **Salvar** e serão criados documentos iguais ao número de papéis selecionados

> 💡 **Log Compartilhado**: Documentos criados compartilham a mesma sala de comentários. Envie documentos para diferentes pessoas para ver os logs um do outro em tempo real, como um chat.

<h4 id="dates">Data de Início e Data de Expiração</h4>

| Configuração | Descrição |
|--------------|-----------|
| **Data de Início** | O conteúdo ficará desfocado até esta data |
| **Data de Expiração** | O conteúdo ficará desfocado e adições de log serão desativadas após esta data |

Se não configurado, será visível imediatamente e permanente.

</div>
</details>

---

<details>
<summary><h3 id="lock">🔒 Bloqueio de Documento</h3></summary>
<div class="manual-content" markdown="1">

Você pode proteger itens de documento definindo uma senha.

#### O que é o Bloqueio de Documento?

Um documento bloqueado só pode ser visualizado após inserir a senha correta.

| Status | Descrição |
|--------|-----------|
| **Desbloqueado** | Qualquer pessoa pode ver o conteúdo |
| **Bloqueado** | Conteúdo visível apenas com senha |

#### Como Bloquear

1. Selecione os **documentos** que deseja bloquear na tela inicial (seleção múltipla possível)
2. Selecione **"Bloquear Itens"** no menu inferior
3. Digite uma senha numérica (até 16 dígitos)
4. Digite a mesma senha novamente para confirmar
5. Uma vez bloqueados, os itens exibirão um **ícone de cadeado** e efeito de **escala de cinza**

#### Como Desbloquear

1. Toque em um documento bloqueado para entrar na tela de detalhes
2. Uma caixa de diálogo para inserir a senha aparecerá
3. Digite a senha correta para desbloquear
4. Uma vez desbloqueado, o bloqueio é removido permanentemente (para bloquear novamente, defina uma nova senha)

> ⚠️ **Aviso**: Se você esquecer sua senha, ela não pode ser recuperada. Documentos bloqueados só podem ser **excluídos**.

#### Recursos do Bloqueio

- Senhas de bloqueio são **armazenadas na nuvem**
- O status de bloqueio é mantido mesmo ao transferir itens para outras pessoas
- Documentos bloqueados não aparecem nos resultados de pesquisa
- Itens bloqueados ainda podem ser excluídos

</div>
</details>

---

<details>
<summary><h3 id="clip">📎 Sistema Clip</h3></summary>
<div class="manual-content" markdown="1">

**Clip** é uma funcionalidade que agrupa múltiplos documentos para facilitar o gerenciamento.

#### O que é um Clip?

Os clips permitem que você gerencie documentos relacionados como um único grupo.

| Estado | Descrição |
|--------|-----------|
| **Documentos Individuais** | Documentos gerenciados separadamente |
| **Documentos Clipados** | Gerenciados como grupo, movidos/transferidos juntos |

#### Criar um Clip

1. Selecione **2 ou mais documentos** na tela inicial
2. Toque em **"Clipar juntos"** no menu inferior
3. Os documentos selecionados são agrupados em um único clip
4. Documentos clipados exibem um **ícone de clip (📎)** no canto superior direito

> 💡 **Dica**: O primeiro documento selecionado se torna a **capa** do clip!

#### Ver Info do Clip

1. Entre na **tela de detalhes** de um documento clipado
2. Toque no botão **"Info do Clip"**
3. Veja a lista de todos os itens no clip

#### Reordenar Itens em um Clip

Você pode mudar a ordem dos itens na tela de info do clip:

1. Pressione e segure a **alça de arrasto (⋮⋮)** do item que deseja mover
2. Arraste para a posição desejada
3. Solte para salvar a ordem

> ⚠️ **Nota**: A capa (primeiro item) não pode ser reordenada.

#### Excluir Itens de um Clip

Você pode remover itens específicos na tela de info do clip:

1. Toque no botão **"Excluir"** ao lado do item
2. Confirme para remover o item do clip
3. O item removido volta a ser um documento individual

> ⚠️ **Nota**: A capa não pode ser excluída. Se restarem apenas 2 itens e você excluir 1, o clip se dissolve automaticamente.

#### Desfazer Clip

1. Selecione o documento clipado
2. Toque em **"Desfazer clip"** no menu inferior
3. Todos os documentos são separados em documentos individuais

#### Transferir Clips

- Quando você envia um documento clipado, o **grupo inteiro** é transferido junto
- Os destinatários aceitam/rejeitam clips como um **grupo**
- Itens individuais dentro de um clip não podem ser enviados separadamente

#### Características do Clip

- Documentos clipados são **movidos/transferidos juntos**
- Definir um bloqueio na capa protege todo o clip
- O ícone de clip (📎) facilita identificar o status do clip
- São necessários pelo menos 2 documentos para manter um clip

</div>
</details>

---

<details>
<summary><h3 id="badge">🏷️ Sistema de Emblema</h3></summary>
<div class="manual-content" markdown="1">

Um **Emblema** é uma identidade única que você pode usar dentro do aplicativo.

#### O que é um Emblema?

Quando você grava um nome de domínio em um emblema, todas as suas atividades no app serão exibidas com seu **nome de domínio gravado** em vez do seu email.

Exemplos: `MinhaMarca`, `JoãoSilva`, `Empresa2025`

#### Gravar um Emblema

1. Compre um emblema na loja (estado não usado)
2. Toque no emblema → Selecione o menu **"Gravar"**
3. Digite o nome de domínio desejado (máx. 32 caracteres)
   - Caracteres e números de todos os idiomas são permitidos
   - Caracteres especiais e emojis não são permitidos
4. Clique em **"Verificar disponibilidade do domínio"** para verificar
5. Opcionalmente anexe uma imagem 128x128
6. Clique em **"Gravar"** para completar

> ⚠️ **Aviso**: Uma vez gravado, o nome de domínio e a imagem **não podem ser alterados permanentemente**. Escolha com cuidado!

#### Equipar/Desequipar um Emblema

- **Equipado**: Seu nome de domínio gravado será exibido em todas as atividades
- **Desequipado**: Seu email padrão será exibido novamente
- Mesmo possuindo múltiplos emblemas, apenas um pode ser equipado por vez

#### Exibição no cartão de inventário

Emblemas gravados (estado ativo) exibem uma prévia da imagem gravada no canto superior direito do cartão de inventário.
Isso permite identificar rapidamente a qual domínio o emblema pertence.

</div>
</details>

---

<details>
<summary><h3 id="stamp">🔖 Sistema de Carimbo</h3></summary>
<div class="manual-content" markdown="1">

Um **Carimbo** é um item que permite criar modelos e compartilhá-los com outros.

#### Exibição no cartão de inventário

Carimbos com modelos (estado ativo) são exibidos de forma especial no inventário:
- **Fundo**: Imagem do modelo exibida com 33% de opacidade
- **Frente**: Imagem do carimbo gravado

Isso permite identificar rapidamente de qual modelo se trata.

#### Criar um modelo de Carimbo

1. Compre um carimbo na loja (estado não usado)
2. Toque no carimbo → Selecione o menu **"Criar novo modelo"**
3. Insira as informações do modelo:
   - **Imagem** (obrigatório)
   - **Título** (máx. 32 caracteres)
   - **Conteúdo** (máx. 1024 caracteres)
   - **Data de início** (opcional) - Conteúdo oculto até esta data
   - **Data de expiração** (opcional) - Adição de registros desativada após
   - **Modo de registro** - Registro solo ou Registro compartilhado
4. Clique em **"Criar modelo"** para completar

#### Duplicar um Carimbo

Quando você seleciona um carimbo ativado (modelo) e papel juntos, o menu **"Duplicar modelo"** aparece.

- 1 Papel é consumido
- Um novo item com o mesmo modelo é criado
- No modo de registro compartilhado, usa o mesmo espaço compartilhado do original

#### Compartilhar Seu Modelo

Você pode compartilhar seu modelo de carimbo para que outros usuários possam pesquisá-lo e cloná-lo.

1. Toque em um carimbo ativado (modelo) → Selecione **"Configurações de compartilhamento"**
2. Insira as informações de compartilhamento:
   - **Descrição** - Uma frase curta descrevendo o modelo
   - **Tags** - Palavras-chave para pesquisa (separadas por vírgulas)
   - **Duração do compartilhamento** - Por quanto tempo o compartilhamento permanecerá ativo
3. Clique em **"Iniciar compartilhamento"** para concluir

Modelos compartilhados podem ser encontrados e clonados por outros usuários via pesquisa por tags.

> 💡 **Dica**: Para parar de compartilhar, selecione **"Parar compartilhamento"** no mesmo menu.

#### Pesquisar Modelos Compartilhados

Você pode pesquisar e clonar modelos compartilhados por outros usuários.

1. Vá para a tela de Perfil e selecione **"Pesquisar modelos compartilhados"**
2. Digite tags para pesquisar ou toque em tags populares/recentes
3. Toque em um modelo nos resultados da pesquisa para ver os detalhes
4. Clique no botão **"Clonar"** para clonar o modelo

- Clonar consome 1 Papel
- O botão de clonar fica desativado se você não tiver papel
- Itens clonados têm as mesmas informações de modelo do original

</div>
</details>

---

<details>
<summary><h3 id="quick-input">⚡ Entrada Rápida</h3></summary>
<div class="manual-content" markdown="1">

Ao adicionar registros, toque no botão `+` para abrir o menu de **Entrada Rápida** para inserir informações especiais facilmente.

#### Tipos de Entrada Rápida

| Tipo | Descrição | Exemplo |
|------|-----------|---------|
| **Palavra-chave** | Formato Chave:Valor | `Status:Bom` |
| **Data** | Datas com cálculo D-Day | D-5, D-Day, D+3 |
| **Telefone** | Número de telefone | Pode ligar diretamente |
| **Localização** | Endereço/coordenadas | Abre no app de mapas |
| **Valor** | Formato de moeda | Formatação automática |

#### Ações de Pressão Longa

| Tipo de Cartão | Ação de Pressão Longa |
|----------------|----------------------|
| **📅 Data** | Definir/Remover alarme |
| **📞 Telefone** | Mobile: Ligar, Desktop: Copiar |
| **📍 Localização** | Mobile: Abrir no mapa, Desktop: Copiar |
| **💰 Valor** | Copiar para área de transferência |

<h4 id="alarm">Configuração de Alarme de Data</h4>

Pressione longamente um cartão de data para definir um alarme:

1. **Pressione longamente** o cartão de data
2. Selecione **Definir** na caixa de diálogo de confirmação
3. Uma vez definido, a cor do cartão muda e um ícone 🔔 aparece
4. Pressione longamente novamente para remover o alarme

> 💡 **Dica**: Os cartões de data exibem automaticamente cálculos D-Day (ex: D-5, D-Day, D+3)

</div>
</details>

---

<details>
<summary><h3 id="log">📝 Sistema de Registro</h3></summary>
<div class="manual-content" markdown="1">

Os **Registros** são anotações que você pode adicionar a itens ou modelos de carimbo.

#### Modos de Registro

| Modo | Registro Solo | Registro Compartilhado |
|------|---------------|------------------------|
| **Local de armazenamento** | Espaço privado de cada pessoa | Espaço compartilhado baseado no carimbo original |
| **Registros visíveis** | Apenas seus próprios registros | Registros de todos os proprietários |
| **Casos de uso** | Diário pessoal, notas | Colaboração, comunidade |
| **Se original excluído** | Não afetado | Não é possível adicionar registros (somente leitura) |

#### Formatos de Registro

Você pode usar vários formatos ao escrever registros.

**Formatos básicos:**

| Formato | Descrição | Exemplo |
|---------|-----------|---------|
| Texto simples | Exibido como bolha de chat | `Inspeção concluída hoje!` |
| `chave:valor` | Exibido como cartão info (chave 1-8 car.) | `status:bom` |
| `---` | Exibido como separador | `---` |

Usar a mesma chave múltiplas vezes exibe `valor anterior → novo valor`.

**Estilização de texto:**

| Formato | Efeito | Exemplo |
|---------|--------|---------|
| `{[texto]}` | Cartão cor principal (fundo + texto) | `{[Importante]}` |
| `[{texto}]` | Cartão cinza + texto cor principal | `[{Cuidado}]` |
| `[texto]` | Cartão cinza | `[Nota]` |
| `{texto}` | Texto cor principal | `{Ênfase}` |
| `(texto)` | Texto cor secundária | `(Info adicional)` |
| `"texto"` | **Negrito** | `"Conteúdo importante"` |
| `'texto'` | <u>Sublinhado</u> | `'Parte destacada'` |
| `!texto!` | ~~Tachado~~ | `!Conteúdo excluído!` |

> 💡 Estilos podem ser aninhados até 3 níveis. Exemplo: `{["Negrito cor principal"]}`

**Links de mídia (Cartões URL):**

Quando você insere uma URL em um registro, ela é automaticamente exibida como **cartão enriquecido**.

| Plataforma | Conteúdo exibido | Exemplo |
|------------|------------------|---------|
| **YouTube** | Miniatura + Título + Canal | `https://youtube.com/watch?v=...` |
| **Spotify** | Capa do álbum + Título + Artista | `https://open.spotify.com/track/...` |
| **Google Drive** | Miniatura do arquivo + Nome | `https://drive.google.com/file/d/...` |
| **Dropbox** | Ícone + Nome do arquivo | `https://dropbox.com/s/...` |
| **OneDrive** | Ícone + Nome do serviço | `https://1drv.ms/...` |
| **Páginas web** | Miniatura + Título da página | `https://example.com` |

- Use formato `chave:URL` para exibir com palavra-chave (ex: `docs:https://youtube.com/...`)
- **Toque** no cartão para abrir em app/navegador externo
- **Pressione longamente** para copiar a URL para a área de transferência

> 💡 **Dica**: Arquivos do Google Drive devem estar **compartilhados publicamente** para exibir miniaturas.

**Registros automáticos:**

Quando um item é transferido, um registro de transferência é automaticamente gravado:
- Exibido no formato `Remetente → Destinatário`
- Se um emblema estiver equipado, o nome de domínio é exibido

#### Condições de término do registro compartilhado

- **Carimbo original excluído**: Não é possível adicionar registros compartilhados (somente leitura)
- **Data de expiração passada**: Não é possível adicionar registros compartilhados (somente leitura)

#### 🔔 Indicador de não lido

Quando novos comentários são adicionados a um registro compartilhado, a borda do item **pulsa** na visualização do inventário.

- A pulsação começa imediatamente quando outro usuário adiciona um comentário
- A pulsação para quando você abre e visualiza o documento
- O status de leitura é salvo na nuvem e sincronizado em todos os dispositivos

> 💡 **Dica**: Verifique os itens que pulsam para não perder novos comentários!

</div>
</details>

---

<details>
<summary><h3 id="ink">🎨 Sistema de Tinta</h3></summary>
<div class="manual-content" markdown="1">

A **Tinta** é um item que muda a cor do tema do aplicativo.

#### Como usar

1. Toque em uma tinta para entrar na tela de detalhes
2. Clique no botão **"Mudar tema"**
3. A cor de todo o aplicativo muda imediatamente

#### Tipos de Tinta

| Tinta | Cor |
|-------|-----|
| **Tinta Preta** | Tema preto padrão |
| **Tinta Dourada** | Tema dourado luxuoso |

</div>
</details>

---

<details>
<summary><h3 id="search">🔍 Função de Busca</h3></summary>
<div class="manual-content" markdown="1">

#### Busca básica

Toque na barra de busca no topo para ativar o modo de busca.

- Os resultados são filtrados em **tempo real** enquanto você digita
- Toque no botão X para sair do modo de busca

#### Buscas recentes

- Até 5 buscas recentes são salvas
- Toque em uma busca recente para preencher automaticamente
- Exclua individualmente com o botão X

#### Salvar como filtro

Quando você salva um termo de busca com o botão **"Definir como filtro"**:

- Ele aparece como etiqueta de filtro abaixo da barra de busca
- Toque na etiqueta para filtrar instantaneamente
- Exclua o filtro com o botão X

<h4 id="keyword">Agregação de palavras-chave</h4>

Quando um filtro está definido e você seleciona itens, os **valores de palavras-chave dos itens selecionados são automaticamente agregados**.

**Agregação de valores numéricos:**
- **Soma** e **média** são calculadas para valores numéricos da mesma palavra-chave
- Exemplo: Selecionar `preço:1000`, `preço:2000`, `preço:3000`
- Resultado: `Soma: 6000  Média: 2000`

**Agregação de strings:**
- Valores de string da mesma palavra-chave são **unidos com espaços**
- Exemplo: Selecionar `tag:A`, `tag:B`, `tag:C`
- Resultado: `A B C`

**Copiar valores:**
- **Pressione longamente** um cartão de agregação para copiar o valor
- Uma notificação aparece quando a cópia é concluída

> 💡 **Exemplo de uso**: Calcule rapidamente o preço total de vários itens, ou copie tags relacionadas de uma vez.

</div>
</details>

---

<details>
<summary><h3 id="bottom-menu">📱 Emblema do menu inferior</h3></summary>
<div class="manual-content" markdown="1">

Emblemas vermelhos nos ícones do menu inferior mostram o status atual.

| Menu | Significado do emblema |
|------|------------------------|
| **Enviar** | Número de itens que podem ser enviados (transferíveis entre os selecionados) |
| **Receber** | Número de transações pendentes (requerem aceitar/devolver) |
| **Ação** | Número de ações disponíveis com os itens selecionados |

> 💡 Os números dos emblemas animam com um efeito de bolha quando mudam.

</div>
</details>

---

<details>
<summary><h3 id="transfer">📤 Enviar Itens</h3></summary>
<div class="manual-content" markdown="1">

Você pode transferir itens ao vender usados ou dar presentes.

#### Como enviar

1. Selecione **Enviar** na aba inferior
2. **Marque** os itens para transferir (seleção múltipla possível)
3. Digite o email do destinatário
4. Clique no botão **Enviar**

#### Inserir email por código QR

Em vez de digitar o email do destinatário, você pode usar um código QR:

1. O destinatário exibe seu código QR na tela de **Perfil**
2. O remetente pressiona o botão **Escanear QR**
3. Escaneie o código QR com a câmera
4. O email é inserido automaticamente

> ⚠️ **Importante**: Itens transferidos **desaparecem imediatamente** do seu inventário. Transferências não podem ser desfeitas.

</div>
</details>

---

<details>
<summary><h3 id="receive">📥 Receber Itens</h3></summary>
<div class="manual-content" markdown="1">

Você pode receber itens enviados por outros.

#### Como receber

1. Selecione **Receber** na aba inferior
2. A lista de itens recebidos é exibida
3. Para cada item:
   - **Aceitar**: Adicionado ao seu inventário
   - **Devolver**: Enviado de volta ao remetente

#### Notificações

- Você recebe notificações push quando novos itens chegam (se habilitadas)
- A aba Receber mostra o número de itens não aceitos

</div>
</details>

---

<details>
<summary><h3 id="shop">🛒 Usar a Loja</h3></summary>
<div class="manual-content" markdown="1">

Você pode comprar vários itens na loja.

#### Produtos disponíveis

| Produto | Uso |
|---------|-----|
| **Papel** | Para criar itens (consumível) |
| **Carimbo** | Para criar modelos |
| **Emblema** | Para gravar um domínio único |
| **Tinta** | Para mudar a cor do tema |

#### Como comprar

1. Selecione **Loja** na aba inferior
2. Toque no produto desejado
3. Prossiga com o pagamento (App Store / Google Play)
4. Entregue automaticamente após o pagamento

> 💡 A loja está disponível em todas as plataformas (iOS, Android, Windows, macOS).

</div>
</details>

---

<details>
<summary><h3 id="pocket">📂 Função de Partição</h3></summary>
<div class="manual-content" markdown="1">

Você pode agrupar itens com partições quando tiver muitos.

#### Criar uma Partição

1. Selecione itens
2. Selecione **"Criar partição"** no menu inferior
3. Digite o nome da partição (máx. 16 caracteres)

#### Características da Partição

- Partições são **salvas apenas no dispositivo**
- A estrutura de partição não é visível em outros dispositivos
- Os itens em si são armazenados na nuvem e visíveis em todos os dispositivos

#### Recolher/Expandir

Use o botão de seta (▼/▲) no lado direito do cabeçalho da partição para recolher ou expandir.

- O estado recolhido é mantido após reiniciar o aplicativo
- Todas as partições são automaticamente expandidas durante a busca
- Você pode arrastar itens para partições recolhidas

#### Selecionar tudo na Partição

Toque no cabeçalho da partição para selecionar/desmarcar todos os itens nessa partição.

| Indicador | Significado |
|-----------|-------------|
| ○ (Círculo vazio) | Nenhum selecionado |
| ◐ (Semicírculo) | Alguns selecionados |
| ● (Círculo cheio) | Todos selecionados |

</div>
</details>

---

<details>
<summary><h3 id="language">🌍 Mudar idioma</h3></summary>
<div class="manual-content" markdown="1">

7 idiomas são suportados:
- 🇰🇷 한국어
- 🇺🇸 English
- 🇯🇵 日本語
- 🇩🇪 Deutsch
- 🇫🇷 Français
- 🇪🇸 Español
- 🇧🇷 Português

**Como mudar:**
Configurações → Idioma → Selecione o idioma desejado

</div>
</details>

---

> 📚 **Tem mais perguntas?** Consulte as [Perguntas Frequentes](/inventory/faq/pt/) ou entre em contato através de [Sugestões](/inventory/suggest/pt/).

<style>
details {
  background: rgba(21, 10, 40, 0.4);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(168, 85, 247, 0.25);
  border-radius: 12px;
  padding: 0;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
  overflow: hidden;
}

details:hover {
  border-color: rgba(168, 85, 247, 0.5);
  background: rgba(21, 10, 40, 0.5);
  box-shadow: 0 6px 24px rgba(168, 85, 247, 0.2);
  transform: translateY(-2px);
}

details[open] {
  border-color: rgba(168, 85, 247, 0.6);
  background: rgba(21, 10, 40, 0.6);
  box-shadow: 0 8px 32px rgba(168, 85, 247, 0.3);
}

summary {
  padding: 1rem 1.25rem;
  cursor: pointer;
  user-select: none;
  outline: none;
  list-style: none;
}

summary::-webkit-details-marker {
  display: none;
}

summary::before {
  content: '▶';
  display: inline-block;
  margin-right: .5rem;
  color: #a855f7;
  transition: transform 0.2s;
  font-size: 0.9rem;
}

details[open] summary::before {
  transform: rotate(90deg);
}

summary h3 {
  display: inline;
  margin: 0;
  color: rgba(255, 255, 255, 0.95);
  font-size: 1.05rem;
  font-weight: 600;
}

details[open] summary {
  border-bottom: 1px solid rgba(168, 85, 247, 0.2);
}

.manual-content {
  padding: 1rem 1.25rem 1.25rem;
  background: rgba(10, 6, 20, 0.4);
  backdrop-filter: blur(10px);
  border-radius: 0 0 10px 10px;
  color: rgba(255, 255, 255, 0.9);
}

.manual-content h4 {
  color: #14b8a6;
  font-size: 1rem;
  margin-top: 1.5rem;
  margin-bottom: .75rem;
}

.manual-content strong {
  color: #14b8a6;
}

.manual-content ul,
.manual-content ol {
  line-height: 1.8;
  margin-top: .75rem;
  color: rgba(255, 255, 255, 0.85);
}

.manual-content li {
  margin-bottom: .5rem;
}

.manual-content a {
  color: #a855f7;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s;
}

.manual-content a:hover {
  color: #14b8a6;
  text-decoration: underline;
}

.manual-content table {
  width: 100%;
  border-collapse: collapse;
  margin: .75rem 0;
}

.manual-content th,
.manual-content td {
  padding: .5rem .75rem;
  border: 1px solid rgba(168, 85, 247, 0.3);
  text-align: left;
}

.manual-content th {
  background: rgba(168, 85, 247, 0.2);
  color: rgba(255, 255, 255, 0.95);
}

.manual-content td {
  color: rgba(255, 255, 255, 0.85);
}

.manual-content code {
  background: rgba(168, 85, 247, 0.2);
  padding: 2px 6px;
  border-radius: 4px;
  font-family: monospace;
  color: #a855f7;
}

.manual-content blockquote {
  background: rgba(20, 184, 166, 0.15);
  border-left: 4px solid #14b8a6;
  padding: 1rem 1.25rem;
  margin: 1rem 0;
  border-radius: 8px;
  color: rgba(255, 255, 255, 0.9);
}

.manual-content p {
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.7;
}
</style>
