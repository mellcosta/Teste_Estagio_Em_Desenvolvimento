# Teste_Estagio_Em_Desenvolvimento 🚀

## Índice 📋
1. [Descrição do Projeto](#descrição-do-projeto)
2. [Desafios Técnicos](#desafios-técnicos)
   - [Sequência de Fibonacci](#1-sequência-de-fibonacci)
   - [Contagem de letras 'a' em uma string](#2-contagem-de-letras-a-em-uma-string)
   - [Cálculo da Soma com Loop](#3-cálculo-da-soma-com-loop)
   - [Descubra a Lógica e Complete as Sequências](#4-descubra-a-lógica-e-complete-as-sequências)
   - [Problema dos Interruptores e Lâmpadas](#5-problema-dos-interruptores-e-lâmpadas)
3. [Instruções para Execução](#instruções-para-execução)
   - [JavaScript](#javascript)
   - [C](#c)

## Descrição do Projeto 📝

Este projeto foi desenvolvido como parte do processo seletivo para a vaga de **Estágio em Desenvolvimento** na **Target**, uma empresa de tecnologia focada na transformação do mercado de distribuição.

## Desafios Técnicos 🦾

Neste repositório, você encontrará a resolução de uma série de desafios técnicos propostos, com soluções desenvolvidas em **JavaScript** e **C**.

### 1. Sequência de Fibonacci

O programa gera a sequência de Fibonacci até um número informado pelo usuário e indica se o número pertence à sequência.

- 💻 **Tecnologia:** JavaScript
- 🔗Link:  [fibonacciSequence.js](https://github.com/mellcosta/Teste_Estagio_Em_Desenvolvimento/blob/main/fibonacciSequence.js)

### 2. Contagem de letras 'a' em uma string

Este programa verifica quantas vezes a letra 'a', maiúscula ou minúscula, aparece em uma string fornecida.

- 💻 **Tecnologia:** JavaScript
- 🔗Link: [string.js](https://github.com/mellcosta/Teste_Estagio_Em_Desenvolvimento/blob/main/string.js)

### 3. Cálculo da Soma com Loop

A partir de um código fornecido, o programa calcula o valor final de uma soma usando laços de repetição.

- 💻 **Tecnologia:** C Language
- 🔗Link: [soma.c](https://github.com/mellcosta/Teste_Estagio_Em_Desenvolvimento/blob/main/soma.c)

### 4. Descubra a Lógica e Complete as Sequências

Problemas que exigem a descoberta de padrões em sequências numéricas.

a) 1, 3, 5, 7, __<u> 9 </u>__  (sequência de números ímpares)

b) 2, 4, 8, 16, 32, 64, __<u> 128 </u>__  (sequência de multiplicação por 2)

c) 0, 1, 4, 9, 16, 25, 36, __<u> 49 </u>__ (quadrados perfeitos: 0², 1², 2², 3², etc.)

d) 4, 16, 36, 64, __<u> 100 </u>__ (quadrados perfeitos de números pares: 2², 4², 6², 8², 10²)

e) 1, 1, 2, 3, 5, 8, __<u> 13 </u>__ (sequência de Fibonacci)

f) 2, 10, 12, 16, 17, 18, 19, __<u> 20 </u>__ (todos os números exceto múltiplos de 3)

### 5. Problema dos Interruptores e Lâmpadas

Um desafio lógico para determinar qual interruptor controla qual lâmpada, usando apenas duas idas às salas.

Para resolver este desafio eu seguiria os seguintes passos:

- Ligar o primeiro interruptor e deixar ligado por alguns minutos.
- Desligar o primeiro interruptor e ligar o segundo interruptor.

A seguir iria até a sala com as lâmpadas, e seria simples deduzir que:
- A lâmpada acesa está conectada ao segundo interruptor.
- A lâmpada quente mas apagada está conectada ao primeiro interruptor.
- A lâmpada fria e apagada está conectada ao terceiro interruptor.


---

## Instruções para Execução

### JavaScript
Para executar os códigos em JavaScript:

1. Certifique-se de que o [Node.js](https://nodejs.org) está instalado.
2. No terminal, navegue até o diretório do arquivo e execute:
   ```bash
   node nome_do_arquivo.js
   ```

### C
Para executar os códigos em C:

1. Instale um compilador C como o **gcc**.
2. Compile o arquivo com:
   ```bash
   gcc nome_do_arquivo.c -o nome_executavel
   ```
3. Execute o programa:
   - No Windows:
     ```bash
     .\nome_executavel.exe
     ```
   - No Mac/Linux:
     ```bash
     ./nome_executavel
     ```

---
