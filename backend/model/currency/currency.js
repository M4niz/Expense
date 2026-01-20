const {pgTable,integer,numeric,varchar,timestamp,text}=require('drizzle-orm/pg-core')

const currency=pgTable('currency',{
    currency_id:varchar('currency_id',{length:20}).primaryKey(),
    currency_code:varchar('currency_code',{length:10}),
    currency_name:varchar('currency_name',{length:30}),
    country:text('country'),
    country_code:varchar('country_code'),
    current_price:integer('current_price'),
    previous_price:integer('previous_price'),
    created_at: timestamp("created_at", { mode: "date" }).defaultNow(),
    updated_at: timestamp("updated_at", { mode: "date" }).defaultNow()
})

module.exports={currency}