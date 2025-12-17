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

## 📋 Registro de cambios

Consulta el historial de actualizaciones de la aplicación Inventory.

---

### ✨ v1.0.2 <small style="color:#6b7280;">2025-01</small>

#### 🔔 Indicador de Registro Compartido No Leído
Cuando se agregan nuevos comentarios a los registros compartidos, el borde del elemento **pulsa**.
- Identifica fácilmente los registros compartidos no leídos en tu inventario
- La pulsación se detiene cuando abres el documento
- El estado de lectura se sincroniza en todos los dispositivos

#### 🔖 Guía de Uso del Sello
Cuando seleccionas un sello grabado, los papeles disponibles **pulsan** para guiarte.
- UX mejorada para duplicación de plantilla
- Guía intuitiva al siguiente paso

#### 📂 Mejoras de Partición
- **Contraer/Expandir**: Alternar particiones con botones de flecha (▼/▲)
- **Seleccionar todo**: Toca el encabezado de partición para seleccionar/deseleccionar todos los elementos
- Indicadores de estado de selección (○/◐/●)
- Arrastrar y soltar a particiones contraídas

#### 🛒 Comodidad de la Tienda
Proceso de pago simplificado para compras consecutivas del mismo artículo.
- Diálogos de confirmación omitidos dentro de 10 minutos desde la última compra
- Compra masiva más rápida

#### 🎨 Mejoras de Interfaz
- Legibilidad mejorada con nueva fuente de título
- Las tarjetas de sello muestran vista previa de plantilla en el fondo (33% de opacidad)
- Las tarjetas de insignia muestran vista previa de imagen grabada
- El menú inferior muestra insignia de número de acciones disponibles
- Ajuste de color del tema tinta negra (mejor legibilidad del texto)
- Imágenes de productos optimizadas (tamaño reducido, carga más rápida)

#### 🐛 Corrección de errores
- Corregido efecto de pulsación en comentarios propios
- Corregido recorte de campo de entrada en navegación por gestos de Android
- Corregida pantalla gris al contraer particiones
- Mejorado manejo de permisos de notificación push en Android 13+

---

### 🔒 v1.0.1 <small style="color:#6b7280;">2025-01</small>

#### 🔒 Función de Bloqueo de Documento
- Establecer contraseña numérica en documentos (hasta 16 dígitos)
- Los documentos bloqueados muestran escala de grises + icono de candado
- Desbloquear con contraseña correcta (una sola vez)
- El estado de bloqueo persiste después de la transferencia
- Los documentos bloqueados se excluyen de los resultados de búsqueda

---

### 🎉 v1.0.0 <small style="color:#6b7280;">2025-01</small>

**Primera versión oficial**

#### 📦 Sistema de Papel
- Introducción del sistema de moneda para creación de documentos
- 10 hojas de Papel al registrarse
- 10 hojas adicionales por cada vinculación Google/Apple
- Papel disponible para compra en tienda

#### 📄 Creación de documentos
- Crear documentos usando Papel
- Agregar título, contenido e imágenes
- Opciones de fecha de inicio/expiración

#### 🏷️ Sistema de Insignia
- Función de grabado de nombre de dominio único
- Nombre de dominio grabado usado como identidad de usuario
- Gestión de activación mediante equipar/desequipar
- Opción de adjuntar imagen 128x128

#### 🔖 Sistema de Sello
- Función de creación de plantilla
- Selección de modo Registro solo/Registro compartido
- Función de duplicación de plantilla
- Configuración de fecha de inicio/expiración

#### 📝 Función de Registro
- Grabar registros en documentos/sellos
- Registro solo: Solo registros personales
- Registro compartido: Compartir con propietarios de duplicados
- Soporte de tarjeta info formato clave:valor

#### 🎨 Sistema de Tinta
- Función de cambio de color de tema
- Tinta Negra, Tinta Dorada

#### 🤝 Transferencia de objetos
- Enviar objetos vía dirección de email
- Autocompletar email por escaneo QR
- Aceptar o devolver objetos recibidos
- Enviar múltiples objetos a la vez

#### 📂 Partición
- Función de agrupación de objetos
- Almacenamiento local específico del dispositivo

#### 🔍 Función de búsqueda
- Filtrado de búsqueda en tiempo real
- Guardar términos de búsqueda como filtros
- Guardado automático de búsquedas recientes (hasta 5)

#### 🛒 Tienda
- Comprar Papel, Sellos, Insignias, Tinta
- Disponible en todas las plataformas

#### 🔐 Cuenta
- Inicio de sesión con Google, Apple, Email
- Obtener Papel adicional vinculando cuentas sociales

#### 🌍 Soporte multilingüe
- 한국어, English, 日本語
- Deutsch, Français, Español, Português

#### 📱 Plataformas soportadas
- iOS (iPhone, iPad)
- Android (smartphones, tablets)
- macOS, Windows

---

> 💡 **¡Sugiere nuevas funciones!** Comparte tus ideas en [Sugerencias](/inventory/suggest/es/) y las revisaremos activamente.

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
