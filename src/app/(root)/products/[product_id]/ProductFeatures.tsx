import { Truck, RotateCw, Shield, Headphones } from "lucide-react";

export default function ProductFeatures() {
  const features = [
    {
      icon: Truck,
      title: "Free Delivery",
      description: "Enter your postal code for Delivery Availability",
    },
    {
      icon: RotateCw,
      title: "Return Delivery",
      description: "Free 30 Days Delivery Returns. Details",
    },
    {
      icon: Shield,
      title: "Warranty / Guarantee",
      description: "1-year manufacturer warranty included",
    },
    {
      icon: Headphones,
      title: "Customer Support",
      description: "24/7 support available",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      {features.map((feature, idx) => (
        <div
          key={idx}
          className="flex items-start gap-4 p-4 dark:bg-card bg-gray-100 rounded-lg border border-primary/20"
        >
          <feature.icon className="w-6 h-6 text-primary mt-1" />
          <div>
            <h3 className="font-semibold">{feature.title}</h3>
            <p className="text-gray-500 text-sm">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
