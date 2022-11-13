/** @format */

import axios from 'axios'
import FoodList from '../../components/FoodList'

function Index({ productList }) {
  return (
    <div>
      <FoodList productList={productList} />
    </div>
  )
}

export const getServerSideProps = async () => {
  const res = await axios.get(
    'https://nextjs-food-ordering-seven.vercel.app/api/products'
  )
  return {
    props: {
      productList: res.data
    }
  }
}

export default Index
