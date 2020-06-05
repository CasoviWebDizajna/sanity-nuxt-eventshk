export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'sanity-nuxt-eventshk-studio',
                  apiId: '623c256a-c3cd-41a7-b9b9-20d846f2384b'
                },
                {
                  buildHookId: '5eda0b65e69d8eab60721855',
                  title: 'Events Website',
                  name: 'sanity-nuxt-eventshk',
                  apiId: '8f67d1e1-e72d-40fa-a00d-b85df2e2ec5a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/CasoviWebDizajna/sanity-nuxt-eventshk',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nuxt-eventshk.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
