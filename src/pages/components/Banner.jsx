const Banner = () => {
  return (
    <div className='w-full h-screen flex items-center overflow-hidden flex-col justify-center text-white relative bg-fixed'>
      <div className="img_banner">
        <div className="z-10 flex flex-col items-center skew-y-6 absolute bottom-[35%] left-[20%] sm:left-[30%] md:left-[40%]">
        <h3 className='text-3xl '>Ideas</h3>
        <p className='font-light'>Where all our greate things begin</p>
        </div>
      </div>
    </div>
  )
}

export default Banner;
