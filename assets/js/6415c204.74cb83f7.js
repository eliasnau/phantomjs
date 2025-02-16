"use strict";(self.webpackChunknextradocs=self.webpackChunknextradocs||[]).push([[660],{4208:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var s=i(4848),t=i(8453);const r={sidebar_position:2},l="Environment Variables",o={id:"getting-started/env-file",title:"Environment Variables",description:"Start by copying the example environment file to create your local configuration:",source:"@site/docs/getting-started/env-file.mdx",sourceDirName:"getting-started",slug:"/getting-started/env-file",permalink:"/docs/getting-started/env-file",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/docs/getting-started/installation"},next:{title:"Final Steps",permalink:"/docs/getting-started/final-steps"}},a={},d=[{value:"Configuration Guide",id:"configuration-guide",level:2},{value:"General Settings",id:"general-settings",level:3},{value:"Database Configuration",id:"database-configuration",level:3},{value:"Authentication Settings",id:"authentication-settings",level:3},{value:"Email Configuration",id:"email-configuration",level:3},{value:"Adding Custom Environment Variables",id:"adding-custom-environment-variables",level:2},{value:"Variable Types",id:"variable-types",level:3},{value:"Validation Rules",id:"validation-rules",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"environment-variables",children:"Environment Variables"}),"\n",(0,s.jsx)(n.p,{children:"Start by copying the example environment file to create your local configuration:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cp .env.example .env.local\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Your ",(0,s.jsx)(n.code,{children:".env.local"})," file should contain the following variables:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-properties",children:'#=================================#\n#           GENERAL               #\n#=================================#\n# The public URL where your app is hosted\nNEXT_PUBLIC_APP_URL=localhost:3000\n\n#=================================#\n#           DATABASE              #\n#=================================#\n# PostgreSQL connection string for Drizzle ORM\nDATABASE_URL="postgresql://postgres:password@localhost:5432/starter-kit"\n\n#=================================#\n#            AUTH                 #\n#=================================#\n# Generate using: openssl rand -base64 32\n# or https://generate-secret.vercel.app/32\nBETTER_AUTH_SECRET=\nBETTER_AUTH_URL=http://localhost:3000\n\n# GitHub OAuth\n# Get these from https://github.com/settings/developers\nGITHUB_CLIENT_ID=\nGITHUB_CLIENT_SECRET=\n\n#=================================#\n#            EMAIL                #\n#=================================#\n# SMTP Configuration for sending emails\nSMTP_HOST=smtp.example.com\nSMTP_PORT=587\nSMTP_SECURE=false\nSMTP_USER=your_username\nSMTP_PASSWORD=your_password\nSMTP_FROM=noreply@yourdomain.com\n'})}),"\n",(0,s.jsx)(n.h2,{id:"configuration-guide",children:"Configuration Guide"}),"\n",(0,s.jsx)(n.h3,{id:"general-settings",children:"General Settings"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"NEXT_PUBLIC_APP_URL"}),": Your application's public URL. Use ",(0,s.jsx)(n.code,{children:"localhost:3000"})," for local development."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"database-configuration",children:"Database Configuration"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"DATABASE_URL"}),": Your PostgreSQL connection string. Format: ",(0,s.jsx)(n.code,{children:"postgresql://[user]:[password]@[host]:[port]/[db_name]"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"authentication-settings",children:"Authentication Settings"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"BETTER_AUTH_SECRET"}),": A secure random string for authentication. Generate using provided methods."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"BETTER_AUTH_URL"}),": Authentication callback URL. Should match your deployment URL."]}),"\n",(0,s.jsxs)(n.li,{children:["GitHub OAuth credentials from ",(0,s.jsx)(n.a,{href:"https://github.com/settings/developers",children:"GitHub Developer Settings"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"email-configuration",children:"Email Configuration"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"SMTP settings for your email provider"}),"\n",(0,s.jsx)(n.li,{children:"All fields are required for email functionality"}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"SMTP_SECURE"}),": Set to ",(0,s.jsx)(n.code,{children:"true"})," for port 465, ",(0,s.jsx)(n.code,{children:"false"})," for other ports"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"adding-custom-environment-variables",children:"Adding Custom Environment Variables"}),"\n",(0,s.jsxs)(n.p,{children:["When adding new environment variables, you need to declare them in ",(0,s.jsx)(n.code,{children:"src/env.js"})," to ensure type safety and validation:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'import { createEnv } from "@t3-oss/env-nextjs";\nimport { z } from "zod";\n\nexport const env = createEnv({\n    server: {\n        // Server-side variables (not exposed to the browser)\n        MY_SECRET_KEY: z.string().min(1),\n        API_TOKEN: z.string().min(1),\n    },\n    client: {\n        // Client-side variables (exposed to the browser)\n        // Must be prefixed with NEXT_PUBLIC_\n        NEXT_PUBLIC_FEATURE_FLAG: z.string().default("false"),\n    },\n    // Runtime validation\n    runtimeEnv: {\n        MY_SECRET_KEY: process.env.MY_SECRET_KEY,\n        API_TOKEN: process.env.API_TOKEN,\n        NEXT_PUBLIC_FEATURE_FLAG: process.env.NEXT_PUBLIC_FEATURE_FLAG,\n    },\n});\n'})}),"\n",(0,s.jsx)(n.h3,{id:"variable-types",children:"Variable Types"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Server-side Variables"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Not exposed to the browser"}),"\n",(0,s.jsxs)(n.li,{children:["Added to the ",(0,s.jsx)(n.code,{children:"server"})," object"]}),"\n",(0,s.jsx)(n.li,{children:"Can include sensitive information"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Client-side Variables"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Exposed to the browser"}),"\n",(0,s.jsxs)(n.li,{children:["Must be prefixed with ",(0,s.jsx)(n.code,{children:"NEXT_PUBLIC_"})]}),"\n",(0,s.jsxs)(n.li,{children:["Added to the ",(0,s.jsx)(n.code,{children:"client"})," object"]}),"\n",(0,s.jsx)(n.li,{children:"Should not contain sensitive information"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"validation-rules",children:"Validation Rules"}),"\n",(0,s.jsx)(n.p,{children:"Use Zod schemas to validate your variables:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"z.string()"})," - String validation"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"z.number()"})," - Number validation"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"z.boolean()"})," - Boolean validation"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"z.enum()"})," - Enumerated values"]}),"\n",(0,s.jsxs)(n.li,{children:["Add ",(0,s.jsx)(n.code,{children:".min()"}),", ",(0,s.jsx)(n.code,{children:".max()"}),", ",(0,s.jsx)(n.code,{children:".email()"}),", etc. for additional validation"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'server: {\n    PORT: z.number().min(1000).max(9999),\n    EMAIL: z.string().email(),\n    MODE: z.enum(["development", "production"]),\n}\n'})}),"\n",(0,s.jsxs)(n.admonition,{type:"warning",children:[(0,s.jsxs)(n.p,{children:["After adding new variables to ",(0,s.jsx)(n.code,{children:"env.js"}),", remember to:"]}),(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Add them to your ",(0,s.jsx)(n.code,{children:".env.example"})," file"]}),"\n",(0,s.jsxs)(n.li,{children:["Update your ",(0,s.jsx)(n.code,{children:".env.local"})," file"]}),"\n",(0,s.jsx)(n.li,{children:"Never commit sensitive values to version control"}),"\n"]})]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>o});var s=i(6540);const t={},r=s.createContext(t);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);