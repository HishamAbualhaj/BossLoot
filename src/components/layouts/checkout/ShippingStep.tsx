"use client";
import Input from "@/components/ui/Input";
import { useState } from "react";
type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  zipCode: string;
  country: string;
};
const ShippingStep = () => {
  const formFields = [
    {
      label: "First Name",
      name: "firstName",
      type: "text",
      placeholder: "John",
    },
    {
      label: "Last Name",
      name: "lastName",
      type: "text",
      placeholder: "Doe",
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "john.doe@example.com",
    },
    {
      label: "Address",
      name: "address",
      type: "text",
      placeholder: "123 Main St",
    },
    {
      label: "City",
      name: "city",
      type: "text",
      placeholder: "New York",
    },
    {
      label: "Zip Code",
      name: "zipCode",
      type: "text",
      placeholder: "10001",
    },
    {
      label: "Country",
      name: "country",
      type: "text",
      placeholder: "United States",
    },
  ] as const;

  const [formData, setFormData] = useState<FormValues>({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    zipCode: "",
    country: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="mt-10">
      <div className="text-2xl font-bold">Shipping Information</div>
      <div className="mt-2 text-gray-400">Enter your shipping details</div>
      <div className="mt-5">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
          {formFields.map((field, i) => (
            <div key={i} className="flex flex-col gap-2">
              {field.label}
              <Input
                type="text"
                name={field.name}
                onChange={handleChange}
                placeholder={field.placeholder}
                value={formData[field.name]}
                className="py-2! w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShippingStep;
