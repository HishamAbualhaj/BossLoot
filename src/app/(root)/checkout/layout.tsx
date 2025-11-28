import CheckoutContainer from "@/components/layouts/checkout/CheckoutContainer";
import NextPrev from "@/components/layouts/checkout/NextPrev";
import StepIndicator from "@/components/layouts/checkout/StepIndicator";

const CheckoutLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <CheckoutContainer>
        <StepIndicator />
        {children}
        <NextPrev />
      </CheckoutContainer>
    </>
  );
};

export default CheckoutLayout;
