import { Content, Language } from './types';

export const CONTENT: Record<Language, Content> = {
  [Language.ES]: {
    nav: {
      home: 'Inicio',
      services: 'AI Agent Workers',
      workflow: 'Eficiencia',
      methodology: 'Implementación',
      contact: 'Agendar Demo',
    },
    hero: {
      badge: 'AUTOMATIZACIÓN DE ALTO ROI',
      title: 'Escale sus Operaciones Sin Aumentar la Nómina',
      subtitle: 'Deje de contratar para tareas operativas. Nuestros Agentes de IA soberanos automatizan procesos complejos en Fintech, Legal y Logística, reduciendo costos un 40% y permitiéndole crecer sin fricción humana.',
      cta: 'Solicitar Demo a Medida',
      explore: 'Cómo Funciona',
    },
    trustedBy: {
      title: 'Empresas que optimizan costos con IAnalytics',
    },
    services: {
      title: 'Infraestructura de Fuerza Laboral Digital',
      subtitle: 'Más allá de los chatbots. Construimos empleados digitales autónomos que ejecutan transacciones, analizan documentos y optimizan logística 24/7 con precisión auditada.',
      items: [
        {
          title: 'Agentes Transaccionales',
          description: 'Reduzca el error humano a cero. Ejecución autónoma de pagos, conciliación y movimientos financieros con trazabilidad total.',
          icon: 'cpu',
        },
        {
          title: 'Human-in-the-Loop',
          description: 'Eficiencia supervisada. Interfaces donde su equipo experto valida solo las decisiones críticas, multiplicando su productividad.',
          icon: 'users',
        },
        {
          title: 'Enjambre Multi-Agente',
          description: 'Trabajo colaborativo real. Agentes de Planificación, Ejecución y Crítica orquestan tareas complejas para resolver problemas de negocio.',
          icon: 'layers',
        },
        {
          title: 'Expertos de Dominio',
          description: 'Entrenados en su data propietaria. Agentes que entienden la jerga legal y técnica mejor que un junior, listos desde el día uno.',
          icon: 'message',
        },
        {
          title: 'Seguridad Bancaria',
          description: 'Protección de activos. Despliegue en infraestructuras privadas (VPC/On-Premise) cumpliendo estrictamente SOC2 y GDPR.',
          icon: 'shield',
        },
        {
          title: 'Software a Medida',
          description: 'Integración profunda. Ingeniería full-stack para que los agentes operen directamente sobre sus ERPs y bases de datos actuales.',
          icon: 'code',
        },
      ],
    },
    workflow: {
      title: 'Motor de Eficiencia Operativa',
      subtitle: 'Transforme procesos manuales lentos en flujos de trabajo autónomos de alta velocidad. Precisión absoluta mediante RAG Híbrido y Protocolos MCP.',
      tabs: {
        fintech: 'Fintech (Costos)',
        legal: 'Legal (Tiempo)',
        logistics: 'Logística (Eficiencia)',
      },
      steps: {
        fintech: [
            { title: 'Ingesta Automatizada', desc: 'Eliminación de data entry manual. Conexión directa a Core Bancario y lectura inteligente de documentos.', icon: 'ingest' },
            { title: 'Análisis de Riesgo', desc: 'Reducción de fraude. Agentes analizan patrones en milisegundos usando múltiples fuentes de datos.', icon: 'brain' },
            { title: 'Validación Experta', desc: 'Control de calidad. El personal humano solo interviene en excepciones de alto valor.', icon: 'human' },
            { title: 'Ejecución Inmediata', desc: 'Liquidación instantánea. Operaciones finalizadas sin latencia administrativa.', icon: 'action' },
        ],
        legal: [
            { title: 'Auditoría Documental', desc: 'Lectura masiva. Procesamiento de miles de contratos y expedientes en minutos, no semanas.', icon: 'ingest' },
            { title: 'Estrategia Jurídica', desc: 'Investigación profunda. Agentes consultan jurisprudencia y sugieren estrategias basadas en datos.', icon: 'brain' },
            { title: 'Revisión de Socio', desc: 'Maximización del billable hour. Los abogados senior revisan borradores finales de alta calidad.', icon: 'human' },
            { title: 'Filing Automático', desc: 'Presentación puntual. Generación y envío de escritos legales a plataformas judiciales.', icon: 'action' },
        ],
        logistics: [
            { title: 'Telemetría Real', desc: 'Visibilidad total. Monitoreo constante de flota, clima e inventario sin intervención humana.', icon: 'ingest' },
            { title: 'Optimización de Ruta', desc: 'Ahorro de combustible. Agentes negocian dinámicamente rutas para minimizar costos operativos.', icon: 'brain' },
            { title: 'Gestión de Excepciones', desc: 'Resolución proactiva. Jefes de flota autorizan desvíos solo cuando impactan el margen.', icon: 'human' },
            { title: 'Despacho Autónomo', desc: 'Eficiencia logística. Reasignación automática de recursos para cumplir SLAs.', icon: 'action' },
        ]
      }
    },
    demo: {
      title: 'Audite a su Futuro Agente',
      subtitle: 'No confíe solo en nuestra palabra. Interactúe con nuestra tecnología en tiempo real y evalúe la capacidad de razonamiento que traerá eficiencia a su empresa.',
      agentGreeting: 'Bienvenido. Soy el agente demostrativo de IAnalytics. Estoy diseñado para mostrarle cómo podemos reducir sus costos operativos y automatizar sus procesos. ¿En qué industria opera?',
      placeholder: 'Pregunte sobre reducción de costos, automatización...',
      disclaimer: 'Demo impulsada por Gemini 2.5 Flash. Los resultados en producción se ajustan a su data específica.',
    },
    methodology: {
      title: 'Ingeniería para el Retorno de Inversión',
      subtitle: 'Un proceso estructurado para llevar la automatización de la estrategia al balance general.',
      step1Title: 'Diseño de Rentabilidad',
      step1Desc: 'Identificamos los cuellos de botella más costosos y diseñamos la arquitectura de agentes para resolverlos.',
      step2Title: 'Construcción & Training',
      step2Desc: 'Desarrollo de AI Agent Workers y entrenamiento con sus datos para garantizar precisión operativa.',
      step3Title: 'Despliegue & Escalamiento',
      step3Desc: 'Integración segura en producción y monitoreo de KPIs para medir el ahorro de costos real.',
    },
    footer: {
      rights: 'Todos los derechos reservados.',
      privacy: 'Política de Privacidad',
      terms: 'Términos de Servicio',
    },
  },
  [Language.EN]: {
    nav: {
      home: 'Home',
      services: 'AI Agent Workers',
      workflow: 'Efficiency',
      methodology: 'Deployment',
      contact: 'Book Demo',
    },
    hero: {
      badge: 'ROI-DRIVEN AUTOMATION',
      title: 'Scale Your Operations Without Increasing Headcount',
      subtitle: 'Stop hiring for repetitive tasks. Our sovereign AI Agents automate complex operations in Fintech, Legal, and Logistics, cutting operational costs by 40% allowing you to grow friction-free.',
      cta: 'Get a Custom Demo',
      explore: 'How it Works',
    },
    trustedBy: {
      title: 'Companies optimizing costs with IAnalytics',
    },
    services: {
      title: 'Digital Workforce Infrastructure',
      subtitle: 'Beyond chatbots. We build autonomous digital employees that execute transactions, analyze documents, and optimize logistics 24/7 with audited precision.',
      items: [
        {
          title: 'Transactional Agents',
          description: 'Reduce human error to zero. Autonomous execution of payments, reconciliation, and financial movements with full traceability.',
          icon: 'cpu',
        },
        {
          title: 'Human-in-the-Loop',
          description: 'Supervised efficiency. Interfaces where your expert team validates only critical decisions, multiplying their productivity.',
          icon: 'users',
        },
        {
          title: 'Multi-Agent Swarm',
          description: 'Real collaborative work. Planning, Execution, and Critic agents orchestrate complex tasks to solve business problems.',
          icon: 'layers',
        },
        {
          title: 'Domain Experts',
          description: 'Trained on your proprietary data. Agents that understand legal and technical jargon better than a junior, ready from day one.',
          icon: 'message',
        },
        {
          title: 'Bank Grade Security',
          description: 'Asset protection. Deployment on private infrastructures (VPC/On-Premise) strictly complying with SOC2 and GDPR.',
          icon: 'shield',
        },
        {
          title: 'Custom Software',
          description: 'Deep integration. Full-stack engineering so agents operate directly on top of your current ERPs and databases.',
          icon: 'code',
        },
      ],
    },
    workflow: {
      title: 'Operational Efficiency Engine',
      subtitle: 'Transform slow manual processes into high-speed autonomous workflows. Absolute precision via Hybrid RAG and MCP Protocols.',
      tabs: {
        fintech: 'Fintech (Costs)',
        legal: 'Legal (Time)',
        logistics: 'Logistics (Efficiency)',
      },
      steps: {
        fintech: [
            { title: 'Automated Ingestion', desc: 'Eliminate manual data entry. Direct connection to Core Banking and intelligent document reading.', icon: 'ingest' },
            { title: 'Risk Analysis', desc: 'Fraud reduction. Agents analyze patterns in milliseconds using multiple data sources.', icon: 'brain' },
            { title: 'Expert Validation', desc: 'Quality control. Human staff only intervenes in high-value exceptions.', icon: 'human' },
            { title: 'Immediate Execution', desc: 'Instant settlement. Operations finalized without administrative latency.', icon: 'action' },
        ],
        legal: [
            { title: 'Document Audit', desc: 'Massive reading. Processing thousands of contracts and files in minutes, not weeks.', icon: 'ingest' },
            { title: 'Legal Strategy', desc: 'Deep research. Agents consult case law and suggest data-driven strategies.', icon: 'brain' },
            { title: 'Partner Review', desc: 'Maximize billable hours. Senior lawyers review high-quality final drafts.', icon: 'human' },
            { title: 'Auto-Filing', desc: 'Timely submission. Generation and filing of legal briefs to judicial platforms.', icon: 'action' },
        ],
        logistics: [
            { title: 'Real-Time Telemetry', desc: 'Total visibility. Constant monitoring of fleet, weather, and inventory without human intervention.', icon: 'ingest' },
            { title: 'Route Optimization', desc: 'Fuel savings. Agents dynamically negotiate routes to minimize operational costs.', icon: 'brain' },
            { title: 'Exception Management', desc: 'Proactive resolution. Fleet managers authorize deviations only when margins are impacted.', icon: 'human' },
            { title: 'Autonomous Dispatch', desc: 'Logistics efficiency. Automatic resource reallocation to meet SLAs.', icon: 'action' },
        ]
      }
    },
    demo: {
      title: 'Audit Your Future Agent',
      subtitle: 'Don\'t just take our word for it. Interact with our technology in real-time and evaluate the reasoning capability that will bring efficiency to your company.',
      agentGreeting: 'Welcome. I am the IAnalytics demo agent. I am designed to show you how we can reduce your operational costs and automate your processes. Which industry are you in?',
      placeholder: 'Ask about cost reduction, automation...',
      disclaimer: 'Demo powered by Gemini 2.5 Flash. Production results are tuned to your specific data.',
    },
    methodology: {
      title: 'Engineering for ROI',
      subtitle: 'A structured process to take automation from strategy to the balance sheet.',
      step1Title: 'Profitability Design',
      step1Desc: 'We identify the most costly bottlenecks and design the agent architecture to solve them.',
      step2Title: 'Build & Train',
      step2Desc: 'Development of AI Agent Workers and training with your data to ensure operational precision.',
      step3Title: 'Deploy & Scale',
      step3Desc: 'Secure production integration and KPI monitoring to measure actual cost savings.',
    },
    footer: {
      rights: 'All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
    },
  },
};