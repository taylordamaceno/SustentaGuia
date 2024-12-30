"SustentaGuia: Simplificando o Acesso a Soluções Sustentáveis"

O SustentaGuia é uma plataforma voltada para quem busca informações claras e objetivas sobre energia renovável e práticas sustentáveis no dia a dia. Por meio de um frontend intuitivo e um backend robusto, o app oferece recursos para explorar dicas, artigos e serviços que incentivam um estilo de vida mais consciente e amigável ao meio ambiente.

Destaques:
Conteúdo Didático: O SustentaGuia centraliza informações sobre energia solar, eólica e outras tecnologias limpas, em linguagem simples e acessível.
Organização de Serviços: Descubra empresas, profissionais e projetos que atuam na área de sustentabilidade.
Aprendizado Contínuo: Desenvolvido para estudos e melhorias constantes, o SustentaGuia é um ambiente aberto a atualizações e novas funcionalidades relacionadas à preservação ambiental.
Leve, educativo e engajado: esse é o propósito do SustentaGuia. Ele não só apresenta dados técnicos, mas também inspira a adoção de hábitos mais verdes, mostrando que pequenas mudanças fazem grande diferença para o planeta.

Seja você um entusiasta de tecnologias limpas ou apenas alguém interessado em aprender mais sobre energia verde, o SustentaGuia torna a jornada sustentável mais simples e ao alcance de todos.







Subindo localmente:

Com docker Básico

git clone git@github.com:taylordamaceno/SustentaGuia.git

cd SustentaGuia

docker-compose up --build
----------
Com K8S usando kind

Pré-requisitos

Certifique-se de que você tem:

Docker instalado e funcionando.

Kubectl configurado e conectado a um cluster Kubernetes ativo (por exemplo, Kind).

Git para clonar o repositório.



git clone https://github.com/taylordamaceno/SustentaGuia.git

cd SustentaGuia/k8s

Passo 2: Build das Imagens Docker

Construa as imagens do backend e frontend:

sudo docker build -t sustentaguia-backend:latest ../sustentaguia_backend --load
sudo docker build -t sustentaguia-frontend:latest ../sustentaguia_frontend --load

Carregue as imagens no cluster Kubernetes: (exemplo aqui usando kind)

sudo kind load docker-image sustentaguia-backend:latest --name NomeCluster
sudo kind load docker-image sustentaguia-frontend:latest --name NomeCluster



Passo 3: Subir o PostgreSQL, backend e frontend
sudo kubectl apply -f postgres.yaml
sudo kubectl wait --for=condition=ready pod -l app=postgres --timeout=120s

sudo kubectl apply -f backend.yaml
sudo kubectl wait --for=condition=ready pod -l app=backend --timeout=120s

sudo kubectl apply -f frontend.yaml
sudo kubectl wait --for=condition=ready pod -l app=frontend --timeout=120s


Passo 6: Configurar o Acesso
Adicione a entrada abaixo no arquivo /etc/hosts para acessar a aplicação via Ingress:


127.0.0.1 sustentaguia.local

Abra no navegador:
http://sustentaguia.local

