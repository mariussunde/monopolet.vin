export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5f521d5719280d998e98026e',
                  title: 'Sanity Studio',
                  name: 'monopolet-vin-studio',
                  apiId: '561da499-bf22-4f6d-be3c-db811f4d41f1'
                },
                {
                  buildHookId: '5f521d5700ba8a86132cdb07',
                  title: 'Blog Website',
                  name: 'monopolet-vin',
                  apiId: 'bd6ab06b-3dcc-4478-8f86-632deaa0fd20'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mariussunde/monopolet.vin',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://monopolet-vin.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
