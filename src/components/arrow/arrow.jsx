import left from '#/left.svg'
import right from '#/right.svg'


export default function Arrow() {
  return (
    <div className=' hidden lg:flex gap-2'>
      <img className='px-4 py-4 bg-[#F5F5F5] rounded-[50%] ' src={left} alt="" />
      <img className='px-4 py-4 bg-[#F5F5F5] rounded-[50%] ' src={right} alt="" />
    </div>
  )
}
