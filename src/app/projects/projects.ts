import { Project } from "./project.model"

const featProject: Project = {
   name: "VIP Puppies",
   description:
      "VIP Puppies is a full-service puppy marketplace with integrated payments and financing, in-app messaging, Android and IOS apps, and a blog. I've served as the lead developer on this project for over a year, working for Integro. I'll add a link here once this project goes live!",
   type: "Fullstack"
}

const projects: Project[] = [
   {
      name: "Keim Industrial Surplus",
      link: "https://keimindustrialsurplus.com",
      description: "Simple one page website with with business and contact information.",
      type: "Frontend"
   },
   {
      name: "iCare Greetings",
      link: "https://icaregreetings.com",
      description:
         "Working with Integro, I developed a backend system to automate fetching orders, buying postage, and combining shipping labels and greeting card templates into a print-ready pdf.",
      type: "Backend"
   },
   {
      name: "Abner Henry Fine Furniture",
      link: "https://abnerhenry.com/slabs",
      description:
         "Abner Henry Fine Furniture needed a way to dynamically update their inventory from a third party supplier, who kept the inventory list in an excel file. I built and deployed a REST API that parses inventory items from the excel file and serves it to my frontend.",
      type: "Fullstack"
   }
]

export { projects, featProject }
