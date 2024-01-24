export default function PageTemplate({ children,title }:{
     children:React.ReactNode,
     title:string
}) {
     return (
        <main>
             <h1 className="px-1 text-4xl font-bold">
               {title}
             </h1>
             <section className="py-5 px-2">
               {children}
             </section>
        </main>
     )
   }
   