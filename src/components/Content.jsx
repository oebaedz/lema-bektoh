import { useEffect, useState } from "react"

const Content = () => {
    const [input, setInput] = useState("")
    const [city, setCity] = useState("Probolinggo")
    const [data, setData] = useState({})

    const url = `http://api.aladhan.com/v1/timingsByAddress?address=${city}`
    const ConvertToArabicNumbers = (num) => {
        const arabicNumbers = '\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669';
        return new String(num).replace(/[0123456789]/g, (d) => { return arabicNumbers[d] });
    }

    useEffect(() => {
        fetch(url).then(res => res.json()).then(res => setData(res.data))
    }, [city])


    return (
        <div className='flex flex-col md:px-64'>
            <div className='flex flex-col gap-4 my-4 text-center items-center justify-center md:justify-between md:flex-row'>
                <div>
                    <p className="font-light">{data.meta && data.meta.method.name}</p>
                    <p className="font-medium text-xl">{city}</p>
                </div>
                <div>
                    <p className="font-medium text-xl">{data.date && data.date.hijri.weekday.ar}</p>
                    <p className="font-light text-xl">{data.date && `${ConvertToArabicNumbers(data.date.hijri.day)} ${data.date.hijri.month.ar} ${ConvertToArabicNumbers(data.date.hijri.year)}`}</p>
                    <p className="font-light text-xl">{data.date && data.date.readable}</p>
                </div>
            </div>
            <form onSubmit={(e) => {
                e.preventDefault()
                setCity(input)
                setInput('')
            }}
                className='flex justify-center'>
                <input type='text' value={input} onChange={(e) => setInput(e.target.value)} placeholder="Cari Kota/Kab..." className='rounded-full h-8 w-56 bg-slate-100 text-gray-800 text-center' />
                <input type='submit' hidden />
            </form>
            <div className="w-72 mx-auto my-4 p-4 border rounded-xl border-gray-300">
                <ul className='space-y-6'>
                    <li className='flex justify-between'>
                        <p>Sobbu</p>
                        <p>{data.timings && data.timings.Fajr}</p>
                    </li>
                    <li className='flex justify-between'>
                        <p>Metto Areh</p>
                        <p>{data.timings && data.timings.Sunrise}</p>
                    </li>
                    <li className='flex justify-between'>
                        <p>Duhur</p>
                        <p>{data.timings && data.timings.Dhuhr}</p>
                    </li>
                    <li className='flex justify-between'>
                        <p>Asar</p>
                        <p>{data.timings && data.timings.Asr}</p>
                    </li>
                    <li className='flex justify-between'>
                        <p>Mangrib</p>
                        <p>{data.timings && data.timings.Sunset}</p>
                    </li>
                    <li className='flex justify-between'>
                        <p>Isya'</p>
                        <p>{data.timings && data.timings.Isha}</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Content