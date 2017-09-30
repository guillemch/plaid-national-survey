const contentful = require('contentful')
console.log(contentful)
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
  getTabs () {
    client.getEntries({
      limit: 10,
      order: 'sys.createdAt',
      content_type: 'tab'
    }).then(function success (entries) {
      if (storage.debug) console.log('getTabs triggered', entries)
      storage.state.entries = entries
    })
  },
  getTab (id) {
    client.getEntries({
      'sys.id': id
    }).then((entry) => {
      if (storage.debug) console.log('getTab triggered', entry)
      storage.state.entry = entry.items[0]
    })
  }
}

export default {
  state: storage.state,
  getTabs () { storage.getTabs() },
  getTab (id) { storage.getTab(id) }
}
