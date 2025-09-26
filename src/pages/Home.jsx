// Importações necessárias
import { Link } from 'react-router-dom'; // Para navegação entre páginas
import { motion } from 'framer-motion'; // Para animações suaves
import { Shield, Zap, Users, Calendar, Activity, FileText } from 'lucide-react'; // Ícones vetoriais
import { Button } from '../components/Button'; // Botão customizado do projeto

// Página inicial (Home)
export const Home = () => {
  // Lista de recursos/funcionalidades que serão exibidos na seção de "features"
  const features = [
    {
      icon: Calendar,
      title: 'Agenda Dinâmica',
      description: 'Visualização de horários disponíveis com marcação automática e lembretes por e-mail'
    },
    {
      icon: Shield,
      title: 'Privacidade Garantida',
      description: 'Autenticação segura via JWT e proteção total dos dados sensíveis dos pacientes'
    },
    {
      icon: Activity,
      title: 'Análise Inteligente',
      description: 'Machine Learning para identificar padrões emocionais e agrupar perfis de risco'
    },
    {
      icon: Users,
      title: 'Impacto Social',
      description: 'Voltado para projetos voluntários, universidades e ONGs que oferecem apoio psicológico'
    },
    {
      icon: FileText,
      title: 'Histórico Estruturado',
      description: 'Registro organizado de sessões com temas, recomendações e evolução do paciente'
    },
    {
      icon: Zap,
      title: 'Interface Acolhedora',
      description: 'Design responsivo e acessível, pensado para conforto emocional dos usuários'
    }
  ];

  return (
    <div>
      {/* ================= HERO SECTION ================= */}
      <section className="min-h-screen flex items-center justify-center py-20">
        <motion.div
          initial={{ opacity: 0, x: -100, y:100 }}
          animate={{ opacity: 1, x: 0, y:0 }}
          transition={{ duration: 2.8 }}
          className="flex flex-col md:flex-row items-center md:items-start gap-12 text-center md:text-left"
        >
          {/* Texto (esquerda) */}
          <div className="flex-1">
            <h1 className="text-5xl sm:text-5xl font-bold text-white mb-6 font"
            style={{ fontFamily: '"ZCOOL QingKe HuangYou", serif' }}
            >
              Lunysse
            </h1>

            <h2 className="text-2xl md:text-3xl font-medium text-white mb-6">
              Sistema de Agendamento Psicológico
            </h2>

            <p className="text-xl text-white mb-8 max-w-3xl leading-relaxed font"
              style={{ fontFamily: '"Press Start 2P", serif' }}
            >
              Plataforma digital que otimiza o agendamento e gestão de atendimentos psicológicos voluntários.
              Desenvolvida para universidades, ONGs e projetos sociais que promovem saúde mental.
            </p>

            {/* Botões */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/register">
                <Button size="lg" className="w-full sm:w-auto">
                  Começar Agora
                </Button>
              </Link>

              <a
                href="#features"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("features").scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  Conhecer Recursos
                </Button>
              </a>
            </div>
          </div>

          {/* Logo (direita) */}
          <div className="w-100 h-100 rounded-3xl flex items-center justify-center shadow-2xl overflow-hidden bg-white">
            <img src="/logo.png" alt="Lunysse" className="w-full h-full object-cover" />
          </div>
        </motion.div>
      </section>


      {/* ================= FEATURES SECTION ================= */}
      <section id="features" className="min-h-screen flex items-center py-20">
        <div className="w-full">
          {/* Título da seção */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }} // Só anima quando o usuário vê no scroll
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Tecnologia a Serviço do Cuidado
              </h2>
              <p className="text-xl text-white max-w-3xl mx-auto">
                Ferramentas inteligentes para organizar, acompanhar e potencializar atendimentos voluntários
              </p>
            </motion.div>
          </div>

          {/* Grid com os recursos (features) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }} // Cada card aparece ao entrar na tela
                transition={{ delay: index * 0.1, duration: 0.6 }} // Delay incremental
                viewport={{ once: true }}
                className="text-center"
              >
                {/* Ícone dentro de um card arredondado */}
                <div className="w-20 h-20 bg-gradient-to-br from-light to-accent rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                {/* Título e descrição do recurso */}
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-white leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA (CALL TO ACTION) SECTION ================= */}
      <section className="min-h-screen flex items-center py-20">
        <div className="w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }} // Aparece com scroll
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Faça Parte desta Transformação Social
            </h2>
            <p className="text-xl text-white mb-12 max-w-3xl mx-auto leading-relaxed">
              Una tecnologia e responsabilidade social. Ajude a democratizar o acesso
              à saúde mental através de uma plataforma pensada para o bem-estar coletivo.
            </p>
            {/* Botão para criar conta */}
            <Link to="/register">
              <Button size="lg" className="text-xl px-12 py-5 rounded-2xl font-semibold">
                Criar Conta Gratuita
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
