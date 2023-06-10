import {useState,useEffect} from 'react';
import axios from 'axios';
const Owned = () => {
    const [cryptos, setCryptos] = useState([])

    useEffect(() => {
        getCryptos()
    }, []);

    const getCryptos = async () => {
        let response = await axios.get("http://localhost:4000/cryptos")
        setCryptos(response.data)
        console.log(cryptos)
    }
    return (
        <div className='container text-white'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Symbol</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Owned;
