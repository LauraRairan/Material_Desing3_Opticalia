# Opticalia Veravisión - Migración a Material Design 3

## Autores: Laura Rairan - Maria Rodriguez

## Descripción del proyecto

Este proyecto corresponde a la migración de la interfaz web de **Opticalia Veravisión** a un front-end funcional utilizando el sistema de diseño **Material Design 3** y la librería oficial **@material/web**.

La interfaz original de Opticalia Veravisión estaba desarrollada con HTML, CSS y JavaScript personalizados. Contaba con módulos principales como **Panel Principal, Clientes, Seguimiento, Insights y Redes Sociales**. En esta nueva versión se conservaron las funcionalidades principales, pero se migró la interfaz a un sistema de diseño reconocido, aplicando componentes oficiales, tokens visuales, jerarquía de información, estados interactivos y una estructura más consistente.

Esta migración no corresponde únicamente a un cambio visual. El proyecto implementa una interfaz funcional en código front-end, utilizando componentes reales de Material Design 3 para mejorar la experiencia de usuario, la accesibilidad, la organización visual y la mantenibilidad del sistema.

---

## Objetivo de la migración

El objetivo principal fue transformar la interfaz de Opticalia Veravisión en una aplicación web más profesional, coherente y fácil de usar, aplicando un sistema de diseño oficial.

La migración busca cumplir con los siguientes propósitos:

- Aplicar un sistema de diseño real en una interfaz funcional.
- Reemplazar elementos personalizados por componentes oficiales de Material Design 3.
- Mejorar la consistencia visual entre las diferentes secciones.
- Organizar la información mediante tarjetas, chips, botones, campos de búsqueda y estados visuales.
- Mantener las funcionalidades principales de la interfaz original.
- Facilitar el mantenimiento del código mediante componentes reutilizables.
- Mejorar la experiencia del asesor de ventas al consultar clientes, tareas, métricas y acciones pendientes.

---

## Sistema de diseño seleccionado

El sistema de diseño seleccionado fue **Material Design 3**, desarrollado por Google.

Se escogió este sistema porque se adapta muy bien a una interfaz web de gestión de clientes, como la de Opticalia Veravisión. La aplicación necesita mostrar información organizada, permitir filtros, ejecutar acciones rápidas, visualizar estados y ofrecer retroalimentación al usuario.

Material Design 3 aporta una estructura visual clara, moderna y accesible. Además, su librería oficial **@material/web** permite trabajar con componentes reales mediante Web Components, lo que hace que la migración sea funcional y no solo estética.

---

## ¿Por qué Material Design 3 es adecuado para Opticalia?

Material Design 3 es apropiado para esta interfaz porque Opticalia Veravisión funciona como un sistema de apoyo para asesores de ventas. El usuario necesita consultar clientes, revisar tareas, ver métricas, identificar alertas y realizar acciones rápidas.

Las ventajas principales para este proyecto son:

- Permite organizar información en tarjetas y superficies limpias.
- Facilita el uso de botones diferenciados para acciones principales y secundarias.
- Usa chips para representar filtros, estados y categorías.
- Mejora la lectura de información mediante jerarquía visual.
- Aporta consistencia entre módulos.
- Es compatible con interfaces web modernas.
- Facilita el diseño responsive para pantallas pequeñas.
- Permite aplicar tokens visuales para mantener colores, bordes y superficies coherentes.

---

## Librería oficial utilizada

Para la migración se utilizó la librería oficial:

```bash
@material/web
```

Esta librería permite implementar componentes oficiales de Material Design 3 en aplicaciones web mediante Web Components.

También se utilizó **Vite** como herramienta de desarrollo y construcción del proyecto, ya que permite ejecutar el front-end localmente y generar la versión final para despliegue en GitHub Pages.

---

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- Material Design 3
- @material/web
- Vite
- GitHub Pages
- GitHub Actions

---

## Componentes oficiales implementados

Durante la migración se reemplazaron varios elementos personalizados por componentes oficiales de Material Design 3.

| Necesidad de la interfaz | Componente Material Design 3 utilizado | Aplicación en Opticalia |
|---|---|---|
| Acciones principales | `md-filled-button` | Botones importantes como contactar cliente, usar idea o confirmar acción. |
| Acciones secundarias | `md-outlined-button` | Botones alternativos como guardar, cancelar, ver más o recomendar. |
| Acciones de menor jerarquía | `md-text-button` | Acciones de navegación o enlaces internos. |
| Botones con iconos | `md-icon-button` | Acciones rápidas como llamar, enviar correo o abrir detalle. |
| Iconografía | `md-icon` | Iconos para navegación, búsqueda, clientes, alertas y tareas. |
| Campos de búsqueda | `md-outlined-text-field` | Búsqueda global y búsqueda de clientes. |
| Filtros | `md-filter-chip` | Filtros de clientes, prioridades y estados. |
| Estados y categorías | `md-assist-chip` | Etiquetas como VIP, frecuente, pendiente, completado o alta prioridad. |

---

## Aplicación de Material Design 3 en la interfaz

La migración se aplicó en diferentes partes de la interfaz:

### 1. Navegación principal

La navegación entre módulos se mantuvo, pero se ajustó visualmente para que tuviera una estructura más limpia y coherente.

Módulos conservados:

- Panel Principal
- Clientes
- Seguimiento
- Insights
- Redes Sociales

La navegación permite que el usuario se mueva entre secciones sin perder el contexto del sistema.

---

### 2. Panel Principal

En el Panel Principal se organizaron los indicadores principales mediante tarjetas visuales. Estas tarjetas permiten mostrar información importante de forma rápida, como clientes por contactar, revisiones próximas, clientes recientes y alertas activas.

Se aplicaron principios de Material Design 3 como:

- Uso de superficies.
- Separación visual por tarjetas.
- Jerarquía entre títulos, cifras y acciones.
- Botones y enlaces de acción.
- Estados visuales para alertas.

---

### 3. Gestión de clientes

En la sección de Clientes se mantuvo el directorio de usuarios y se mejoró la forma de filtrar y consultar la información.

Se aplicaron:

- Campo de búsqueda con `md-outlined-text-field`.
- Filtros con `md-filter-chip`.
- Estados y categorías con `md-assist-chip`.
- Tarjetas o filas organizadas para mostrar información del cliente.
- Vista de detalle para consultar información específica.

Esto mejora la experiencia del asesor porque puede encontrar clientes de forma más rápida y clara.

---

### 4. Seguimiento y tareas

En la sección de Seguimiento se conservaron las tareas asociadas a clientes y se mejoró la visualización de prioridades y estados.

Se aplicaron chips para diferenciar:

- Tareas pendientes.
- Tareas contactadas.
- Tareas completadas.
- Prioridad alta.
- Prioridad media.
- Prioridad baja.

Esto permite que el asesor identifique rápidamente qué tareas requieren mayor atención.

---

### 5. Insights

En la sección de Insights se mantuvo la visualización de métricas e indicadores importantes para la óptica.

Se mejoró la presentación mediante:

- Tarjetas de resumen.
- Jerarquía visual en cifras.
- Organización por secciones.
- Separación clara entre indicadores y análisis.

Esto permite interpretar mejor la información de ventas, clientes activos, ticket promedio y retención.

---

### 6. Redes Sociales

En la sección de Redes Sociales se mantuvo la funcionalidad de ideas y publicaciones, pero con una organización visual más clara.

Se aplicaron componentes para:

- Acciones principales.
- Botones secundarios.
- Tarjetas de ideas.
- Estados visuales.
- Confirmaciones mediante notificaciones.

---

## Aplicación de tokens de diseño

Además de los componentes, se aplicaron tokens visuales de Material Design 3. Los tokens permiten mantener una identidad visual coherente en toda la interfaz.

Algunos tokens utilizados fueron:

```css
--md-sys-color-primary
--md-sys-color-on-primary
--md-sys-color-secondary
--md-sys-color-surface
--md-sys-color-surface-container
--md-sys-color-background
--md-sys-color-outline
--md-sys-color-on-surface
--md-sys-color-error
```

---

## ¿Para qué se usaron los tokens?

| Token | Uso en la interfaz |
|---|---|
| `--md-sys-color-primary` | Color principal para botones, acciones importantes y elementos activos. |
| `--md-sys-color-on-primary` | Color del texto o icono sobre fondos principales. |
| `--md-sys-color-surface` | Fondo de tarjetas y contenedores. |
| `--md-sys-color-surface-container` | Agrupación de secciones y bloques de información. |
| `--md-sys-color-outline` | Bordes de campos, tarjetas y divisores. |
| `--md-sys-color-on-surface` | Texto principal dentro de superficies. |
| `--md-sys-color-error` | Estados de alerta o prioridad alta. |

El uso de tokens evita que los colores estén dispersos o definidos de forma desordenada en todo el CSS. Esto facilita modificar la identidad visual del proyecto sin tener que cambiar cada componente manualmente.

---

## Ventajas de la migración

La migración a Material Design 3 aporta varias ventajas importantes para Opticalia Veravisión:

### Ventajas visuales

- Interfaz más limpia y profesional.
- Mayor consistencia entre secciones.
- Mejor uso de colores, bordes y superficies.
- Estados visuales más fáciles de reconocer.
- Mejor jerarquía entre títulos, métricas, acciones y contenido.

### Ventajas de usabilidad

- Navegación más clara.
- Búsqueda de clientes más visible.
- Filtros más comprensibles mediante chips.
- Acciones principales más fáciles de identificar.
- Retroalimentación visual mediante toasts.
- Mejor lectura de información en tarjetas.

### Ventajas técnicas

- Uso de componentes oficiales de una librería reconocida.
- Código más mantenible.
- Componentes reutilizables.
- Menor dependencia de estilos manuales.
- Estructura más preparada para crecer.
- Despliegue funcional en GitHub Pages.

### Ventajas para el usuario final

- El asesor puede identificar más rápido clientes pendientes.
- Las tareas tienen estados y prioridades más claras.
- Las métricas se entienden con mayor facilidad.
- Las acciones frecuentes son más visibles.
- La experiencia general es más ordenada y eficiente.

---

## Funcionalidades conservadas

Durante la migración se conservaron las funcionalidades principales de la interfaz original.

Entre ellas se encuentran:

- Navegación entre secciones.
- Panel principal con métricas.
- Visualización de clientes.
- Búsqueda de clientes.
- Filtro por tipo de cliente.
- Vista de detalle de cliente.
- Seguimiento de tareas.
- Cambio visual de estados.
- Clasificación por prioridad.
- Visualización de insights.
- Sección de redes sociales.
- Notificaciones visuales tipo toast.
- Diseño responsive para pantallas pequeñas.

---

## Funcionalidades mejoradas

Además de conservar las funciones originales, se mejoraron varios aspectos de la interfaz:

- Se mejoró la consistencia visual usando Material Design 3.
- Se cambiaron botones personalizados por botones oficiales.
- Se implementaron chips para filtros y estados.
- Se aplicaron tokens de color.
- Se organizó mejor la jerarquía visual.
- Se mejoró la separación entre módulos.
- Se dejó el proyecto preparado para despliegue automático.
- Se implementó estructura de proyecto con Vite.

---

## Estructura del proyecto

La estructura principal del proyecto es la siguiente:

```bash
Material_Desing3_Opticalia/
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── opticalia-material3/
│   ├── docs/
│   ├── src/
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

## Descripción de carpetas y archivos

| Archivo o carpeta | Descripción |
|---|---|
| `.github/workflows/deploy.yml` | Archivo de GitHub Actions para desplegar el proyecto en GitHub Pages. |
| `opticalia-material3/` | Carpeta principal del proyecto front-end. |
| `docs/` | Carpeta para documentos de entrega, como el PDF del parcial. |
| `src/` | Carpeta donde se encuentra la lógica, estilos y componentes principales de la interfaz. |
| `index.html` | Archivo principal de entrada de la aplicación. |
| `package.json` | Archivo con dependencias y scripts del proyecto. |
| `vite.config.js` | Configuración de Vite para ejecutar y desplegar correctamente el proyecto. |
| `README.md` | Documento explicativo del proyecto. |

---

## Instalación y ejecución local

Para ejecutar el proyecto localmente se necesita tener instalado **Node.js**.

Luego se debe entrar a la carpeta del proyecto:

```bash
cd opticalia-material3
```

Instalar las dependencias:

```bash
npm install
```

Ejecutar el servidor de desarrollo:

```bash
npm run dev
```

Después se abre en el navegador la URL que muestra Vite en la terminal, normalmente:

```bash
http://localhost:5173/
```

---

## Construcción para producción

Para generar la versión final del proyecto se usa:

```bash
npm run build
```

Este comando genera la carpeta `dist`, que contiene los archivos optimizados para publicación.

---

## Despliegue en GitHub Pages

El proyecto se desplegó en GitHub Pages mediante GitHub Actions.

Se usó este método porque Vite necesita construir primero el proyecto antes de publicarlo. GitHub Actions ejecuta automáticamente los pasos de instalación, construcción y publicación cada vez que se suben cambios a la rama principal.

Flujo general del despliegue:

1. Se hace push a la rama `main`.
2. GitHub Actions instala las dependencias.
3. Se ejecuta el build del proyecto.
4. Se genera la carpeta `dist`.
5. GitHub Pages publica el contenido generado.

---

## Enlaces del proyecto

Repositorio:

```text
https://github.com/LauraRairan/Material_Desing3_Opticalia
```

Página publicada:

```text
https://laurarairan.github.io/Material_Desing3_Opticalia/
```

---

## Relación con Interacción Persona-Computador

Desde la perspectiva de Human Computer Interaction, esta migración mejora la interfaz porque permite una interacción más clara, consistente y comprensible para el usuario.

La interfaz ayuda al asesor de ventas a:

- Reconocer rápidamente información importante.
- Priorizar clientes y tareas.
- Filtrar datos sin esfuerzo.
- Comprender estados mediante etiquetas visuales.
- Ejecutar acciones con menor carga cognitiva.
- Recibir confirmación de sus acciones.

Material Design 3 aporta patrones visuales que ayudan a reducir la confusión, mejorar la navegación y facilitar la toma de decisiones dentro del sistema.

---

## Conclusión

La migración de Opticalia Veravisión a Material Design 3 permitió transformar una interfaz funcional, pero construida principalmente con estilos personalizados, en una aplicación web más consistente, organizada y mantenible.

El uso de la librería oficial **@material/web** demuestra que la migración no fue únicamente visual, sino que se aplicaron componentes oficiales del sistema de diseño. Además, la implementación de tokens, chips, botones, campos de búsqueda, tarjetas y estados visuales permite que la interfaz sea más clara para los asesores de ventas y más adecuada para un entorno real de gestión de clientes.

Con esta migración, Opticalia Veravisión cuenta con una interfaz más profesional, moderna y alineada con principios de Interacción Persona-Computador.
