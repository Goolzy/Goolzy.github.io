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
---

## Registro de cambios

Consulta el historial de actualizaciones de la aplicación Inventory.

<details class="changelog-version" open>
<summary>
  <span class="version-title">v1.1.2 <small>2025-12-31</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Copiar">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### Autocompletado de Destinatarios Recientes
Selecciona rápidamente destinatarios recientes en la pantalla de envío.
- **Lista de autocompletado**: Menú desplegable que muestra hasta 30 destinatarios recientes cuando el campo de entrada está enfocado
- **Selección rápida**: Búsqueda automática al seleccionar un destinatario de la lista
- **Rebúsqueda**: Borra la selección con el botón X para buscar otro destinatario
- **Almacenamiento local**: Información del destinatario guardada automáticamente al enviar con éxito

#### Mejoras en Restricciones de Envío
Las insignias equipadas y los sellos compartidos ahora tienen restricciones de envío.
- **Insignias equipadas**: Desequipa la insignia para enviarla
- **Sellos compartidos**: Revoca el uso compartido para enviar el sello
- **Guía detallada**: Muestra mensajes específicos explicando el motivo de la restricción

#### Corrección de errores
- **Corrección de temblor de desplazamiento**: Solucionado el parpadeo de pantalla al desplazarse hacia arriba en documentos/sellos con pocos registros
- **Corrección de desplazamiento superior**: Solucionado el problema donde no se podía llegar a la información del autor desplazándose en elementos con registros

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
