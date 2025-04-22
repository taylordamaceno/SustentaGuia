# UX de Primeira Autenticação com Google (SG-AUTH-003)

## Visão Geral
Esta funcionalidade permite que novos usuários sejam cadastrados automaticamente na primeira vez que utilizarem o login com Google, eliminando a necessidade de preenchimento manual de formulários.

## Como Funciona

Quando um usuário clica no botão "Login com Google" pela primeira vez:

1. A API do Google solicita permissão para acesso às informações básicas
2. O usuário autoriza o acesso
3. O sistema SustentaGuia:
   - Verifica se o email já existe no banco de dados
   - Se não existir, cria automaticamente um novo usuário
   - Associa o ID do Google ao usuário
   - Autentica o usuário e gera um token JWT
   - Redireciona para o dashboard ou página inicial

## Dados Importados Automaticamente

Os seguintes dados são importados automaticamente do Google:
- Nome completo
- Email (verificado pelo Google)
- Foto de perfil (URL)
- ID único do Google

## Configuração do Google Client ID

Para que a autenticação funcione, você precisa configurar o Client ID do Google em dois lugares:

### Frontend (.env.local)
```
NEXT_PUBLIC_GOOGLE_CLIENT_ID=SEU_CLIENT_ID_AQUI
```

### Backend (.env)
```
GOOGLE_CLIENT_ID=SEU_CLIENT_ID_AQUI
```

> **Importante**: Utilize o mesmo Client ID em ambos os arquivos. Isso garante que o token gerado pelo frontend possa ser validado no backend.

## Implementação no Frontend

O frontend já está configurado para usar a biblioteca `@react-oauth/google`. O componente de login está implementado em `sustentaguia_frontend/src/components/LoginPage.js`:

```jsx
import { GoogleLogin } from '@react-oauth/google';

// No componente LoginPage
const handleGoogleLoginSuccess = async (credentialResponse) => {
  try {
    const response = await api.post("/auth/google", {
      token: credentialResponse.credential
    });
    
    if (response.data?.token) {
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    }
  } catch (error) {
    setErrorMessage(error.response?.data?.error || "Erro ao fazer login com Google");
  }
};

// Uso no componente
<GoogleLogin
  onSuccess={handleGoogleLoginSuccess}
  onError={handleGoogleLoginError}
  useOneTap
/>
```

## Configuração no Backend

O backend já está configurado para:
1. Validar tokens Google usando a biblioteca oficial
2. Criar novos usuários automaticamente com auth_type 'google'
3. Gerar tokens JWT com o tipo de autenticação incluído
4. Atualizar dados de usuários existentes quando necessário

## Obtenção do Client ID Google

Para obter um Client ID do Google:

1. Acesse o [Google Cloud Console](https://console.cloud.google.com/)
2. Crie um novo projeto
3. No menu lateral, vá para "APIs e Serviços" > "Credenciais"
4. Configure a tela de consentimento OAuth
5. Clique em "Criar Credenciais" > "ID do Cliente OAuth"
6. Selecione "Aplicativo da Web"
7. Adicione as URLs de redirecionamento autorizadas:
   - http://localhost:3000 (para desenvolvimento)
   - https://seu-dominio.com (para produção)
8. Clique em "Criar" e copie o Client ID gerado
9. Adicione esse Client ID nos arquivos `.env.local` e `.env`

## Checklist para Testes

- [ ] Usuário sem conta acessa com Google pela primeira vez
- [ ] Sistema cria conta automaticamente
- [ ] Usuário é redirecionado ao dashboard sem formulários adicionais
- [ ] No próximo acesso, o usuário é reconhecido sem necessidade de novo cadastro
- [ ] Verificar registro no banco com auth_type = 'google' 