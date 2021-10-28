import React,{useState} from 'react'
import './shop.css'

function Stock() {
    const [fertilizers, setfertilizers] = useState([
        {
            imageLink:'https://tinyurl.com/yw36buu4',
            price:'300',
        },
        {
            imageLink:'https://lh3.googleusercontent.com/proxy/8OwTA1fTbDdyV2hTySn4yA0t1Xu7I97DqH_NuBCpK-pUGt7iwuMMKEgnwUnvEaVp5UM7HEQAupmRU8egS4D69lhiaSAYFoF6sq2GGndsGfomhimGVvRswzqJrT0',
            price:'200',
        },
        {
            imageLink:'https://lh3.googleusercontent.com/proxy/8OwTA1fTbDdyV2hTySn4yA0t1Xu7I97DqH_NuBCpK-pUGt7iwuMMKEgnwUnvEaVp5UM7HEQAupmRU8egS4D69lhiaSAYFoF6sq2GGndsGfomhimGVvRswzqJrT0',
            price:'300',
        },
        {
            imageLink:'https://lh3.googleusercontent.com/proxy/8OwTA1fTbDdyV2hTySn4yA0t1Xu7I97DqH_NuBCpK-pUGt7iwuMMKEgnwUnvEaVp5UM7HEQAupmRU8egS4D69lhiaSAYFoF6sq2GGndsGfomhimGVvRswzqJrT0',
            price:'300',
        },
        {
            imageLink:'https://lh3.googleusercontent.com/proxy/8OwTA1fTbDdyV2hTySn4yA0t1Xu7I97DqH_NuBCpK-pUGt7iwuMMKEgnwUnvEaVp5UM7HEQAupmRU8egS4D69lhiaSAYFoF6sq2GGndsGfomhimGVvRswzqJrT0',
            price:'200',
        },
        {
            imageLink:'https://lh3.googleusercontent.com/proxy/8OwTA1fTbDdyV2hTySn4yA0t1Xu7I97DqH_NuBCpK-pUGt7iwuMMKEgnwUnvEaVp5UM7HEQAupmRU8egS4D69lhiaSAYFoF6sq2GGndsGfomhimGVvRswzqJrT0',
            price:'300',
        },
        {
            imageLink:'https://lh3.googleusercontent.com/proxy/8OwTA1fTbDdyV2hTySn4yA0t1Xu7I97DqH_NuBCpK-pUGt7iwuMMKEgnwUnvEaVp5UM7HEQAupmRU8egS4D69lhiaSAYFoF6sq2GGndsGfomhimGVvRswzqJrT0',
            price:'300',
        },
       
    ])

    const [seeds, setseeds] = useState([
        {
            imageLink:'https://lh3.googleusercontent.com/proxy/8OwTA1fTbDdyV2hTySn4yA0t1Xu7I97DqH_NuBCpK-pUGt7iwuMMKEgnwUnvEaVp5UM7HEQAupmRU8egS4D69lhiaSAYFoF6sq2GGndsGfomhimGVvRswzqJrT0',
            price:'300',
        },
        {
            imageLink:'https://lh3.googleusercontent.com/proxy/8OwTA1fTbDdyV2hTySn4yA0t1Xu7I97DqH_NuBCpK-pUGt7iwuMMKEgnwUnvEaVp5UM7HEQAupmRU8egS4D69lhiaSAYFoF6sq2GGndsGfomhimGVvRswzqJrT0',
            price:'200',
        },
        {
            imageLink:'https://lh3.googleusercontent.com/proxy/8OwTA1fTbDdyV2hTySn4yA0t1Xu7I97DqH_NuBCpK-pUGt7iwuMMKEgnwUnvEaVp5UM7HEQAupmRU8egS4D69lhiaSAYFoF6sq2GGndsGfomhimGVvRswzqJrT0',
            price:'300',
        }
    ])

    const [inventory, setinventory] = useState([
        {
            imageLink:'https://lh3.googleusercontent.com/proxy/8OwTA1fTbDdyV2hTySn4yA0t1Xu7I97DqH_NuBCpK-pUGt7iwuMMKEgnwUnvEaVp5UM7HEQAupmRU8egS4D69lhiaSAYFoF6sq2GGndsGfomhimGVvRswzqJrT0',
            price:'300',
        },
        {
            imageLink:'https://lh3.googleusercontent.com/proxy/8OwTA1fTbDdyV2hTySn4yA0t1Xu7I97DqH_NuBCpK-pUGt7iwuMMKEgnwUnvEaVp5UM7HEQAupmRU8egS4D69lhiaSAYFoF6sq2GGndsGfomhimGVvRswzqJrT0',
            price:'200',
        },
        {
            imageLink:'https://lh3.googleusercontent.com/proxy/8OwTA1fTbDdyV2hTySn4yA0t1Xu7I97DqH_NuBCpK-pUGt7iwuMMKEgnwUnvEaVp5UM7HEQAupmRU8egS4D69lhiaSAYFoF6sq2GGndsGfomhimGVvRswzqJrT0',
            price:'300',
        }
    ])
    return (
        <div>
                <nav className="navBar">
            <div>               
                <h2>Market Place</h2>
            </div>

            <div>
                <a  className="anchors">Cart</a>
                <a  className="anchors">Wishlist</a>
                <a  className="anchors">Buynow</a>
            </div>

        </nav>
        <div className="shop">
           
            <h2>Fertilizers</h2>
            <div className="fertilizers">                
                <br/>
                {
                    fertilizers.map((ft)=>{
                        return <div className="ft">
                                    <img src={ft.imageLink} style={{width:'180px',height:'180px'}}/>
                                    <br/>
                                    <div>
                                        <button>Buy Now</button>
                                        <button>Add to Cart</button>    
                                    </div>
                               </div>
                    })
                }
            </div> 
            
            <hr></hr>
            <h2>Seeds</h2>
            <div className="fertilizers">                
                <br/>
                {
                    seeds.map((ft)=>{
                        return <div className="ft">
                                    <img src={ft.imageLink} style={{width:'180px',height:'180px'}}/>
                                    <br/>
                                    <div>
                                        <button>Buy Now</button>
                                        <button>Add to Cart</button>
                                    </div>
                               </div>
                    })
                }
            </div>

            <h2>Inventory</h2>
            <div className="fertilizers">                
                <br/>
                {
                    inventory.map((ft)=>{
                        return <div className="ft">
                                    <img src={ft.imageLink} style={{width:'180px',height:'180px'}}/>
                                    <br/>
                                    <div>
                                        <button>Buy Now</button>
                                        <button>Add to Cart</button>
                                    </div>
                               </div>
                    })
                }
            </div>
        </div>
        </div>
    )
}

export default Stock;

