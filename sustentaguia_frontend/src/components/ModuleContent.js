import React from 'react';
import { useParams } from 'react-router-dom';

function ModuleContent() {
  const { id } = useParams();

  const getContent = (moduleId) => {
    switch (moduleId) {
      case '1':
        return (
          <div>
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
        return "Insira o conteúdo do Módulo 2 aqui.";
      case '3':
        return "Insira o conteúdo do Módulo 3 aqui.";
      default:
        return "Conteúdo não encontrado.";
    }
  };

  return (
    <div>
      <h1>Conteúdo do Módulo {id}</h1>
      {getContent(id)}
    </div>
  );
}

export default ModuleContent;