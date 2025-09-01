// import { getPayload } from "payload";
// import config from "@payload-config";
//
// const categories = [
//   {
//     name: "All",
//     slug: "all",
//     subcategories: [{ name: "All Selections", slug: "all-selections" }],
//   },
//   {
//     name: "Sports Events & Lessons",
//     color: "#82C4C4", // A teal-ish color, you can change this
//     slug: "sports-events-lessons",
//     subcategories: [
//       { name: "Tournament Hosting", slug: "tournament-hosting" },
//       { name: "Event Tickets & Entry Fees", slug: "event-tickets-entry-fees" },
//       { name: "Sports Coaching & Clinics", slug: "sports-coaching-clinics" },
//       { name: "Pickleball", slug: "pickleball" },
//       { name: "Golf Events", slug: "golf-events" },
//       { name: "Team Registrations", slug: "team-registrations" },
//       { name: "Sporting Goods & Apparel", slug: "sporting-goods-apparel" },
//     ],
//   },
//   {
//     name: "Business & Money",
//     color: "#FFB347",
//     slug: "business-money",
//     subcategories: [
//       { name: "Accounting", slug: "accounting" },
//       {
//         name: "Entrepreneurship",
//         slug: "entrepreneurship",
//       },
//       { name: "Gigs & Side Projects", slug: "gigs-side-projects" },
//       { name: "Investing", slug: "investing" },
//       { name: "Management & Leadership", slug: "management-leadership" },
//       {
//         name: "Marketing & Sales",
//         slug: "marketing-sales",
//       },
//       { name: "Networking, Careers & Jobs", slug: "networking-careers-jobs" },
//       { name: "Personal Finance", slug: "personal-finance" },
//       { name: "Real Estate", slug: "real-estate" },
//     ],
//   },
//   {
//     name: "Software Development",
//     color: "#7EC8E3",
//     slug: "software-development",
//     subcategories: [
//       { name: "Web Development", slug: "web-development" },
//       { name: "Mobile Development", slug: "mobile-development" },
//       { name: "Game Development", slug: "game-development" },
//       { name: "Programming Languages", slug: "programming-languages" },
//       { name: "DevOps", slug: "devops" },
//       { name: "Cloud", slug: "cloud" },
//     ],
//   },
//   {
//     name: "Writing & Publishing",
//     color: "#D8B5FF",
//     slug: "writing-publishing",
//     subcategories: [
//       { name: "Fiction", slug: "fiction" },
//       { name: "Non-Fiction", slug: "non-fiction" },
//       { name: "Blogging", slug: "blogging" },
//       { name: "Copywriting", slug: "copywriting" },
//       { name: "Self-Publishing", slug: "self-publishing" },
//     ],
//   },
//   {
//     name: "Other",
//     color: "#AFE062",
//     slug: "other",
//     subcategories: [
//       { name: "Cheap", slug: "cheap" },
//       { name: "Expensive", slug: "expensive" },
//       { name: "Just Right", slug: "just-right" },
//     ],
//   },
//   {
//     name: "Education",
//     color: "#FFE066",
//     slug: "education",
//     subcategories: [
//       { name: "Online Courses", slug: "online-courses" },
//       { name: "Tutoring", slug: "tutoring" },
//       { name: "Test Preparation", slug: "test-preparation" },
//       { name: "Language Learning", slug: "language-learning" },
//     ],
//   },
//   {
//     name: "Self Improvement",
//     color: "#96E6B3",
//     slug: "self-improvement",
//     subcategories: [
//       { name: "Productivity", slug: "productivity" },
//       { name: "Personal Development", slug: "personal-development" },
//       { name: "Mindfulness", slug: "mindfulness" },
//       { name: "Career Growth", slug: "career-growth" },
//     ],
//   },
//   {
//     name: "Fitness & Health",
//     color: "#FF9AA2",
//     slug: "fitness-health",
//     subcategories: [
//       { name: "Workout Plans", slug: "workout-plans" },
//       { name: "Nutrition", slug: "nutrition" },
//       { name: "Mental Health", slug: "mental-health" },
//       { name: "Yoga", slug: "yoga" },
//     ],
//   },
//   {
//     name: "Design",
//     color: "#B5B9FF",
//     slug: "design",
//     subcategories: [
//       { name: "UI/UX", slug: "ui-ux" },
//       { name: "Graphic Design", slug: "graphic-design" },
//       { name: "3D Modeling", slug: "3d-modeling" },
//       { name: "Typography", slug: "typography" },
//       { name: "Drawing", slug: "drawing" },
//       { name: "Painting", slug: "painting" },
//     ],
//   },
//   {
//     name: "Music",
//     color: "#FFD700",
//     slug: "music",
//     subcategories: [
//       { name: "Songwriting", slug: "songwriting" },
//       { name: "Music Production", slug: "music-production" },
//       { name: "Music Theory", slug: "music-theory" },
//       { name: "Music History", slug: "music-history" },
//     ],
//   },
//   {
//     name: "Video & Photography",
//     color: "#FF6B6B",
//     slug: "video-photography",
//     subcategories: [
//       { name: "Documentary", slug: "documentary" },
//       { name: "Comedy", slug: "comedy" },
//       { name: "Nature", slug: "nature" },
//       { name: "Urban", slug: "urban" },
//       { name: "Stock Photos", slug: "stock-photos" },
//     ],
//   },
// ];

import { getPayload } from "payload";
import config from "@payload-config";

const categories = [
  {
    name: "All Services",
    slug: "all",
  },
  {
    name: "Cloud Compute",
    slug: "cloud-compute",
    color: "#7EC8E3",
    subcategories: [
      { name: "VM Instances", slug: "vm-instances" },
      { name: "Multi-VM Instances", slug: "multi-vm-instances" },
      { name: "Datacenter Instances", slug: "datacenter-instances" },
      { name: "Cloud-to-Cloud Sync", slug: "cloud-to-cloud-sync" },
      { name: "On-Premise to Cloud", slug: "on-premise-to-cloud" },
      { name: "Monitoring & Alerts", slug: "monitoring-alerts" },
      { name: "24/7 Support", slug: "24-7-support" },
      { name: "Assisted Backup", slug: "assisted-backup" },
    ],
  },
  {
    name: "Cloud Storage & Databases",
    slug: "storage-databases",
    color: "#FFB347",
    subcategories: [
      { name: "Object Storage", slug: "object-storage" },
      { name: "Database Services", slug: "database-services" },
      { name: "In-Memory Databases", slug: "in-memory-databases" },
      { name: "Backup Solutions", slug: "backup-solutions" },
      { name: "High-Performance Storage", slug: "high-performance-storage" },
      { name: "Zerto Replication", slug: "zerto-replication" },
      { name: "Zerto Backup", slug: "zerto-backup" },
      { name: "Multi-Site Replication", slug: "multi-site-replication" },
    ],
  },
  {
    name: "Cloud Networking & Security",
    slug: "networking",
    color: "#96E6B3",
    subcategories: [
      { name: "Firewall Services", slug: "firewall-services" },
      { name: "DDoS Protection", slug: "ddos-protection" },
      { name: "Load Balancers", slug: "load-balancers" },
      { name: "VPN Services", slug: "vpn-services" },
      { name: "Compliance Certifications", slug: "compliance-certifications" },
      { name: "Security & Monitoring", slug: "security-monitoring" },
      { name: "Encryption Services", slug: "encryption-services" },
    ],
  },
  {
    name: "On-site Datacenter Services",
    slug: "on-site-datacenter-services",
    color: "#AFE062",
    subcategories: [
      { name: "Dedicated Hardware", slug: "dedicated-hardware" },
      { name: "Colocation Racks", slug: "colocation-services" },
      { name: "Private Cages", slug: "private-cages" },
      { name: "On-Site Storage", slug: "on-site-storage" },
    ],
  },
  {
    name: "Automotive",
    slug: "automotive",
    color: "#FF9AA2",
    subcategories: [
      { name: "Mobile Mechanics", slug: "mobile-mechanics" },
      { name: "Vehicle Dealerships", slug: "vehicle-delearships" },
      { name: "Tire Shops", slug: "tire-shops" },
      { name: "Quick Lube", slug: "quick-lube" },
      { name: "Body Shop", slug: "body-shops" },
      { name: "General Mechanics", slug: "general-mechanics" },
    ],
  },
  {
    name: "Commercial & Home Repair",
    slug: "commercial-home-repair",
    color: "#D8B5FF",
    subcategories: [
      { name: "Landscaping", slug: "landscaping" },
      { name: "Electrical Services", slug: "electrical-services" },
      { name: "Pest Control", slug: "pest-control" },
      { name: "Foundation Repair", slug: "foundation-repair" },
      { name: "Pool Service", slug: "pool-service" },
      { name: "Roofing Companies", slug: "roofing-companies" },
      { name: "Plumbing Services", slug: "plumbing-services" },
      { name: "HVAC Companies", slug: "hvac-companies" },
    ],
  },
  {
    name: "Law Services",
    slug: "law-services",
    color: "#FFE066",
    subcategories: [
      { name: "Criminal Law", slug: "criminal-law" },
      { name: "Family Law", slug: "family-law" },
      { name: "Personal Injury Law", slug: "personal-injury-law" },
      { name: "Immigration Law", slug: "immigration-law" },
      { name: "Law Firms", slug: "law-firms" },
    ],
  },
  {
    name: "Medical Services",
    slug: "medical-services",
    color: "#B5B9FF",
    subcategories: [
      { name: "Orthodontics", slug: "orthodontics" },
      { name: "Physical Therapy", slug: "physical-therapy" },
      { name: "Primary Care", slug: "primary-care" },
      { name: "IVF Clinics", slug: "ivf-clinics" },
      { name: "Urgent Care", slug: "urgent-care" },
      { name: "Chiropractors", slug: "chiropractors" },
      { name: "Medical Spas", slug: "medical-spas" },
      { name: "Dental Offices", slug: "dental-offices" },
    ],
  },
  {
    name: "Pet Services",
    slug: "pet-services",
    color: "#E6B3E6",
    subcategories: [
      { name: "Veterinarians", slug: "veterinarians" },
      { name: "Dog Walkers", slug: "dog-walkers" },
      { name: "Pet Daycare", slug: "pet-daycare" },
      { name: "Pet Groomers", slug: "pet-groomers" },
    ],
  },
  {
    name: "Professional Services",
    slug: "professional-services",
    color: "#FFD93D",
    subcategories: [
      { name: "Accounting Firms", slug: "accounting-firms" },
      { name: "Insurance Agencies", slug: "insurance-agencies" },
      { name: "Real Estate Agencies", slug: "real-estate-agencies" },
      { name: "Business Consulting", slug: "business-consulting" },
      { name: "Marketing Agencies", slug: "marketing-agencies" },
      { name: "SEO & Digital Marketing", slug: "seo-digital-marketing" },
      { name: "Graphic Design Services", slug: "graphic-design-services" },
      { name: "Web Development Agencies", slug: "web-development-agencies" },
      { name: "IT Support Services", slug: "it-support-services" },
      { name: "Bookkeeping Services", slug: "bookkeeping-services" },
      { name: "Translation Services", slug: "translation-services" },
      { name: "Content Writing", slug: "content-writing" },
    ],
  },
  {
    name: "Education & Training",
    slug: "education-training",
    color: "#6BCB77",
    subcategories: [
      { name: "Online Tutoring", slug: "online-tutoring" },
      { name: "On-site Tutoring", slug: "on-site-tutoring" },
      { name: "Professional Coaching", slug: "professional-coaching" },
      { name: "Corporate Training", slug: "corporate-training" },
      { name: "Certification Courses", slug: "certification-courses" },
      { name: "Workshop Hosting", slug: "workshop-hosting" },
      { name: "Language Instruction", slug: "language-instruction" },
      { name: "Test Prep Services", slug: "test-prep-services" },
      { name: "Music Lessons", slug: "music-lessons" },
      { name: "Art Classes", slug: "art-classes" },
      { name: "Coding Bootcamps", slug: "coding-bootcamps" },
    ],
  },
  {
    name: "Events & Entertainment",
    slug: "events-entertainment",
    color: "#FF6B9D",
    subcategories: [
      { name: "Event Planning Services", slug: "event-planning-services" },
      { name: "DJ Services", slug: "dj-services" },
      { name: "Photography Services", slug: "photography-services" },
      { name: "Videography Services", slug: "videography-services" },
      { name: "Wedding Services", slug: "wedding-services" },
      { name: "Party Rentals", slug: "party-rentals" },
      { name: "Conference Organizing", slug: "conference-organizing" },
      { name: "Virtual Event Hosting", slug: "virtual-event-hosting" },
      { name: "Catering Services", slug: "catering-services" },
      { name: "Photo Booth Rentals", slug: "photo-booth-rentals" },
      {
        name: "Live Entertainment Booking",
        slug: "live-entertainment-booking",
      },
    ],
  },
  {
    name: "Financial Services",
    slug: "financial-services",
    color: "#95E1D3",
    subcategories: [
      { name: "Tax Preparation", slug: "tax-preparation" },
      { name: "Financial Planning", slug: "financial-planning" },
      { name: "Investment Advisory", slug: "investment-advisory" },
      { name: "Mortgage Brokers", slug: "mortgage-brokers" },
      { name: "Credit Repair Services", slug: "credit-repair-services" },
      {
        name: "Business Formation Services",
        slug: "business-formation-services",
      },
      { name: "Payroll Services", slug: "payroll-services" },
      { name: "Retirement Planning", slug: "retirement-planning" },
      { name: "Estate Planning", slug: "estate-planning" },
    ],
  },
  {
    name: "Sports & Recreation",
    slug: "sports-recreation",
    color: "#F38181",
    subcategories: [
      { name: "Sports League Management", slug: "sports-league-management" },
      { name: "Tournament Registration", slug: "tournament-registration" },
      { name: "Sports Lessons", slug: "sports-facility-rentalsts-lessons" },
      { name: "Tennis Coaching", slug: "tennis-coaching" },
      { name: "Fitness Classes", slug: "fitness-classes" },
      { name: "Sports Facility Rentals", slug: "sports-facility-rentals" },
      { name: "Team Training Services", slug: "team-training-services" },
      { name: "Personal Trainers", slug: "personal-trainers" },
      { name: "Yoga Instructors", slug: "yoga-instructors" },
      { name: "Referee Services", slug: "referee-services" },
      { name: "Adventure Sports", slug: "adventure-sports" },
      { name: "Swimming Lessons", slug: "swimming-lessons" },
      { name: "Martial Arts Training", slug: "martial-arts-training" },
    ],
  },
  {
    name: "Digital Services",
    slug: "digital-services",
    color: "#AA96DA",
    subcategories: [
      { name: "AI & Machine Learning APIs", slug: "ai-machine-learning-apis" },
      { name: "Software Licenses", slug: "software-licenses" },
      { name: "Digital Games", slug: "digita-games" },
      { name: "Physiical & Dital Music", slug: "physical-digital-music" },
    ],
  },
];

const seed = async () => {
  const payload = await getPayload({ config });

  for (const category of categories) {
    const parentCategory = await payload.create({
      collection: "categories",
      data: {
        name: category.name,
        slug: category.slug,
        color: category.color,
        parent: null,
      },
    });

    for (const subCategory of category.subcategories || []) {
      await payload.create({
        collection: "categories",
        data: {
          name: subCategory.name,
          slug: subCategory.slug,
          parent: parentCategory.id,
        },
      });
    }
  }
};

try {
  await seed();
  console.log("database seeding successful");
  process.exit(0);
} catch (error) {
  console.log("database seeding error: ", error);
  process.exit(1);
}
