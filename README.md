# 🚀 Permaneo Backend Test

Esse repositório contém o backend desenvolvido como parte do desafio técnico para a **Permaneo**. A aplicação foi construída com **NestJS** e utiliza **SQLite** como banco de dados para facilitar a execução local.

---

## 📚 Funcionalidades

A aplicação oferece endpoints para gerenciamento de:

- 📚 **Cursos** (Courses)
- 🎓 **Aulas** (Lessons) associadas a cursos
- 💬 **Comentários** (Comments) associados a aulas

### Principais Rotas

| Método | Rota                                  | Descrição |
|-------|-------------------------------------|------------|
| GET   | `/courses`                         | Lista todos os cursos |
| POST  | `/courses`                         | Cria um novo curso |
| GET   | `/courses/{id}`                    | Detalhes de um curso específico |
| PUT   | `/courses/{id}`                    | Atualiza informações de um curso |
| DELETE| `/courses/{id}`                    | Remove um curso |
| GET   | `/courses/{id}/lessons`            | Lista aulas de um curso |
| POST  | `/courses/{id}/lessons`            | Cria uma nova aula em um curso |
| GET   | `/courses/{id}/lessons/{lessonId}` | Detalhes de uma aula específica |
| PUT   | `/courses/{id}/lessons/{lessonId}` | Atualiza uma aula |
| DELETE| `/courses/{id}/lessons/{lessonId}` | Remove uma aula |
| POST  | `/lessons/{lessonId}/comments`     | Adiciona comentário a uma aula |
| GET   | `/lessons/{lessonId}/comments`     | Lista comentários de uma aula |

---

## 🛠️ Tecnologias Utilizadas

- [NestJS](https://nestjs.com/) - Framework Node.js
- [TypeORM](https://typeorm.io/) - ORM para integração com SQLite
- [SQLite](https://www.sqlite.org/index.html) - Banco de dados leve
- [Swagger](https://swagger.io/) - Documentação da API

---

## 🧐 Pré-requisitos

Certifique-se de ter instalado:

- Node.js 22+
- npm ou yarn

---

## 🚀 Como rodar localmente

### 1. Clonar o repositório

```bash
git clone https://github.com/danielteodorodt/permaneo-backend-test-daniel.git
cd permaneo-backend-test-daniel
```

### 2. Instalar dependências

Obs: Se você usa NVM, use "nvm use" para setar o node correto do projeto

```bash
npm install
```

### 3. Rodar a aplicação

```bash
npm run start:dev
```

### 4. Acessar a documentação Swagger

Após subir a aplicação, acesse no navegador:

```
http://localhost:3000/api
```

---

## 💂️ Estrutura de Pastas

```
src/
└─ courses/        # Módulo de cursos
└─ lessons/        # Módulo de aulas
└─ comments/       # Módulo de comentários
└─ main.ts         # Entry point da aplicação
└─ app.module.ts   # Módulo raiz
└─ ...             # Outros arquivos
```

---

## ✅ Melhorias Futuras

- Adicionar testes unitários e de integração.
- Melhorar validações e tratamento de erros.

---

## 👨‍💻 Autor

- [Daniel Teodoro](https://github.com/danielteodorodt)

---

## 📄 Licença

Esse projeto é apenas para fins de teste técnico e não possui uma licença formal.