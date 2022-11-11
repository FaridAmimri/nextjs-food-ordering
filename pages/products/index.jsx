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
  const res = await axios.get('http://localhost:3000/api/products')
  return {
    props: {
      productList: res.data
    }
  }
}

export default Index