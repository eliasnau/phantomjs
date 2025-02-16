"use strict";(self.webpackChunknextradocs=self.webpackChunknextradocs||[]).push([[516],{3108:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var s=t(4848),i=t(8453);const a={sidebar_position:3},r="Creating Database Tables",l={id:"tutorials/database/schema",title:"Creating Database Tables",description:"This guide covers table creation using Drizzle ORM. For database setup instructions, see Setting Up PostgreSQL.",source:"@site/docs/tutorials/database/schema.mdx",sourceDirName:"tutorials/database",slug:"/tutorials/database/schema",permalink:"/docs/tutorials/database/schema",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Setting Up PostgreSQL",permalink:"/docs/tutorials/database/setup-databse"},next:{title:"Writing Database Queries",permalink:"/docs/tutorials/database/queries"}},o={},c=[{value:"Schema Overview",id:"schema-overview",level:2},{value:"Table Structure",id:"table-structure",level:2},{value:"Column Types",id:"column-types",level:2},{value:"Column Modifiers",id:"column-modifiers",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"After Creating Tables",id:"after-creating-tables",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"creating-database-tables",children:"Creating Database Tables"}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["This guide covers table creation using ",(0,s.jsx)(n.a,{href:"https://orm.drizzle.team",children:"Drizzle ORM"}),". For database setup instructions, see ",(0,s.jsx)(n.a,{href:"./setting-up-postgresql",children:"Setting Up PostgreSQL"}),"."]})}),"\n",(0,s.jsx)(n.h2,{id:"schema-overview",children:"Schema Overview"}),"\n",(0,s.jsxs)(n.p,{children:["Database tables are defined in ",(0,s.jsx)(n.code,{children:"src/server/db/schema.ts"})," using Drizzle's schema definition syntax. The schema provides type-safe table definitions that are used for migrations and queries."]}),"\n",(0,s.jsx)(n.h2,{id:"table-structure",children:"Table Structure"}),"\n",(0,s.jsx)(n.p,{children:"Here's the anatomy of a table definition:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { pgTable, text, timestamp, boolean } from \"drizzle-orm/pg-core\";\nimport { createId } from '@paralleldrive/cuid2';\n\nexport const posts = pgTable('post', {\n    id: text('id').primaryKey().$defaultFn(() => createId()),\n    title: text('title').notNull(),\n    content: text('content'),\n    published: boolean('published').default(false),\n    authorId: text('author_id')\n        .notNull()\n        .references(() => users.id, { onDelete: 'cascade' }),\n    createdAt: timestamp('created_at').defaultNow(),\n    updatedAt: timestamp('updated_at').defaultNow(),\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"column-types",children:"Column Types"}),"\n",(0,s.jsx)(n.p,{children:"Drizzle supports various PostgreSQL column types:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'import { \n    text,          // TEXT\n    varchar,       // VARCHAR\n    boolean,       // BOOLEAN\n    timestamp,     // TIMESTAMP\n    integer,       // INTEGER\n    serial,        // SERIAL\n    json,          // JSON\n    jsonb,         // JSONB\n    date,          // DATE\n    numeric,       // NUMERIC\n} from "drizzle-orm/pg-core";\n'})}),"\n",(0,s.jsx)(n.h2,{id:"column-modifiers",children:"Column Modifiers"}),"\n",(0,s.jsx)(n.p,{children:"Customize columns with modifiers:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"// Column constraints\n.notNull()        // NOT NULL\n.unique()         // UNIQUE\n.default(value)   // DEFAULT value\n.primaryKey()     // PRIMARY KEY\n\n// Foreign keys\n.references(() => otherTable.id, {\n    onDelete: 'cascade',  // CASCADE on delete\n    onUpdate: 'cascade'   // CASCADE on update\n})\n"})}),"\n",(0,s.jsx)(n.h2,{id:"relationships",children:"Relationships"}),"\n",(0,s.jsx)(n.p,{children:"Define relationships between tables:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"// One-to-Many relationship\nexport const comments = pgTable('comment', {\n    id: text('id').primaryKey().$defaultFn(() => createId()),\n    postId: text('post_id')\n        .notNull()\n        .references(() => posts.id, { onDelete: 'cascade' }),\n    content: text('content').notNull(),\n});\n\n// Many-to-Many relationship\nexport const postTags = pgTable('post_tag', {\n    postId: text('post_id')\n        .notNull()\n        .references(() => posts.id, { onDelete: 'cascade' }),\n    tagId: text('tag_id')\n        .notNull()\n        .references(() => tags.id, { onDelete: 'cascade' }),\n    // Composite primary key\n    primaryKey: { columns: [postId, tagId] },\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Naming Conventions"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Use singular form for table names"}),"\n",(0,s.jsx)(n.li,{children:"Use snake_case for column names"}),"\n",(0,s.jsx)(n.li,{children:"Use camelCase for table exports"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Default Values"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Add ",(0,s.jsx)(n.code,{children:"createdAt"})," and ",(0,s.jsx)(n.code,{children:"updatedAt"})," timestamps"]}),"\n",(0,s.jsxs)(n.li,{children:["Use ",(0,s.jsx)(n.code,{children:"createId()"})," for ID generation"]}),"\n",(0,s.jsx)(n.li,{children:"Set sensible defaults for boolean flags"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Data Integrity"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Add appropriate ",(0,s.jsx)(n.code,{children:"NOT NULL"})," constraints"]}),"\n",(0,s.jsx)(n.li,{children:"Define foreign key relationships"}),"\n",(0,s.jsx)(n.li,{children:"Use cascading deletes when appropriate"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"after-creating-tables",children:"After Creating Tables"}),"\n",(0,s.jsx)(n.p,{children:"After defining new tables:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# Generate migration\npnpm drizzle-kit generate:pg\n\n# Apply migration\npnpm db:push\n"})}),"\n",(0,s.jsxs)(n.admonition,{title:"Schema Organization",type:"tip",children:[(0,s.jsx)(n.p,{children:"Keep related tables in the same section of your schema file, or split into multiple files for larger projects:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"// src/server/db/schema/post.ts\nexport const posts = pgTable('post', {...});\nexport const comments = pgTable('comment', {...});\nexport const postTags = pgTable('post_tag', {...});\n"})})]}),"\n",(0,s.jsxs)(n.admonition,{type:"warning",children:[(0,s.jsx)(n.p,{children:"Remember to:"}),(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Generate migrations after schema changes"}),"\n",(0,s.jsx)(n.li,{children:"Test migrations both up and down"}),"\n",(0,s.jsx)(n.li,{children:"Commit migration files to version control"}),"\n"]})]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var s=t(6540);const i={},a=s.createContext(i);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);