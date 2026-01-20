const {pgTable,integer,varchar,text,serial,boolean,numeric,timestamp}=require('drizzle-orm/pg-core')


const profile=pgTable('profile',{
    profile_id:varchar('profile_id',{length:20}).primaryKey(),
    username:varchar('username',{length:50}),
    email:text('email').notNull().unique(),
    f_name:varchar('f_name',{length:20}),
    l_name:varchar('l_name',{length:20}),
    full_name:varchar('full_name',{length:50}).notNull(),
    designation:text('designation'),
    profile_status:boolean('profile_status').default(false),
    created_at:timestamp('created_at',{mode:'date'}).defaultNow(),
    updated_at:timestamp('updated_at',{mode:'date'}).defaultNow(),
    dept_id:text('dept_id').notNull()
})
module.exports={profile}