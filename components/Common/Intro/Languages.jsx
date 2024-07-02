import { Progress } from "antd"
import { useEffect, useState } from "react"

const Languages = () => {
    const [backend, setBackend] = useState(0)
    const [frontend, setFrontend] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            if (backend < 30) {
                setBackend(prevCount => prevCount + 1);
            }
            if (frontend < 70) {
                setFrontend(prevCount => prevCount + 1);
            }
        }, 30);

        return () => clearInterval(timer);
    }, [backend, frontend])
    return (
        <div className="flex flex-col space-y-1 pt-6">
            <div className="flex flex-col gap-y-4">
                <span className='text-Snow text-xs font-bold'>Languages</span>
                <div className="flex flex-row items-center justify-center space-x-6">
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        <Progress strokeColor="#1fdf64" type="circle" percent={backend} size={75} />
                        <span className='text-xs font-bold text-Snow'>BackEnd</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        <Progress strokeColor="#1fdf64" type="circle" percent={frontend} size={75} />
                        <span className='text-xs font-bold text-Snow'>FrontEnd</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Languages