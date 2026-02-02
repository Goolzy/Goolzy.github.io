---
layout: inventory
title: Registro de cambios
permalink: /inventory/changelog/es/
lang: es
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

## Registro de cambios

Consulta el historial de actualizaciones de la aplicación Inventory.

<details class="changelog-version" open>
<summary>
  <span class="version-title">v1.3.0 <small>2026-01-27</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Copiar">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### Rebranding de Bolsillo
'Partición' ha sido renombrado al término más familiar 'Bolsillo'.
- **Cambio de terminología**: Unificación de 'Partición' → 'Bolsillo' en toda la aplicación
- **Migración automática**: Los datos existentes se convierten automáticamente sin pérdida de información
- **Soporte multilingüe**: Nuevo término reflejado en 8 idiomas

#### Encabezado de Perfil Expandible
El área de perfil en la parte superior de la pantalla de inicio ha sido mejorada con un estilo de cajón.
- **Arrastrar/Tocar para expandir**: Arrastra la barra de mangos o toca el nombre de usuario para expandir/contraer
- **Tarjeta de perfil**: En estado expandido, visualiza información de perfil, código QR e información de API
- **Ajuste basado en velocidad**: Al arrastrar rápidamente se abre/cierra automáticamente

#### Rediseño de Pantalla de Configuración
La pantalla de configuración ha sido reorganizada en 5 grupos plegables.
- **5 grupos**: Color, fuente, sonido, notificaciones push y sistema
- **Notificaciones push simplificadas**: Reducidas de 7 → 3 grupos (transacciones, registros, vencimiento)
- **UI de acordeón**: Expande solo la configuración que necesitas para acceso rápido

#### Mejoras en Función de Chat
Creación y visualización de salas de chat mejoradas.
- **Visualización de nombre dinámico**: En chats 1:1, el nombre del interlocutor se muestra dinámicamente
- **Contador de participantes**: En chats grupales, puedes ver el número actual de participantes
- **Interfaz mejorada de creación de chat**: Validación en tiempo real de correo electrónico del destinatario, actualización en tiempo real de cantidad de inventario

#### Navegación Unificada de Registros
Al tocar un elemento en la pantalla de registro, se abre la pantalla de detalles correcta.
- **Elementos de clip**: Abre la pantalla de detalles del clip (en el índice correspondiente)
- **Elementos normales**: Abre la pantalla de detalles del elemento
- **Experiencia consistente**: Mismo comportamiento de navegación en cuadrícula y registros

#### Mejora de Animación de Bolsillo
La animación de contraer/expandir bolsillo ahora es más suave.
- **Transición fluida**: El contenido se despliega de arriba a abajo y se contrae de abajo a arriba
- **Eliminación de parpadeo**: Se ha resuelto el problema donde el contenido desaparecía al contraer

#### Mejora de Campo de Entrada de Comentarios
El teclado no oculta el campo de entrada al escribir comentarios.
- **Fijación en parte inferior**: El campo de entrada permanece siempre fijado en la parte inferior de la pantalla
- **Toque de fondo**: Al tocar un área vacía, el teclado se cierra automáticamente

#### Corrección de Errores
- Se corrigió el error de visualización de notificaciones
- Se solucionó el problema de diseño del encabezado de tienda
- Se corrigió el problema donde la pantalla se mostraba en gris al contraer bolsillos

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.2.3 <small>2026-01-21</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Copiar">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### Mejoras en la carga de imágenes de insignias
Se corrigió el problema de parpadeo de las imágenes de insignias al reiniciar la aplicación.
- **Caché persistente**: Las URLs de imágenes de insignias se almacenan localmente y persisten después de los reinicios
- **Precarga**: Todas las imágenes de insignias en caché se precargan durante la pantalla de inicio
- **Actualización en segundo plano**: Las imágenes de insignias se actualizan automáticamente en segundo plano cuando cambian en el servidor

#### Mejoras del sistema de emoticonos
La función de adjuntar emoticonos en los registros ha sido mejorada.
- **Corrección de restauración de caché**: Los emoticonos se muestran correctamente después de volver a entrar
- **Optimización del tamaño de burbuja**: Las burbujas con solo emoticonos tienen un tamaño apropiado
- **Vista previa de selección**: Vista previa del emoticono seleccionado sobre el campo de entrada

#### Mejoras del enfoque del campo de entrada
Se corrigieron los problemas de enfoque del campo de entrada en iPad.
- **Compatibilidad con iPad**: El enfoque del campo de entrada funciona correctamente cuando aparece el teclado
- **Entrada estable**: Experiencia de entrada consistente en todos los dispositivos iOS

#### Mejoras del filtrado de notificaciones
Las notificaciones para la pantalla actualmente vista se filtran.
- **Filtro de notificaciones push**: Las notificaciones push del elemento abierto no se muestran
- **Filtro de notificaciones in-app**: Los toasts de notificación in-app del elemento actual no se muestran

#### Gestos del toast de notificación
Ahora puede interactuar con los toasts de notificación in-app mediante gestos.
- **Tocar para navegar**: Toque la notificación para ir directamente al documento relacionado
- **Deslizar para cerrar**: Deslice hacia arriba para cerrar rápidamente la notificación
- **Retroalimentación háptica**: Se proporciona retroalimentación háptica para las interacciones táctiles

#### Correcciones de errores
- Corrección del problema de emoticonId faltante en la restauración de caché
- Corrección del error de creación de notificaciones in-app de Cloud Functions

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.2.2 <small>2026-01-10</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Copiar">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### Ajuste de tamaño de fuente
Puede ajustar el tamaño de fuente de la aplicación en 3 niveles desde la pantalla de Configuración.
- **3 niveles**: Elija entre Normal (1.0x), Mediano (1.3x) o Grande (1.5x)
- **Aplicación instantánea**: Los cambios se aplican inmediatamente en toda la aplicación
- **Configuración persistente**: Su preferencia se guarda incluso después de reiniciar la aplicación

#### Cierre automático del teclado
Al tocar fuera del campo de entrada de registro en la vista de detalle del artículo, el teclado se cierra automáticamente.
- **Tocar para cerrar**: Toca cualquier área fuera del campo de entrada para cerrar el teclado
- **Soporte iOS**: Uso conveniente en iPhone sin necesidad de botón de cierre

#### Preservación de Música de Fondo
Cuando abres la aplicación, la música que se estaba reproduciendo en tu dispositivo (Spotify, YouTube Music, Apple Music, etc.) no se detiene.
- **Reproducción continua de música**: La música de fondo de otras aplicaciones sigue reproduciendo incluso cuando abres la aplicación
- **Mezcla de efectos de sonido**: Los efectos de sonido de la aplicación se reproducen junto con la música de fondo
- **Integración con modo silencioso**: En modo silencioso, los efectos de sonido de la aplicación también se silencian

#### Mejoras en el historial de búsqueda y filtros
La barra de búsqueda Super ahora guarda el historial de búsqueda y se ha mejorado la función de filtro.
- **Guardar historial de búsqueda**: Los términos de búsqueda se guardan automáticamente al añadir filtros o buscar plantillas compartidas
- **Mostrar búsquedas recientes**: Muestra 5 búsquedas recientes al enfocar la barra de búsqueda
- **Añadir filtro rápido**: Toca una búsqueda reciente para añadirla instantáneamente como filtro
- **Mejora de la interfaz de botones**: Los botones Añadir filtro y Plantillas compartidas ahora están dispuestos de forma compacta en una sola línea

#### Mejoras en la gestión de particiones
Nuevo diseño neomórfico para el diálogo de nombre de partición y función de arrastrar para reordenar.
- **Diálogo neomórfico**: Hermoso nuevo diseño con soporte para modo oscuro/claro
- **Reordenar arrastrando**: Mantén pulsado el icono de arrastre para arrastrar y reordenar las particiones
- **Nombre al crear**: Establece un nombre de partición personalizado al crear una nueva

#### Vista Previa de Enlaces con Descripción
Las tarjetas de enlaces adjuntos en los registros ahora muestran la descripción de la página web (descripción de OpenGraph).
- **Extracción automática de descripción**: Se extrae la descripción del meta-etiqueta og:description de la página web
- **Mejora de UI de tarjeta**: La descripción se muestra debajo del título con un máximo de 2 líneas
- **Plataformas compatibles**: YouTube, Spotify, páginas web generales y otros tipos de enlaces

#### Cambio de marcadores de estilo de texto
El marcador de texto de color principal se cambió de `<texto>` a `{texto}`.
- **Resolución de conflictos de citas**: Prevención de conflictos con la función de citas que utiliza el carácter `>`
- **Sistema de marcadores consistente**: Unificación con marcadores de paréntesis (`{}`, `[]`, `()`)

#### Soporte para citas múltiples
Puede mostrar múltiples citas simultáneamente en el registro.
- **Renderizado de citas múltiples**: Dos o más citas `>` se muestran como widgets de cita individuales separados
- **Orden preservado**: Las citas se muestran en el orden en que se ingresaron

#### Validación mejorada del envío de correos electrónicos
La función de envío valida la validez de las direcciones de correo electrónico con mayor precisión.
- **Validación de registros MX**: Confirmación de la existencia del servidor de correo en el dominio del correo electrónico del destinatario
- **Prevención de errores**: Bloqueo preventivo de intentos de envío a dominios inexistentes

#### Mejoras en la interacción de arrastrar
Puede arrastrar elementos seleccionados sin mantener presionado.
- **Arrastre instantáneo**: Arrastre inmediatamente después de seleccionar (sin necesidad de mantener presionado)
- **Animación de temblor**: Los elementos seleccionados tiemblan suavemente para indicar que son arrastrables
- **Controles intuitivos**: UX familiar similar al modo de edición de la pantalla de inicio de iOS

#### Archivos adjuntos de Dropbox
Conecte Dropbox para adjuntar archivos a sus registros.
- **Múltiples tipos de archivo**: Adjunte imágenes, videos, PDFs, música y archivos de texto
- **Soporte para registros compartidos**: Ver y descargar archivos adjuntos en registros de elementos compartidos
- **Visores integrados**: Ver archivos directamente en la aplicación (ampliar imágenes, pasar páginas de PDF, reproducir videos, etc.)
- **Almacenamiento seguro**: Los tokens OAuth se cifran y almacenan en el almacenamiento seguro del dispositivo

#### Creación de registro compartido (Vista detallada del papel)
Crea elementos de registro compartido directamente desde la vista detallada del papel en blanco.
- **Elección de registro único/compartido**: Elija entre crear un elemento único o un registro compartido con varios papeles
- **Selección de cantidad con control deslizante**: Seleccione de 2 hasta el total de papeles con un control deslizante
- **Selección automática de papeles**: El papel actual + los papeles comprados más antiguos se seleccionan automáticamente

#### Accesibilidad del teclado
Puede utilizar la aplicación completamente con el teclado sin ratón en escritorio y al conectar un teclado externo.
- **Selección de archivo Dropbox**: Navegar por archivos con teclas de dirección, seleccionar con Enter, eliminar con Delete, cerrar con ESC
- **Menú de documento compartido**: Alternar elementos incluidos con Ctrl+1/2/3, navegar botones con teclas de dirección izquierda/derecha, ejecutar con Enter
- **Visualización de foco**: Los elementos seleccionados con teclado se resaltan con un borde y efecto de resplandor

#### Corrección de errores
- **Contador de insignia de acción**: Se corrigió un problema donde la insignia en el botón de acción no reflejaba con precisión el número de acciones disponibles para los elementos seleccionados
- **Corrección de error de adjuntos**: Se corrigió un error que ocurría al adjuntar archivos de música/texto desde Dropbox
- **Mejora de reproducción de audio al deslizar**: El almacenamiento en caché y la reproducción automática ahora funcionan correctamente al deslizar entre archivos de audio en el visor de medios

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.2.1 <small>2026-01-05</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Copiar">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### Diseño Responsivo del Panel de Reacciones
El panel de reacciones de imágenes en la vista de detalles del artículo se muestra correctamente en todos los tamaños de pantalla.
- **Diseño responsivo**: Los botones de reacción se distribuyen uniformemente incluso en pantallas estrechas
- **Uso de ancho completo**: El panel utiliza el ancho completo de la pantalla independientemente del tamaño de la imagen
- **Diseño compacto**: Optimización de relleno para cubrir menos la foto mientras se mantiene el área táctil

#### Desplazamiento Infinito en Búsqueda de Plantillas Compartidas
Cuando los resultados de búsqueda de plantillas compartidas superan los 20, puedes desplazarte para cargar más resultados.
- **Desplazamiento infinito**: Al llegar al final de los resultados de búsqueda, se cargan automáticamente los siguientes 20
- **Indicador de carga**: Se muestra un indicador de progreso en la parte inferior durante la carga adicional
- **Compatibilidad retroactiva**: Las versiones anteriores de la app siguen mostrando 20 resultados como antes

#### Actualizaciones del sitio web
- **Soporte de chino (simplificado)**: Localización 中文(简体) añadida al sitio web (8º idioma)
- **Indicadores de idiomas soportados**: Iconos de banderas de 8 idiomas mostrados bajo los iconos de descarga de plataformas

#### Configuración de idiomas en App Store
- **Idiomas soportados en iOS/macOS**: Chino (zh) añadido a CFBundleLocalizations

#### Mejora de Selección de Fechas
- **Rango de selección expandido**: Selecciona fechas desde 1900 en el UI de selección de fechas (anteriormente 2000)

#### Función de Compartir Documento
Puedes copiar el contenido al portapapeles o enviarlo por correo electrónico desde la pantalla de detalles del documento.
- **Copiar al portapapeles**: Copia como texto plano puro sin marcadores de texto enriquecido
- **Enviar por correo electrónico**: Envía por correo electrónico en formato HTML con formato aplicado
- **Inclusión selectiva**: Selecciona solo los elementos que deseas entre título, contenido, palabras clave, conversación y registro del sistema
- **Soporte de modo clip**: Disponible también en la vista de detalles del clip

#### Sincronización de Bloqueo de Clip
El estado de bloqueo de los elementos que pertenecen a un clip se sincroniza.
- **Bloqueo/Desbloqueo masivo**: Cuando se bloquea el elemento representativo del clip, todos los elementos secundarios se bloquean también
- **Sincronización de contraseña**: Todos los elementos dentro del clip utilizan la misma contraseña de bloqueo

#### Mejora del Editor de Texto Enriquecido
La aplicación de estilos de texto se ha mejorado para ser más intuitiva al crear plantillas de sellos.
- **6 estilos básicos**: Negrita, subrayado, tachado, color principal, color secundario y caja
- **Estilos anidados**: Aplicar varios estilos secuencialmente es posible (p. ej.: negrita+subrayado)
- **Edición limpia**: Los marcadores no son visibles y solo se muestra el estilo
- **Barra de herramientas dinámica**: La barra de herramientas se posiciona automáticamente debajo del área seleccionada

#### Corrección de Margen Inferior en Android 15
Se ha corregido un problema en dispositivos Android 15 o superior donde la barra de navegación del sistema en la parte inferior ocultaba el contenido.
- **Pantallas sin barra de navegación inferior**: Detalles del artículo, creación de documento, creación de sello y otras 6 pantallas
- **Manejo automático de inserción**: Se añade automáticamente relleno inferior en el área de la barra de navegación del sistema
- **Compatibilidad hacia atrás**: Funcionamiento idéntico al anterior en Android 14 e inferior

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

#### Desplazamiento Automático al Arrastrar
Cuando arrastras un elemento, la pantalla se desplaza automáticamente en los bordes.
- **Zona de desplazamiento automático**: El desplazamiento se activa al arrastrar al 10% superior/inferior de la pantalla
- **Basado en aceleración**: Cuanto más cerca del borde, más rápido es el desplazamiento
- **Retroalimentación háptica**: Vibración suave al entrar en la zona de desplazamiento
- **Conveniencia entre particiones**: Navega rápidamente entre muchos elementos o varias particiones

#### Navegación por Desplazamiento
Navega rápidamente al principio o al final en la pantalla de detalles.
- **Botones de navegación**: Los botones de desplazamiento aparecen junto a la barra de búsqueda cuando hay muchos comentarios
- **Visualización según posición**: Solo se muestra el botón inferior en la parte superior y solo el botón superior en la parte inferior
- **Diseño neumórfico**: Estilo de botón coherente con el diseño de la aplicación

#### Restauracion de Animacion de Transicion de Pagina
Se ha restaurado la animacion de volteo en la barra de navegacion inferior y la pantalla de recepcion.
- **Efecto de volteo 3D**: Transicion de pagina con rotacion de 180 grados en el eje Y
- **Paginas de registro/tienda**: Animacion de volteo aplicada
- **Pantalla de recepcion**: Animacion de volteo aplicada en el boton de buzon y enlace profundo de notificacion

#### Unificación del Diseño de UI
Se ha aplicado diseño neumórfico a las pantallas de Enviar, Recibir y Tienda, unificando toda la aplicación.
- **Pantallas de Enviar/Recibir**: Sombras neumórficas aplicadas a tarjetas y diálogos
- **Pantalla de Tienda**: Efectos de brillo en botones de pestañas, tarjetas de productos con estilo neumórfico
- **Diseño de Campo de Entrada**: Estilo hundido que distingue claramente las áreas de entrada

#### Animación de Reordenamiento de Registros
Se aplica una animación fluida cuando los elementos suben en la lista de registros debido a nuevos comentarios.
- **Efecto de escala**: El elemento crece ligeramente y luego vuelve a su tamaño original después del movimiento
- **Procesamiento secuencial**: Cuando varios elementos se mueven simultáneamente, se animan en orden
- **Énfasis visual**: Reconocimiento claro de qué elemento es el más reciente

#### Estabilización de Base de Datos
Se han resuelto los problemas de compatibilidad de la base de datos que podían ocurrir durante las actualizaciones de la app.
- **Recuperación Automática**: La base de datos se recrea automáticamente cuando hay incompatibilidad de versiones
- **Preservación de Datos**: Sin pérdida de datos gracias a la sincronización automática con el servidor
- **Todas las Plataformas**: Misma solución aplicada a iOS, Android, macOS y Windows

#### Mejora del bloqueo con contraseña
La seguridad y usabilidad de los elementos protegidos con contraseña han mejorado significativamente.
- **Superposición de desenfoque**: El contenido se oculta completamente al acceder a elementos bloqueados
- **Diseño neumórfico**: Los diálogos de configuración/desbloqueo de contraseña usan estilo neumórfico
- **Indicador de 16 dígitos**: 16 pequeños círculos muestran el estado de entrada de contraseña
- **Entrada en dos líneas**: Ingrese y confirme la contraseña en la misma pantalla

#### Mejora de la configuración de notificaciones push
La pantalla de configuración de notificaciones push se ha reorganizado por categorías para facilitar su gestión.
- **7 categorías**: Clasificadas en Transacciones, Registros, Vencimiento, Reacciones, Palabras clave, Compartir y Sistema
- **Alternar grupos**: Enciende o apaga una categoría completa de una sola vez
- **Contraer/Expandir**: Interfaz acordeón para ver solo las categorías que necesitas
- **Notificaciones detalladas añadidas**: Aceptación/rechazo de transacciones, reacciones, palabras clave, vencimiento/denuncia de compartir y notificaciones del sistema
- **Diseño neomórfico**: Estilo neomórfico aplicado a cada elemento de notificación individual

#### Mejora de la configuración de sonido
El botón de silencio ahora cuenta con diseño neomórfico que expresa intuitivamente el estado de pulsación.
- **Efecto de pulsación**: El botón parece hundirse cuando se activa el silencio
- **Sombra neomórfica**: La sombra es convexa en estado normal y cóncava cuando está pulsada

#### Mejora del rendimiento de carga de registros
Se ha mejorado la velocidad de carga de los registros compartidos.
- **Carga con prioridad de caché**: Los registros vistos anteriormente se muestran instantáneamente desde la caché
- **Ahorro de datos**: Sin solicitudes al servidor al revisitar, se usan datos locales
- **Nuevos comentarios en tiempo real**: Los nuevos comentarios se reciben en tiempo real incluso usando caché

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

#### Registros Compartidos de Papel
Crea documentos de registro compartido usando solo papel, sin sellos.
- **Seleccionar 2 o más papeles** → Aparece menú "Crear Nuevo Artículo (Registro Compartido)"
- **Seleccionar 1 papel** → Aparece menú "Crear Nuevo Artículo (Registro Privado)"
- Los documentos creados comparten la misma sala de comentarios
- Envía documentos a diferentes personas y chatea entre sí

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

#### Función de Edición de Insignias
Puedes modificar la imagen y las palabras clave de las insignias grabadas.
- **Menú de edición**: El menú "Editar insignia" aparece al seleccionar una insignia grabada
- **Cambio de imagen**: Reemplaza la imagen de la insignia con una nueva imagen
- **Gestión de palabras clave**: Añade, elimina o modifica 5 tipos de palabras clave

#### Optimización del Rendimiento de Imágenes
La velocidad de carga de imágenes de red ha mejorado significativamente.
- **Caché local**: Las imágenes cargadas una vez se guardan localmente para una visualización instantánea
- **Sincronización de imagen de insignia**: Los cambios de imagen de insignia se reflejan inmediatamente en todos los registros

#### Autocompletado de Destinatarios Recientes
Selecciona rápidamente destinatarios recientes en la pantalla de envío.
- **Lista de autocompletado**: Menú desplegable que muestra hasta 30 destinatarios recientes cuando el campo de entrada está enfocado
- **Selección rápida**: La búsqueda se ejecuta automáticamente al seleccionar un destinatario de la lista
- **Rebúsqueda**: Cancela la selección con el botón X para buscar otro destinatario
- **Almacenamiento local**: La información del destinatario se guarda automáticamente al enviar con éxito

#### Mejoras en Restricciones de Envío
Las insignias equipadas y los sellos compartidos tienen restricciones de envío.
- **Insignias equipadas**: Desequipa la insignia para poder enviarla
- **Sellos compartidos**: Revoca el uso compartido para poder enviar el sello
- **Guía detallada**: Muestra mensajes de alerta específicos según el motivo de la restricción

#### Sistema de Expresión Emocional
Reacciona a los elementos con expresiones emocionales.
- **12 tipos de reacciones**: Incluye Me gusta, Amor, Excelente, Felicitaciones y muchas más
- **Alternar reacción**: Cancela haciendo clic nuevamente en la reacción seleccionada
- **Registro de logs**: Se registran en el registro del sistema cuando se seleccionan o cancelan las reacciones
- **Soporte multilingüe**: Los nombres de las reacciones se muestran en el idioma del usuario

#### Mejora de la Función de Búsqueda
La búsqueda en tiempo real ahora se extiende para incluir nombres de elementos y palabras clave.
- **Búsqueda por nombre de elemento**: Busca por título de documento, descripción de sello o nombre de dominio de insignia
- **Búsqueda por palabra clave**: Busca por palabras clave almacenadas en sellos e insignias
- **Búsqueda por etiqueta**: También puedes buscar por etiquetas de plantillas de sello

#### Mejora de Notificaciones en la App
Se han mejorado las notificaciones toast en tiempo real.
- **Visualización de insignia del remitente**: La imagen de la insignia del remitente aparece en línea en la notificación
- **Estilo Dynamic Island**: Animación toast elegante al estilo de Dynamic Island de iOS
- **Detección en tiempo real**: Detección precisa de nuevas notificaciones y actualizaciones basada en ID+marca de tiempo
- **Eliminación automática**: Los avisos relacionados con un elemento se eliminan automáticamente al entrar en la pantalla de detalles del elemento

#### Corrección de errores
- **Estabilización de UI de detalle de documento**: Se corrigió el problema donde la barra de búsqueda y los filtros temblaban cuando los registros compartidos/individuales estaban en el límite de la pantalla
- **Corrección de temblor de desplazamiento**: Se solucionó el parpadeo de pantalla al desplazarse hacia arriba en documentos/sellos con pocos registros
- **Corrección de desplazamiento superior**: Se solucionó el problema donde no se podía llegar a la información del autor desplazándose en elementos con registros
- **Formato de registro de reacción mejorado**: Los emoticonos y los nombres ahora se muestran juntos
- **Visualización del nombre de usuario corregida**: El nombre de dominio ahora se muestra correctamente cuando se usa una insignia
- **Corrección de primera notificación del registro compartido**: Se solucionó el problema donde la primera notificación toast del registro compartido no se mostraba
- **Corrección de imagen en notificación push**: Se muestra la imagen del documento en primer lugar (en lugar de la imagen de la insignia)

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

#### Traducción Automática Multilingüe
Los documentos, sellos y registros se traducen automáticamente a tu idioma.
- **Traducción automática**: Traducción automática al idioma del usuario al ver documentos, sellos y registros
- **Idiomas compatibles**: Coreano, inglés, japonés, español, francés, alemán, portugués
- **Alternar original**: Cambia entre original y traducción con el botón [Ver original]
- **Caché de traducción**: El caché en servidor y local previene solicitudes de re-traducción
- **Caché por idioma**: Usa instantáneamente el caché guardado al cambiar de idioma

#### Sistema de tutoriales
Se han añadido tutoriales paso a paso para guiarte en el uso de la aplicación.
- **Pantalla de inventario**: Selección de artículos, movimiento de partición, uso del menú inferior (8 pasos)
- **Pantalla Enviar/Recibir**: Entrada del destinatario, escaneo QR, métodos de transferencia/recepción
- **Pantalla de tienda**: Navegación de categorías de productos y métodos de compra
- **Pantalla de perfil**: Información de cuenta y configuración
- **Pantalla de ajustes**: Configuración de la aplicación y cambio de tema
- **Plantilla de sello**: Proceso completo de creación de plantilla (9 pasos)
- **Función de búsqueda**: Uso de filtros y guardado de términos de búsqueda
- Se muestra solo en el primer uso; puede verse de nuevo en Ajustes

#### Optimización del rendimiento del registro
Se ha mejorado significativamente la velocidad de carga y el uso de datos de los registros compartidos/independientes.
- **Carga rápida**: Cargar primero solo los últimos 100 comentarios
- **Desplazamiento infinito**: Cargar 50 comentarios anteriores al desplazarse
- **Caché local**: Visualización instantánea usando caché en revisitas
- **Sincronización en tiempo real**: Recibir eficientemente solo comentarios nuevos
- **Ahorro de datos**: Previene descargas innecesarias

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

#### Tarjetas de enlaces multimedia
Las URLs ingresadas en los registros se muestran automáticamente como **tarjetas enriquecidas**.
- **YouTube**: Miniatura + título + nombre del canal
- **Spotify**: Portada de álbum + título + artista
- **Google Drive**: Miniatura de archivo + nombre (archivos públicos)
- **Dropbox**: Ícono + nombre de archivo
- **OneDrive**: Ícono + nombre del servicio
- **Páginas web**: Imagen de vista previa + título de página
- Toca para abrir en app/navegador externo
- Mantén presionado para copiar la URL al portapapeles

#### Mejoras en la búsqueda de plantillas compartidas
- **Verificación de papel**: El botón de clonar muestra la cantidad de papel restante (Papel:10)
- **Papel requerido**: La clonación está deshabilitada cuando no hay papel disponible
- **Diseño neumórfico**: La pantalla de búsqueda ahora usa estilo UI neumórfico

#### Mejoras del sistema de efectos del editor de imágenes
La interfaz de selección de efectos especiales se ha simplificado.
- **Selección única**: Elige uno de los 5 efectos a la vez
- **Lista de efectos**: Original / Eliminar fondo / Bokeh / Bloom / Monocromo
- **Transiciones suaves**: Indicador de progreso durante el procesamiento
- **Mejora de rendimiento**: Filtros Bloom/Monocromo procesados en segundo plano

#### Rendimiento y estabilidad
La estructura interna de la aplicación ha sido optimizada.
- **Optimización de consultas**: Procesamiento paralelo para carga más rápida de clips/filtros
- **Limpieza de código**: 12 módulos de código no utilizados eliminados
- **Limpieza de dependencias**: 7 bibliotecas no utilizadas eliminadas
- **Limpieza de recursos**: Fuentes/imágenes no utilizadas eliminadas (reducción de aprox. 16MB)

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

#### Función Clip
Agrupa múltiples documentos juntos para una gestión más fácil.
- **Crear clip**: Selecciona 2+ documentos y toca "Clipear juntos"
- **Icono de clip**: Los documentos clipeados muestran un icono de clip en la esquina superior derecha
- **Detalles del clip**: Ver elementos internos a través del botón "Info del clip" en la pantalla de detalle
- **Reordenar**: Arrastra para reordenar elementos dentro de un clip (excepto portada)
- **Excluir elementos**: Eliminar elementos específicos de un clip (excepto portada)
- **Deshacer clip**: Disolver completamente un clip en documentos individuales
- **Disolución automática**: El clip se disuelve automáticamente cuando solo queda 1 elemento
- **Transferencia**: Los clips se envían/reciben como un grupo

#### Mejoras en la Búsqueda de Plantillas Compartidas
Usabilidad mejorada para la pantalla de búsqueda de plantillas compartidas.
- **Tarjetas en línea**: Los resultados de búsqueda se muestran en un formato de lista compacta
- **Imagen completa**: Las miniaturas se muestran en proporción original sin recortar
- **Detalles ampliados**: Ver contenido, palabras clave y fecha de vencimiento en la hoja de detalles
- **Vista previa de palabras clave**: Ver las palabras clave predeterminadas de la plantilla
- **Fecha de vencimiento**: Verificar cuándo expira la plantilla compartida

#### Mejora del Desbloqueo por Contraseña
- Ingresar la contraseña correcta ahora **desbloquea permanentemente** el documento
- Antes: Solo visualización, bloqueo mantenido → Ahora: Completamente desbloqueado

#### Correcciones de Errores
- Los elementos clip se contaban individualmente en la pantalla de recepción - corregido
- La insignia de recepción de la barra de navegación incluía elementos internos del clip - corregido
- La insignia (Nametag) no se desequipaba al reembolsar/eliminar - corregido
- El dominio permanecía ocupado después de eliminar la insignia - corregido

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

#### Indicador de Registro Compartido No Leído
Cuando se agregan nuevos comentarios a los registros compartidos, el borde del elemento **pulsa**.
- Identifica fácilmente los registros compartidos no leídos en tu inventario
- La pulsación se detiene cuando abres el documento
- El estado de lectura se sincroniza en todos los dispositivos

#### Guía de Uso del Sello
Cuando seleccionas un sello grabado, los papeles disponibles **pulsan** para guiarte.
- UX mejorada para duplicación de plantilla
- Guía intuitiva al siguiente paso

#### Mejoras de Partición
- **Contraer/Expandir**: Alternar particiones con botones de flecha (▼/▲)
- **Seleccionar todo**: Toca el encabezado de partición para seleccionar/deseleccionar todos los elementos
- Indicadores de estado de selección (○/◐/●)
- Arrastrar y soltar a particiones contraídas

#### Comodidad de la Tienda
Proceso de pago simplificado para compras consecutivas del mismo artículo.
- Diálogos de confirmación omitidos dentro de 10 minutos desde la última compra
- Compra masiva más rápida

#### Mejoras de Interfaz
- Legibilidad mejorada con nueva fuente de título
- Las tarjetas de sello muestran vista previa de plantilla en el fondo (33% de opacidad)
- Las tarjetas de insignia muestran vista previa de imagen grabada
- El menú inferior muestra insignia de número de acciones disponibles
- Ajuste de color del tema tinta negra (mejor legibilidad del texto)
- Imágenes de productos optimizadas (tamaño reducido, carga más rápida)

#### Corrección de errores
- Corregido efecto de pulsación en comentarios propios
- Corregido recorte de campo de entrada en navegación por gestos
- Corregida pantalla gris al contraer particiones
- Mejorado manejo de permisos de notificación push

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

#### Función de Bloqueo de Documento
- Establecer contraseña numérica en documentos (hasta 16 dígitos)
- Los documentos bloqueados muestran escala de grises + icono de candado
- Desbloquear con contraseña correcta (una sola vez)
- El estado de bloqueo persiste después de la transferencia
- Los documentos bloqueados se excluyen de los resultados de búsqueda

#### Sistema de Entrada Rápida
Ingresa fácilmente información especial a través del botón `+` al escribir registros:
- **Palabra clave:Valor** - Tarjeta de palabra clave general
- **Alarma de fecha** - Tarjeta de fecha (cálculo D-Day automático, configuración de alarma)
- **Número de teléfono** - Formateo automático por país
- **Ubicación/Dirección** - Integración con app de mapas
- **Cantidad** - Visualización automática del símbolo de moneda

#### Acciones de Tarjetas Especiales
**Mantén presionada** la información especial en los registros para activar funciones adicionales:
- **Tarjeta de fecha**: Establecer/cancelar alarma
- **Tarjeta de teléfono**: Llamar directamente / Copiar al portapapeles
- **Tarjeta de ubicación**: Abrir en app de mapas / Copiar al portapapeles
- **Tarjeta de cantidad**: Copiar al portapapeles

#### Mejoras de Interfaz
- Diseño neumórfico de chips de filtro
- Mejora del desplazamiento de la barra de búsqueda
- La AppBar de la pantalla de detalle del elemento muestra el nombre del elemento

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

**Primera versión oficial**

#### Sistema de Papel
- Introducción del sistema de moneda para creación de documentos
- 10 hojas de Papel al registrarse
- 10 hojas adicionales por cada vinculación Google/Apple
- Papel disponible para compra en tienda

#### Creación de documentos
- Crear documentos usando Papel
- Agregar título, contenido e imágenes
- Opciones de fecha de inicio/expiración

#### Sistema de Insignia
- Función de grabado de nombre de dominio único
- Nombre de dominio grabado usado como identidad de usuario
- Gestión de activación mediante equipar/desequipar
- Opción de adjuntar imagen 128x128

#### Sistema de Sello
- Función de creación de plantilla
- Selección de modo Registro solo/Registro compartido
- Función de duplicación de plantilla
- Configuración de fecha de inicio/expiración

#### Función de Registro
- Grabar registros en documentos/sellos
- Registro solo: Solo registros personales
- Registro compartido: Compartir con propietarios de duplicados
- Soporte de tarjeta info formato clave:valor

#### Sistema de Tinta
- Función de cambio de color de tema
- Tinta Negra, Tinta Dorada

#### Transferencia de objetos
- Enviar objetos vía dirección de email
- Autocompletar email por escaneo QR
- Aceptar o devolver objetos recibidos
- Enviar múltiples objetos a la vez

#### Partición
- Función de agrupación de objetos
- Almacenamiento local específico del dispositivo

#### Función de búsqueda
- Filtrado de búsqueda en tiempo real
- Guardar términos de búsqueda como filtros
- Guardado automático de búsquedas recientes (hasta 5)

#### Tienda
- Comprar Papel, Sellos, Insignias, Tinta
- Disponible en todas las plataformas

#### Cuenta
- Inicio de sesión con Google, Apple, Email
- Obtener Papel adicional vinculando cuentas sociales

#### Soporte multilingüe
- 한국어, English, 日本語
- Deutsch, Français, Español, Português

</div>
</details>

<div class="changelog-footer">
<strong>¡Sugiere nuevas funciones!</strong> Comparte tus ideas en <a href="/inventory/suggest/es/">Sugerencias</a> y las revisaremos activamente.
</div>

<style>
/* Contenedor de versión */
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

/* Encabezado Summary */
details.changelog-version summary {
  display: flex;
  align-items: center;
  padding: 1rem 1.25rem;
  cursor: pointer;
  user-select: none;
  list-style: none;
}

details.changelog-version summary::-webkit-details-marker { display: none; }

/* Icono de flecha */
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

/* Título de versión */
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

/* Botón de copiar */
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

/* Contenido de versión */
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

/* Pie de página */
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
