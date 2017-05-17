### 配置webpack.config.js

webpack是一款模块加载器兼打包工具，它能把各种资源，例如JS（含JSX）、coffee、样式（含less/sass）、图片等都作为模块来使用和处理。

#### webpack.config.js

这是webpack的默认配置文件，在运行`npm run start`时，会根据这个文件进行项目的配置和打包

#### webpack.production.config.js

这是另一个webpack配置文件，在运行`npm run build`时，会根据这个文件进行项目的配置和打包

* 开发环境下，可以不用考虑系统的性能，更多考虑的是如何增加开发效率(例如方便调试)。而发布系统时，就需要考虑发布之后的系统的性能，包括加载速度、缓存等。因此根据不同的需要使用不同的配置文件来对项目进行配置和打包。
