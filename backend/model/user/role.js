const {bigserial,varchar,text,boolean,integer,timestamp,pgTable} = require("drizzle-orm/pg-core");

const roles = pgTable("roles",{
    role_id: varchar("role_id",{length:20}).primaryKey(),
    role_name: varchar("role_name", { length: 50 }).notNull().unique(),
    description: text("description"),
    is_active: boolean("is_active").default(true),
    limit:integer('limit'),
    created_at: timestamp("created_at", {mode: "date"}).defaultNow(),
    updated_at: timestamp("updated_at", {mode: "date",}).defaultNow()
});

module.exports = { roles };
