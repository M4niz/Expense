const {varchar,text,integer,numeric,timestamp,pgTable}=require('drizzle-orm/pg-core')
const {dept}=require('../user/dept')
const {category}=require('../expense/category')
const { boolean } = require('drizzle-orm/gel-core')
const {applicability_rule}=require('./applicability_rule')
const {applicability_stage}=require('./approval_stage')

const approvel_history=pgTable('workflow',{
    work_flow_id:varchar('work_flow_id',{lenght:20}).primaryKey(),
    name:varchar('workflow_name',{length:20}).notNull(),
    workflow_type:varchar('workflow_type',{lenght:30}),
    description:text('description'),
    applicability_rule:varchar('applicability_rule').references(()=>applicability_rule.applicability_id),
    applicability_stage:varchar('applicability_stage').references(()=>applicability_stage.applicability_stage_id),
    warning:numeric('warning'),
    email_notify:boolean('email_notify'),
    slack_alert:boolean('slack_alert'),
    sms_remainder:boolean('sms_remainder'),
    created_at: timestamp("created_at", { mode: "date" }).defaultNow(),
    updated_at: timestamp("updated_at", { mode: "date" }).defaultNow()
})

module.exports={approvel_history}