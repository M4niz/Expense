const {defineConfig}=require('drizzle-kit')

module.exports=defineConfig({
    schema:'./model/**/*.js',
    out:'./drizzle',
    dialect:'postgresql',
    dbCredentials:{
        url:process.env.DB_URL
    }
})