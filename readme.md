# BarberStack — Arquitetura & Estrutura

## Stack

- **Expo** (SDK 51+) com **Expo Router** (file-based routing)
- **React Native** com **TypeScript**
- **StyleSheet** do React Native (zero dependências de estilo externas)
- **Clean Architecture** + **Atomic Design** na camada de apresentação

---

## Estrutura de Pastas

```
src/
├── app/                          # 📱 Expo Router — Rotas & Layouts
│   ├── _layout.tsx               # Root layout (providers globais)
│   └── (tabs)/
│       ├── _layout.tsx           # Tab bar definition
│       ├── index.tsx             # Home / Dashboard
│       ├── agenda.tsx            # Agenda do barbeiro
│       ├── team.tsx              # Gestão de equipe
│       ├── analytics.tsx         # Analytics & financeiro
│       └── profile.tsx           # Perfil do usuário
│
├── core/                         # ⚡ Regras de Negócio Puras
│   ├── entities/                 # Modelos de domínio (Appointment, Barber...)
│   ├── ports/
│   │   ├── in/                   # Interfaces de entrada (UI → Core)
│   │   └── out/                  # Interfaces de saída (Core → Infra)
│   └── useCases/
│       ├── appointments/         # Lógica de agendamentos
│       ├── barbers/              # Lógica de barbeiros
│       └── services/             # Lógica de serviços
│
├── infrastructure/               # 🔌 Adaptadores Externos
│   ├── http/                     # Axios config + interceptors
│   ├── services/                 # Implementações das portas OUT
│   ├── mappers/                  # DTO ↔ Entity transformations
│   └── storage/                  # AsyncStorage adapter
│
├── presentation/                 # 🎨 Interface do Usuário
│   ├── components/
│   │   ├── atoms/                # Button, Text, Badge, Avatar, ProgressBar
│   │   ├── molecules/            # MetricCard, BarberListItem, StatusIndicator
│   │   ├── organisms/            # Header, MetricGrid, TeamStatusList
│   │   └── templates/            # AppShell, AuthLayout
│   └── hooks/                    # useBarbers, useAppointments, useDashboard
│
└── shared/                       # 🛠 Utilitários Compartilhados
    ├── constants/                # API endpoints, status codes, roles
    ├── helpers/                  # formatters (moeda, data, hora)
    └── theme/                    # Design tokens ← COMECE AQUI
        ├── colors.ts
        ├── spacing.ts
        ├── typography.ts
        ├── shadows.ts
        └── index.ts              # Barrel export
```

---

## Design Tokens

Sempre importe do barrel:

```ts
import {
  Colors,
  Spacing,
  Typography,
  Shadows,
  BorderRadius,
} from "@/shared/theme";
```

### Paleta Principal

| Token                   | Hex       | Uso                       |
| ----------------------- | --------- | ------------------------- |
| `Colors.bg.primary`     | `#0a0a0a` | Fundo de telas            |
| `Colors.bg.secondary`   | `#111111` | Fundo de cards            |
| `Colors.accent.cyan`    | `#00d2ff` | Destaque principal (neon) |
| `Colors.accent.success` | `#00ffaa` | Confirmado, pago          |
| `Colors.accent.warning` | `#ffaa00` | Pendente, atenção         |
| `Colors.border.default` | `#222222` | Bordas padrão             |

---

## Regras de Arquitetura

### ✅ Pode

- `presentation` importar de `core` e `shared`
- `infrastructure` importar de `core` e `shared`
- `core` importar apenas de `shared/constants` e `shared/helpers`
- Telas do Expo Router (`app/`) importar de `presentation`

### ❌ Nunca

- `core` importar de `infrastructure` ou `presentation`
- Chamadas HTTP diretas em componentes (usar hooks → useCases → services)
- Lógica de negócio em componentes
- Importações com caminhos relativos longos (usar `@/` alias)

---

## Alias `@/`

Configure no `tsconfig.json`:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

E no `babel.config.js`:

```js
module.exports = {
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: { "@": "./src" },
      },
    ],
  ],
};
// yarn add -D babel-plugin-module-resolver
```

---

## Atomic Design — Quando usar cada nível

| Nível        | Regra                                 | Exemplos no BarberStack                        |
| ------------ | ------------------------------------- | ---------------------------------------------- |
| **Atom**     | Elemento único, sem lógica de negócio | `Badge`, `Avatar`, `ProgressBar`, `IconButton` |
| **Molecule** | 2–3 átomos com lógica de UI simples   | `MetricCard`, `BarberListItem`                 |
| **Organism** | Seção completa e autossuficiente      | `Header`, `TeamStatusList`, `AgendaTimeline`   |
| **Template** | Layout sem conteúdo específico        | `AppShell`                                     |
| **Screen**   | Tela do Expo Router (= "Page")        | `app/(tabs)/index.tsx`                         |

---
