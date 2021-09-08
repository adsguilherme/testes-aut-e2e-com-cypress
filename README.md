[![ci](https://github.com/adsguilherme/testes-aut-e2e-com-cypress/actions/workflows/ci.yml/badge.svg)](https://github.com/adsguilherme/testes-aut-e2e-com-cypress/actions/workflows/ci.yml)
[![testes-aut-e2e-com-cypress](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/simple/niz11o&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/niz11o/runs)

# Testes _end-to-end_ com Cypress

👋 Seja bem vindo(a)!

## O que você vai encontrar neste projeto

Durante o curso de testes _end-to-end_ (e2e) com Cypress, você vai aprender:

- Como otimizar ainda mais o _setup_ de um projeto Cypress
- Como analisar estaticamente o código de teste para garantir o uso de convenções definidas pela comunidade
- Como criar testes e2e para diferentes funcionalidades de uma aplicação web, tais como _Sign up_, _Login_, CRUD, etc.
- Como testar recebimento de _e-mails_
- Como testar _upload_ de arquivos
- Como interagir com componentes renderizados dentro de iFrames
- Como interceptar requisições para tornar os testes mais robustos
- Como proteger dados sensíveis
- Como criar testes sem precisar codificar utilizando o _Cypress Studio_
- Como testar a responsividade da aplicação simulando seu uso em um dispositivo móvel
- Como armazenar a sessão do usuário no cache para otimizar o processo de autenticação
- Como criar e documentar comandos customizados
- Como configurar um _pipeline_ de integração contínua com múltiplas fases e paralelização
- Como integrar os testes com o Dashboard do Cypress
- Como categorizar os testes e executá-los por suas _tags_
- Como documentar um projeto de testes e2e
- Como alterar o tema do _Test Runner_ 🥸

Sample project to demonstrate end-to-end (e2e) tests written with Cypress running on a CI service.

## Pre-requirements

To run this project, you will need:

- [git](https://git-scm.com/downloads) (I've used version `2.26.2` while writing this doc)
- [nodejs](https://nodejs.org/en/) (I've used version `14.17.3` while writing this doc)
- NPM (I've used version `6.14.13` while writing this doc)
- [Google Chrome](https://www.google.com/intl/en_us/chrome/) (I've used version `92.0.4515.131` while writing this doc)

**Note:** When installing nodejs, NPM is automatically installed too.

## Installation

To install the dev dependencies, run `npm install` (or `npm i` for short.)

## Configuring the environment variables

Before running the tests, some environment variables need to be set up.

Make a copy of the [`cypress.env.example.json`](./cypress.env.example.json) file as `cypress.env.json`, and set the appropriate values for all the variables.

**Note:** `cypress.env.json` file is not tracked by git.

## Running the tests

In this project, you can run tests in interactive and headless modes, and on desktop and tablet viewports.

### Headless mode

Run `npm test` (or `npm t` for short) to run all tests in headless mode using a desktop viewport.

Run `npm run test:tablet` to run the appropriate tests in headless mode using a tablet viewport.

### Interactive mode

Run `npm run cy:open` to open the Cypress Test Runner to run tests in interactive mode using a desktop viewport.

Run `npm run cy:open:tablet` to open the Cypress Test Runner to run tests in interactive mode using a tablet viewport.

___

Made with ❤️ by [Guilherme de Sousa](https://www.linkedin.com/in/adsguilherme)

