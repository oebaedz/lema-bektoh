import { useEffect, useState } from "react"

const Content = () => {
    const [input, setInput] = useState("")
    const [city, setCity] = useState("Probolinggo")
    const [data, setData] = useState({})

    const url = `http://api.aladhan.com/v1/timingsByAddress?address=${city}`

    useEffect(() => {
        fetch(url).then(res => res.json()).then(res => setData(res))
    }, [city])
    console.log(data)

    return (
        <div className='flex flex-col gap-5 md:p-4'>
            <div className='flex flex-col my-4 text-center justify-center md:justify-between md:flex-row'>
                <div>
                    <p>Senin</p>
                    <p>17 Agustus 2001</p>
                </div>
                <div>
                    Nung Gheni
                </div>
            </div>
            <form onSubmit={() => setCity(input)} className='flex justify-center'>
                <input type='text' value={input} onChange={(e) => setInput(e.target.value)} placeholder="Cari Kota/Kab..." className='rounded-full h-10 w-56 bg-slate-100 text-gray-800 text-center' />
                <input type='submit' hidden />
            </form>
            <ul className='space-y-8'>
                <li className='flex justify-between'>
                    <p>Sobbu</p>
                    <p>04.04</p>
                </li>
                <li className='flex justify-between'>
                    <p>Sobbu</p>
                    <p>04.04</p>
                </li>
                <li className='flex justify-between'>
                    <p>Sobbu</p>
                    <p>04.04</p>
                </li>
                <li className='flex justify-between'>
                    <p>Sobbu</p>
                    <p>04.04</p>
                </li>
                <li className='flex justify-between'>
                    <p>Sobbu</p>
                    <p>04.04</p>
                </li>
            </ul>
        </div>
    )
}

export default Content