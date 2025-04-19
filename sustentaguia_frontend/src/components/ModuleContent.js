"use client"
import { useParams, useNavigate } from "react-router-dom"
import "../styles/ModuleContent.css"

function ModuleContent() {
  const { id } = useParams()
  const navigate = useNavigate()

  const goBack = () => {
    navigate("/dashboard")
  }

  const getContent = (moduleId) => {
    switch (moduleId) {
      case "1":
        return (
          <div className="module-content">
            <h2>Introdução ao Módulo 1: Energia Verde</h2>
            <p>
              A energia verde refere-se à energia que é produzida de forma que tenha um impacto mínimo no meio ambiente.
              As fontes de energia verde são tipicamente renováveis e não poluentes, o que significa que elas ajudam a
              reduzir a pegada de carbono e a mitigar as mudanças climáticas. Exemplos incluem energia solar, eólica,
              hidroelétrica, geotérmica e biomassa.
            </p>
            <h3>A Problemática da Energia Convencional</h3>
            <p>
              A maior parte da energia utilizada no mundo vem de combustíveis fósseis, como carvão, petróleo e gás
              natural. Esses combustíveis, quando queimados, liberam dióxido de carbono (CO₂) e outros gases de efeito
              estufa na atmosfera, contribuindo significativamente para o aquecimento global e as mudanças climáticas.
              Além disso, a extração e utilização de combustíveis fósseis podem causar danos ambientais, como
              derramamentos de óleo, destruição de habitats e poluição do ar e da água.
            </p>
            <h3>Motivos para Adotar a Energia Verde</h3>
            <p>A transição para fontes de energia verde é crucial por várias razões:</p>
            <ul>
              <li>
                <strong>Redução das Emissões de Gases de Efeito Estufa:</strong> A energia verde gera pouca ou nenhuma
                emissão de CO₂, ajudando a combater as mudanças climáticas.
              </li>
              <li>
                <strong>Sustentabilidade:</strong> As fontes de energia verde são renováveis, o que significa que não se
                esgotam, ao contrário dos combustíveis fósseis.
              </li>
              <li>
                <strong>Benefícios para a Saúde:</strong> A energia verde reduz a poluição do ar, o que pode melhorar a
                saúde pública e reduzir doenças respiratórias.
              </li>
              <li>
                <strong>Segurança Energética:</strong> A diversificação das fontes de energia reduz a dependência de
                importações de combustíveis fósseis, aumentando a segurança energética.
              </li>
            </ul>
            <h3>Ganhos da Energia Verde</h3>
            <p>A adoção de energia verde traz vários benefícios:</p>
            <ul>
              <li>
                <strong>Ambientais:</strong> Reduz a poluição e preserva os recursos naturais.
              </li>
              <li>
                <strong>Econômicos:</strong> Criação de empregos em setores de energia renovável e redução de custos a
                longo prazo.
              </li>
              <li>
                <strong>Sociais:</strong> Melhoria da qualidade de vida e promoção de um desenvolvimento mais
                sustentável.
              </li>
            </ul>
            <h3>Detalhes sobre Fontes de Energia Verde</h3>
            <p>Existem várias fontes de energia verde, cada uma com suas próprias características e aplicações:</p>
            <ul>
              <li>
                <strong>Energia Solar:</strong> Utiliza painéis solares para converter a luz do sol em eletricidade. É
                abundante e pode ser utilizada em pequena e grande escala.
              </li>
              <li>
                <strong>Energia Eólica:</strong> Utiliza turbinas eólicas para converter a energia do vento em
                eletricidade. É uma das fontes de energia de crescimento mais rápido no mundo.
              </li>
              <li>
                <strong>Energia Hidroelétrica:</strong> Gera eletricidade a partir da água em movimento, como rios e
                quedas d'água. É uma fonte confiável e pode ser escalada para grandes projetos.
              </li>
              <li>
                <strong>Energia Geotérmica:</strong> Utiliza o calor do interior da Terra para gerar eletricidade e
                aquecimento. É altamente eficiente e tem uma pequena pegada de carbono.
              </li>
              <li>
                <strong>Biomassa:</strong> Converte materiais orgânicos, como resíduos agrícolas e florestais, em
                energia. Pode ser utilizada para eletricidade, calor e combustíveis.
              </li>
            </ul>
            <h3>Conclusão</h3>
            <p>
              A transição para a energia verde é essencial para um futuro sustentável. Ao reduzir as emissões de gases
              de efeito estufa, preservar os recursos naturais e promover a saúde pública, a energia verde oferece uma
              solução viável para muitos dos desafios ambientais e sociais que enfrentamos hoje. Investir em tecnologias
              e infraestruturas de energia verde não só beneficiará o meio ambiente, mas também impulsionará a economia
              e melhorará a qualidade de vida das pessoas ao redor do mundo.
            </p>
          </div>
        )
      case "2":
        return (
          <div className="module-content">
            <h2>Introdução ao Módulo 2: Energia Solar</h2>
            <p>
              A energia solar é uma das formas mais promissoras e sustentáveis de energia renovável disponível hoje.
              Utilizando o sol, uma fonte de energia limpa e inesgotável, a energia solar transforma a luz solar em
              eletricidade.
            </p>
            <h3>Como Funciona a Energia Solar?</h3>
            <p>
              Quando a luz solar atinge um painel solar, os fótons (partículas de luz) são absorvidos pelas células
              solares. Este processo cria um campo elétrico através das camadas do semicondutor, geralmente feito de
              silício, gerando corrente elétrica.
            </p>
            <h3>Benefícios da Energia Solar</h3>
            <ul>
              <li>
                <strong>Sustentabilidade Ambiental:</strong> A energia solar é limpa e renovável, reduzindo a
                dependência de combustíveis fósseis.
              </li>
              <li>
                <strong>Redução de Custos de Energia:</strong> Após o investimento inicial, os custos operacionais são
                extremamente baixos.
              </li>
              <li>
                <strong>Acessibilidade:</strong> O custo dos painéis solares tem diminuído, tornando-os mais acessíveis
                para mais pessoas.
              </li>
              <li>
                <strong>Flexibilidade de Instalação:</strong> Os sistemas podem ser instalados em quase qualquer lugar e
                dimensionados conforme necessário.
              </li>
            </ul>
            <h3>Desafios da Energia Solar</h3>
            <ul>
              <li>
                <strong>Intermitência:</strong> A energia solar depende da luz do sol, que é intermitente e variável.
              </li>
              <li>
                <strong>Custo Inicial Alto:</strong> O custo inicial para a instalação de painéis solares pode ser
                significativo.
              </li>
              <li>
                <strong>Espaço para Instalação:</strong> Grandes quantidades de espaço são necessárias para instalações
                em grande escala.
              </li>
            </ul>
            <h3>Conclusão</h3>
            <p>
              Investir em energia solar promove a sustentabilidade ambiental e oferece benefícios econômicos a longo
              prazo, tornando-se uma parte cada vez mais importante do mix de energia global.
            </p>
          </div>
        )
      case "3":
        return (
          <div className="module-content">
            <h2>Introdução ao Módulo 3: Energia Eólica</h2>
            <p>
              A energia eólica é gerada pelo movimento do ar na atmosfera, transformado em energia elétrica por meio de
              turbinas eólicas. Este método limpo e renovável está entre os mais eficientes e sustentáveis métodos de
              produção de energia.
            </p>
            <h3>Como Funciona a Energia Eólica?</h3>
            <p>
              Turbinas eólicas captam a energia cinética do vento através de suas grandes pás giratórias. Quando o vento
              sopra, as pás giram, girando um rotor conectado a um gerador que produz eletricidade. Essas turbinas são
              instaladas em locais com ventos consistentes, como colinas, planícies abertas e áreas costeiras, assim
              como em plataformas offshore.
            </p>
            <h3>Benefícios da Energia Eólica</h3>
            <ul>
              <li>
                <strong>Sustentável:</strong> Não emite gases poluentes ou gera resíduos.
              </li>
              <li>
                <strong>Renovável:</strong> Utiliza o vento, uma fonte inesgotável de energia.
              </li>
              <li>
                <strong>Econômica:</strong> Reduz a dependência de combustíveis fósseis e pode diminuir os custos de
                energia a longo prazo.
              </li>
              <li>
                <strong>Escalável:</strong> Pode ser adaptada para uso desde pequenas comunidades até grandes parques
                eólicos industriais.
              </li>
            </ul>
            <h3>Desafios da Energia Eólica</h3>
            <ul>
              <li>
                <strong>Intermitência:</strong> A produção de energia pode ser inconsistente, dependendo das variações
                de velocidade e direção do vento.
              </li>
              <li>
                <strong>Impacto Visual e Sonoro:</strong> As turbinas podem ser vistas como poluição visual e também
                produzem ruído, o que pode ser um problema para comunidades próximas.
              </li>
              <li>
                <strong>Impacto na Vida Selvagem:</strong> Há preocupações sobre o impacto das turbinas eólicas na vida
                selvagem, especialmente aves e morcegos.
              </li>
            </ul>
            <h3>Conclusão</h3>
            <p>
              A energia eólica é uma solução energética promissora que alia eficiência com sustentabilidade, oferecendo
              uma alternativa crucial para o futuro da produção de energia global.
            </p>
          </div>
        )
      case "4":
        return (
          <div className="module-content">
            <h2>Introdução ao Módulo 4: Energia Hidroelétrica</h2>
            <p>
              A energia hidroelétrica é uma das formas mais antigas e importantes de energia renovável. Ela é gerada
              pela conversão da energia potencial da água armazenada em eletricidade através de turbinas hidráulicas.
            </p>
            <h3>Como Funciona a Energia Hidroelétrica?</h3>
            <p>
              A energia hidroelétrica é produzida usando a água armazenada em represas. A água liberada das represas
              flui através de turbinas, girando-as e ativando um gerador para produzir eletricidade. A energia gerada é
              proporcional ao volume e à queda de água.
            </p>
            <h3>Benefícios da Energia Hidroelétrica</h3>
            <ul>
              <li>
                <strong>Consistente:</strong> Fornece uma fonte de energia mais constante comparada a outras formas
                renováveis.
              </li>
              <li>
                <strong>Baixo Custo de Operação:</strong> Após a construção da represa, os custos de operação e
                manutenção são relativamente baixos.
              </li>
              <li>
                <strong>Armazenamento de Energia:</strong> Represas podem armazenar água que pode ser usada para gerar
                energia conforme necessário.
              </li>
            </ul>
            <h3>Desafios da Energia Hidroelétrica</h3>
            <ul>
              <li>
                <strong>Impacto Ambiental:</strong> A construção de grandes represas pode ter impactos significativos
                nos ecossistemas locais e deslocar comunidades.
              </li>
              <li>
                <strong>Alto Custo Inicial:</strong> A construção de infraestrutura de represas é cara e demorada.
              </li>
              <li>
                <strong>Secas:</strong> A eficácia da energia hidroelétrica pode ser afetada em períodos de seca, quando
                o volume de água disponível é reduzido.
              </li>
            </ul>
            <h3>Conclusão</h3>
            <p>
              A energia hidroelétrica desempenha um papel crucial na matriz energética mundial, oferecendo uma fonte
              renovável e confiável que ajuda a estabilizar e diversificar o fornecimento de energia.
            </p>
          </div>
        )
      case "5":
        return (
          <div className="module-content">
            <h2>Introdução ao Módulo 5: Biomassa e Biogás</h2>
            <p>
              Biomassa e biogás referem-se à utilização de materiais orgânicos como fonte de energia. Esses métodos
              transformam resíduos agrícolas, resíduos florestais e dejetos animais em formas úteis de energia, como
              calor e eletricidade.
            </p>
            <h3>Como Funciona Biomassa e Biogás?</h3>
            <p>
              A biomassa utiliza materiais orgânicos diretamente como combustível, ou os converte em um líquido ou gás
              combustível. O biogás é produzido pela fermentação de materiais orgânicos em um ambiente anaeróbico,
              liberando metano, que pode ser queimado para gerar energia.
            </p>
            <h3>Benefícios de Biomassa e Biogás</h3>
            <ul>
              <li>
                <strong>Redução de Resíduos:</strong> Ajuda a reduzir o volume de resíduos em aterros.
              </li>
              <li>
                <strong>Emissões Reduzidas:</strong> Comparado com os combustíveis fósseis, possui uma pegada de carbono
                mais baixa.
              </li>
              <li>
                <strong>Energia Renovável:</strong> Fornece uma alternativa renovável e pode ser produzida localmente.
              </li>
            </ul>
            <h3>Desafios de Biomassa e Biogás</h3>
            <ul>
              <li>
                <strong>Custo de Implementação:</strong> Tecnologias para processamento e conversão podem ser caras.
              </li>
              <li>
                <strong>Disponibilidade de Materiais:</strong> Dependente da disponibilidade local de recursos
                orgânicos.
              </li>
              <li>
                <strong>Competição de Uso da Terra:</strong> O uso de terra para cultivo de biomassa pode competir com a
                agricultura alimentar.
              </li>
            </ul>
            <h3>Conclusão</h3>
            <p>
              A utilização de biomassa e biogás oferece uma abordagem prática para reduzir a dependência de combustíveis
              fósseis, aproveitando recursos renováveis para uma produção energética mais limpa e sustentável.
            </p>
          </div>
        )
      case "6":
        return (
          <div className="module-content">
            <h2>Introdução ao Módulo 6: AgroTech Sustentável</h2>
            <p>
              Inovação no campo com consciência ambiental.
            </p>
            <h3>O que é AgroTech?</h3>
            <p>
              AgroTech (ou AgTech) é a junção de agricultura com tecnologia. São inovações que tornam o cultivo mais 
              eficiente, com menos desperdício e impacto ambiental. Desde sensores que medem umidade no solo até 
              tratores autônomos movidos a energia limpa, a tecnologia está transformando o campo.
            </p>
            <h3>Sensores e Irrigação Inteligente</h3>
            <p>
              Com sensores de umidade no solo, o agricultor só irriga quando necessário, economizando até 50% de água. 
              Algumas soluções usam drones para identificar áreas secas ou doentes da plantação. No Brasil, a irrigação 
              representa cerca de 70% do consumo de água doce — com tecnologia, esse número pode cair drasticamente.
            </p>
            <h3>Agricultura de Precisão</h3>
            <p>
              Combinando GPS, dados climáticos e IA, é possível aplicar fertilizantes e defensivos de forma localizada, 
              reduzindo impactos no solo e na saúde humana. Isso também reduz a compactação do solo e melhora a 
              produtividade.
            </p>
            <h3>Agricultura Regenerativa com tecnologia</h3>
            <p>
              A AgroTech também apoia práticas regenerativas: cultivo sem agrotóxicos, rotação de culturas, compostagem 
              automatizada. Sistemas integrados monitoram a qualidade do solo em tempo real, ajudando o agricultor a 
              manter a fertilidade.
            </p>
            <h3>Casos de sucesso no Brasil</h3>
            <p>
              Fazendas solares autônomas no Nordeste utilizam energia solar para alimentar sistemas de irrigação 
              automatizada. Startups como a Solinftec e Agrosmart são líderes em AgroTech sustentável no Brasil.
            </p>
          </div>
        )
      case "7":
        return (
          <div className="module-content">
            <h2>Introdução ao Módulo 7: Cidades Inteligentes e Sustentáveis</h2>
            <p>
              Como o urbanismo está sendo transformado pela tecnologia verde.
            </p>
            <h3>O que são?</h3>
            <p>
              Cidades inteligentes e sustentáveis usam tecnologia para melhorar a vida urbana com foco em eficiência 
              energética, mobilidade limpa e qualidade de vida.
            </p>
            <h3>Mobilidade elétrica e transporte coletivo</h3>
            <p>
              Incentivo a carros elétricos, bicicletas compartilhadas e ônibus elétricos. Emissões de CO₂ são 
              drasticamente reduzidas com transporte coletivo limpo.
            </p>
            <h3>Telhados verdes e hortas urbanas</h3>
            <p>
              Melhoram o conforto térmico e a qualidade do ar. Reduzem enchentes e conectam moradores ao meio ambiente 
              urbano.
            </p>
            <h3>Iluminação pública eficiente</h3>
            <p>
              Iluminação LED com sensores de presença reduz em até 60% o consumo de energia pública.
            </p>
            <h3>Gestão de resíduos com IoT</h3>
            <p>
              Lixeiras inteligentes otimizam a coleta e reduzem o uso de combustível e tempo dos serviços urbanos.
            </p>
          </div>
        )
      case "8":
        return (
          <div className="module-content">
            <h2>Introdução ao Módulo 8: Habitação Sustentável</h2>
            <p>
              Sua casa também pode ser parte da solução.
            </p>
            <h3>Construir com consciência</h3>
            <p>
              Uso de materiais ecológicos como tijolos solo-cimento, madeira certificada e telhas recicladas.
            </p>
            <h3>Eficiência energética no dia a dia</h3>
            <p>
              Projetos arquitetônicos que aproveitam iluminação natural, sombreamento e ventilação cruzada para 
              economizar energia.
            </p>
            <h3>Energia solar residencial</h3>
            <p>
              Instalar painéis solares pode reduzir até 95% da conta de luz e oferece retorno em poucos anos.
            </p>
            <h3>Conforto térmico natural</h3>
            <p>
              Plantas, brises e cores claras ajudam a manter o ambiente fresco sem depender de ar-condicionado.
            </p>
          </div>
        )
      case "9":
        return (
          <div className="module-content">
            <h2>Introdução ao Módulo 9: Consumo Consciente</h2>
            <p>
              Sustentabilidade começa nas pequenas escolhas.
            </p>
            <h3>O que é?</h3>
            <p>
              É consumir com responsabilidade, escolhendo produtos que respeitam o meio ambiente, o trabalhador e a saúde.
            </p>
            <h3>Pegada de carbono de produtos</h3>
            <p>
              Alguns produtos geram muito CO₂ em sua produção — saber disso ajuda a fazer escolhas melhores.
            </p>
            <h3>Dicas práticas</h3>
            <p>
              Evite plástico, leve sua sacola, compre a granel, escolha produtores locais.
            </p>
            <h3>Rótulos e certificações</h3>
            <p>
              FSC, Orgânico Brasil, Selo Eu Reciclo — entenda os selos antes de comprar.
            </p>
            <h3>Compre menos, compre melhor</h3>
            <p>
              Planeje, conserte, doe, troque. Cada item não comprado é um impacto evitado.
            </p>
          </div>
        )
      case "10":
        return (
          <div className="module-content">
            <h2>Introdução ao Módulo 10: Economia Circular e Reciclagem</h2>
            <p>
              Do descarte à reinvenção.
            </p>
            <h3>O que é Economia Circular?</h3>
            <p>
              Modelo que reintegra resíduos ao sistema produtivo, evitando o desperdício e prolongando o ciclo de vida 
              dos produtos.
            </p>
            <h3>Reciclagem, compostagem, reutilização</h3>
            <p>
              Cada técnica com seu papel: a compostagem para o orgânico, a reciclagem para materiais transformáveis e a 
              reutilização para evitar novos descartes.
            </p>
            <h3>Logística Reversa</h3>
            <p>
              Fabricantes devem receber de volta produtos usados — como pilhas, lâmpadas e eletrônicos.
            </p>
            <h3>Upcycling e design regenerativo</h3>
            <p>
              Transformar lixo em valor: arte, moda ou móveis com resíduos que ganham nova função.
            </p>
            <h3>O papel dos catadores</h3>
            <p>
              Mais de 1 milhão de pessoas no Brasil sobrevivem da coleta de recicláveis. Respeitar, apoiar e separar 
              corretamente é essencial.
            </p>
          </div>
        )
      default:
        return (
          <div className="module-content">
            <h2>Conteúdo não encontrado</h2>
            <p>
              O módulo solicitado não está disponível. Por favor, retorne ao dashboard e selecione um módulo válido.
            </p>
          </div>
        )
    }
  }

  return (
    <div className="module-page">
      <h1>
        Módulo {id}:{" "}
        {id === "1"
          ? "Introdução à Energia Verde"
          : id === "2"
            ? "Energia Solar"
            : id === "3"
              ? "Energia Eólica"
              : id === "4"
                ? "Energia Hidroelétrica"
                : id === "5"
                  ? "Biomassa e Biogás"
                  : id === "6"
                    ? "AgroTech Sustentável"
                    : id === "7"
                      ? "Cidades Inteligentes e Sustentáveis"
                      : id === "8"
                        ? "Habitação Sustentável"
                        : id === "9"
                          ? "Consumo Consciente"
                          : id === "10"
                            ? "Economia Circular e Reciclagem"
                            : "Conteúdo"}
      </h1>
      {getContent(id)}
      <button onClick={goBack} className="back-button">
        Voltar ao Dashboard
      </button>
    </div>
  )
}

export default ModuleContent

