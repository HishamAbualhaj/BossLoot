const BrandLogo = ({ brand }: { brand: "visa" | "mastercard" }) => {
  if (brand === "visa") {
    return (
      <div className="flex items-center justify-center w-14 h-9 bg-gradient-to-br from-blue-600 to-blue-800 rounded-md">
        <span className="text-foreground font-bold text-sm tracking-wide italic">
          VISA
        </span>
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center w-14 h-9 bg-gradient-to-br from-orange-500 to-red-600 rounded-md">
      <div className="flex -space-x-2">
        <div className="w-4 h-4 rounded-full bg-red-500/80" />
        <div className="w-4 h-4 rounded-full bg-yellow-500/80" />
      </div>
    </div>
  );
};
export default BrandLogo;
