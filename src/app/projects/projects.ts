import { Project } from "./project.model"

/**
 * list of clients from whom i obtained permission to mention by name on my portfolio site
 * VIP Puppies
 * iCare Greetings
 * Abner Henry Fine Furniture
 */

export const projects: Project[] = [
   {
      name: "nuWay AgTrack",
      description:
         "The easiest way for spray drone pilots to track pesticide applications. I'm currently working on this, and we expect to launch for the 2026 spraying season.",
      type: "Fullstack",
      role: "Lead Engineer",
      startDate: "May 2025",
      showOnHomePage: true
   },
   {
      name: "Pilot Locator",
      description: "A network serving 400+ thermal drone operators across the US.",
      type: "Fullstack",
      length: ">1 year",
      startDate: "Jun 2024",
      role: "Lead Engineer",
      showOnHomePage: true,
      links: [
         {
            type: "page",
            text: "See the Map",
            url: "https://www.dronedeerrecovery.com/pages/pilot-map"
         }
      ]
   },
   {
      name: "Evernorth CareNav+",
      description:
         "The Evernorth CareNav+ mobile app integrates with many health & wellness benefit programs to provide access to all employee benefits in one app. I was an early team member and helped build the backend foundations for it, particularly with API service layers and standardized libraries for AWS Lambda. Evernorth Health Services is a Cigna Group company.",
      type: "Backend",
      length: ">1 year",
      startDate: "Jan 2023",
      role: "Team Lead",
      showOnHomePage: true,
      links: [
         {
            type: "page",
            text: "See Product Page",
            url: "https://www.evernorth.com/our-solutions/carenav-plus-connected-benefits-navigator"
         }
      ]
   },
   {
      name: "NetSuite Time Tracking Integration",
      description:
         "Integrate with an IconTime time clock and NetSuite. Supervisors can review and approve time entries before sending them to NetSuite.",
      type: "Fullstack",
      role: "Advisor/Architect",
      length: "3-6 months",
      startDate: "Mar 2022",
      showOnHomePage: false
   },
   {
      name: "Wellness Tracking for First Responders",
      description:
         "Weekly ultra-short surveys for cadets serving in an international first responder organization. HR staff can monitor cadets and their mentors to ensure they are staying healthy in a high-stress environment.",
      type: "Fullstack",
      role: "Lead Engineer",
      length: "6-12 months",
      startDate: "Nov 2021",
      showOnHomePage: false
   },
   {
      name: "Production Line Mfg Software",
      description:
         "Integrates with QuickBooks and manages the production of cabinetry parts for the RV industry. All updates are synced across the factory in real-time.",
      type: "Fullstack",
      role: "Lead Engineer",
      length: ">1 year",
      startDate: "Jan 2021",
      showOnHomePage: false
   },
   {
      name: "Bakery Production",
      description:
         "Pulls orders from WooCommerce and summarizes data needed for the production of bakery items.",
      type: "Fullstack",
      role: "Solo Developer",
      length: "<1 month",
      startDate: "Jan 2020",
      showOnHomePage: false
   },
   {
      name: "On-Demand Printing Service",
      description:
         "Backend system to automate fetching orders from BigCommerce, buying postage, and combining shipping labels and greeting card templates into a print-ready PDF.",
      type: "Backend",
      role: "Solo Developer",
      length: "1-3 months",
      startDate: "Oct 2019",
      showOnHomePage: false
   },
   {
      name: "Excel > REST API",
      description:
         "Parses inventory items from a third-party supplier's Excel file and serves it on a REST API for my frontend. This was one of my first fullstack projects.",
      type: "Fullstack",
      role: "Solo Developer",
      length: "3-6 months",
      startDate: "Sep 2018",
      showOnHomePage: false
   }
]
