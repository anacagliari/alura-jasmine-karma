// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      // require('karma-firefox-launcher') => npm install -D karma-firefox-launcher@1.3.0
      require('karma-jasmine-html-reporter'),
      // require('karma-junit-reporter'), => npm install -D karma-junit-reporter | servidor de integração contínua
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage/ng-test1'),
      subdir: '.',
      reporters: [
        { type: 'html' },
        { type: 'text-summary' }
      ]
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    restartOnFileChange: true
    // customLaunchers: {
    //   FirefoxSemCabeca: {
    //     base: 'Firefox',
    //     flags: ['-headless'] // consome menos memória
    //   }
    // }

    // na linha 8 do arquivo packege.json:

    // "test-common": "ng test --browsers Chrome,Firefox",    => não pode ter espaço entre Chrome e Firefox
    // "test-ci": "ng test --watch=false --reporters junit --browsers ChromeHeadless,FirefoxSemCabeca",    => ou pode usar apenas o FirefoxHeadless, sem esse customLaunchers
    // "test-coverage": "ng test --watch=false --sourceMap=true --codeCoverage=true --browsers ChromeHeadless",
          // => --watch=false não abre o navegador
          // => --sourceMap=true gera o arquivo .js.map, que é necessário para o coverage funcionar corretamente
          // => --codeCoverage=true gera o arquivo de cobertura de código
          // => --browsers ChromeHeadless executa o teste no Chrome em modo headless
  });
};
