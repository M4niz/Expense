const {varchar,text,integer,numeric,timestamp,pgTable}=require('drizzle-orm/pg-core')


const applicability_stage=pgTable('applicability_stage',{
    applicability_stage_id:varchar('applicability_stage_id',{length:20}).primaryKey(),
    approver_type:varchar('approver_type',{length:30}),
    processing_time:numeric('process_time'),
    created_at: timestamp("created_at", { mode: "date" }).defaultNow(),
    updated_at: timestamp("updated_at", { mode: "date" }).defaultNow()
})

module.exports={applicability_stage}