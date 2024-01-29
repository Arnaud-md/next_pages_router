import { useEffect, useState } from "react";

export const getServerSideProps=async()=> {
    const res = await fetch('http://localhost:3000/api/date')
    const data = await res.json()
    console.log('data', data.date);
    return {props:{dateStringSSR:data.date}}
}

// export const getStaticProps = () => {
//   return { props: { dateStringSSG: new Date().toISOString() } }
// }

interface HomeProps {
    dateStringSSR:string
//        dateStringSSG:string
}

export default function Home(props : HomeProps) {
    const [time, setTime] = useState(new Date().toISOString());

    useEffect(()=>{
        setInterval(async ()=> {
            const res = await fetch('http://localhost:3000/api/date')
            const data = await res.json()
            console.log('data', data.date);
            
            setTime(data.date);
        }, 1000)
    },[])


    return  <div>
            <p>heure du jour : {time}</p>
            <p>{props.dateStringSSR}</p>
        </div>
}