function FileListPlugin(options) {}

FileListPlugin.prototype.apply = function(compiler) {
  //compiler.plugin('emit', function(compilation, callback) {
  compiler.hooks.emit.tapAsync('FileListPlugin', (compilation, callback) => { 
  // Create a header string for the generated file:
    var filelist = 'In this build:\n\n';

    // Loop through all compiled assets,
    // adding a new line item for each filename.
    for (var filename in compilation.assets) {
      filelist += ('- '+ filename +'\n');
    }

    console.log(compilation.assets)
    
    // Insert this list into the Webpack build as a new file asset:
    compilation.assets['filelist.md'] = {
      source: function() {
        return filelist;
      },
      size: function() {
        return filelist.length;
      }
    };

    callback();
  });
};

module.exports = FileListPlugin;