const {integer,text,varchar,pgTable,timestamp}=require('drizzle-orm/pg-core')

const dept=pgTable('department',{
    deptartment_id:varchar('deptartment_id',{length:30}).primaryKey(),
    name:varchar({length:15}).notNull().unique(),
    created_at:timestamp({mode:'date'}).defaultNow(),
    updated_at:timestamp({mode:'date'}).defaultNow()
})

module.exports={dept}