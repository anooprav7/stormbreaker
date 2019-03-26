const {
    series: { nps: series },
    concurrent: { nps: parallel }
  } = require('nps-utils')

  module.exports = {
    scripts: {
        test: {
            default: {
              script: 'yarn start',
              description:
                'Check if applications build + Run visual tests + Run unit and integration tests'
            },
          },
        publish:{
            components: {},
            kits:{}
        },
        docs:{
            dev: {},
            build: {}
        }
    }
}  