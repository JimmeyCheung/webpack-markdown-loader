const { getOptions } = require('loader-utils')
const validateOptions = require('schema-utils')
const MarkdownIt  = require('markdown-it')



const schema = {
  type: 'object',
  properties: {
    html: {
      type: 'boolean'
    },
    xhtmlOut: {
    	type: 'boolean'
    },
    langPrefix: {
    	type: 'string'
    },
    linkify: {
    	type: 'boolean'
    }
  }
}

module.exports =  function(source) {

  const options = getOptions(this)
  const md = MarkdownIt(options)

  validateOptions(schema, options)

  // 对资源应用一些转换……

  //this.callback(null, md.render(source))
  //let callback = this.async()
  //callback(null, md.render(source))
  return md.render(source)
}