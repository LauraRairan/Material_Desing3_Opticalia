import '@material/web/icon/icon.js';
import '@material/web/button/filled-button.js';
import '@material/web/button/outlined-button.js';
import '@material/web/button/text-button.js';
import '@material/web/iconbutton/icon-button.js';
import '@material/web/textfield/outlined-text-field.js';
import '@material/web/chips/filter-chip.js';
import '@material/web/chips/assist-chip.js';
import '@material/web/divider/divider.js';
import './styles.css';

const state = {
  page: 'panel',
  filtroCliente: '',
  tipoCliente: 'todos',
  estadoTarea: 'todas',
  prioridadTarea: 'todas',
  clienteDetalle: null,
};

const navItems = [
  { id: 'panel', label: 'Panel Principal', icon: 'dashboard' },
  { id: 'clientes', label: 'Clientes', icon: 'groups' },
  { id: 'seguimiento', label: 'Seguimiento', icon: 'task_alt' },
  { id: 'insights', label: 'Insights', icon: 'monitoring' },
  { id: 'redes', label: 'Redes Sociales', icon: 'share' },
];

const clientes = [
  { id: 'MG', nombre: 'María García', tipo: 'vip', email: 'maria.garcia@email.com', tel: '+57 300 123 4567', visita: 'Hace 1 año', compras: '$2.850.000', visitas: 12, riesgo: 'Alta', motivo: 'Revisión anual pendiente', color: '#006A6A' },
  { id: 'JM', nombre: 'Juan Martínez', tipo: 'frecuente', email: 'juan.martinez@email.com', tel: '+57 311 234 5678', visita: 'Hace 6 meses', compras: '$1.950.000', visitas: 8, riesgo: 'Media', motivo: 'Cambio de lentes necesario', color: '#4C607C' },
  { id: 'AL', nombre: 'Ana López', tipo: 'regular', email: 'ana.lopez@email.com', tel: '+57 312 345 6789', visita: 'Hace 3 semanas', compras: '$840.000', visitas: 3, riesgo: 'Baja', motivo: 'Cita de seguimiento', color: '#6A5D00' },
  { id: 'CR', nombre: 'Carlos Ruiz', tipo: 'frecuente', email: 'carlos.ruiz@email.com', tel: '+57 313 456 7890', visita: 'Hoy', compras: '$1.250.000', visitas: 6, riesgo: 'Baja', motivo: 'Revisión visual confirmada', color: '#006A6A' },
  { id: 'LF', nombre: 'Laura Fernández', tipo: 'regular', email: 'laura.fernandez@email.com', tel: '+57 314 567 8901', visita: 'Mañana', compras: '$620.000', visitas: 2, riesgo: 'Baja', motivo: 'Adaptación lentes de contacto', color: '#65558F' },
  { id: 'IT', nombre: 'Isabel Torres', tipo: 'frecuente', email: 'isabel.torres@email.com', tel: '+57 315 678 9012', visita: 'Hace 2 horas', compras: '$980.000', visitas: 5, riesgo: 'Baja', motivo: 'Compra reciente de lentes progresivos', color: '#006A6A' },
];

let tareas = [
  { cliente: 'María García', titulo: 'Contactar por revisión anual', desc: 'No registra contacto en 12 meses. Sugerir valoración visual y actualización de fórmula.', fecha: 'Hoy', estado: 'pendiente', prioridad: 'alta' },
  { cliente: 'Juan Martínez', titulo: 'Enviar propuesta de lentes', desc: 'Requiere cambio de lentes según historial de compra.', fecha: 'Mañana', estado: 'pendiente', prioridad: 'media' },
  { cliente: 'Ana López', titulo: 'Confirmar cita de seguimiento', desc: 'Validar asistencia y recordar recomendaciones de cuidado.', fecha: 'Viernes', estado: 'contactada', prioridad: 'baja' },
  { cliente: 'Carlos Ruiz', titulo: 'Preparar revisión visual', desc: 'Cita confirmada para hoy a las 2:00 p. m.', fecha: 'Hoy', estado: 'contactada', prioridad: 'baja' },
  { cliente: 'Isabel Torres', titulo: 'Seguimiento posventa', desc: 'Verificar adaptación a lentes progresivos.', fecha: 'Esta semana', estado: 'completada', prioridad: 'media' },
];

const ideas = [
  'Campaña: revisión visual preventiva para usuarios de computador',
  'Promoción: 20% en gafas de sol para clientes frecuentes',
  'Post educativo: señales de fatiga visual digital',
];

const $ = (selector) => document.querySelector(selector);

function icon(name) {
  return `<md-icon>${name}</md-icon>`;
}

function tipoBadge(tipo) {
  const label = tipo === 'vip' ? 'VIP' : tipo === 'frecuente' ? 'Frecuente' : 'Regular';
  return `<span class="badge ${tipo}">${label}</span>`;
}

function riesgoBadge(riesgo) {
  const cls = riesgo.toLowerCase() === 'alta' ? 'alta' : riesgo.toLowerCase() === 'media' ? 'media' : 'baja';
  return `<span class="badge ${cls}">${riesgo}</span>`;
}

function estadoBadge(estado) {
  const label = estado === 'pendiente' ? 'Pendiente' : estado === 'contactada' ? 'Contactada' : 'Completada';
  return `<span class="badge ${estado}">${label}</span>`;
}

function shell(content) {
  return `
    <div class="app-shell">
      <aside class="sidebar">
        <div class="brand">
          <div class="brand-mark">${icon('visibility')}</div>
          <div><h1>OPTICALIA</h1><p>Veravisión CRM</p></div>
        </div>
        <nav class="nav">
          ${navItems.map(item => `
            <button class="nav-item ${state.page === item.id ? 'active' : ''}" data-page="${item.id}">
              ${icon(item.icon)}<span>${item.label}</span>
            </button>
          `).join('')}
        </nav>
        <div class="sidebar-user"><div class="avatar">SA</div><div><div class="user-name">Asesor de Ventas</div><div class="user-mail">asesor@opticalia.com</div></div></div>
      </aside>
      <main class="main">
        <header class="topbar">
          <md-outlined-text-field id="globalSearch" label="Buscar clientes, productos o acciones" value="${state.filtroCliente}">
            <md-icon slot="leading-icon">search</md-icon>
          </md-outlined-text-field>
          <span style="margin-left:auto"></span>
          <md-icon-button aria-label="Notificaciones">${icon('notifications')}</md-icon-button>
          <div class="avatar">SA</div>
        </header>
        <section class="content">${content}</section>
      </main>
    </div>
    <div class="toast" id="toast"></div>
  `;
}

function title(text, subtitle, action = '') {
  return `<div class="page-title"><div><h2>${text}</h2><p>${subtitle}</p></div>${action}</div>`;
}

function stat(label, number, hint, iconName) {
  return `<div class="card stat"><div class="label"><span class="icon-wrap">${icon(iconName)}</span>${label}</div><div class="number">${number}</div><div class="hint">${hint}</div></div>`;
}

function pagePanel() {
  const pendientes = tareas.filter(t => t.estado !== 'completada').length;
  const porContactar = clientes.filter(c => c.riesgo !== 'Baja').length;
  return `
    ${title('Panel Principal', 'Resumen de clientes, alertas y próximas acciones comerciales.')}
    <div class="grid-4">
      ${stat('Clientes por contactar', porContactar, '+3 desde la semana pasada', 'phone_in_talk')}
      ${stat('Revisiones próximas', '8', 'Próximos 7 días', 'event')}
      ${stat('Clientes recientes', '24', 'Esta semana', 'groups')}
      ${stat('Tareas activas', pendientes, 'Requieren atención', 'priority_high')}
    </div>
    <br>
    <div class="grid-2">
      <div class="card">
        <div class="card-title"><h3>${icon('phone_in_talk')} Clientes por contactar</h3><md-text-button data-page="seguimiento">Ver seguimiento</md-text-button></div>
        <div class="list">
          ${clientes.filter(c => c.riesgo !== 'Baja').map(c => `
            <div class="row">
              <div><div class="row-title">${c.nombre} ${riesgoBadge(c.riesgo)}</div><div class="row-sub">${c.motivo}</div><div class="row-sub">Última visita: ${c.visita}</div></div>
              <div class="actions"><md-icon-button data-toast="Llamando a ${c.nombre}">${icon('call')}</md-icon-button><md-icon-button data-toast="Correo preparado para ${c.nombre}">${icon('mail')}</md-icon-button></div>
            </div>
          `).join('')}
        </div>
      </div>
      <div class="card">
        <div class="card-title"><h3>${icon('notifications_active')} Alertas</h3></div>
        <div class="list">
          <div class="alert danger"><strong>María García</strong><br><span>Sin contacto en 12 meses.</span></div>
          <div class="alert"><strong>Nueva promoción</strong><br><span>20% de descuento en gafas de sol.</span></div>
          <div class="alert warn"><strong>Cumpleaños</strong><br><span>3 clientes cumplen años esta semana.</span></div>
        </div>
      </div>
    </div>
    <br>
    <div class="grid-even">
      <div class="card"><div class="card-title"><h3>${icon('calendar_month')} Próximas revisiones</h3></div>
        ${['Carlos Ruiz - Hoy, 2:00 p. m.', 'Laura Fernández - Mañana, 10:30 a. m.', 'Pedro Sánchez - Viernes, 4:00 p. m.'].map(x => `<div class="row"><div><div class="row-title">${x.split(' - ')[0]}</div><div class="row-sub">${x.split(' - ')[1]}</div></div><span class="badge baja">Confirmada</span></div>`).join('')}
      </div>
      <div class="card"><div class="card-title"><h3>${icon('history')} Actividad reciente</h3></div>
        ${['Isabel Torres compró lentes progresivos - $980.000', 'Miguel Ángel Díaz completó revisión visual', 'Carmen Moreno registró nuevo perfil'].map(x => `<div class="row"><div><div class="row-title">${x}</div><div class="row-sub">Hace pocas horas</div></div></div>`).join('')}
      </div>
    </div>
  `;
}

function clientesFiltrados() {
  return clientes.filter(c => {
    const text = `${c.nombre} ${c.email} ${c.tel}`.toLowerCase();
    const byText = text.includes(state.filtroCliente.toLowerCase());
    const byTipo = state.tipoCliente === 'todos' || c.tipo === state.tipoCliente;
    return byText && byTipo;
  });
}

function pageClientes() {
  return `
    ${title('Gestión de Clientes', 'Directorio funcional migrado a Material Design 3.', '<md-filled-button id="nuevoCliente"><md-icon slot="icon">person_add</md-icon>Nuevo cliente</md-filled-button>')}
    <div class="grid-4">
      ${stat('Total clientes', clientes.length, 'Base cargada en frontend', 'groups')}
      ${stat('Clientes activos', '9', 'Con compras recientes', 'verified')}
      ${stat('Clientes VIP', clientes.filter(c => c.tipo === 'vip').length, 'Mayor valor comercial', 'workspace_premium')}
      ${stat('Requieren atención', clientes.filter(c => c.riesgo === 'Alta').length, 'Prioridad alta', 'warning')}
    </div>
    <br>
    <div class="card">
      <div class="toolbar">
        <md-outlined-text-field id="clientSearch" label="Buscar por nombre, email o teléfono" value="${state.filtroCliente}"><md-icon slot="leading-icon">search</md-icon></md-outlined-text-field>
        <div class="chips">
          ${['todos','vip','frecuente','regular'].map(tipo => `<md-filter-chip label="${tipo === 'todos' ? 'Todos' : tipo[0].toUpperCase()+tipo.slice(1)}" data-filter="${tipo}" ${state.tipoCliente===tipo?'selected':''}></md-filter-chip>`).join('')}
        </div>
      </div>
      <div class="client-list">
        ${clientesFiltrados().map(c => `
          <div class="card client-card" data-client="${c.id}">
            <div class="avatar" style="background:${c.color}">${c.id}</div>
            <div><div class="row-title">${c.nombre} ${tipoBadge(c.tipo)} ${riesgoBadge(c.riesgo)}</div><div class="client-meta"><span>${icon('mail')} ${c.email}</span><span>${icon('call')} ${c.tel}</span><span>${icon('visibility')} ${c.visita}</span></div></div>
            <div style="text-align:right"><strong>${c.compras}</strong><div class="row-sub">${c.visitas} visitas</div>${icon('chevron_right')}</div>
          </div>
        `).join('') || '<p>No se encontraron clientes con ese filtro.</p>'}
      </div>
    </div>
  `;
}

function pageDetalle() {
  const c = clientes.find(x => x.id === state.clienteDetalle) || clientes[0];
  return `
    ${title('Detalle del cliente', 'Historial, recomendaciones y acciones comerciales.', '<md-outlined-button id="volverClientes"><md-icon slot="icon">arrow_back</md-icon>Volver</md-outlined-button>')}
    <div class="card">
      <div class="client-card" style="cursor:default">
        <div class="avatar" style="width:68px;height:68px;background:${c.color}">${c.id}</div>
        <div><h2 style="margin:0 0 6px">${c.nombre}</h2><div class="client-meta"><span>${c.email}</span><span>${c.tel}</span><span>Última visita: ${c.visita}</span></div><br>${tipoBadge(c.tipo)} ${riesgoBadge(c.riesgo)}</div>
        <div class="actions"><md-filled-button data-toast="Contacto registrado para ${c.nombre}"><md-icon slot="icon">call</md-icon>Contactar</md-filled-button><md-outlined-button data-toast="Recomendación enviada a ${c.nombre}"><md-icon slot="icon">shopping_bag</md-icon>Recomendar</md-outlined-button></div>
      </div>
    </div>
    <br>
    <div class="grid-2">
      <div class="card"><div class="card-title"><h3>${icon('receipt_long')} Historial de compras</h3></div>
        <div class="row"><div><div class="row-title">Lentes progresivos y montura premium</div><div class="row-sub">Compra registrada según historial comercial.</div></div><strong>${c.compras}</strong></div>
        <div class="row"><div><div class="row-title">Revisión visual</div><div class="row-sub">Última atención: ${c.visita}</div></div><span class="badge baja">Completada</span></div>
      </div>
      <div class="card"><div class="card-title"><h3>${icon('tips_and_updates')} Recomendaciones</h3></div>
        <div class="alert"><strong>Acción sugerida</strong><br>${c.motivo}. Usar contacto personalizado y promoción vigente.</div><br>
        <md-filled-button data-toast="Recordatorio creado"><md-icon slot="icon">event_available</md-icon>Crear recordatorio</md-filled-button>
      </div>
    </div>
  `;
}

function tareasFiltradas() {
  return tareas.map((t, index) => ({...t, index})).filter(t => {
    const byEstado = state.estadoTarea === 'todas' || t.estado === state.estadoTarea;
    const byPrioridad = state.prioridadTarea === 'todas' || t.prioridad === state.prioridadTarea;
    return byEstado && byPrioridad;
  });
}

function pageSeguimiento() {
  return `
    ${title('Seguimiento y Tareas', 'Control de pendientes, contactos y cierres comerciales.')}
    <div class="grid-4">
      ${stat('Pendientes', tareas.filter(t=>t.estado==='pendiente').length, 'Por iniciar', 'schedule')}
      ${stat('Contactadas', tareas.filter(t=>t.estado==='contactada').length, 'En proceso', 'phone_enabled')}
      ${stat('Completadas', tareas.filter(t=>t.estado==='completada').length, 'Finalizadas', 'task_alt')}
      ${stat('Alta prioridad', tareas.filter(t=>t.prioridad==='alta').length, 'Atención inmediata', 'priority_high')}
    </div>
    <br>
    <div class="toolbar">
      <strong>Estado:</strong>
      <div class="chips">${['todas','pendiente','contactada','completada'].map(e => `<md-filter-chip label="${e[0].toUpperCase()+e.slice(1)}" data-estado="${e}" ${state.estadoTarea===e?'selected':''}></md-filter-chip>`).join('')}</div>
      <strong>Prioridad:</strong>
      <div class="chips">${['todas','alta','media','baja'].map(p => `<md-filter-chip label="${p[0].toUpperCase()+p.slice(1)}" data-prioridad="${p}" ${state.prioridadTarea===p?'selected':''}></md-filter-chip>`).join('')}</div>
    </div>
    <div class="list">
      ${tareasFiltradas().map(t => `
        <div class="card task-card ${t.prioridad}">
          <div class="row-title">${t.cliente} ${estadoBadge(t.estado)} <span class="badge ${t.prioridad}">${t.prioridad}</span></div>
          <h3 style="margin:.5rem 0 .2rem">${t.titulo}</h3>
          <p style="margin:.2rem 0;color:var(--md-sys-color-outline)">${t.desc}</p>
          <div class="task-meta"><span>${icon('event')} ${t.fecha}</span><span>${icon('flag')} Prioridad ${t.prioridad}</span></div>
          <div class="actions">
            <md-outlined-button data-contactar="${t.index}" ${t.estado !== 'pendiente' ? 'disabled' : ''}><md-icon slot="icon">call</md-icon>Marcar contactada</md-outlined-button>
            <md-filled-button data-completar="${t.index}" ${t.estado === 'completada' ? 'disabled' : ''}><md-icon slot="icon">task_alt</md-icon>Completar</md-filled-button>
          </div>
        </div>`).join('') || '<p>No hay tareas con ese filtro.</p>'}
    </div>
  `;
}

function pageInsights() {
  const meses = [{m:'Oct',v:32},{m:'Nov',v:38},{m:'Dic',v:49},{m:'Ene',v:43},{m:'Feb',v:40},{m:'Mar',v:45},{m:'Abr',v:57}];
  return `
    ${title('Insights de Clientes', 'Lectura rápida de ventas, comportamiento y oportunidades.')}
    <div class="grid-4">
      ${stat('Clientes activos', '156', '+12% vs mes anterior', 'groups')}
      ${stat('Ingresos totales', '$43.0M', '+8% vs mes anterior', 'payments')}
      ${stat('Ticket promedio', '$213K', '+5% vs mes anterior', 'shopping_bag')}
      ${stat('Retención', '78%', '+3% vs mes anterior', 'favorite')}
    </div>
    <br>
    <div class="grid-even">
      <div class="card"><div class="card-title"><h3>${icon('show_chart')} Tendencia de ventas</h3></div><div class="chart">${meses.map(x => `<div class="bar" style="height:${x.v*3}px">${x.m}</div>`).join('')}</div></div>
      <div class="card"><div class="card-title"><h3>${icon('donut_large')} Distribución por categoría</h3></div>
        ${['Lentes 42%','Monturas 28%','Gafas de sol 18%','Accesorios 12%'].map(x => `<div class="row"><div class="row-title">${x}</div><md-assist-chip label="Categoría"></md-assist-chip></div>`).join('')}
      </div>
    </div>
    <br>
    <div class="grid-3">
      ${clientes.slice(0,3).map((c,i)=>`<div class="card"><div class="row-title">#${i+1} ${c.nombre}</div><p class="row-sub">${c.visitas} visitas - ${c.compras}</p>${tipoBadge(c.tipo)}</div>`).join('')}
    </div>
  `;
}

function pageRedes() {
  return `
    ${title('Redes Sociales', 'Creación de publicaciones para campañas y recordatorios.')}
    <div class="grid-2">
      <div class="card form-stack">
        <div class="card-title"><h3>${icon('edit_square')} Nueva publicación</h3></div>
        <textarea id="postText">Cuida tu salud visual: agenda tu revisión en Opticalia Veravisión y recibe asesoría personalizada.</textarea>
        <div class="actions"><md-filled-button data-publicar="Instagram"><md-icon slot="icon">send</md-icon>Publicar</md-filled-button><md-outlined-button data-toast="Borrador guardado"><md-icon slot="icon">save</md-icon>Guardar borrador</md-outlined-button></div>
      </div>
      <div class="card"><div class="card-title"><h3>${icon('lightbulb')} Ideas rápidas</h3></div>
        ${ideas.map(i => `<div class="row"><div>${i}</div><md-text-button data-idea="${i}">Usar</md-text-button></div>`).join('')}
      </div>
    </div>
  `;
}

function currentPage() {
  if (state.page === 'panel') return pagePanel();
  if (state.page === 'clientes') return pageClientes();
  if (state.page === 'detalle') return pageDetalle();
  if (state.page === 'seguimiento') return pageSeguimiento();
  if (state.page === 'insights') return pageInsights();
  if (state.page === 'redes') return pageRedes();
  return pagePanel();
}

function render() {
  $('#app').innerHTML = shell(currentPage());
  bindEvents();
}

function bindEvents() {
  document.querySelectorAll('[data-page]').forEach(el => el.addEventListener('click', () => {
    state.page = el.dataset.page;
    render();
  }));
  $('#globalSearch')?.addEventListener('input', e => {
    state.filtroCliente = e.target.value;
    state.page = 'clientes';
    render();
  });
  $('#clientSearch')?.addEventListener('input', e => {
    state.filtroCliente = e.target.value;
    render();
  });
  document.querySelectorAll('[data-filter]').forEach(el => el.addEventListener('click', () => {
    state.tipoCliente = el.dataset.filter;
    render();
  }));
  document.querySelectorAll('[data-client]').forEach(el => el.addEventListener('click', () => {
    state.clienteDetalle = el.dataset.client;
    state.page = 'detalle';
    render();
  }));
  $('#volverClientes')?.addEventListener('click', () => { state.page = 'clientes'; render(); });
  $('#nuevoCliente')?.addEventListener('click', () => toast('Formulario de nuevo cliente listo para conectar.'));
  document.querySelectorAll('[data-estado]').forEach(el => el.addEventListener('click', () => { state.estadoTarea = el.dataset.estado; render(); }));
  document.querySelectorAll('[data-prioridad]').forEach(el => el.addEventListener('click', () => { state.prioridadTarea = el.dataset.prioridad; render(); }));
  document.querySelectorAll('[data-contactar]').forEach(el => el.addEventListener('click', () => { tareas[Number(el.dataset.contactar)].estado = 'contactada'; toast('Tarea marcada como contactada.'); render(); }));
  document.querySelectorAll('[data-completar]').forEach(el => el.addEventListener('click', () => { tareas[Number(el.dataset.completar)].estado = 'completada'; toast('Tarea completada.'); render(); }));
  document.querySelectorAll('[data-toast]').forEach(el => el.addEventListener('click', (event) => { event.stopPropagation(); toast(el.dataset.toast); }));
  document.querySelectorAll('[data-idea]').forEach(el => el.addEventListener('click', () => { $('#postText').value = el.dataset.idea; toast('Idea cargada en la publicación.'); }));
  document.querySelectorAll('[data-publicar]').forEach(el => el.addEventListener('click', () => toast(`Publicación enviada a ${el.dataset.publicar}.`)));
}

function toast(message) {
  let t = $('#toast');
  if (!t) return;
  t.textContent = message;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 1800);
}

render();
