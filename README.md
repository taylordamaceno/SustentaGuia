SustentaGuia: Facilitating Access to Green Energy Information

SustentaGuia is a lightweight and practical platform designed to share essential knowledge about renewable energy and sustainability. The goal is to make information accessible in a clear and intuitive way, providing insights into solar, wind, and other clean technologies.

What SustentaGuia Offers

Concise and Informative Content: Five key sections with well-structured information about renewable energy and sustainability.

Straightforward User Experience: A simple yet functional frontend built with React, styled with HTML and CSS, and featuring carefully selected visual elements.

Secure Authentication: A basic login system connected to a PostgreSQL database, ensuring controlled access to certain features.

API-Driven Interactions: The app communicates with a Node.js backend to fetch relevant data dynamically.


While the project maintains a clean and minimalistic approach, it serves as a solid foundation for future enhancements, supporting users interested in adopting more sustainable practices.


---

Running Locally

With Docker

To quickly run the project using Docker:

git clone git@github.com:taylordamaceno/SustentaGuia.git
cd SustentaGuia
docker-compose up --build

Running on Kubernetes with Kind

Prerequisites

Ensure you have the following installed:

Docker (running properly)

Kubectl (configured and connected to a cluster like Kind)

Git (to clone the repository)


git clone https://github.com/taylordamaceno/SustentaGuia.git
cd SustentaGuia/k8s

Building and Loading Docker Images

sudo docker build -t sustentaguia-backend:latest ../sustentaguia_backend --load
sudo docker build -t sustentaguia-frontend:latest ../sustentaguia_frontend --load

Load the images into the Kubernetes cluster:

sudo kind load docker-image sustentaguia-backend:latest --name YourClusterName
sudo kind load docker-image sustentaguia-frontend:latest --name YourClusterName

Deploying the Application (PostgreSQL, Backend, and Frontend)

sudo kubectl apply -f postgres.yaml
sudo kubectl wait --for=condition=ready pod -l app=postgres --timeout=120s

sudo kubectl apply -f backend.yaml
sudo kubectl wait --for=condition=ready pod -l app=backend --timeout=120s

sudo kubectl apply -f frontend.yaml
sudo kubectl wait --for=condition=ready pod -l app=frontend --timeout=120s

Accessing the Application

Modify your /etc/hosts file by adding:

127.0.0.1 sustentaguia.local

Then, access the platform via:
http://sustentaguia.local


---

SustentaGuia is a simple but meaningful initiative aimed at demystifying sustainability through easy-to-understand content and a user-friendly experience. It’s designed to be lightweight, accessible, and continuously evolving, making green energy knowledge more approachable for everyone.

