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

---

### v1.1.0 <small style="color:#6b7280;">2025-12-29</small>

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

---

### v1.0.4 <small style="color:#6b7280;">2025-12-25</small>

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

---

### v1.0.3 <small style="color:#6b7280;">2025-12-23</small>

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

---

### v1.0.2 <small style="color:#6b7280;">2025-12-22</small>

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

---

### v1.0.1 <small style="color:#6b7280;">2025-12-16</small>

#### Función de Bloqueo de Documento
- Establecer contraseña numérica en documentos (hasta 16 dígitos)
- Los documentos bloqueados muestran escala de grises + icono de candado
- Desbloquear con contraseña correcta (una sola vez)
- El estado de bloqueo persiste después de la transferencia
- Los documentos bloqueados se excluyen de los resultados de búsqueda

---

### v1.0.0 <small style="color:#6b7280;">2025-12-13</small>

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

#### Plataformas soportadas

---

> **¡Sugiere nuevas funciones!** Comparte tus ideas en [Sugerencias](/inventory/suggest/es/) y las revisaremos activamente.

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
