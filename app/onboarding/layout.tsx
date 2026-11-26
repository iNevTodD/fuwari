"use client";
import { usePathname } from "next/navigation";

interface OnBoardinglayoutProps {
  children: React.ReactNode;
}

const steps = ["/onboarding/work", "/onboarding/goals"];

export default function OnBoardingLayout({ children }: OnBoardinglayoutProps) {
  const pathname = usePathname();
  const currentStep = steps.indexOf(pathname);
  return (
    <div>
      {currentStep != -1 && (
        <div>
          {steps.map((step, index) => (
            <div
              key={step}
              style={{
                background: index <= currentStep ? "#D9A38A" : "#3A3330",
                height: 5,
                width: 169
              }}
            ></div>
          ))}
        </div>
      )}
      <main>{children}</main>
    </div>
  );
}
