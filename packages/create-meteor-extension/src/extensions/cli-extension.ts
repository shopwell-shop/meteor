import { GluegunToolbox } from 'gluegun'

// Add your CLI-specific functionality here, which will then be accessible
// to your commands
module.exports = (toolbox: GluegunToolbox) => {
  // enable this if you want to read configuration in from
  // the current folder's package.json (in a "@shopwell-ag/create-meteor-extension" property),
  // @shopwell-ag/create-meteor-extension.config.json, etc.
  // toolbox.config = {
  //   ...toolbox.config,
  //   ...toolbox.config.loadConfig("@shopwell-ag/create-meteor-extension", process.cwd())
  // }
}
