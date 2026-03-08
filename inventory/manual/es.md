---
layout: inventory
title: Manual de Usuario
permalink: /inventory/manual/es/
lang: es
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

## 📖 Manual de Usuario

Explora todas las funciones de la aplicación Inventory en detalle.

---

<details open>
<summary><h3 id="paper">📦 Sistema de Papel</h3></summary>
<div class="manual-content" markdown="1">

En Inventory, el **Papel** es la moneda principal utilizada para crear objetos.

#### ¿Qué es el Papel?
- **1 Papel** se consume al crear un objeto
- No puedes crear nuevos objetos sin Papel

#### Cómo obtener Papel

| Método | Cantidad | Nota |
|--------|----------|------|
| Nuevo registro | 10 Papel + 3 Sellos | Solo la primera vez |
| Vincular Google | +10 hojas | Para usuarios existentes |
| Vincular Apple | +10 hojas | Para usuarios existentes |
| Compra en tienda | 10 hojas | Compra in-app |

> 💡 **Consejo**: ¡Los usuarios existentes pueden obtener Papel extra vinculando nuevas cuentas sociales!

</div>
</details>

---

<details>
<summary><h3 id="create-item">📄 Crear Artículos</h3></summary>
<div class="manual-content" markdown="1">

Selecciona papel para crear documentos de registro. Dependiendo del número de papeles seleccionados, puedes crear registros privados o compartidos.

| Tipo de Registro | Papeles | Propósito |
|------------------|---------|-----------|
| **Registro Privado** | 1 | Notas personales, diario, mensajes unidireccionales |
| **Registro Compartido** | 2 o más | Conversación bidireccional, comunicación |

<h4 id="private-log">Crear Artículo de Registro Privado</h4>

1. Selecciona **1 Papel** en la pantalla de inicio
2. Selecciona **"Crear Nuevo Artículo (Registro Privado)"** del menú inferior
3. Ingresa la información del artículo:
   - Título (obligatorio)
   - Contenido
   - Imagen (opcional)
   - Fecha de Inicio (opcional)
   - Fecha de Expiración (opcional)
4. Presiona **Guardar** y se consumirá 1 Papel para crear el documento

> 💡 **Registro Privado**: Solo tú puedes ver los registros que escribes. Después de enviarlo, solo el destinatario puede agregar registros.

<h4 id="shared-log">Crear Artículo de Registro Compartido</h4>

1. Selecciona **2 o más Papeles** en la pantalla de inicio
2. Selecciona **"Crear Nuevo Artículo (Registro Compartido)"** del menú inferior
3. Ingresa la información del artículo:
   - Título (obligatorio)
   - Contenido
   - Imagen (opcional)
   - Fecha de Inicio (opcional)
   - Fecha de Expiración (opcional)
4. Presiona **Guardar** y se crearán documentos igual al número de papeles seleccionados

> 💡 **Registro Compartido**: Los documentos creados comparten la misma sala de comentarios. Envía documentos a diferentes personas para ver los registros del otro en tiempo real, como un chat.

<h4 id="dates">Fecha de Inicio y Fecha de Expiración</h4>

| Configuración | Descripción |
|---------------|-------------|
| **Fecha de Inicio** | El contenido estará borroso hasta esta fecha |
| **Fecha de Expiración** | El contenido estará borroso y no se podrán agregar registros después de esta fecha |

Si no se configura, será visible inmediatamente y permanente.

</div>
</details>

---

<details>
<summary><h3 id="lock">🔒 Bloqueo de Documento</h3></summary>
<div class="manual-content" markdown="1">

Puedes proteger los documentos estableciendo una contraseña.

#### ¿Qué es el Bloqueo de Documento?

Un documento bloqueado solo puede verse después de introducir la contraseña correcta.

| Estado | Descripción |
|--------|-------------|
| **Desbloqueado** | Cualquiera puede ver el contenido |
| **Bloqueado** | Contenido visible solo con contraseña |

#### Cómo Bloquear

1. Selecciona los **documentos** que quieres bloquear en la pantalla de inicio (selección múltiple posible)
2. Selecciona **"Bloquear Objetos"** desde el menú inferior
3. Introduce una contraseña numérica (hasta 16 dígitos)
4. Introduce la misma contraseña de nuevo para confirmar
5. Una vez bloqueados, los objetos mostrarán un **icono de candado** y un efecto de **escala de grises**

#### Cómo Desbloquear

1. Toca un documento bloqueado para entrar a la pantalla de detalles
2. Aparecerá un diálogo para introducir la contraseña
3. Introduce la contraseña correcta para desbloquear
4. Una vez desbloqueado, el bloqueo se elimina permanentemente (para bloquear de nuevo, establece una nueva contraseña)

> ⚠️ **Advertencia**: Si olvidas tu contraseña, no se puede recuperar. Los documentos bloqueados solo pueden ser **eliminados**.

#### Características del Bloqueo

- Las contraseñas de bloqueo se **almacenan en la nube**
- El estado de bloqueo se mantiene incluso al transferir objetos a otras personas
- Los documentos bloqueados no aparecen en los resultados de búsqueda
- Los objetos bloqueados aún pueden ser eliminados

</div>
</details>

---

<details>
<summary><h3 id="clip">📎 Sistema Clip</h3></summary>
<div class="manual-content" markdown="1">

**Clip** es una función que agrupa múltiples documentos para una gestión más fácil.

#### ¿Qué es un Clip?

Los clips te permiten gestionar documentos relacionados como un solo grupo.

| Estado | Descripción |
|--------|-------------|
| **Documentos Individuales** | Documentos gestionados por separado |
| **Documentos Clipeados** | Gestionados como grupo, movidos/transferidos juntos |

#### Crear un Clip

1. Selecciona **2 o más documentos** en la pantalla principal
2. Toca **"Clipear juntos"** en el menú inferior
3. Los documentos seleccionados se agrupan en un solo clip
4. Los documentos clipeados muestran un **icono de clip (📎)** en la esquina superior derecha

> 💡 **Consejo**: ¡El primer documento seleccionado se convierte en la **portada** del clip!

#### Ver Info del Clip

1. Entra en la **pantalla de detalle** de un documento clipeado
2. Toca el botón **"Info del Clip"**
3. Ve la lista de todos los elementos en el clip

#### Reordenar Elementos en un Clip

Puedes cambiar el orden de los elementos en la pantalla de info del clip:

1. Mantén presionado el **controlador de arrastre (⋮⋮)** del elemento que quieres mover
2. Arrastra a la posición deseada
3. Suelta para guardar el orden

> ⚠️ **Nota**: La portada (primer elemento) no se puede reordenar.

#### Excluir Elementos de un Clip

Puedes eliminar elementos específicos en la pantalla de info del clip:

1. Toca el botón **"Excluir"** junto al elemento
2. Confirma para eliminar el elemento del clip
3. El elemento eliminado vuelve a ser un documento individual

> ⚠️ **Nota**: La portada no se puede excluir. Si solo quedan 2 elementos y excluyes 1, el clip se disuelve automáticamente.

#### Deshacer Clip

1. Selecciona el documento clipeado
2. Toca **"Deshacer clip"** en el menú inferior
3. Todos los documentos se separan en documentos individuales

#### Transferir Clips

- Cuando envías un documento clipeado, el **grupo completo** se transfiere junto
- Los destinatarios aceptan/rechazan clips como un **grupo**
- Los elementos individuales dentro de un clip no se pueden enviar por separado

#### Características del Clip

- Los documentos clipeados se **mueven/transfieren juntos**
- Establecer un bloqueo en la portada protege todo el clip
- El icono de clip (📎) facilita identificar el estado del clip
- Se necesitan al menos 2 documentos para mantener un clip

</div>
</details>

---

<details>
<summary><h3 id="badge">🏷️ Sistema de Insignias</h3></summary>
<div class="manual-content" markdown="1">

Una **Insignia** es una identidad única que puedes usar dentro de la aplicación.

#### ¿Qué es una Insignia?

Cuando grabas un nombre de dominio en una insignia, todas tus actividades en la app se mostrarán con tu **nombre de dominio grabado** en lugar de tu email.

Ejemplos: `MiMarca`, `JuanPérez`, `Empresa2025`

#### Grabar una Insignia

1. Compra una insignia en la tienda (estado sin usar)
2. Toca la insignia → Selecciona el menú **"Grabar"**
3. Ingresa el nombre de dominio deseado (máx. 32 caracteres)
   - Se permiten caracteres y números de todos los idiomas
   - No se permiten caracteres especiales ni emojis
4. Haz clic en **"Verificar disponibilidad del dominio"** para verificar
5. Opcionalmente adjunta una imagen de 128x128
6. Haz clic en **"Grabar"** para completar

> ⚠️ **Advertencia**: Una vez grabado, el nombre de dominio y la imagen **no se pueden cambiar permanentemente**. ¡Elige con cuidado!

#### Equipar/Desequipar una Insignia

- **Equipada**: Tu nombre de dominio grabado se mostrará en todas las actividades
- **Desequipada**: Tu email predeterminado se mostrará de nuevo
- Aunque poseas múltiples insignias, solo una puede estar equipada a la vez

#### Visualización en tarjeta de inventario

Las insignias grabadas (estado activo) muestran una vista previa de la imagen grabada en la esquina superior derecha de la tarjeta de inventario.
Esto permite identificar rápidamente a qué dominio pertenece la insignia.

</div>
</details>

---

<details>
<summary><h3 id="stamp">🔖 Sistema de Sellos</h3></summary>
<div class="manual-content" markdown="1">

Un **Sello** es un objeto que te permite crear plantillas y compartirlas con otros.

#### Visualización en tarjeta de inventario

Los sellos con plantillas (estado activo) se muestran de manera especial en el inventario:
- **Fondo**: Imagen de plantilla mostrada al 33% de opacidad
- **Frente**: Imagen del sello grabado

Esto permite identificar rápidamente de qué plantilla se trata.

#### Crear una plantilla de Sello

1. Compra un sello en la tienda (estado sin usar)
2. Toca el sello → Selecciona el menú **"Crear nueva plantilla"**
3. Ingresa la información de la plantilla:
   - **Imagen** (obligatorio)
   - **Título** (máx. 32 caracteres)
   - **Contenido** (máx. 1024 caracteres)
   - **Fecha de inicio** (opcional) - Contenido oculto hasta esta fecha
   - **Fecha de expiración** (opcional) - Agregar registros desactivado después
   - **Modo de registro** - Registro solo o Registro compartido
4. Haz clic en **"Crear plantilla"** para completar

#### Duplicar un Sello

Cuando seleccionas un sello activado (plantilla) y papel juntos, aparece el menú **"Duplicar plantilla"**.

- Se consume 1 Papel
- Se crea un nuevo objeto con la misma plantilla
- En modo de registro compartido, usa el mismo espacio compartido que el original

#### Compartir Tu Plantilla

Puedes compartir tu plantilla de sello para que otros usuarios puedan buscarla y clonarla.

1. Toca un sello activado (plantilla) → Selecciona **"Configuración de compartir"**
2. Ingresa la información de compartir:
   - **Descripción** - Una frase corta describiendo la plantilla
   - **Etiquetas** - Palabras clave para búsqueda (separadas por comas)
   - **Duración de compartir** - Cuánto tiempo permanecerá activo el compartir
3. Haz clic en **"Iniciar compartir"** para completar

Las plantillas compartidas pueden ser encontradas y clonadas por otros usuarios mediante búsqueda por etiquetas.

> 💡 **Consejo**: Para dejar de compartir, selecciona **"Dejar de compartir"** desde el mismo menú.

#### Buscar Plantillas Compartidas

Puedes buscar y clonar plantillas compartidas por otros usuarios.

1. Ve a la pantalla de Perfil y selecciona **"Buscar plantillas compartidas"**
2. Ingresa etiquetas para buscar, o toca etiquetas populares/recientes
3. Toca una plantilla de los resultados de búsqueda para ver detalles
4. Haz clic en el botón **"Clonar"** para clonar la plantilla

- Clonar consume 1 Papel
- El botón de clonar está desactivado si no tienes papel
- Los objetos clonados tienen la misma información de plantilla que el original

</div>
</details>

---

<details>
<summary><h3 id="quick-input">⚡ Entrada Rápida</h3></summary>
<div class="manual-content" markdown="1">

Al agregar registros, toca el botón `+` para abrir el menú **Entrada Rápida** para ingresar fácilmente información especial.

#### Tipos de Entrada Rápida

| Tipo | Descripción | Ejemplo |
|------|-------------|---------|
| **Palabra clave** | Formato Clave:Valor | `Estado:Bueno` |
| **Fecha** | Fecha con cálculo D-Día | D-5, D-Day, D+3 |
| **Teléfono** | Número telefónico | Llamar directamente |
| **Ubicación** | Dirección/coordenadas | Abre app de mapas |
| **Monto** | Formato de moneda | Formato automático |

#### Acciones de Pulsación Larga

| Tipo de Tarjeta | Acción de Pulsación Larga |
|-----------------|--------------------------|
| **📅 Fecha** | Configurar/Quitar alarma |
| **📞 Teléfono** | Móvil: Llamar, Escritorio: Copiar |
| **📍 Ubicación** | Móvil: Abrir mapa, Escritorio: Copiar |
| **💰 Monto** | Copiar al portapapeles |

<h4 id="alarm">Configuración de Alarma de Fecha</h4>

Mantén presionada una tarjeta de fecha para configurar una alarma:

1. **Mantén presionada** la tarjeta de fecha
2. Selecciona **Configurar** en el diálogo de confirmación
3. Una vez configurada, el color de la tarjeta cambia y aparece un ícono 🔔
4. Mantén presionada de nuevo para quitar la alarma

> 💡 **Consejo**: Las tarjetas de fecha muestran automáticamente el cálculo de D-Día (ej: D-5, D-Day, D+3)

</div>
</details>

---

<details>
<summary><h3 id="log">📝 Sistema de Registros</h3></summary>
<div class="manual-content" markdown="1">

Los **Registros** son anotaciones que puedes agregar a objetos o plantillas de sellos.

#### Modos de Registro

| Modo | Registro Solo | Registro Compartido |
|------|---------------|---------------------|
| **Ubicación** | Espacio privado de cada persona | Espacio compartido basado en sello original |
| **Registros visibles** | Solo tus propios registros | Registros de todos los propietarios |
| **Casos de uso** | Diario personal, notas | Colaboración, comunidad |
| **Si se elimina el original** | No afectado | No se pueden agregar registros (solo lectura) |

#### Formatos de Registro

Puedes usar varios formatos al escribir registros.

**Formatos básicos:**

| Formato | Descripción | Ejemplo |
|---------|-------------|---------|
| Texto plano | Mostrado como burbuja de chat | `¡Inspección completada hoy!` |
| `clave:valor` | Mostrado como tarjeta info (clave 1-8 car.) | `estado:bueno` |
Usar la misma clave múltiples veces muestra `valor anterior → nuevo valor`.

**Estilizado de texto:**

| Formato | Efecto | Ejemplo |
|---------|--------|---------|
| `{[texto]}` | Tarjeta color principal (fondo + texto) | `{[Importante]}` |
| `[{texto}]` | Tarjeta gris + texto color principal | `[{Precaución}]` |
| `[texto]` | Tarjeta gris | `[Nota]` |
| `{texto}` | Texto color principal | `{Énfasis}` |
| `(texto)` | Texto color secundario | `(Info adicional)` |
| `"texto"` | **Negrita** | `"Contenido importante"` |
| `'texto'` | <u>Subrayado</u> | `'Parte destacada'` |
| `<texto>` | ~~Tachado~~ | `<Contenido eliminado>` |

> 💡 Los estilos se pueden anidar hasta 3 niveles. Ejemplo: `{["Negrita color principal"]}`

**Enlaces multimedia (Tarjetas URL):**

Cuando ingresas una URL en un registro, se muestra automáticamente como **tarjeta enriquecida**.

| Plataforma | Contenido mostrado | Ejemplo |
|------------|--------------------|---------|
| **YouTube** | Miniatura + Título + Canal | `https://youtube.com/watch?v=...` |
| **Spotify** | Portada + Título + Artista | `https://open.spotify.com/track/...` |
| **Google Drive** | Miniatura archivo + Nombre | `https://drive.google.com/file/d/...` |
| **Dropbox** | Ícono + Nombre de archivo | `https://dropbox.com/s/...` |
| **OneDrive** | Ícono + Nombre del servicio | `https://1drv.ms/...` |
| **Páginas web** | Miniatura + Título de página | `https://example.com` |

- Usa formato `clave:URL` para mostrar con palabra clave (ej: `docs:https://youtube.com/...`)
- **Toca** la tarjeta para abrir en app/navegador externo
- **Mantén presionado** para copiar la URL al portapapeles

> 💡 **Consejo**: Los archivos de Google Drive deben estar **compartidos públicamente** para mostrar miniaturas.

**Registros automáticos:**

Cuando se transfiere un objeto, se registra automáticamente un registro de transferencia:
- Mostrado en formato `Remitente → Destinatario`
- Si hay una insignia equipada, se muestra el nombre de dominio

#### Condiciones de fin de registro compartido

- **Sello original eliminado**: No se pueden agregar registros compartidos (solo lectura)
- **Fecha de expiración pasada**: No se pueden agregar registros compartidos (solo lectura)

#### 🔔 Indicador de no leído

Cuando se agregan nuevos comentarios a un registro compartido, el borde del elemento **pulsa** en la vista de inventario.

- La pulsación comienza inmediatamente cuando otro usuario agrega un comentario
- La pulsación se detiene cuando abres y ves el documento
- El estado de lectura se guarda en la nube y se sincroniza en todos los dispositivos

> 💡 **Consejo**: ¡Revisa los elementos que pulsan para no perderte nuevos comentarios!

</div>
</details>

---

<details>
<summary><h3 id="ink">🎨 Sistema de Tinta</h3></summary>
<div class="manual-content" markdown="1">

La **Tinta** es un objeto que cambia el color del tema de la aplicación.

#### Cómo usar

1. Toca una tinta para entrar a la pantalla de detalle
2. Haz clic en el botón **"Cambiar tema"**
3. El color de toda la aplicación cambia inmediatamente

#### Tipos de Tinta

| Tinta | Color |
|-------|-------|
| **Tinta Negra** | Tema negro predeterminado |
| **Tinta Dorada** | Tema dorado lujoso |

</div>
</details>

---

<details>
<summary><h3 id="search">🔍 Función de Búsqueda</h3></summary>
<div class="manual-content" markdown="1">

#### Búsqueda básica

Toca la barra de búsqueda arriba para activar el modo de búsqueda.

- Los resultados se filtran en **tiempo real** mientras escribes
- Toca el botón X para salir del modo de búsqueda

#### Búsquedas recientes

- Se guardan hasta 5 búsquedas recientes
- Toca una búsqueda reciente para autocompletar
- Elimina individualmente con el botón X

#### Guardar como filtro

Cuando guardas un término de búsqueda con el botón **"Establecer como filtro"**:

- Aparece como etiqueta de filtro debajo de la barra de búsqueda
- Toca la etiqueta para filtrar instantáneamente
- Elimina el filtro con el botón X

<h4 id="keyword">Agregación de palabras clave</h4>

Cuando hay un filtro establecido y seleccionas objetos, los **valores de palabras clave de los objetos seleccionados se agregan automáticamente**.

**Agregación de valores numéricos:**
- **Suma** y **promedio** se calculan para valores numéricos de la misma palabra clave
- Ejemplo: Seleccionar `precio:1000`, `precio:2000`, `precio:3000`
- Resultado: `Suma: 6000  Promedio: 2000`

**Agregación de cadenas:**
- Los valores de cadena de la misma palabra clave se **unen con espacios**
- Ejemplo: Seleccionar `etiqueta:A`, `etiqueta:B`, `etiqueta:C`
- Resultado: `A B C`

**Copiar valores:**
- **Mantén presionada** una tarjeta de agregación para copiar el valor
- Aparece una notificación cuando se completa la copia

> 💡 **Ejemplo de uso**: Calcula rápidamente el precio total de varios objetos, o copia etiquetas relacionadas de una vez.

</div>
</details>

---

<details>
<summary><h3 id="bottom-menu">📱 Insignia del menú inferior</h3></summary>
<div class="manual-content" markdown="1">

Las insignias rojas en los iconos del menú inferior muestran el estado actual.

| Menú | Significado de la insignia |
|------|---------------------------|
| **Enviar** | Número de objetos que se pueden enviar (transferibles entre los seleccionados) |
| **Recibir** | Número de transacciones pendientes (requieren aceptar/devolver) |
| **Acción** | Número de acciones disponibles con los objetos seleccionados |

> 💡 Los números de las insignias se animan con un efecto de burbuja cuando cambian.

</div>
</details>

---

<details>
<summary><h3 id="transfer">📤 Enviar Objetos</h3></summary>
<div class="manual-content" markdown="1">

Puedes transferir objetos al vender de segunda mano o regalar.

#### Cómo enviar

1. Selecciona **Enviar** de la pestaña inferior
2. **Marca** los objetos a transferir (selección múltiple posible)
3. Ingresa el email del destinatario
4. Haz clic en el botón **Enviar**

#### Ingresar email por código QR

En lugar de escribir el email del destinatario, puedes usar un código QR:

1. El destinatario muestra su código QR desde su pantalla de **Perfil**
2. El remitente presiona el botón **Escanear QR**
3. Escanea el código QR con la cámara
4. El email se ingresa automáticamente

> ⚠️ **Importante**: Los objetos transferidos **desaparecen inmediatamente** de tu inventario. Las transferencias no se pueden deshacer.

</div>
</details>

---

<details>
<summary><h3 id="receive">📥 Recibir Objetos</h3></summary>
<div class="manual-content" markdown="1">

Puedes recibir objetos enviados por otros.

#### Cómo recibir

1. Selecciona **Recibir** de la pestaña inferior
2. Se muestra la lista de objetos recibidos
3. Para cada objeto:
   - **Aceptar**: Se agrega a tu inventario
   - **Devolver**: Se envía de vuelta al remitente

#### Notificaciones

- Recibes notificaciones push cuando llegan nuevos objetos (si están habilitadas)
- La pestaña Recibir muestra el número de objetos no aceptados

</div>
</details>

---

<details>
<summary><h3 id="shop">🛒 Usar la Tienda</h3></summary>
<div class="manual-content" markdown="1">

Puedes comprar varios objetos en la tienda.

#### Productos disponibles

| Producto | Uso |
|----------|-----|
| **Papel** | Para crear objetos (consumible) |
| **Sello** | Para crear plantillas |
| **Insignia** | Para grabar un dominio único |
| **Tinta** | Para cambiar el color del tema |

#### Cómo comprar

1. Selecciona **Tienda** de la pestaña inferior
2. Toca el producto deseado
3. Procede con el pago (App Store / Google Play)
4. Entregado automáticamente después del pago

> 💡 La tienda está disponible en todas las plataformas (iOS, Android, Windows, macOS).

</div>
</details>

---

<details>
<summary><h3 id="pocket">📂 Función de Partición</h3></summary>
<div class="manual-content" markdown="1">

Puedes agrupar objetos con particiones cuando tienes muchos.

#### Crear una Partición

1. Selecciona objetos
2. Selecciona **"Crear partición"** del menú inferior
3. Ingresa el nombre de la partición (máx. 16 caracteres)

#### Características de la Partición

- Las particiones se **guardan solo en el dispositivo**
- La estructura de partición no es visible en otros dispositivos
- Los objetos mismos se almacenan en la nube y son visibles en todos los dispositivos

#### Contraer/Expandir

Usa el botón de flecha (▼/▲) en el lado derecho del encabezado de partición para contraer o expandir.

- El estado contraído se mantiene después de reiniciar la aplicación
- Todas las particiones se expanden automáticamente durante la búsqueda
- Puedes arrastrar elementos a particiones contraídas

#### Seleccionar todo en Partición

Toca el encabezado de partición para seleccionar/deseleccionar todos los elementos en esa partición.

| Indicador | Significado |
|-----------|-------------|
| ○ (Círculo vacío) | Ninguno seleccionado |
| ◐ (Semicírculo) | Algunos seleccionados |
| ● (Círculo lleno) | Todos seleccionados |

</div>
</details>

---

<details>
<summary><h3 id="language">🌍 Cambiar idioma</h3></summary>
<div class="manual-content" markdown="1">

Se admiten 7 idiomas:
- 🇰🇷 한국어
- 🇺🇸 English
- 🇯🇵 日本語
- 🇩🇪 Deutsch
- 🇫🇷 Français
- 🇪🇸 Español
- 🇧🇷 Português

**Cómo cambiar:**
Configuración → Idioma → Selecciona el idioma deseado

</div>
</details>

---

> 📚 **¿Tienes más preguntas?** Consulta las [Preguntas frecuentes](/inventory/faq/es/) o contáctanos a través de [Sugerencias](/inventory/suggest/es/).

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
