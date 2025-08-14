const Scanner = () => {
  return (
    <div className=''>
      <h1 className='text-4xl font-bold'>Scanner</h1>
      <p className='mt-4 font-semibold flex'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est suscipit deleniti ab dolorum molestiae! Repudiandae debitis sapiente odit, quis harum, dolorem ad voluptatibus mollitia voluptas totam non, labore magnam ducimus!</p>
      <i className="fa fa-camera" aria-hidden="false">
        <span className="sr-only">Camera icon</span>
        <input className="button-mt8 placeholder-slate-700 flex flex-col mt-5" type="file" accept="image/*" capture="camera" />
        
      </i>
      <button className="mt-5">Scan</button>
      <div className="mt-5">
        <p className="font-semibold">Scan Result:</p>
        <img src="" alt="Scan Result" className="mt-2" />
      </div>
    </div>
  )
}

export default Scanner