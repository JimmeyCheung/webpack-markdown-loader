class HelloWorldPlugin {
  constructor(options) {
    //console.log(options)
  }

  apply(compiler) {
    //console.log(compiler.options.output.path)
    // compiler.plugin('done', function() {
    //   console.log('Hello World!')
    // })
    compiler.hooks.done.tap('HelloWorldPlugin', compilation => {
      console.log('helllo world!!!!')
    })
  }
}

module.exports = HelloWorldPlugin