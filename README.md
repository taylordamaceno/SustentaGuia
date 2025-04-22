# SustentaGuia: Sustainable Technology Learning Platform

SustentaGuia is an educational platform designed to promote knowledge about renewable energy and sustainable practices. The platform provides comprehensive, structured learning modules with a focus on accessible information about green technologies, sustainable living, and environmentally conscious choices.

## Key Features

### 🌱 Educational Content
- **Structured Learning Modules**: Ten comprehensive modules covering various aspects of sustainability
- **Interactive Learning**: Engaging content on renewable energy (solar, wind, hydro), sustainable agriculture, smart cities, and more
- **Progress Tracking**: Users can track their progress through the modules

### 🔐 User Authentication System
- **Secure Registration**: Traditional email/password registration with proper validation
- **Social Authentication**: Google SSO integration for seamless login experience
- **JWT-based Sessions**: Secure authentication using JSON Web Tokens

### 💻 Modern Architecture
- **React Frontend**: Responsive UI built with React and modern CSS
- **Node.js Backend**: Express-based API server with RESTful endpoints
- **PostgreSQL Database**: Robust data storage with proper schema design
- **Docker Containerization**: Easily deployable with Docker Compose
- **Kubernetes Support**: Ready for cloud deployment with Kubernetes manifests

## Technical Stack

### Frontend
- React.js
- Modern CSS (responsive design)
- React Router for navigation
- Google OAuth integration
- JWT token management

### Backend
- Node.js with Express
- JWT authentication
- Google OAuth verification
- PostgreSQL database integration
- RESTful API design

### DevOps
- Docker and Docker Compose for local development
- Kubernetes manifests for production deployment
- Environment-based configuration

## Getting Started

### Running with Docker Compose

The quickest way to get started is using Docker Compose:

```bash
git clone https://github.com/taylordamaceno/SustentaGuia.git
cd SustentaGuia

# Configure environment variables
cp .env.example .env
# Edit .env file to add your Google OAuth credentials

# Start the application
docker-compose up --build
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:3001

### Running on Kubernetes with Kind

#### Prerequisites

Ensure you have the following installed:
- Docker (running properly)
- Kubectl (configured and connected to a cluster like Kind)
- Git (to clone the repository)

```bash
git clone https://github.com/taylordamaceno/SustentaGuia.git
cd SustentaGuia/k8s
```

#### Building and Loading Docker Images

```bash
sudo docker build -t sustentaguia-backend:latest ../sustentaguia_backend
sudo docker build -t sustentaguia-frontend:latest ../sustentaguia_frontend

# Load the images into the Kubernetes cluster
sudo kind load docker-image sustentaguia-backend:latest --name YourClusterName
sudo kind load docker-image sustentaguia-frontend:latest --name YourClusterName
```

#### Deploying the Application

```bash
# Deploy PostgreSQL
sudo kubectl apply -f postgres.yaml
sudo kubectl wait --for=condition=ready pod -l app=postgres --timeout=120s

# Deploy Backend
sudo kubectl apply -f backend.yaml
sudo kubectl wait --for=condition=ready pod -l app=backend --timeout=120s

# Deploy Frontend
sudo kubectl apply -f frontend.yaml
sudo kubectl wait --for=condition=ready pod -l app=frontend --timeout=120s
```

#### Accessing the Application

Modify your `/etc/hosts` file by adding:
```
127.0.0.1 sustentaguia.local
```

Then, access the platform via: http://sustentaguia.local

## Authentication Configuration

### Google SSO Setup

To enable Google Sign-On authentication:

1. Create a project in the [Google Cloud Console](https://console.cloud.google.com/)
2. Configure the OAuth consent screen
3. Create OAuth 2.0 credentials for a Web Application
4. Add authorized redirect URIs:
   - `http://localhost:3000` (for development)
   - Your production domain (for production)
5. Copy the Client ID to your environment files:
   - Frontend: `NEXT_PUBLIC_GOOGLE_CLIENT_ID` in `.env.local`
   - Backend: `GOOGLE_CLIENT_ID` in `.env`

## Educational Modules

SustentaGuia currently offers ten comprehensive learning modules:

1. **Introduction to Green Energy**: Overview of sustainable energy sources
2. **Solar Energy**: In-depth exploration of solar technology and applications
3. **Wind Energy**: Understanding wind power generation and implementation
4. **Hydroelectric Energy**: Harnessing water for clean power generation
5. **Biomass and Biogas**: Converting organic materials to sustainable energy
6. **Sustainable AgroTech**: Technology-driven sustainable agriculture
7. **Smart and Sustainable Cities**: Urban planning with environmental consciousness
8. **Sustainable Housing**: Building and maintaining eco-friendly living spaces
9. **Conscious Consumption**: Making environmentally responsible purchasing decisions
10. **Circular Economy and Recycling**: Understanding waste reduction and material reuse

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

SustentaGuia is committed to democratizing knowledge about sustainable technologies and practices, making green energy information accessible to everyone through a user-friendly, educational platform.

