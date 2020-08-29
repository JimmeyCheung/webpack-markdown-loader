
module.exports = class CleanPlugin {
  
  apply(compiler) {
    let self = this
    compiler.hooks.entryOption.tap('CountTime', (complation) => {
      //console.log(compiler)
      //console.log(this)
      self.startTime = Date.now()
      console.log('start...')
    })

    compiler.hooks.done.tap('CountTime', complation => {
      console.log('end...')
      self.endTime = Date.now()
      console.log(`编译耗时：${self.endTime - self.startTime} ms`)
    })
  }
}