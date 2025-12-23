---
layout: inventory
title: "Casos de Uso - Inventory"
lang: es
permalink: /inventory/usecases/es/
translations:
  - lang: ko
    url: /inventory/usecases/
  - lang: en
    url: /inventory/usecases/en/
  - lang: ja
    url: /inventory/usecases/ja/
  - lang: de
    url: /inventory/usecases/de/
  - lang: fr
    url: /inventory/usecases/fr/
  - lang: es
    url: /inventory/usecases/es/
  - lang: pt
    url: /inventory/usecases/pt/
---

<style>
.usecase-hero {
  text-align: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(20, 184, 166, 0.1) 100%);
  border-radius: 24px;
  margin-bottom: 3rem;
}

.usecase-hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--purple-bright) 0%, var(--teal-bright) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.usecase-hero p {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.7);
  max-width: 600px;
  margin: 0 auto;
}

.usecase-section {
  margin-bottom: 3rem;
}

.usecase-section h2 {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid rgba(168, 85, 247, 0.3);
}

.usecase-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
}

.usecase-card {
  background: rgba(10, 6, 20, 0.5);
  border: 1px solid rgba(168, 85, 247, 0.2);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.usecase-card:hover {
  border-color: rgba(168, 85, 247, 0.5);
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(168, 85, 247, 0.15);
}

.usecase-card summary {
  padding: 1.25rem;
  cursor: pointer;
  list-style: none;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.usecase-card summary::-webkit-details-marker {
  display: none;
}

.usecase-card summary::before {
  content: "▸";
  color: var(--purple-bright);
  transition: transform 0.3s ease;
}

.usecase-card[open] summary::before {
  transform: rotate(90deg);
}

.usecase-card summary h3 {
  font-size: 1rem;
  margin: 0;
  color: rgba(255, 255, 255, 0.95);
  line-height: 1.4;
}

.usecase-content {
  padding: 0 1.25rem 1.25rem;
  color: rgba(255, 255, 255, 0.75);
  font-size: 0.95rem;
  line-height: 1.7;
}

.usecase-content .persona {
  background: rgba(168, 85, 247, 0.1);
  padding: 0.75rem 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  border-left: 3px solid var(--purple-bright);
}

.usecase-content .story {
  margin-bottom: 1rem;
}

.usecase-content .feature-link {
  color: var(--teal-bright);
  text-decoration: none;
  border-bottom: 1px dotted var(--teal-bright);
}

.usecase-content .feature-link:hover {
  color: var(--purple-bright);
  border-bottom-color: var(--purple-bright);
}

.share-section {
  text-align: center;
  padding: 3rem 2rem;
  background: linear-gradient(135deg, rgba(20, 184, 166, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%);
  border-radius: 24px;
  margin-top: 3rem;
}

.share-section h2 {
  font-size: 1.75rem;
  margin-bottom: 1rem;
  color: var(--teal-bright);
}

.share-section p {
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1.5rem;
}

.share-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.75rem;
  background: linear-gradient(135deg, var(--teal-bright) 0%, var(--purple-bright) 100%);
  color: white;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.share-button:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 32px rgba(20, 184, 166, 0.3);
}

@media (max-width: 768px) {
  .usecase-hero h1 {
    font-size: 1.75rem;
  }

  .usecase-grid {
    grid-template-columns: 1fr;
  }
}
</style>

<div class="usecase-hero">
  <h1>🎯 Casos de Uso</h1>
  <p>Descubre las diversas formas en que las personas utilizan Inventory en su vida diaria. ¡Quizás encuentres tu propia forma especial!</p>
</div>

<div class="usecase-section">
  <h2>💡 Resolución de Problemas</h2>
  <div class="usecase-grid">
    <details class="usecase-card">
      <summary><h3>"Mi jefe siempre pide datos antiguos de repente"</h3></summary>
      <div class="usecase-content">
        <div class="persona">👤 Miguel, 34 años, Gerente de Proyecto en empresa de TI</div>
        <div class="story">
          <p>En las reuniones de planificación trimestral, el jefe pedía datos de hace 2-3 meses. Cada vez tenía que buscar urgentemente en Slack y correos.</p>
          <p>Ahora uso <a href="/inventory/manual/es/#paper" class="feature-link">Papel</a> para registrar decisiones clave y datos de cada reunión. Cuando el jefe los pide, los encuentro en 3 segundos.</p>
          <p>Los colegas preguntan: "¿Cómo tienes todo tan ordenado?" Ya no paso vergüenza en las reuniones.</p>
        </div>
      </div>
    </details>

    <details class="usecase-card">
      <summary><h3>"Olvidé el PIN de mi cuenta"</h3></summary>
      <div class="usecase-content">
        <div class="persona">👤 Ana, 45 años, Madre de familia</div>
        <div class="story">
          <p>Cada banco usa PIN diferente, y las reglas de contraseña son distintas. Cuando llamo al banco, olvido cuál era.</p>
          <p>Con <a href="/inventory/manual/es/#lock" class="feature-link">Bloqueo de Documento</a>, guardo los PINs de forma segura. Solo yo puedo verlos desbloqueando.</p>
          <p>Ahora hago trámites bancarios con confianza. No más momentos de pensar "¿Cuál era el PIN?"</p>
        </div>
      </div>
    </details>

    <details class="usecase-card">
      <summary><h3>"No sé qué comida le di al bebé ayer"</h3></summary>
      <div class="usecase-content">
        <div class="persona">👤 Carmen, 32 años, Madre primeriza en permiso de maternidad</div>
        <div class="story">
          <p>Empezando la alimentación complementaria a los 6 meses. Necesito introducir nuevos alimentos cada 3 días para detectar alergias, pero olvido qué le di.</p>
          <p>Con <a href="/inventory/manual/es/#log" class="feature-link">Registro</a> guardo fotos de cada comida con ingredientes. Ahora veo claramente qué le di y cuándo.</p>
          <p>En la revisión pediátrica, mostré el registro y el doctor lo elogió. "Esto es mejor que un diario de alimentación."</p>
        </div>
      </div>
    </details>

    <details class="usecase-card">
      <summary><h3>"El plazo del proyecto está cerca pero no lo sabía"</h3></summary>
      <div class="usecase-content">
        <div class="persona">👤 Daniel, 29 años, Diseñador Freelance</div>
        <div class="story">
          <p>Manejando 5-6 proyectos a la vez. Los plazos a veces se me escapaban y perdía la confianza del cliente.</p>
          <p>Uso <a href="/inventory/manual/es/#alarm" class="feature-link">Alarma de Fecha</a> para cada proyecto. Recibo alertas 7 días, 3 días y 1 día antes.</p>
          <p>Desde que uso esto, he entregado a tiempo durante 6 meses. Los clientes quedaron tan impresionados que me recomiendan a otros.</p>
        </div>
      </div>
    </details>

    <details class="usecase-card">
      <summary><h3>"Las contraseñas de todos los sitios son diferentes"</h3></summary>
      <div class="usecase-content">
        <div class="persona">👤 Roberto, 52 años, Dueño de pequeña empresa</div>
        <div class="story">
          <p>Sitios de compras, banca, gobierno... Antes usaba la misma contraseña pero me hackearon. Intenté usar diferentes pero no las recuerdo.</p>
          <p>Las guardo con <a href="/inventory/manual/es/#lock" class="feature-link">Bloqueo de Documento</a>. Organizadas por categoría para encontrarlas fácilmente.</p>
          <p>Ahora puedo tener contraseñas complejas y únicas para cada sitio. Eso es la verdadera seguridad.</p>
        </div>
      </div>
    </details>

    <details class="usecase-card">
      <summary><h3>"¿Cuándo fue la última revisión del auto?"</h3></summary>
      <div class="usecase-content">
        <div class="persona">👤 Francisco, 41 años, Representante de Ventas</div>
        <div class="story">
          <p>Conduciendo 30,000 km al año, es difícil recordar cuándo cambié aceite o neumáticos.</p>
          <p>Registro cada mantenimiento con <a href="/inventory/manual/es/#log" class="feature-link">Registro</a> y configuro <a href="/inventory/manual/es/#alarm" class="feature-link">Alarma de Fecha</a> para el próximo.</p>
          <p>Puedo mostrar el historial completo al vender. Obtuve mejor precio porque tenía registros detallados.</p>
        </div>
      </div>
    </details>

    <details class="usecase-card">
      <summary><h3>"¿Cuándo caduca este medicamento?"</h3></summary>
      <div class="usecase-content">
        <div class="persona">👤 Isabel, 67 años, Jubilada viviendo sola</div>
        <div class="story">
          <p>Tomando 5 medicamentos diferentes. Preocupada por caducidades y reabastecimiento.</p>
          <p>Fotografío cada medicamento y uso <a href="/inventory/manual/es/#dates" class="feature-link">Fecha de Caducidad</a>. Me avisa una semana antes.</p>
          <p>Ahora no tomo medicamentos caducados ni me quedo sin ellos. Mi hija dice que manejo mejor mi salud ahora.</p>
        </div>
      </div>
    </details>

    <details class="usecase-card">
      <summary><h3>"¿Dónde guardé el certificado de garantía?"</h3></summary>
      <div class="usecase-content">
        <div class="persona">👤 Laura, 38 años, Ama de casa</div>
        <div class="story">
          <p>Cuando los electrodomésticos fallan, nunca encuentro la garantía. Termino pagando reparación aunque esté en garantía.</p>
          <p>Fotografío cada garantía al comprar. Uso <a href="/inventory/manual/es/#keyword" class="feature-link">Palabras Clave</a> como #garantía #Samsung #refrigerador.</p>
          <p>Busco "garantía refrigerador" y aparece al instante. He ahorrado mucho en reparaciones.</p>
        </div>
      </div>
    </details>

    <details class="usecase-card">
      <summary><h3>"No recuerdo qué película vi"</h3></summary>
      <div class="usecase-content">
        <div class="persona">👤 Pedro, 25 años, Ingeniero de Software</div>
        <div class="story">
          <p>Veo películas cada fin de semana pero después no recuerdo ni el título. Cuando me preguntan, solo puedo decir "era buena".</p>
          <p>Registro cada película con <a href="/inventory/manual/es/#log" class="feature-link">Registro</a>. Guardo cartel, puntuación, escenas favoritas.</p>
          <p>Cuando alguien pide recomendaciones, las busco por género. Me dicen "eres como una base de datos de cine".</p>
        </div>
      </div>
    </details>

    <details class="usecase-card">
      <summary><h3>"No sé qué vino pedí la última vez"</h3></summary>
      <div class="usecase-content">
        <div class="persona">👤 Marina, 35 años, Gerente de Marketing</div>
        <div class="story">
          <p>Cuando encuentro un buen vino, quiero recordarlo pero siempre olvido el nombre. Incluso si tomo foto, luego no la encuentro.</p>
          <p>Fotografío las etiquetas y uso <a href="/inventory/manual/es/#keyword" class="feature-link">Palabras Clave</a> con variedad, país, precio, sabor.</p>
          <p>Ahora tengo mi propia lista de vinos. Mis amigos me piden recomendaciones según su presupuesto.</p>
        </div>
      </div>
    </details>

    <details class="usecase-card">
      <summary><h3>"¿Cuándo renovar el pasaporte?"</h3></summary>
      <div class="usecase-content">
        <div class="persona">👤 Carlos, 44 años, Consultor de Negocios Internacionales</div>
        <div class="story">
          <p>Viajo frecuentemente. Casi pierdo un vuelo porque el pasaporte caducó sin darme cuenta.</p>
          <p>Registro pasaporte y visas con <a href="/inventory/manual/es/#dates" class="feature-link">Fecha de Caducidad</a>. Alertas automáticas 2 meses antes.</p>
          <p>Ahora nunca me sorprende una caducidad. También registro números de viajero frecuente y membresías de aerolíneas.</p>
        </div>
      </div>
    </details>

    <details class="usecase-card">
      <summary><h3>"Compré lo mismo dos veces"</h3></summary>
      <div class="usecase-content">
        <div class="persona">👤 Teresa, 55 años, Organizadora de eventos familiares</div>
        <div class="story">
          <p>Comprando cosas para fiestas familiares, a veces compro decoraciones que ya tenía.</p>
          <p>Registro todos mis suministros con <a href="/inventory/manual/es/#paper" class="feature-link">Papel</a>. Reviso antes de ir de compras.</p>
          <p>No más compras duplicadas. Y sé exactamente dónde está cada cosa guardada.</p>
        </div>
      </div>
    </details>
  </div>
</div>

<div class="usecase-section">
  <h2>💝 Experiencias Emocionales</h2>
  <div class="usecase-grid">
    <details class="usecase-card">
      <summary><h3>"Quiero guardar lo que dice mi hijo antes de olvidarlo"</h3></summary>
      <div class="usecase-content">
        <div class="persona">👤 Lucía, 36 años, Madre trabajadora</div>
        <div class="story">
          <p>Mi hijo de 4 años dice cosas adorables y únicas. Quiero recordarlas pero siempre las olvido.</p>
          <p>Uso <a href="/inventory/manual/es/#paper" class="feature-link">Papel</a> para registrar sus palabras al instante. A veces con foto de su carita.</p>
          <p>Ya tengo 300 "frases memorables". Será el mejor regalo cuando crezca. Lloro de felicidad leyéndolas.</p>
        </div>
      </div>
    </details>

    <details class="usecase-card">
      <summary><h3>"Registro las cartas de mamá"</h3></summary>
      <div class="usecase-content">
        <div class="persona">👤 Antonio, 48 años, Empresario</div>
        <div class="story">
          <p>Mamá me mandaba cartas cuando trabajaba en el extranjero. Temo que se deterioren con el tiempo.</p>
          <p>Digitalicé todas las cartas con <a href="/inventory/manual/es/#paper" class="feature-link">Papel</a>. Puedo ver su letra cuando la extraño.</p>
          <p>Mamá falleció el año pasado. Estas cartas son ahora mi tesoro más preciado.</p>
        </div>
      </div>
    </details>

    <details class="usecase-card">
      <summary><h3>"Guardando el camino hacia mi sueño"</h3></summary>
      <div class="usecase-content">
        <div class="persona">👤 Sofía, 23 años, Aspirante a diseñadora de moda</div>
        <div class="story">
          <p>Preparándome para mi propia marca. Quiero guardar cada boceto, inspiración y comentario.</p>
          <p>Organizo todo con <a href="/inventory/manual/es/#partition" class="feature-link">Partición</a>: inspiración, bocetos, muestras, feedback.</p>
          <p>Cuando me siento desanimada, veo mi progreso desde el principio. Me recuerda cuánto he avanzado.</p>
        </div>
      </div>
    </details>

    <details class="usecase-card">
      <summary><h3>"Colecciono atardeceres"</h3></summary>
      <div class="usecase-content">
        <div class="persona">👤 Fernando, 62 años, Profesor jubilado</div>
        <div class="story">
          <p>Empecé a fotografiar atardeceres como hobby. Quiero recordar dónde y cuándo vi cada uno.</p>
          <p>Registro cada atardecer con <a href="/inventory/manual/es/#log" class="feature-link">Registro</a>. Lugar, clima, mis emociones del momento.</p>
          <p>Mi colección de 500 atardeceres es mi galería personal. Cada uno tiene una historia especial.</p>
        </div>
      </div>
    </details>

    <details class="usecase-card">
      <summary><h3>"Nuestra historia de amor"</h3></summary>
      <div class="usecase-content">
        <div class="persona">👤 Pablo y Elena, Pareja de 5 años</div>
        <div class="story">
          <p>Queremos recordar cada momento especial de nuestra relación. Las fotos en el teléfono se pierden entre miles.</p>
          <p>Creamos un espacio compartido con <a href="/inventory/manual/es/#log-compartido" class="feature-link">Registro Compartido</a>. Cada fecha especial, cada pequeño momento.</p>
          <p>Lo repasamos en cada aniversario. Es nuestro álbum de amor digital.</p>
        </div>
      </div>
    </details>

    <details class="usecase-card">
      <summary><h3>"Mis plantas son mi familia"</h3></summary>
      <div class="usecase-content">
        <div class="persona">👤 Raquel, 29 años, Diseñadora gráfica trabajando desde casa</div>
        <div class="story">
          <p>Tengo 47 plantas en casa. Cada una tiene necesidades diferentes de agua y luz.</p>
          <p>Cada planta tiene su <a href="/inventory/manual/es/#paper" class="feature-link">Papel</a> con nombre, fecha de adopción, cuidados especiales.</p>
          <p>Mis amigas dicen que trato mis plantas mejor que algunas personas tratan a sus mascotas. Y tienen razón.</p>
        </div>
      </div>
    </details>

    <details class="usecase-card">
      <summary><h3>"El progreso de mi perro"</h3></summary>
      <div class="usecase-content">
        <div class="persona">👤 Jorge, 33 años, Ingeniero civil con Golden Retriever</div>
        <div class="story">
          <p>Max llegó a mi vida hace 2 años. Quiero recordar cada etapa de su crecimiento.</p>
          <p>Con <a href="/inventory/manual/es/#log" class="feature-link">Registro</a> guardo fotos mensuales, visitas al veterinario, trucos aprendidos.</p>
          <p>Ver su transformación de cachorro a adulto me llena de alegría. Es como un álbum de su vida.</p>
        </div>
      </div>
    </details>

    <details class="usecase-card">
      <summary><h3>"Cada café es una historia"</h3></summary>
      <div class="usecase-content">
        <div class="persona">👤 Natalia, 27 años, Barista y entusiasta del café</div>
        <div class="story">
          <p>Visito cafeterías por todo el país. Quiero recordar cada lugar especial y qué pedí.</p>
          <p>Registro cada café con <a href="/inventory/manual/es/#paper" class="feature-link">Papel</a>. Foto del lugar, del café, notas de sabor.</p>
          <p>Ya tengo 200 cafeterías registradas. Mis seguidores en redes me piden mi "mapa de cafés".</p>
        </div>
      </div>
    </details>

    <details class="usecase-card">
      <summary><h3>"Mi viaje de pérdida de peso"</h3></summary>
      <div class="usecase-content">
        <div class="persona">👤 Marcos, 38 años, Contador que perdió 25 kg</div>
        <div class="story">
          <p>Decidí cambiar mi vida. Quería documentar cada paso, cada pequeña victoria.</p>
          <p>Registro comidas, ejercicio y pesajes con <a href="/inventory/manual/es/#log" class="feature-link">Registro</a>. Fotos semanales del espejo.</p>
          <p>Ver 18 meses de progreso me emociona. Cuando dudo, miro el inicio. Nunca volveré atrás.</p>
        </div>
      </div>
    </details>

    <details class="usecase-card">
      <summary><h3>"Las recetas de la abuela"</h3></summary>
      <div class="usecase-content">
        <div class="persona">👤 Carmen, 42 años, Maestra que heredó recetas familiares</div>
        <div class="story">
          <p>La abuela cocinaba increíble pero nunca escribió sus recetas. Cuando falleció, temí perderlas.</p>
          <p>Grabé a mamá cocinando los platos de la abuela. Todo en <a href="/inventory/manual/es/#paper" class="feature-link">Papel</a> con fotos y notas.</p>
          <p>Ahora enseño a mis hijos. Las recetas de la abuela vivirán por generaciones.</p>
        </div>
      </div>
    </details>
  </div>
</div>

<div class="usecase-section">
  <h2>📖 Historias</h2>
  <div class="usecase-grid">
    <details class="usecase-card">
      <summary><h3>"Manejando 3 propiedades de alquiler sin estrés"</h3></summary>
      <div class="usecase-content">
        <div class="persona">👤 Alberto, 56 años, Médico con propiedades de inversión</div>
        <div class="story">
          <p>Tengo 3 apartamentos de alquiler. Contratos, reparaciones, pagos... Todo era un caos.</p>
          <p>Con <a href="/inventory/manual/es/#partition" class="feature-link">Partición</a> organizo cada propiedad: contratos, recibos, comunicaciones con inquilinos.</p>
          <p>Cuando un inquilino pregunta algo, lo encuentro en segundos. Antes me tomaba media hora buscar papeles.</p>
        </div>
      </div>
    </details>

    <details class="usecase-card">
      <summary><h3>"Mi abuelo nunca perdió una cita médica"</h3></summary>
      <div class="usecase-content">
        <div class="persona">👤 Rosa, 34 años, Nieta cuidadora</div>
        <div class="story">
          <p>El abuelo tiene 82 años y múltiples especialistas. Yo manejo todas sus citas y medicamentos.</p>
          <p>Configuré <a href="/inventory/manual/es/#alarm" class="feature-link">Alarma de Fecha</a> para cada cita. También registro resultados con <a href="/inventory/manual/es/#log" class="feature-link">Registro</a>.</p>
          <p>Los médicos me felicitan por tener todo tan organizado. El abuelo está mejor cuidado que nunca.</p>
        </div>
      </div>
    </details>

    <details class="usecase-card">
      <summary><h3>"Mi negocio de pasteles creció gracias a esto"</h3></summary>
      <div class="usecase-content">
        <div class="persona">👤 Patricia, 31 años, Pastelera emprendedora</div>
        <div class="story">
          <p>Empecé vendiendo pasteles desde casa. Recetas, pedidos, costos... Todo mezclado en mi cabeza.</p>
          <p>Organicé recetas con <a href="/inventory/manual/es/#paper" class="feature-link">Papel</a>, pedidos con <a href="/inventory/manual/es/#alarm" class="feature-link">Alarma de Fecha</a>.</p>
          <p>Pasé de 5 pedidos al mes a 50. Nunca olvido una entrega. Los clientes confían en mi profesionalismo.</p>
        </div>
      </div>
    </details>

    <details class="usecase-card">
      <summary><h3>"Sobreviví la planificación de mi boda"</h3></summary>
      <div class="usecase-content">
        <div class="persona">👤 Alejandra, 28 años, Novia organizando su boda</div>
        <div class="story">
          <p>Planificar una boda es un trabajo de tiempo completo. Proveedores, presupuesto, invitados...</p>
          <p>Todo en <a href="/inventory/manual/es/#partition" class="feature-link">Partición</a>: venue, catering, vestido, invitaciones. Plazos con <a href="/inventory/manual/es/#alarm" class="feature-link">Alarma</a>.</p>
          <p>Mi organizadora de bodas dijo que nunca vio una novia tan organizada. La boda fue perfecta.</p>
        </div>
      </div>
    </details>

    <details class="usecase-card">
      <summary><h3>"Administro el inventario de mi restaurante"</h3></summary>
      <div class="usecase-content">
        <div class="persona">👤 Miguel, 45 años, Dueño de restaurante familiar</div>
        <div class="story">
          <p>Un restaurante pequeño no justifica un sistema caro. Pero necesito controlar stock y proveedores.</p>
          <p>Uso <a href="/inventory/manual/es/#paper" class="feature-link">Papel</a> para cada producto. <a href="/inventory/manual/es/#dates" class="feature-link">Caducidad</a> para perecederos.</p>
          <p>Reduje el desperdicio un 30%. Sé exactamente qué pedir y cuándo. Simple pero efectivo.</p>
        </div>
      </div>
    </details>

    <details class="usecase-card">
      <summary><h3>"Documenté toda la renovación de mi casa"</h3></summary>
      <div class="usecase-content">
        <div class="persona">👤 David, 40 años, Propietario renovando su casa</div>
        <div class="story">
          <p>Renovación de 6 meses. Presupuestos, facturas, garantías, antes/después de cada habitación.</p>
          <p>Todo en <a href="/inventory/manual/es/#partition" class="feature-link">Partición</a> por habitación y tipo de documento. Fotos con <a href="/inventory/manual/es/#log" class="feature-link">Registro</a>.</p>
          <p>Cuando algo falla, tengo el contacto del contratista y la garantía al instante. Invaluable.</p>
        </div>
      </div>
    </details>

    <details class="usecase-card">
      <summary><h3>"Mi colección de vinilos está catalogada"</h3></summary>
      <div class="usecase-content">
        <div class="persona">👤 Rodrigo, 52 años, Coleccionista de vinilos</div>
        <div class="story">
          <p>2,000 vinilos acumulados en 30 años. Sabía que tenía duplicados pero no sabía cuáles.</p>
          <p>Fotografié cada uno con <a href="/inventory/manual/es/#paper" class="feature-link">Papel</a>. Artista, año, estado, precio pagado.</p>
          <p>Encontré que tenía 50 duplicados. Los vendí y compré vinilos que realmente quería.</p>
        </div>
      </div>
    </details>

    <details class="usecase-card">
      <summary><h3>"Nunca más pierdo facturas para impuestos"</h3></summary>
      <div class="usecase-content">
        <div class="persona">👤 Marta, 39 años, Autónoma</div>
        <div class="story">
          <p>Cada año, buscar facturas para la declaración era una pesadilla. Algunas las había perdido.</p>
          <p>Fotografío cada factura inmediatamente. Las organizo con <a href="/inventory/manual/es/#keyword" class="feature-link">Palabras Clave</a> por tipo de gasto.</p>
          <p>Mi contable dice que soy su cliente más organizada. Y deduzco más porque no pierdo nada.</p>
        </div>
      </div>
    </details>

    <details class="usecase-card">
      <summary><h3>"Coordino un equipo de voluntarios"</h3></summary>
      <div class="usecase-content">
        <div class="persona">👤 Elena, 50 años, Coordinadora de ONG local</div>
        <div class="story">
          <p>Manejo 30 voluntarios para un banco de alimentos. Horarios, contactos, certificaciones...</p>
          <p>Cada voluntario tiene un <a href="/inventory/manual/es/#paper" class="feature-link">Papel</a>. Comparto información con <a href="/inventory/manual/es/#log-compartido" class="feature-link">Registro Compartido</a>.</p>
          <p>La coordinación mejoró muchísimo. Los voluntarios se sienten valorados porque tengo sus datos al día.</p>
        </div>
      </div>
    </details>

    <details class="usecase-card">
      <summary><h3>"Mi hijo estudió mejor para sus exámenes"</h3></summary>
      <div class="usecase-content">
        <div class="persona">👤 Beatriz, 44 años, Madre de estudiante de secundaria</div>
        <div class="story">
          <p>Mi hijo tenía problemas organizando el estudio para exámenes. Siempre olvidaba fechas.</p>
          <p>Le enseñé a usar <a href="/inventory/manual/es/#alarm" class="feature-link">Alarma de Fecha</a> para exámenes y <a href="/inventory/manual/es/#paper" class="feature-link">Papel</a> para apuntes clave.</p>
          <p>Sus notas mejoraron notablemente. Dice que ahora sabe exactamente qué estudiar y cuándo.</p>
        </div>
      </div>
    </details>
  </div>
</div>

<div class="usecase-section">
  <h2>🎨 Usos Creativos</h2>
  <div class="usecase-grid">
    <details class="usecase-card">
      <summary><h3>"Mi diario de sueños"</h3></summary>
      <div class="usecase-content">
        <div class="persona">👤 Andrea, 26 años, Estudiante de psicología</div>
        <div class="story">
          <p>Me interesa el análisis de sueños. Quería registrarlos pero siempre olvidaba detalles al despertar.</p>
          <p>Tengo Inventory en la mesita de noche. Al despertar, registro inmediatamente con <a href="/inventory/manual/es/#paper" class="feature-link">Papel</a>.</p>
          <p>Después de un año, encontré patrones fascinantes. Mi tesis de grado será sobre esto.</p>
        </div>
      </div>
    </details>

    <details class="usecase-card">
      <summary><h3>"Catálogo de mis obras de arte"</h3></summary>
      <div class="usecase-content">
        <div class="persona">👤 Javier, 35 años, Artista plástico</div>
        <div class="story">
          <p>Tengo más de 200 obras en 10 años. Dimensiones, técnica, precio, ubicación... Era imposible rastrear.</p>
          <p>Cada obra tiene su <a href="/inventory/manual/es/#paper" class="feature-link">Papel</a>. Foto de alta calidad, todos los detalles, historial de ventas.</p>
          <p>Cuando una galería pregunta por mis obras, envío información profesional al instante.</p>
        </div>
      </div>
    </details>

    <details class="usecase-card">
      <summary><h3>"Mi archivo de tipografías"</h3></summary>
      <div class="usecase-content">
        <div class="persona">👤 Daniela, 29 años, Diseñadora gráfica</div>
        <div class="story">
          <p>Colecciono tipografías inspiradoras. Capturas de carteles, empaques, señalización...</p>
          <p>Las organizo con <a href="/inventory/manual/es/#keyword" class="feature-link">Palabras Clave</a>: estilo, uso, época.</p>
          <p>Es mi biblioteca de referencia personal. Cuando necesito inspiración, la encuentro en segundos.</p>
        </div>
      </div>
    </details>

    <details class="usecase-card">
      <summary><h3>"Documentando mi jardín estación por estación"</h3></summary>
      <div class="usecase-content">
        <div class="persona">👤 Roberto, 58 años, Jardinero aficionado</div>
        <div class="story">
          <p>Mi jardín cambia dramáticamente cada estación. Quiero recordar qué planté dónde y cómo floreció.</p>
          <p>Cada planta tiene <a href="/inventory/manual/es/#log" class="feature-link">Registro</a> mensual. Foto, estado, cuidados aplicados.</p>
          <p>Ahora planifico mejor cada temporada. Sé exactamente qué funcionó y qué no en años anteriores.</p>
        </div>
      </div>
    </details>

    <details class="usecase-card">
      <summary><h3>"Mi registro de meditación"</h3></summary>
      <div class="usecase-content">
        <div class="persona">👤 Carolina, 32 años, Instructora de yoga</div>
        <div class="story">
          <p>Medito diariamente. Quería registrar duración, técnica, y cómo me sentía después.</p>
          <p>Con <a href="/inventory/manual/es/#log" class="feature-link">Registro</a> guardo cada sesión. También guardo frases inspiradoras que encuentro.</p>
          <p>Puedo ver mi progreso de 10 minutos a 45. También comparto técnicas con mis alumnos.</p>
        </div>
      </div>
    </details>

    <details class="usecase-card">
      <summary><h3>"Mi lista de lugares por visitar"</h3></summary>
      <div class="usecase-content">
        <div class="persona">👤 Tomás, 27 años, Diseñador industrial viajero</div>
        <div class="story">
          <p>Cuando veo un lugar interesante en redes o películas, quiero guardarlo para visitarlo algún día.</p>
          <p>Cada lugar con <a href="/inventory/manual/es/#paper" class="feature-link">Papel</a>. Foto, ubicación, por qué quiero ir, mejor época para visitar.</p>
          <p>Mi lista de "algún día" ya tiene 150 lugares. Cada viaje que planifico, consulto mi inventario de sueños.</p>
        </div>
      </div>
    </details>

    <details class="usecase-card">
      <summary><h3>"Archivo de mi banda"</h3></summary>
      <div class="usecase-content">
        <div class="persona">👤 Luis, 24 años, Guitarrista de banda local</div>
        <div class="story">
          <p>Mi banda tiene 5 años. Letras, progresiones, demos, carteles de conciertos... Todo disperso.</p>
          <p>Centralicé todo en <a href="/inventory/manual/es/#partition" class="feature-link">Partición</a>. Canciones, merchandising, contactos, historial de shows.</p>
          <p>Cuando una disquera preguntó por nuestra historia, teníamos todo profesionalmente documentado.</p>
        </div>
      </div>
    </details>

    <details class="usecase-card">
      <summary><h3>"Mi guía de restaurantes personalizada"</h3></summary>
      <div class="usecase-content">
        <div class="persona">👤 Ana María, 37 años, Crítica gastronómica amateur</div>
        <div class="story">
          <p>Como fuera frecuentemente. Google Maps no me deja anotar qué pedí o cómo estaba realmente.</p>
          <p>Cada restaurante con <a href="/inventory/manual/es/#paper" class="feature-link">Papel</a>. Fotos de platos, precios, ambiente, qué pedir y qué evitar.</p>
          <p>Mis amigos siempre me piden recomendaciones. Les comparto exactamente qué ordenar en cada lugar.</p>
        </div>
      </div>
    </details>
  </div>
</div>

<div class="share-section">
  <h2>📮 ¡Cuéntanos cómo usas Inventory!</h2>
  <p>¿Tienes tu propia forma única de usar Inventory? ¡Nos encantaría conocerla y compartirla con otros usuarios!</p>
  <a href="mailto:goolzy.company@gmail.com?subject=Mi forma de usar Inventory&body=Hola, quiero compartir cómo uso Inventory:%0A%0A" class="share-button">
    ✉️ Compartir mi experiencia
  </a>
</div>
