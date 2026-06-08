import { getPayload } from "payload";
import config from "@payload-config";

const categories = [
  {
    name: "All Services",
    slug: "all",
  },
  {
    name: "Compute",
    slug: "cloud-compute",
    color: "#D8B5FF",
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
    name: "Storage & Databases",
    slug: "storage-databases",
    color: "#7EC8E3",
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
    name: "Networking & Security",
    slug: "networking",
    color: "#6BCB77",
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
    color: "#F38181",
    subcategories: [
      { name: "Dedicated Hardware", slug: "dedicated-hardware" },
      { name: "Colocation Racks", slug: "colocation-services" },
      { name: "Private Cages", slug: "private-cages" },
      { name: "On-Site Storage", slug: "on-site-storage" },
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

//     color: "#AA96DA",
//     color: "#F38181",
//     color: "#95E1D3",
//     color: "#FF6B9D",
//     color: "#6BCB77",
//     color: "#FFD93D",
//     color: "#E6B3E6",
//     color: "#FFE066",
//     color: "#D8B5FF",
//     color: "#B5B9FF",
//     color: "#AFE062",
//     color: "#FF9AA2",
//     color: "#96E6B3",
//     color: "#FFB347",
//     color: "#7EC8E3",
