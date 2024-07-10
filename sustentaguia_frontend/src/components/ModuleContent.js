import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import '../styles/ModuleContent.css'; 

function ModuleContent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const goBack = () => {
    navigate('/dashboard'); 
  };
  const getContent = (moduleId) => {
    switch (moduleId) {
      case '1':
        return (
          <div className="module-content">
            <h2>Introdução ao Módulo 1: Energia Verde</h2>
            <p>
              A energia verde refere-se à energia que é produzida de forma que tenha um impacto mínimo no meio ambiente. As fontes de energia verde são tipicamente renováveis e não poluentes, o que significa que elas ajudam a reduzir a pegada de carbono e a mitigar as mudanças climáticas. Exemplos incluem energia solar, eólica, hidroelétrica, geotérmica e biomassa.
            </p>
            <h3>A Problemática da Energia Convencional</h3>
            <p>
              A maior parte da energia utilizada no mundo vem de combustíveis fósseis, como carvão, petróleo e gás natural. Esses combustíveis, quando queimados, liberam dióxido de carbono (CO₂) e outros gases de efeito estufa na atmosfera, contribuindo significativamente para o aquecimento global e as mudanças climáticas. Além disso, a extração e utilização de combustíveis fósseis podem causar danos ambientais, como derramamentos de óleo, destruição de habitats e poluição do ar e da água.
            </p>
            <h3>Motivos para Adotar a Energia Verde</h3>
            <p>
              A transição para fontes de energia verde é crucial por várias razões:
            </p>
            <ul>
              <li>
                <strong>Redução das Emissões de Gases de Efeito Estufa:</strong> A energia verde gera pouca ou nenhuma emissão de CO₂, ajudando a combater as mudanças climáticas.
              </li>
              <li>
                <strong>Sustentabilidade:</strong> As fontes de energia verde são renováveis, o que significa que não se esgotam, ao contrário dos combustíveis fósseis.
              </li>
              <li>
                <strong>Benefícios para a Saúde:</strong> A energia verde reduz a poluição do ar, o que pode melhorar a saúde pública e reduzir doenças respiratórias.
              </li>
              <li>
                <strong>Segurança Energética:</strong> A diversificação das fontes de energia reduz a dependência de importações de combustíveis fósseis, aumentando a segurança energética.
              </li>
            </ul>
            <h3>Ganhos da Energia Verde</h3>
            <p>
              A adoção de energia verde traz vários benefícios:
            </p>
            <ul>
              <li>
                <strong>Ambientais:</strong> Reduz a poluição e preserva os recursos naturais.
              </li>
              <li>
                <strong>Econômicos:</strong> Criação de empregos em setores de energia renovável e redução de custos a longo prazo.
              </li>
              <li>
                <strong>Sociais:</strong> Melhoria da qualidade de vida e promoção de um desenvolvimento mais sustentável.
              </li>
            </ul>
            <h3>Detalhes sobre Fontes de Energia Verde</h3>
            <p>
              Existem várias fontes de energia verde, cada uma com suas próprias características e aplicações:
            </p>
            <ul>
              <li>
                <strong>Energia Solar:</strong> Utiliza painéis solares para converter a luz do sol em eletricidade. É abundante e pode ser utilizada em pequena e grande escala.
              </li>
              <li>
                <strong>Energia Eólica:</strong> Utiliza turbinas eólicas para converter a energia do vento em eletricidade. É uma das fontes de energia de crescimento mais rápido no mundo.
              </li>
              <li>
                <strong>Energia Hidroelétrica:</strong> Gera eletricidade a partir da água em movimento, como rios e quedas d'água. É uma fonte confiável e pode ser escalada para grandes projetos.
              </li>
              <li>
                <strong>Energia Geotérmica:</strong> Utiliza o calor do interior da Terra para gerar eletricidade e aquecimento. É altamente eficiente e tem uma pequena pegada de carbono.
              </li>
              <li>
                <strong>Biomassa:</strong> Converte materiais orgânicos, como resíduos agrícolas e florestais, em energia. Pode ser utilizada para eletricidade, calor e combustíveis.
              </li>
            </ul>
            <h3>Conclusão</h3>
            <p>
              A transição para a energia verde é essencial para um futuro sustentável. Ao reduzir as emissões de gases de efeito estufa, preservar os recursos naturais e promover a saúde pública, a energia verde oferece uma solução viável para muitos dos desafios ambientais e sociais que enfrentamos hoje. Investir em tecnologias e infraestruturas de energia verde não só beneficiará o meio ambiente, mas também impulsionará a economia e melhorará a qualidade de vida das pessoas ao redor do mundo.
            </p>
          </div>
        );
        case '2':
          return (
            <div className="module-content">
              <h2>Introdução ao Módulo 2: Energia Solar</h2>
              <p>
                A energia solar é uma das formas mais promissoras e sustentáveis de energia renovável disponível hoje. Utilizando o sol, uma fonte de energia limpa e inesgotável, a energia solar transforma a luz solar em eletricidade.
              </p>
              <h3>Como Funciona a Energia Solar?</h3>
              <p>
                Quando a luz solar atinge um painel solar, os fótons (partículas de luz) são absorvidos pelas células solares. Este processo cria um campo elétrico através das camadas do semicondutor, geralmente feito de silício, gerando corrente elétrica.
              </p>
              <h3>Benefícios da Energia Solar</h3>
              <ul>
                <li>Sustentabilidade Ambiental: A energia solar é limpa e renovável, reduzindo a dependência de combustíveis fósseis.</li>
                <li>Redução de Custos de Energia: Após o investimento inicial, os custos operacionais são extremamente baixos.</li>
                <li>Acessibilidade: O custo dos painéis solares tem diminuído, tornando-os mais acessíveis para mais pessoas.</li>
                <li>Flexibilidade de Instalação: Os sistemas podem ser instalados em quase qualquer lugar e dimensionados conforme necessário.</li>
              </ul>
              <h3>Desafios da Energia Solar</h3>
              <ul>
                <li>Intermitência: A energia solar depende da luz do sol, que é intermitente e variável.</li>
                <li>Custo Inicial Alto: O custo inicial para a instalação de painéis solares pode ser significativo.</li>
                <li>Espaço para Instalação: Grandes quantidades de espaço são necessárias para instalações em grande escala.</li>
              </ul>
              <h3>Conclusão</h3>
              <p>
                Investir em energia solar promove a sustentabilidade ambiental e oferece benefícios econômicos a longo prazo, tornando-se uma parte cada vez mais importante do mix de energia global.
              </p>
            </div>
          );        
          case '3':
            return (
              <div className="module-content">
                <h2>Introdução ao Módulo 3: Energia Eólica</h2>
                <p>
                  A energia eólica é gerada pelo movimento do ar na atmosfera, transformado em energia elétrica por meio de turbinas eólicas. Este método limpo e renovável está entre os mais eficientes e sustentáveis métodos de produção de energia.
                </p>
                <h3>Como Funciona a Energia Eólica?</h3>
                <p>
                  Turbinas eólicas captam a energia cinética do vento através de suas grandes pás giratórias. Quando o vento sopra, as pás giram, girando um rotor conectado a um gerador que produz eletricidade. Essas turbinas são instaladas em locais com ventos consistentes, como colinas, planícies abertas e áreas costeiras, assim como em plataformas offshore.
                </p>
                <h3>Benefícios da Energia Eólica</h3>
                <ul>
                  <li>Sustentável: Não emite gases poluentes ou gera resíduos.</li>
                  <li>Renovável: Utiliza o vento, uma fonte inesgotável de energia.</li>
                  <li>Econômica: Reduz a dependência de combustíveis fósseis e pode diminuir os custos de energia a longo prazo.</li>
                  <li>Escalável: Pode ser adaptada para uso desde pequenas comunidades até grandes parques eólicos industriais.</li>
                </ul>
                <h3>Desafios da Energia Eólica</h3>
                <ul>
                  <li>Intermitência: A produção de energia pode ser inconsistente, dependendo das variações de velocidade e direção do vento.</li>
                  <li>Impacto Visual e Sonoro: As turbinas podem ser vistas como poluição visual e também produzem ruído, o que pode ser um problema para comunidades próximas.</li>
                  <li>Impacto na Vida Selvagem: Há preocupações sobre o impacto das turbinas eólicas na vida selvagem, especialmente aves e morcegos.</li>
                </ul>
                <h3>Conclusão</h3>
                <p>
                  A energia eólica é uma solução energética promissora que alia eficiência com sustentabilidade, oferecendo uma alternativa crucial para o futuro da produção de energia global.
                </p>
              </div>
            );
          case '4':
            return (
              <div className="module-content">
                <h2>Introdução ao Módulo 4: Energia Hidroelétrica</h2>
                <p>
                  A energia hidroelétrica é uma das formas mais antigas e importantes de energia renovável. Ela é gerada pela conversão da energia potencial da água armazenada em eletricidade através de turbinas hidráulicas.
                </p>
                <h3>Como Funciona a Energia Hidroelétrica?</h3>
                <p>
                  A energia hidroelétrica é produzida usando a água armazenada em represas. A água liberada das represas flui através de turbinas, girando-as e ativando um gerador para produzir eletricidade. A energia gerada é proporcional ao volume e à queda de água.
                </p>
                <h3>Benefícios da Energia Hidroelétrica</h3>
                <ul>
                  <li>Consistente: Fornece uma fonte de energia mais constante comparada a outras formas renováveis.</li>
                  <li>Baixo Custo de Operação: Após a construção da represa, os custos de operação e manutenção são relativamente baixos.</li>
                  <li>Armazenamento de Energia: Represas podem armazenar água que pode ser usada para gerar energia conforme necessário.</li>
                </ul>
                <h3>Desafios da Energia Hidroelétrica</h3>
                <ul>
                  <li>Impacto Ambiental: A construção de grandes represas pode ter impactos significativos nos ecossistemas locais e deslocar comunidades.</li>
                  <li>Alto Custo Inicial: A construção de infraestrutura de represas é cara e demorada.</li>
                  <li>Secas: A eficácia da energia hidroelétrica pode ser afetada em períodos de seca, quando o volume de água disponível é reduzido.</li>
                </ul>
                <h3>Conclusão</h3>
                <p>
                  A energia hidroelétrica desempenha um papel crucial na matriz energética mundial, oferecendo uma fonte renovável e confiável que ajuda a estabilizar e diversificar o fornecimento de energia.
                </p>
              </div>
            );
          case '5':
            return (
              <div className="module-content">
                <h2>Introdução ao Módulo 5: Biomassa e Biogás</h2>
                <p>
                  Biomassa e biogás referem-se à utilização de materiais orgânicos como fonte de energia. Esses métodos transformam resíduos agrícolas, resíduos florestais e dejetos animais em formas úteis de energia, como calor e eletricidade.
                </p>
                <h3>Como Funciona Biomassa e Biogás?</h3>
                <p>
                  A biomassa utiliza materiais orgânicos diretamente como combustível, ou os converte em um líquido ou gás combustível. O biogás é produzido pela fermentação de materiais orgânicos em um ambiente anaeróbico, liberando metano, que pode ser queimado para gerar energia.
                </p>
                <h3>Benefícios de Biomassa e Biogás</h3>
                <ul>
                  <li>Redução de Resíduos: Ajuda a reduzir o volume de resíduos em aterros.</li>
                  <li>Emissões Reduzidas: Comparado com os combustíveis fósseis, possui uma pegada de carbono mais baixa.</li>
                  <li>Energia Renovável: Fornece uma alternativa renovável e pode ser produzida localmente.</li>
                </ul>
                <h3>Desafios de Biomassa e Biogás</h3>
                <ul>
                  <li>Custo de Implementação: Tecnologias para processamento e conversão podem ser caras.</li>
                  <li>Disponibilidade de Materiais: Dependente da disponibilidade local de recursos orgânicos.</li>
                  <li>Competição de Uso da Terra: O uso de terra para cultivo de biomassa pode competir com a agricultura alimentar.</li>
                </ul>
                <h3>Conclusão</h3>
                <p>
                  A utilização de biomassa e biogás oferece uma abordagem prática para reduzir a dependência de combustíveis fósseis, aproveitando recursos renováveis para uma produção energética mais limpa e sustentável.
                </p>
              </div>
            );
          default:
            return "Conteúdo não encontrado.";
        }
      };
    
      return (
        <div className="module-page">
          <h1>Conteúdo do Módulo {id}</h1>
          {getContent(id)}
          <button onClick={goBack} className="back-button">Voltar</button>  
          </div>
      );
    }
    export default ModuleContent;