"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import Step1 from "@/components/InstructionPages/Step1"
import Step2 from "@/components/InstructionPages/Step2"
import Step3 from "@/components/InstructionPages/Step3"
import Step4 from "@/components/InstructionPages/Step4"
import Step5 from "@/components/InstructionPages/Step5"
import Step6 from "@/components/InstructionPages/Step6"
import Step7 from "@/components/InstructionPages/Step7"

const Instructions = () => {
  const totalSteps: number = 7
  const [step, setStep] = useState<number>(1)
  const [progressNumerator, setProgressNumerator] = useState(1)

  const handlePreviousClick = () => {
    setStep((prev) => prev - 1)
    setProgressNumerator((prev) => prev - 1)
  }

  const handleNextClick = () => {
    setStep((prev) => prev + 1)
    setProgressNumerator((prev) => prev + 1)
  }

  const progress = (progressNumerator / totalSteps) * 100

  return (
    <div className="">
      <div className="h-[80vh] overflow-auto p-10">
        {step === 1 && <Step1 />}
        {step === 2 && <Step2 />}
        {step === 3 && <Step3 />}
        {step === 4 && <Step4 />}
        {step === 5 && <Step5 />}
        {step === 6 && <Step6 />}
        {step === 7 && <Step7 />}
      </div>

      <div className="relative bottom-0">
        <Progress value={progress} className="h-[5px] w-full" />
        <div className="mt-4 flex w-full items-center justify-between">
          <div className="flex w-1/3 items-center justify-center">
            {step === 1 ? (
              <div />
            ) : (
              <Button variant="secondary" onClick={handlePreviousClick}>
                <ChevronLeft className="mr-1 h-[18px] w-[18px]" /> Previous
              </Button>
            )}
          </div>
          <div className="flex w-1/3 items-center justify-center text-[15px] font-medium uppercase">
            STEP {step} OF {totalSteps}
          </div>
          <div className="flex w-1/3 items-center justify-center">
            {step === totalSteps ? (
              <div />
            ) : (
              <Button variant="secondary" onClick={handleNextClick}>
                Next <ChevronRight className="ml-1 h-[18px] w-[18px]" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Instructions
