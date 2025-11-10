# Website Público - Imóveis Viseu 🏠

Site público para visualização e busca de imóveis em Viseu, Portugal.

## 🚀 Início Rápido

```bash
npm install
npm run dev
```

Acesse: `http://localhost:5173`

## 📄 Páginas

- **/** - Página inicial com destaque da empresa
- **/imoveis** - Listagem completa de imóveis com busca
- **/sobre** - Informações sobre a empresa e Viseu

## 🔍 Funcionalidades de Busca

- Busca por nome do imóvel
- Busca por região
- Filtro por tipo (venda/aluguel)
- Resultados em tempo real

## ⚙️ Configuração

1. Configure o Firebase em `src/firebase.js`
2. Adicione suas credenciais do Firebase Console
3. Certifique-se de que o Firestore está configurado

## 🎨 Personalização

Edite os seguintes arquivos para personalizar:

- `src/pages/Sobre.jsx` - Informações da empresa
- `src/components/Footer.jsx` - Dados de contato
- `src/components/Navbar.jsx` - Logo e menu

## 📦 Build para Produção

```bash
npm run build
```

Os arquivos compilados estarão em `dist/`
