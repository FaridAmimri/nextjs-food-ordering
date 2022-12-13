/** @format */

import FoodList from '../../components/FoodList'
import { publicRequest } from '../../util/requests'

function Index({ productList }) {
  return (
    <div>
      <FoodList productList={productList} />
    </div>
  )
}

export const getServerSideProps = async () => {
  const res = await publicRequest.get('api/products')
  return {
    props: {
      productList: res.data
    }
  }
}

export default Index
