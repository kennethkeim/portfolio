import { Project } from "./project.model"

/**
 * list of clients from whom i obtained permission to mention by name on my portfolio site
 * VIP Puppies
 * iCare Greetings
 * Abner Henry Fine Furniture
 */

export const projects: Project[] = [
   {
      name: "Production Line ERP",
      description:
         "Integrate with QuickBooks and manage the production of cabinetry parts for the RV industry.",
      type: "Fullstack",
      role: "Lead Architect",
      length: ">1 year"
   },
   {
      name: "VIP Puppies",
      description:
         "VIP Puppies is a full-service puppy marketplace with integrated payments and financing, in-app messaging, Android and iOS apps, and a blog.",
      type: "Fullstack",
      role: "Lead Architect",
      length: ">1 year",
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
      name: "Time Tracking Integration",
      description:
         "Integrate with an IconTime time clock and NetSuite. Admin dashboard for users to approve time entries.",
      type: "Fullstack",
      role: "Architect/Advisor",
      length: "3-6 months"
   },
   {
      name: "Wellness Tracking for International First Responders",
      description:
         "Weekly ultra-short surveys for cadets serving in an international first responder organization. HR staff can monitor cadets and their mentors to ensure they are staying healthy in a high-stress environment.",
      type: "Fullstack",
      role: "Lead Architect",
      length: "6-12 months",
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
      name: "Contact/Home Page",
      description: "Simple one page website with with business and contact information.",
      type: "Frontend",
      role: "Sole Developer",
      length: "<1 month",
      links: [
         { type: "page", url: "https://keimindustrialsurplus.com", text: "Home Page" }
      ]
   },
   {
      name: "Print-Ready PDF Generation",
      description:
         "Backend system to automate fetching orders from BigCommerce, buying postage, and combining shipping labels and greeting card templates into a print-ready pdf.",
      type: "Backend",
      role: "Sole Developer",
      length: "1-3 months"
   },
   {
      name: "Excel -> REST API",
      description:
         "Abner Henry Fine Furniture needed a way to dynamically update their inventory from a third party supplier, who kept the inventory list in an excel file. I built and deployed a REST API that parses inventory items from the excel file and serves it to my frontend.",
      type: "Fullstack",
      role: "Sole Developer",
      length: "3-6 months"
   },
   {
      name: "Bakery Production",
      description:
         "Somewhere in northern Ohio, a bakery puts out hundreds of pies a day. Made more efficient by yours truly. ;)",
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
   }
]
