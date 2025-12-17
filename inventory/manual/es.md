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
---

## 📖 Manual de Usuario

Explora todas las funciones de la aplicación Inventory en detalle.

---

### 📦 Sistema de Papel

En Inventory, el **Papel** es la moneda principal utilizada para crear objetos.

#### ¿Qué es el Papel?
- **1 Papel** se consume al crear un objeto
- No puedes crear nuevos objetos sin Papel

#### Cómo obtener Papel

| Método | Cantidad | Nota |
|--------|----------|------|
| Nuevo registro | 10 hojas | Solo la primera vez |
| Vincular Google | +10 hojas | Al vincular cuenta |
| Vincular Apple | +10 hojas | Al vincular cuenta |
| Compra en tienda | 10 hojas | Compra in-app |

> 💡 **Consejo**: ¡Vincula tus cuentas sociales para obtener Papel extra gratis!

---

### 📄 Creación de Objetos

#### Cómo crear un objeto

1. Toca tu **Papel** en la pantalla principal
2. Selecciona **"Crear nuevo objeto"** del menú inferior
3. Ingresa la información del objeto:
   - Título (obligatorio)
   - Contenido
   - Imagen (opcional)
   - Fecha de inicio (opcional)
   - Fecha de expiración (opcional)
4. Presiona **Guardar** y se consumirá 1 Papel para crear el objeto

#### Fecha de inicio y Fecha de expiración

| Configuración | Descripción |
|---------------|-------------|
| **Fecha de inicio** | El contenido estará difuminado hasta esta fecha |
| **Fecha de expiración** | El contenido estará difuminado y se desactivará agregar registros después de esta fecha |

Si no se establece, será visible inmediatamente y permanente.

---

### 🔒 Bloqueo de Documento

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

---

### 🏷️ Sistema de Insignias

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

---

### 🔖 Sistema de Sellos

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

---

### 📝 Sistema de Registros

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
| `---` | Mostrado como separador | `---` |

Usar la misma clave múltiples veces muestra `valor anterior → nuevo valor`.

**Estilizado de texto:**

| Formato | Efecto | Ejemplo |
|---------|--------|---------|
| `<[texto]>` | Tarjeta color principal (fondo + texto) | `<[Importante]>` |
| `[<texto>]` | Tarjeta gris + texto color principal | `[<Precaución>]` |
| `[texto]` | Tarjeta gris | `[Nota]` |
| `<texto>` | Texto color principal | `<Énfasis>` |
| `(texto)` | Texto color secundario | `(Info adicional)` |
| `"texto"` | **Negrita** | `"Contenido importante"` |
| `'texto'` | <u>Subrayado</u> | `'Parte destacada'` |
| `!texto!` | ~~Tachado~~ | `!Contenido eliminado!` |

> 💡 Los estilos se pueden anidar hasta 3 niveles. Ejemplo: `<["Negrita color principal"]>`

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

---

### 🎨 Sistema de Tinta

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

---

### 🔍 Función de Búsqueda

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

#### Agregación de palabras clave

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

---

### 📱 Insignia del menú inferior

Las insignias rojas en los iconos del menú inferior muestran el estado actual.

| Menú | Significado de la insignia |
|------|---------------------------|
| **Enviar** | Número de objetos que se pueden enviar (transferibles entre los seleccionados) |
| **Recibir** | Número de transacciones pendientes (requieren aceptar/devolver) |
| **Acción** | Número de acciones disponibles con los objetos seleccionados |

> 💡 Los números de las insignias se animan con un efecto de burbuja cuando cambian.

---

### 📤 Enviar Objetos

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

---

### 📥 Recibir Objetos

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

---

### 🛒 Usar la Tienda

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

---

### 📂 Función de Partición

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

---

### 🌍 Cambiar idioma

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

---

> 📚 **¿Tienes más preguntas?** Consulta las [Preguntas frecuentes](/inventory/faq/es/) o contáctanos a través de [Sugerencias](/inventory/suggest/es/).

<style>
h2 { color: #1f2937; border-bottom: 2px solid #e5e7eb; padding-bottom: .5rem; margin-bottom: 1.5rem; }
h3 { color: #374151; margin-top: 2.5rem; margin-bottom: 1rem; padding-bottom: .3rem; border-bottom: 1px solid #f3f4f6; }
h4 { color: #4b5563; font-size: 1.1rem; margin-top: 1.5rem; margin-bottom: .75rem; }
ul, ol { line-height: 1.8; }
li { margin-bottom: .5rem; }
hr { border: none; border-top: 1px solid #e5e7eb; margin: 2.5rem 0; }
blockquote { background: #f0f9ff; border-left: 4px solid #3b82f6; padding: 1rem 1.5rem; margin: 1.5rem 0; border-radius: 4px; color: #1e40af; }
table { width: 100%; border-collapse: collapse; margin: 1rem 0; }
th, td { padding: .75rem; border: 1px solid #e5e7eb; text-align: left; }
th { background: #f9fafb; font-weight: 600; }
code { background: #f3f4f6; padding: .2rem .4rem; border-radius: 3px; font-size: .9em; }
</style>
