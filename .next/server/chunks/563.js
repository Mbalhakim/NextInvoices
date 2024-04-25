exports.id=563,exports.ids=[563],exports.modules={94246:(e,t,s)=>{Promise.resolve().then(s.bind(s,43924)),Promise.resolve().then(s.t.bind(s,67490,23))},29275:()=>{},81565:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,53579,23)),Promise.resolve().then(s.t.bind(s,30619,23)),Promise.resolve().then(s.t.bind(s,81459,23)),Promise.resolve().then(s.t.bind(s,13456,23)),Promise.resolve().then(s.t.bind(s,50847,23)),Promise.resolve().then(s.t.bind(s,57303,23))},43924:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>m});var r=s(53854),o=s(27121),a=s(3774),n=s(2769),i=s(75548),c=s.n(i),l=s(51018),d=s(29395);let u=[{name:"Home",href:"/dashboard",icon:o.Z},{name:"Invoices",href:"/dashboard/invoices",icon:a.Z},{name:"Customers",href:"/dashboard/customers",icon:n.Z}];function m(){let e=(0,l.usePathname)();return r.jsx(r.Fragment,{children:u.map(t=>{let s=t.icon;return(0,r.jsxs)(c(),{href:t.href,className:(0,d.Z)("flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",{"bg-sky-100 text-blue-600":e===t.href}),children:[r.jsx(s,{className:"w-6"}),r.jsx("p",{className:"hidden md:block",children:t.name})]},t.name)})})}},15581:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});var r=s(4656),o=s(22569);function a({children:e}){return(0,r.jsxs)("div",{className:"flex h-screen flex-col md:flex-row md:overflow-hidden",children:[r.jsx("div",{className:"w-full flex-none md:w-64",children:r.jsx(o.default,{})}),r.jsx("div",{className:"flex-grow p-6 md:overflow-y-auto md:p-12",children:e})]})}},35345:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>n});var r=s(4656);s(85832);var o=s(65016),a=s.n(o);function n({children:e}){return r.jsx("html",{lang:"en",children:r.jsx("body",{className:`${a().className} antialiased`,children:e})})}},95478:(e,t,s)=>{"use strict";s.d(t,{BX:()=>h,D1:()=>m,NI:()=>c,V_:()=>u,pU:()=>n,qu:()=>l,t2:()=>i,x4:()=>d});var r=s(7590),o=s(98760),a=s(61726);async function n(){(0,a.unstable_noStore)();try{let e=await r.i6`
      SELECT
        customers.id,
        customers.name,
        customers.email,
        customers.image_url,
        COUNT(invoices.id) AS total_invoices,
        SUM(CASE WHEN invoices.status = 'pending' THEN invoices.amount ELSE 0 END) AS total_pending,
        SUM(CASE WHEN invoices.status = 'paid' THEN invoices.amount ELSE 0 END) AS total_paid
      FROM customers
      LEFT JOIN invoices ON customers.id = invoices.customer_id
      GROUP BY customers.id, customers.name, customers.email, customers.image_url
      ORDER BY customers.name ASC
    `,t=e.rows;return t}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch all customers.")}}async function i(){(0,a.unstable_noStore)();try{await new Promise(e=>setTimeout(e,3e3));let e=await r.i6`SELECT * FROM revenue`;return e.rows}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch revenue data.")}}async function c(){try{(0,a.unstable_noStore)();let e=await r.i6`
      SELECT invoices.amount, customers.name, customers.image_url, customers.email, invoices.id
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      ORDER BY invoices.date DESC
      LIMIT 5`,t=e.rows.map(e=>({...e,amount:(0,o.xG)(e.amount)}));return t}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch the latest invoices.")}}async function l(){(0,a.unstable_noStore)();try{let e=r.i6`SELECT COUNT(*) FROM invoices`,t=r.i6`SELECT COUNT(*) FROM customers`,s=r.i6`SELECT
         SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) AS "paid",
         SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) AS "pending"
         FROM invoices`,a=await Promise.all([e,t,s]),n=Number(a[0].rows[0].count??"0"),i=Number(a[1].rows[0].count??"0"),c=(0,o.xG)(a[2].rows[0].paid??"0"),l=(0,o.xG)(a[2].rows[0].pending??"0");return{numberOfCustomers:i,numberOfInvoices:n,totalPaidInvoices:c,totalPendingInvoices:l}}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch card data.")}}async function d(e,t){(0,a.unstable_noStore)();try{let s=await r.i6`
      SELECT
        invoices.id,
        invoices.amount,
        invoices.date,
        invoices.status,
        customers.name,
        customers.email,
        customers.image_url
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      WHERE
        customers.name ILIKE ${`%${e}%`} OR
        customers.email ILIKE ${`%${e}%`} OR
        invoices.amount::text ILIKE ${`%${e}%`} OR
        invoices.date::text ILIKE ${`%${e}%`} OR
        invoices.status ILIKE ${`%${e}%`}
      ORDER BY invoices.date DESC
      LIMIT ${6} OFFSET ${(t-1)*6}
    `;return s.rows}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch invoices.")}}async function u(e){try{(0,a.unstable_noStore)();let t=await r.i6`SELECT COUNT(*)
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE
      customers.name ILIKE ${`%${e}%`} OR
      customers.email ILIKE ${`%${e}%`} OR
      invoices.amount::text ILIKE ${`%${e}%`} OR
      invoices.date::text ILIKE ${`%${e}%`} OR
      invoices.status ILIKE ${`%${e}%`}
  `,s=Math.ceil(Number(t.rows[0].count)/6);return s}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch total number of invoices.")}}async function m(e){try{(0,a.unstable_noStore)();let t=await r.i6`
      SELECT
        invoices.id,
        invoices.customer_id,
        invoices.amount,
        invoices.status
      FROM invoices
      WHERE invoices.id = ${e};
    `,s=t.rows.map(e=>({...e,amount:e.amount/100}));return s[0]}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch invoice.")}}async function h(){try{let e=await r.i6`
      SELECT
        id,
        name
      FROM customers
      ORDER BY name ASC
    `,t=e.rows;return t}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch all customers.")}}},98760:(e,t,s)=>{"use strict";s.d(t,{p9:()=>o,tk:()=>a,xG:()=>r});let r=e=>(e/100).toLocaleString("en-US",{style:"currency",currency:"USD"}),o=(e,t="en-US")=>{let s=new Date(e),r=new Intl.DateTimeFormat(t,{day:"numeric",month:"short",year:"numeric"});return r.format(s)},a=e=>{let t=[],s=Math.max(...e.map(e=>e.revenue)),r=1e3*Math.ceil(s/1e3);for(let e=r;e>=0;e-=1e3)t.push(`$${e/1e3}K`);return{yAxisLabels:t,topLabel:r}}},38132:(e,t,s)=>{"use strict";s.d(t,{Z:()=>i});var r=s(4656),o=s(66070),a=s(14505),n=s.n(a);function i(){return(0,r.jsxs)("div",{className:`${n().className} flex flex-row items-center leading-none text-white`,children:[r.jsx(o.Z,{className:"h-12 w-12 rotate-[15deg]"}),r.jsx("p",{className:"text-[44px]",children:"Acme"})]})}},22569:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$ACTION_1:()=>x,default:()=>f});var r,o=s(4656),a=s(34600);s(99195);var n=s(24353),i=s.n(n),c=s(95153);let l=(0,c.createProxy)(String.raw`C:\Users\Mbhst\Desktop\next-project\nextjs-dashboard\app\ui\dashboard\nav-links.tsx`),{__esModule:d,$$typeof:u}=l,m=l.default;var h=s(38132),E=s(42727),v=s(10736);function f(){return(0,o.jsxs)("div",{className:"flex h-full flex-col px-3 py-4 md:px-2",children:[o.jsx(i(),{className:"mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40",href:"/",children:o.jsx("div",{className:"w-32 text-white md:w-40",children:o.jsx(h.Z,{})})}),(0,o.jsxs)("div",{className:"flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2",children:[o.jsx(m,{}),o.jsx("div",{className:"hidden h-auto w-full grow rounded-md bg-gray-50 md:block"}),o.jsx("form",{action:(r=async(...e)=>x.apply(null,(r.$$bound||[]).concat(e)),(0,a.U)("d027259ebb4e64e2ed7ac3875d92326d2d18b846",null,r,x),r),children:(0,o.jsxs)("button",{className:"flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",children:[o.jsx(E.Z,{className:"w-6"}),o.jsx("div",{className:"hidden md:block",children:"Sign Out"})]})})]})]})}var x=async()=>{await (0,v.w7)()}},10736:(e,t,s)=>{"use strict";s.d(t,{zB:()=>u,w7:()=>m});var r=s(79510),o=s(70851),a=s(11287),n=s(7590),i=s(58802),c=s.n(i);async function l(e){try{let t=await n.i6`SELECT * FROM users WHERE email=${e}`;return t.rows[0]}catch(e){throw console.error("Failed to fetch user:",e),Error("Failed to fetch user.")}}let{auth:d,signIn:u,signOut:m}=(0,r.ZP)({pages:{signIn:"/login"},callbacks:{authorized({auth:e,request:{nextUrl:t}}){let s=!!e?.user,r=e?.user?.email==="user@test.com",o=t.pathname.startsWith("/dashboard/invoices/create"),a=t.pathname.startsWith("/dashboard/create");if(r&&(o||a))return Response.redirect(new URL("/dashboard",t));let n=t.pathname.startsWith("/dashboard");return!n||!!s}},providers:[],providers:[(0,o.Z)({async authorize(e){let t=a.z.object({email:a.z.string().email(),password:a.z.string().min(6)}).safeParse(e);if(t.success){let{email:e,password:s}=t.data,r=await l(e);if(!r)return null;let o=await c().compare(s,r.password);if(o)return r}return console.log("Invalid credentials"),null}})]})},85832:()=>{}};