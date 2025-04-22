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
            <p>
              A revolução verde 2.0 já começou: tecnologia e agricultura caminham juntas para aumentar a produtividade, respeitando o meio ambiente e usando os recursos de forma mais eficiente.
            </p>
            <h3>O que é AgroTech?</h3>
            <p>
              AgroTech (ou AgTech) é a união da agricultura com as mais novas tecnologias: sensores, inteligência artificial, robótica e big data a serviço do campo.
              O objetivo é tornar a produção mais eficiente, sustentável e adaptada às mudanças climáticas.
            </p>
            <h3>Sensores e Irrigação Inteligente</h3>
            <p>
              Sensores de solo monitoram umidade, nutrientes e temperatura em tempo real.
            </p>
            <p>
              Sistemas de irrigação automatizada evitam desperdício de água, irrigando apenas quando necessário.
            </p>
            <p>
              Drones agrícolas identificam pragas e doenças precocemente, permitindo tratamentos localizados e menos agressivos.
            </p>
            <p>
              🔎 Curiosidade: O uso de sensores pode reduzir o consumo de água na agricultura em até 50%, além de aumentar a produtividade das lavouras.
            </p>
            <h3>Agricultura de Precisão</h3>
            <p>
              Através da combinação de GPS, dados climáticos e análise de solo:
            </p>
            <ul>
              <li>Fertilizantes e defensivos são aplicados apenas onde há necessidade.</li>
              <li>Reduz a compactação do solo e evita a degradação ambiental.</li>
              <li>Aumenta a produtividade por hectare de forma sustentável.</li>
            </ul>
            <p>
              Hoje, equipamentos como tratores e colheitadeiras operam com alta precisão, guiados por satélites.
            </p>
            <h3>Agricultura Regenerativa com tecnologia</h3>
            <p>
              Além de eficiência, a AgroTech também fortalece práticas sustentáveis:
            </p>
            <ul>
              <li>Rotação de culturas assistida por dados.</li>
              <li>Compostagem de resíduos monitorada automaticamente.</li>
              <li>Sistemas que regeneram o solo ao invés de apenas explorá-lo.</li>
            </ul>
            <p>
              A agricultura regenerativa alia produção agrícola com restauração de ecossistemas.
            </p>
            <h3>Casos de sucesso no Brasil</h3>
            <p>
              Fazendas solares no Semiárido nordestino: irrigação autossuficiente com energia renovável.
            </p>
            <p>
              Solinftec: pioneira em automação de maquinário e inteligência de dados agrícolas.
            </p>
            <p>
              Agrosmart: plataforma de monitoramento de clima e solo para agricultores de todos os portes.
            </p>
            <p>
              O Brasil é hoje referência em AgroTech aplicada à sustentabilidade.
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
            <p>
              O conceito de cidade inteligente envolve o uso de tecnologia para tornar os centros urbanos mais eficientes, sustentáveis e agradáveis de se viver.
            </p>
            <h3>O que são?</h3>
            <p>
              Cidades inteligentes integram tecnologia em infraestrutura, serviços e governança.
              O objetivo: otimizar recursos, reduzir impactos ambientais e melhorar a qualidade de vida.
            </p>
            <h3>Mobilidade elétrica e transporte coletivo</h3>
            <p>
              Incentivo a ônibus elétricos, ciclovias conectadas e carros compartilhados.
            </p>
            <p>
              Estações de carregamento para veículos elétricos se tornam comuns.
            </p>
            <p>
              Aplicativos otimizam rotas e horários de transporte público.
            </p>
            <p>
              📉 Um ônibus elétrico pode reduzir a emissão de CO₂ em até 80% em comparação com um diesel tradicional.
            </p>
            <h3>Telhados verdes e hortas urbanas</h3>
            <p>
              Reduzem o efeito de ilhas de calor nas cidades.
            </p>
            <p>
              Capturam carbono e melhoram a qualidade do ar.
            </p>
            <p>
              Promovem alimentação urbana saudável e de baixo impacto.
            </p>
            <p>
              Vários edifícios modernos já incluem telhados vegetados como item obrigatório de construção sustentável.
            </p>
            <h3>Iluminação pública eficiente</h3>
            <p>
              Substituição de lâmpadas tradicionais por LEDs inteligentes.
            </p>
            <p>
              Sensores que ajustam a iluminação conforme movimento e horários.
            </p>
            <p>
              Economia de até 60% de energia apenas na iluminação pública.
            </p>
            <h3>Gestão de resíduos com IoT</h3>
            <p>
              Lixeiras inteligentes indicam nível de ocupação.
            </p>
            <p>
              Roteiros de coleta são otimizados para reduzir CO₂ e custos.
            </p>
            <p>
              Reciclagem e compostagem são monitoradas via aplicativos.
            </p>
            <p>
              Cidades como Amsterdã, Curitiba e Barcelona são referência mundial em gestão de resíduos inteligentes.
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
            <p>
              A maneira como construímos e mantemos nossas casas tem impacto direto nas emissões globais de carbono e no uso de recursos.
            </p>
            <h3>Construir com consciência</h3>
            <p>
              Utilizar materiais ecológicos: tijolos de solo-cimento, madeira certificada, telhas recicladas.
            </p>
            <p>
              Reaproveitamento de resíduos da construção para novas obras.
            </p>
            <p>
              Escolha de fornecedores locais para reduzir emissões de transporte.
            </p>
            <h3>Eficiência energética no dia a dia</h3>
            <p>
              Posicionamento inteligente de janelas para maximizar iluminação natural.
            </p>
            <p>
              Uso de cortinas térmicas, persianas e ventilação cruzada para reduzir o uso de ar-condicionado.
            </p>
            <p>
              Eletrodomésticos com selo de eficiência energética (ex: PROCEL A).
            </p>
            <h3>Energia solar residencial</h3>
            <p>
              Instalar painéis fotovoltaicos para gerar energia limpa em casa.
            </p>
            <p>
              Reduzir a dependência de fontes poluentes e instáveis.
            </p>
            <p>
              Possibilidade de vender o excedente para a rede elétrica (geração distribuída).
            </p>
            <p>
              Hoje no Brasil, o payback de um sistema solar residencial pode ser alcançado em 5 a 7 anos.
            </p>
            <h3>Conforto térmico natural</h3>
            <p>
              Uso de plantas ao redor da casa para sombreamento.
            </p>
            <p>
              Telhados verdes ajudam no isolamento térmico.
            </p>
            <p>
              Pintura externa de cores claras para refletir o calor.
            </p>
            <p>
              Essas estratégias podem reduzir a temperatura interna em até 6°C, melhorando o conforto e economizando energia.
            </p>
          </div>
        )
      case "9":
        return (
          <div className="module-content">
            <h2>Introdução ao Módulo 9: Consumo Consciente</h2>
            <p>
              Sustentabilidade começa nas pequenas escolhas.
              Cada decisão de compra impacta não apenas o nosso bolso, mas também o meio ambiente e as próximas gerações.
            </p>
            <h3>O que é Consumo Consciente?</h3>
            <p>
              É o ato de consumir de forma mais crítica e responsável, pensando além do preço ou da marca.
              Significa considerar de onde vem o produto, como foi feito e qual será seu destino final.
            </p>
            <p>
              Consumir conscientemente é entender que tudo que compramos gera impactos sociais, ambientais e econômicos.
            </p>
            <h3>Pegada de Carbono de Produtos</h3>
            <p>
              Todo produto carrega uma "pegada ecológica" invisível:
            </p>
            <ul>
              <li>Energia gasta na fabricação</li>
              <li>Transporte até o mercado</li>
              <li>Embalagens que serão descartadas</li>
            </ul>
            <p>
              Por exemplo:
            </p>
            <ul>
              <li>Uma camiseta de algodão pode consumir 2.700 litros de água para ser produzida — o equivalente ao que uma pessoa bebe em quase 3 anos!</li>
              <li>O transporte aéreo de frutas gera emissões muito maiores do que o cultivo local.</li>
            </ul>
            <p>
              Escolher bem reduz nossa pegada de carbono individual.
            </p>
            <h3>Dicas práticas para consumir melhor</h3>
            <ul>
              <li>Priorize embalagens recicláveis ou compostáveis.</li>
              <li>Prefira produtos a granel — menos embalagem, menos lixo.</li>
              <li>Dê preferência a produtos locais e sazonais.
              (Frutas e verduras da estação consomem menos recursos no cultivo.)</li>
              <li>Valorize marcas que adotam práticas justas e sustentáveis.</li>
              <li>Questione promoções: preciso mesmo? Ou estou comprando por impulso?</li>
              <li>Apoie pequenos produtores e cooperativas.</li>
              <li>Dê prioridade a produtos duráveis, que não precisam ser substituídos rapidamente.</li>
            </ul>
            <h3>Rótulos e Certificações que Ajudam</h3>
            <p>
              Entender selos pode ser a diferença entre um produto realmente sustentável e um marketing vazio.
            </p>
            <ul>
              <li><strong>FSC (Forest Stewardship Council):</strong> garante que a madeira veio de reflorestamento responsável.</li>
              <li><strong>Selo Orgânico Brasil:</strong> assegura que a produção agrícola foi feita sem agrotóxicos proibidos e respeitando normas ambientais.</li>
              <li><strong>Eu Reciclo:</strong> empresas que participam de programas de logística reversa de embalagens.</li>
              <li><strong>Fair Trade:</strong> indica comércio justo, com respeito aos produtores e trabalhadores.</li>
            </ul>
            <p>
              Leia os rótulos! Nem tudo que parece "verde" é realmente sustentável.
            </p>
            <h3>Compre menos, compre melhor</h3>
            <ul>
              <li>Planeje antes de comprar. Faça listas e evite compras por impulso.</li>
              <li>Prefira qualidade a quantidade. Um bom produto dura mais e gera menos lixo.</li>
              <li>Doe, troque ou venda produtos que você não usa mais.</li>
              <li>Reforme ou conserte antes de jogar fora. Sapatos, roupas, móveis podem ter vida longa.</li>
              <li>Adote a regra dos 30 dias: Se você deseja algo, espere 30 dias. Se ainda quiser, aí sim avalie comprar.</li>
            </ul>
            <h3>O poder da escolha</h3>
            <p>
              Cada compra é um "voto" no tipo de mundo que queremos.
            </p>
            <ul>
              <li>Comprar de marcas sustentáveis fortalece negócios conscientes.</li>
              <li>Reduzir o consumo de produtos descartáveis pressiona o mercado a mudar.</li>
              <li>Apoiar a economia local gera empregos e diminui o impacto ambiental de transporte.</li>
            </ul>
            <p>
              Pequenas ações de consumo consciente, quando multiplicadas por milhões de pessoas, geram grandes mudanças no planeta.
            </p>
            <h3>Atenção ao Greenwashing</h3>
            <p>
              Nem tudo que se diz "eco" é realmente sustentável.
            </p>
            <p>
              Greenwashing é quando empresas usam marketing "verde" de forma enganosa para parecerem sustentáveis sem de fato serem.
            </p>
            <p>
              🔎 Sempre pergunte:
            </p>
            <ul>
              <li>Quais ações concretas a empresa tem?</li>
              <li>Existe transparência nos dados ambientais?</li>
              <li>Há certificações reconhecidas?</li>
            </ul>
            <p>
              Seja um consumidor atento e informado.
            </p>
            <h3>Sustentabilidade além da compra</h3>
            <p>
              O consumo consciente não termina na loja.
            </p>
            <ul>
              <li>Recicle corretamente. Separe lixo seco e orgânico.</li>
              <li>Composte resíduos orgânicos.</li>
              <li>Cuide dos produtos para que durem mais.</li>
              <li>Compartilhe dicas e conhecimentos sobre consumo consciente com amigos e família.</li>
            </ul>
            <p>
              A mudança é contagiosa.
            </p>
            <h3>Consumo consciente é um processo</h3>
            <p>
              Ninguém se torna 100% sustentável da noite para o dia.
            </p>
            <ul>
              <li>Comece com pequenas mudanças.</li>
              <li>Escolha suas batalhas: transporte, alimentação, vestuário?</li>
              <li>Seja gentil consigo mesmo no processo.</li>
            </ul>
            <p>
              Cada pequena atitude já faz diferença no caminho para um mundo mais justo, equilibrado e sustentável.
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
            <p>
              A natureza não gera lixo — tudo é reaproveitado. A economia circular busca replicar esse modelo no sistema econômico humano.
            </p>
            <h3>O que é Economia Circular?</h3>
            <p>
              É um modelo em que produtos e materiais circulam na economia pelo maior tempo possível.
              Ao invés do "extrair, produzir, descartar", a ideia é "reduzir, reutilizar, reciclar e regenerar".
            </p>
            <h3>Reciclagem, compostagem, reutilização</h3>
            <p>
              Reciclagem: transforma materiais usados em novos produtos.
            </p>
            <p>
              Compostagem: converte resíduos orgânicos em adubo natural.
            </p>
            <p>
              Reutilização: prolonga a vida útil dos produtos através de novos usos.
            </p>
            <p>
              Cada ação reduz a necessidade de extrair novos recursos da natureza.
            </p>
            <h3>Logística Reversa</h3>
            <p>
              Empresas devem recolher seus produtos após o consumo.
            </p>
            <p>
              Exemplo: coleta de pilhas, eletrônicos, pneus usados.
            </p>
            <p>
              No Brasil, a Política Nacional de Resíduos Sólidos (PNRS) obriga grandes fabricantes a implementar logística reversa.
            </p>
            <h3>Upcycling e design regenerativo</h3>
            <p>
              Upcycling: transformar resíduos em produtos de maior valor, como moda sustentável ou mobiliário.
            </p>
            <p>
              Design regenerativo: projetar produtos pensando desde o início em sua reutilização ou reciclagem.
            </p>
            <p>
              Exemplo: mochilas feitas de pneus reciclados, móveis de pallets.
            </p>
            <h3>O papel dos catadores</h3>
            <p>
              Mais de 1 milhão de catadores no Brasil contribuem diretamente para a reciclagem.
            </p>
            <p>
              Apoiar a coleta seletiva e as cooperativas é essencial para fortalecer a economia circular.
            </p>
            <p>
              Separar o lixo corretamente é um ato de respeito e responsabilidade social.
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

