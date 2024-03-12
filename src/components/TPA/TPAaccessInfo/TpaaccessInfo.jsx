import React from 'react'
import {motion} from "framer-motion"
import TPAstatusTable from './TPAstatusTable'

const TpaaccessInfo = ({mode}) => {
  return (
<>
<motion.h3
          className={`flex justify-start pl-6 items-center bg-transparent h-[8vh] w-full  z-50 ${mode ? "text-[#000]" : "text-[#c2c2c2]"}`}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div >TPA Portal Access Tracking</div>
        </motion.h3>
<div className={`overflow-auto h-[100vh] mx-auto ${mode ? "text-[#000]" : "text-[#c2c2c2]"} w-[80vw]`} >
<TPAstatusTable mode={mode}/>
</div>
</>
  )
}

export default TpaaccessInfo
