import NavBarComponent from "../src/components/NavBarComponent"
export default function ProjectsLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
       
        <NavBarComponent/>
        
   
        {children}
      </section>
    )
  }