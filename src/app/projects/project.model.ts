export interface Project {
   name: string
   description: string
   type: "Backend" | "Frontend" | "Fullstack"
   role: "Sole Developer" | "Lead Architect" | "Architect/Advisor"
   length: "<1 month" | "1-3 months" | "3-6 months" | "6-12 months" | ">1 year"
   links?: Array<{
      url: string
      type: "video" | "page"
      text: string
   }>
}
