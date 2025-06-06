'use client'
import CountUp from "react-countup"

const Badge = ({containerStyles, icon, endCountNum, endCountText, badgeText, }) => {
  return (
    <div className={`badge ${containerStyles}`}>
      <div className="text-3xl text-primary">{icon}</div>
      <div className="flex items-center gap-x-2">
        <div className="text-4xl leading-none font-bold text-primary">
          <CountUp end={endCountNum} delay={1} duration={4} />
          {endCountText}
        </div>
        <di className='max-w-[70px] leading-none text-[15px] font-medium text-black'>{badgeText}</di>
      </div>
    </div>
  )
}

export default Badge