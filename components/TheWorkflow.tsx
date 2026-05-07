import { ContainerScroll,
  ContainerSticky,
  ProcessCard,
  ProcessCardBody,
  ProcessCardTitle } from "@/components/ui/process-timeline"

const PROCESS_PHASES = [
  {
    id: "process-1",
    title: "Remote Sensing Screening",
    description:
      "Thalassos processes satellite imagery, geological maps, and hydrological data to identify high-risk regions instantly. 80–85% screened without field deployment.",
  },
  {
    id: "process-2",
    title: "Targeted Chemical Validation",
    description:
      "Flagged wells receive low-cost field verification using paper strips and smartphone-assisted analysis. High-confidence detection at a fraction of lab cost.",
  },
  {
    id: "process-3",
    title: "Continuous Feedback Loop",
    description:
      "New field data retrains the ensemble and improves regional prediction performance over time. Constantly improving AI models.",
  },
]

export const TheWorkflow = () => {
  return (
    <ContainerScroll
      className="w-full h-[250vh]"
    >
      <ContainerSticky className="top-24 flex flex-nowrap items-center pt-24 md:pt-0 min-h-screen">
        {PROCESS_PHASES.map((phase, index) => (
          <ProcessCard
            key={phase.id}
            itemsLength={PROCESS_PHASES.length}
            index={index}
            className="min-w-[85vw] md:min-w-[50vw] max-w-[85vw] md:max-w-[50vw] rounded-3xl shadow-[0_0_50px_rgba(30,58,138,0.2)] border-white/10"
            variant="indigo"
          >
            <ProcessCardTitle className="w-[80px] p-0 shrink-0 border-r border-slate-700/50 flex flex-col justify-center items-center">
              <div className="rounded-full size-12 bg-cyan-500/20 text-cyan-400 font-bold text-lg flex justify-center items-center shadow-[0_0_15px_rgba(6,182,212,0.3)] border border-cyan-500/30">
                0{index + 1}
              </div>
            </ProcessCardTitle>
            <ProcessCardBody className="flex flex-col gap-6 p-8 md:p-12 justify-center">
              <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-none text-white">
                {phase.title}
              </h3>
              <p className="opacity-80 text-lg md:text-xl text-slate-300 font-light leading-relaxed">
                {phase.description}
              </p>
            </ProcessCardBody>
          </ProcessCard>
        ))}
      </ContainerSticky>
    </ContainerScroll>
  )
}
