export interface Project {
   name: string
   description: string
   type: "Backend" | "Frontend" | "Fullstack"
   role: "Solo Developer" | "Lead Engineer" | "Team Lead" | "Advisor/Architect"
   length?: "<1 month" | "1-3 months" | "3-6 months" | "6-12 months" | ">1 year"
   startDate: string
   showOnHomePage?: boolean
   links?: Array<{
      url: string
      type: "video" | "page"
      text: string
   }>
}
