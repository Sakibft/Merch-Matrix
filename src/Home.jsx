import Banner from './Banner';

import AllProducts from './AllProducts';
import BestSellsProducts from './BestSellsProducts';

const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <BestSellsProducts></BestSellsProducts>
            <AllProducts></AllProducts>
         </div>
    );
};

export default Home;