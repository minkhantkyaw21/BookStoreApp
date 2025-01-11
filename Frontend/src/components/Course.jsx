import list from '../../public/list.json';
import Cards from './Cards';
import {Link} from 'react-router-dom';
const Course = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div className="mt-28  justify-center text-center items-center"> 
          <h1 className="text-2xl font-semibold md:text-4xl "> We&apos;r delighted to have you  
            <span className="text-blue-500"> Here!:)</span></h1>
            <p className="mt-12">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Hic ab pariatur sequi illo deserunt ipsam perspiciatis quisquam ex magni suscipit
               alias et eveniet quidem, minima assumenda totam sint explicabo in.
            </p>
           <Link to='/'>
           <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 duration-300">
             Back</button>
           </Link>
            
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
          {list.map((item)=>(
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Course