const {varchar,text,integer,timestamp,numeric,pgTable}=require('drizzle-orm/pg-core')
const {dept}=require('../user/dept')
const {category}=require('../expense/category')

const applicability_rule=pgTable('applicability_rule',{
    applicability_id:varchar('applicability_id',{length:20}).primaryKey(),
    department:varchar('deptartment_id',{length:30}).references(()=>dept.deptartment_id),
    expense_type:varchar('category_id',{lenght:20}).references(()=>category.category_id),
    min_amount:numeric('min_amount'),
    max_amount:numeric('max_amount'),
    created_at: timestamp("created_at", { mode: "date" }).defaultNow(),
    updated_at: timestamp("updated_at", { mode: "date" }).defaultNow()
})

module.exports={applicability_rule}