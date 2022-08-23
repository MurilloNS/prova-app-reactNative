<h1 align="center">SPA-APP</h1>
<p align="center">Aplicativo para visualizar a situação dos navios e principais serviços na Santos Port Authority</p>
<p align="center">
  <a href="https://www.npmjs.com/">
    <img src="https://img.shields.io/static/v1?label=NPM&message=V8.11.0&color=264775&style=for-the-badge"/>
  </a>
  <a href="https://docs.expo.dev/">
    <img src="https://img.shields.io/static/v1?label=Expo-cli&message=V5.5.1&color=264775&style=for-the-badge"/>
  </a>
</p>
<p align="center">
 <a href="#objetivo">Objetivo</a> •
 <a href="#pré-requisitos">Pré-requisitos</a> • 
 <a href="#tecnologias">Tecnologias</a> • 
</p>

<h2>Objetivo</h2>
<p>
  Os colaboradores da Santos Port Authority precisam ver como está a situação das operações portuárias,
  a fim de garantir que as operações sejam realizadas com regularidade, eficiência, segurança e respeito ao meio ambiente.
  No site da SPA existe um monitoramento do desempenho e situação dos navios, 
  o que possibilita a tomada de ações imediatas em caso de ocorrências e contribui para o melhor planejamento das manobras de atracação e desatracação.
  <br/><br/>
  Entretanto, esse monitoramento pode ser melhor ainda se estiver sempre na palma da mão do colaborador. Pensado nisso, a SPA-APP foi desenvolvido
  para trazer essa informação da situação dos navios de maneira rápida e mostrar outros serviços que a SPA oferece.
</p>

<h2>Pré-requisitos</h2>
<p>
  Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas: 
  <a href="https://www.npmjs.com/">NPM</a>, <a href="https://docs.expo.dev/">Expo</a>.<br/>
  O Expo também deve ser instalado no celular para escanear o QR Code que irá ser gerado.<br/>
  Além disso, é bom ter um editor para trabalhar com o código como o <a href="https://code.visualstudio.com/">Vs Code</a>.
</p>

<h3>Iniciando o Aplicativo</h3>
  
```
# Clone este repositório
$ git clone <http://git.portodesantos.com.br/codesp/app>

# Acesse a pasta do projeto no terminal/cmd
$ cd app

# Instale as dependências
$ npm install

# Execute a aplicação
$ npm start ou expo start
```
<p>
  O QR Code irá aparecer no terminal para ser escaneado pelo aplicativo Expo no celular, você pode apertar a tecla "d" no terminal para ver mais opções no
  browser, lembre-se de verificar que tipo de conexão o Expo está realizando (Tunnel/LAN/Local). Caso a rede esteja instável, você pode iniciar o projeto
  pelo celular por meio de um cabo USB, no browser mude a conexão para <b>Local</b> e ative as <b>opções de desenvolvedor</b> e <b>depuração USB</b> nas
  configurações do celular.
</p>

<h2>Tecnologias</h2>
<p>
  As seguintes ferramentas foram utilizadas na construção do projeto:
  <ul>
    <li><a href="https://reactnative.dev/">React Native</a></li>
    <li><a href="https://reactnavigation.org/">React Navigation</a></li>
    <li><a href="https://docs.expo.dev/">Expo</a></li>
  </ul>
</p>