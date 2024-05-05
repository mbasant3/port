import { Progress } from "antd"
import { useEffect, useState } from "react"

const Languages = () => {
    const [Hindi, setHindi] = useState(0)
    const [english, setEnglish] = useState(0)
    const [marathi, setMarathi] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            if (Hindi < 90) {
                setHindi(prevCount => prevCount + 1);
            }
            if (english < 88) {
                setEnglish(prevCount => prevCount + 1);
            }
            if(marathi < 60){
                setMarathi(prevCount => prevCount + 1);
            }
        }, 30);

        return () => clearInterval(timer);
    }, [Hindi, english])
    return (
        <div className="flex flex-col space-y-1 pt-6">
            <div className="flex flex-col gap-y-4">
                <span className='text-Snow text-xs font-bold'>Languages</span>
                <div className="flex flex-wrap items-center justify-center gap-4">
                    <div className="flex flex-col items-center gap-y-2">
                        <Progress strokeColor="#1fdf64" type="circle" percent={Hindi} size={60} />
                        <span className='text-xs font-bold text-Snow'>Hindi</span>
                    </div>
                    <div className="flex flex-col items-center gap-y-2">
                        <Progress strokeColor="#1fdf64" type="circle" percent={english} size={60} />
                        <span className='text-xs font-bold text-Snow'>English</span>
                    </div>
                    <div className="flex flex-col items-center gap-y-2">
                        <Progress strokeColor="#1fdf64" type="circle" percent={marathi} size={60} />
                        <span className='text-xs font-bold text-Snow'>Marathi</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Languages