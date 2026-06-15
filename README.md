# Velomaicon — Site Institucional

Site completo para a Velomaicon, especialistas em reparo de painéis de velocímetro e computadores de bordo para carros, motos e embarcações náuticas. Sediados em Osório, RS, com atendimento para todo o Brasil.

## Tecnologias

- **Vite** — bundler ultrarrápido
- **React 18** — biblioteca de UI
- **React Router DOM** — navegação entre páginas
- **Tailwind CSS** — estilização utilitária
- **Lucide React** — ícones

## Como rodar localmente

```bash
# 1. Entre na pasta do projeto
cd velomaicon-site

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
```

O site estará disponível em `http://localhost:5173`.

## Build para produção

```bash
npm run build
```

Os arquivos gerados ficam na pasta `dist/`.

## Estrutura de pastas

```
velomaicon-site/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.jsx        # Cabeçalho com menu responsivo
│   │   ├── Footer.jsx        # Rodapé com links e contato
│   │   ├── CTAButton.jsx     # Botão de WhatsApp reutilizável
│   │   ├── WhatsAppFloat.jsx # Botão flutuante de WhatsApp
│   │   ├── ServiceCard.jsx   # Card de serviço
│   │   ├── TestimonialCard.jsx # Card de depoimento
│   │   ├── StepCard.jsx      # Card de etapa do processo
│   │   └── ContactForm.jsx   # Formulário de contato
│   ├── pages/
│   │   ├── Home.jsx          # Página inicial
│   │   ├── Services.jsx      # Página de serviços
│   │   ├── HowItWorks.jsx    # Como funciona
│   │   ├── About.jsx         # Sobre a empresa
│   │   └── Contact.jsx       # Contato
│   ├── App.jsx               # Roteador principal
│   ├── main.jsx              # Entry point
│   └── index.css             # Estilos globais + Tailwind
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Personalização

- **Número de WhatsApp:** altere a constante `WHATSAPP` nos arquivos `CTAButton.jsx`, `WhatsAppFloat.jsx`, `ContactForm.jsx` e `Footer.jsx`
- **E-mail e telefone:** atualize em `Footer.jsx` e `Contact.jsx`
- **Cores:** ajuste em `tailwind.config.js` na seção `colors.brand`
