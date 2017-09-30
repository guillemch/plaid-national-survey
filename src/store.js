const contentful = require('contentful')

const client = contentful.createClient({
  space: 's9sswv691y1i',
  accessToken: '865804a6adc4e78c551dfb3cee3c4eb32cae1cd452f821bed94e3eb307683c22'
})

const storage = {
  debug: true,
  state: {
    entries: {},
    entry: {}
  },
  getTabs (locale) {
    client.getEntries({
      'limit': 10,
      'order': 'fields.order',
      'content_type': 'tab',
      'locale': locale
    }).then((entries) => {
      if (storage.debug) console.log('getTabs', locale, entries)
      storage.state.entries = entries
    })
  },
  getTab (locale, slug) {
    client.getEntries({
      'content_type': 'tab',
      'fields.slug': slug,
      'locale': locale
    }).then((entry) => {
      if (storage.debug) console.log('getTab', locale, slug, entry)
      storage.state.entry = entry.items[0]
    })
  }
}

export default {
  state: storage.state,
  getTabs (locale) { storage.getTabs(locale) },
  getTab (locale, slug) { storage.getTab(locale, slug) }
}
