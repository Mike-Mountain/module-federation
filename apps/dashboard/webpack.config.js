const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.base.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "dashboard",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  plugins: [
    new ModuleFederationPlugin({
        remotes: {
            "childAppOne": "childAppOne@http://localhost:5000/remoteEntry.js",
        },
        shared: {
          "@angular/core": { singleton: true, strictVersion: true, requiredVersion: '12.0.5'  },
          "@angular/common": { singleton: true, strictVersion: true, requiredVersion: '12.0.5'  },
          "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: '12.0.5'  },
          "@angular/router": { singleton: true, strictVersion: true, requiredVersion: '12.0.5'  },

          ...sharedMappings.getDescriptors()
        }

    }),
    sharedMappings.getPlugin()
  ],
};
