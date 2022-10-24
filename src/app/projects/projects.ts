import { Project } from "./project.model"

/**
 * list of clients from whom i obtained permission to mention by name on my portfolio site
 * VIP Puppies
 * iCare Greetings
 * Abner Henry Fine Furniture
 */

export const projects: Project[] = [
   {
      name: "Production Line Mfg Software",
      description:
         "Integrate with QuickBooks and manage the production of cabinetry parts for the RV industry. All updates are synced across the factory in realtime.",
      type: "Fullstack",
      role: "Lead Architect",
      length: ">1 year",
      showOnHomePage: true
   },
   {
      name: "Puppy Marketplace",
      description:
         "Full-service puppy marketplace with integrated payments and financing, in-app messaging, Android and iOS apps, and a blog. Breeder screening and escrow-like functionality to help with scam prevention.",
      type: "Fullstack",
      role: "Lead Architect",
      length: ">1 year",
      showOnHomePage: true,
      links: [
         {
            type: "page",
            url: "https://www.integro212.com/articles/vippuppies-custom-software-case-study",
            text: "Blog Post"
         },
         { type: "video", url: "https://youtu.be/yVWWEh_lOZc", text: "Video" }
      ]
   },
   {
      name: "NetSuite Time Tracking Integration",
      description:
         "Integrate with an IconTime time clock and NetSuite. Supervisors can review and approve time entries before sending them to NetSuite.",
      type: "Fullstack",
      role: "Architect/Advisor",
      length: "3-6 months",
      showOnHomePage: true
   },
   {
      name: "Wellness Tracking for International First Responders",
      description:
         "Weekly ultra-short surveys for cadets serving in an international first responder organization. HR staff can monitor cadets and their mentors to ensure they are staying healthy in a high-stress environment.",
      type: "Fullstack",
      role: "Lead Architect",
      length: "6-12 months",
      showOnHomePage: true,
      links: [
         {
            type: "page",
            url: "https://www.integro212.com/articles/chazak-rescue",
            text: "Blog Post"
         },
         { type: "video", url: "https://youtu.be/XWsbiBVwEvM", text: "Video" }
      ]
   },
   {
      name: "Print-Ready PDF Generation",
      description:
         "Backend system to automate fetching orders from BigCommerce, buying postage, and combining shipping labels and greeting card templates into a print-ready pdf.",
      type: "Backend",
      role: "Sole Developer",
      length: "1-3 months",
      showOnHomePage: true
   },
   {
      name: "Excel -> REST API",
      description:
         "Parse inventory items from a third party supplier's excel file and serve it on a REST API for my frontend.",
      type: "Fullstack",
      role: "Sole Developer",
      length: "3-6 months",
      showOnHomePage: true
   },
   {
      name: "Bakery Production",
      description:
         "Pull orders from WooCommerce and summarize data needed for the production of the bakery items.",
      type: "Fullstack",
      role: "Sole Developer",
      length: "<1 month",
      links: [
         {
            type: "page",
            url: "https://www.integro212.com/articles/swiss-made-bakery",
            text: "Blog Post"
         },
         { type: "video", url: "https://youtu.be/e4UvsMNMms4", text: "Video" }
      ]
   },
   {
      name: "Contact/Home Page",
      description: "Simple one page website with with business and contact information.",
      type: "Frontend",
      role: "Sole Developer",
      length: "<1 month",
      links: [
         { type: "page", url: "https://keimindustrialsurplus.com", text: "Home Page" }
      ]
   }
]
